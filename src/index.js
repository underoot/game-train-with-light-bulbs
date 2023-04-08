import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

const MIN_COUNT = 3;
const MAX_COUNT = 15;
const PERSON_HEIGHT = 250;

let currentIndex = 0;

function count_new() {
  return Math.floor(Math.random() * MAX_COUNT + MIN_COUNT);
}

let count = count_new();

function state_new() {
  return new Array(count).fill(null).map(() => {
    return Math.random() > 0.5
  });
}

let states = state_new();

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  1,
  0.1,
  2100
);

camera.position.set(0, PERSON_HEIGHT);

const renderer = new THREE.WebGLRenderer();

const listener = new THREE.AudioListener();
camera.add(listener);

const bulbSound = new THREE.PositionalAudio(listener);
const startDoorSound = new THREE.PositionalAudio(listener);
const endDoorSound = new THREE.PositionalAudio(listener);
const footstepsSound = new THREE.Audio(listener);

let lightValue = 1;
let footstepsPlaying = false;
let bulbLightValue = states[currentIndex] ? 1 : 0;

const endDoorHandle = new THREE.Object3D();
const startDoorHandle = new THREE.Object3D();

endDoorHandle.position.set(25, 0, 900);
startDoorHandle.position.set(25, 0, -800);

const bulbLightSphere = new THREE.Mesh(
  new THREE.SphereGeometry(12, 250, 250),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
);
bulbLightSphere.position.set(-5, 415, 0);
bulbLightSphere.visible = states[currentIndex];
scene.add(bulbLightSphere);

const light = new THREE.AmbientLight(0xffffff, lightValue)
scene.add(light)

const pointLight = new THREE.PointLight(0xffff00, bulbLightValue);
pointLight.position.set(0, 220, 0);
scene.add(pointLight);


function fadeIn() {
  person.enabled = true;
  let startTime = 0;
  bulbLightSphere.visible = states[currentIndex];

  let cancelIdx = window.requestAnimationFrame(function makeFadeOut(time) {
    if (lightValue >= 1) {
      window.cancelAnimationFrame(cancelIdx);
      return;
    }

    if (time - startTime > 16) {
      startTime = time;
      lightValue += 0.03;
      if (states[currentIndex]) {
        bulbLightValue += 0.03;
      } else {
        bulbLightValue = 0;
      }
    }

    cancelIdx = window.requestAnimationFrame(makeFadeOut);
  });
}

function fadeOut(onEnd) {
  person.enabled = false;
  let startTime = 0;
  bulbLightSphere.visible = false;

  if (bulbSound.isPlaying) {
    bulbSound.stop();
  }

  let cancelIdx = window.requestAnimationFrame(function makeFadeOut(time) {
    if (lightValue <= 0 && bulbLightValue <= 0) {
      window.cancelAnimationFrame(cancelIdx);
      onEnd?.();
      fadeIn();
      return;
    }
    if (time - startTime > 16) {
      startTime = time;
      lightValue -= 0.03;
      if (bulbLightValue > 0) {
        bulbLightValue -= 0.03;
      }
    }

    cancelIdx = window.requestAnimationFrame(makeFadeOut);
  });
}

function toggleLight() {
  if (bulbLightValue <= 0) {
    bulbLightValue = 1;
    bulbSound.play();
  } else {
    bulbLightValue = 0;
    bulbSound.stop();
  }

  bulbLightSphere.visible = !bulbLightSphere.visible;
  states[currentIndex] = !states[currentIndex];
}

function placeInEnd() {
  camera.position.set(0, PERSON_HEIGHT, -900);
  camera.lookAt(0, 200, 0);

  if (states[currentIndex]) {
    bulbSound.play();
  } else {
    bulbSound.stop();
  }
}

function placeInBegin() {
  camera.position.set(0, PERSON_HEIGHT, 900);
  camera.lookAt(0, 200, 0);

  if (states[currentIndex]) {
    bulbSound.play();
  } else {
    bulbSound.stop();
  }
}

function moveForward() {
  if (currentIndex === states.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  fadeOut(() => {
    placeInBegin();
  });
}

function moveBackward() {
  if (currentIndex === 0) {
    currentIndex = states.length - 1;
  } else {
    currentIndex--;
  }


  fadeOut(() => {
    placeInEnd();
  });
}

function enterHandle() {
  const { x, z } = camera.position;

  if (x <= -25 && z <= -800) {
    toggleLight();
    return;
  }

  if (x <= 50 && x >= -25 && z > 900) {
    endDoorSound.play();
    moveBackward();
    return;
  }

  if (x <= 50 && x >= -50 && z < -800) {
    startDoorSound.play();
    moveForward();
    return;
  }
}

window.addEventListener('keydown', (e) => {
  if (e.keyCode !== 13) {
    return;
  }

  enterHandle();
});

const person = new PointerLockControls(camera, renderer.domElement);

let moveKey = new Set();
let rotateKey = '';
let targetKeyCodes = [87, 68, 83, 65];

const onKeyDown = function (event) {
  if (!targetKeyCodes.includes(event.keyCode)) {
    return;
  }

  moveKey.add(event.keyCode);
}

const onKeyUp = function (event) {
  moveKey.delete(event.keyCode);
}


document.addEventListener('keydown', onKeyDown, false)
document.addEventListener('keyup', onKeyUp, false);

/**
 * @param {*} el
 * @param {object} styleObj 
 */
function assignStyles(el, styleObj) {
  for (let [prop, val] of Object.entries(styleObj)) {
    if (!Object.getOwnPropertyNames(styleObj).includes(prop)) {
      return;
    }

    el.style.setProperty(prop, val);
  }
}

function assignButtonStyle(el) {
  assignStyles(el, {
    'background-color': 'transparent',
    'padding': '12px 10px',
    'border': '2px solid white',
    'color': 'white'
  });
}

function assignControlStyle(el) {
  el.classList.add('controllable');

  function absorbEvent(event) {
    event.returnValue = false;
  }

  el.addEventListener("touchstart", absorbEvent);
  el.addEventListener("touchend", absorbEvent);
  el.addEventListener("touchmove", absorbEvent);
  el.addEventListener("touchcancel", absorbEvent);
  assignStyles(el, {
    'position': 'absolute',
    'border-radius': '50%',
    'width': '20px',
    'height': '20px',
    'justify-content': 'center',
    'align-items': 'center',
    'user-select': 'none',
  });
}

function assignInputStyle(el) {
  assignStyles(el, {
    'background-color': 'rgba(255, 255, 255, 0.6)',
    'padding': '12px 10px',
    'border': '2px solid white'
  });
}

export async function init(domElement) {
  const domStyle = document.createElement('style');

  domElement.classList.add('game-loading');
  assignStyles(domElement, {
    'display': 'flex',
    'background-color': 'black',
    'color': 'white',
    'justify-content': 'center',
    'align-items': 'center',
    'font-size': '18px',
    'font-weight': '600',
    'position': 'relative',
    'user-select': 'none',
  });

  domElement.innerHTML = "Loading..."


  const loader = new GLTFLoader();
  const audioLoader = new THREE.AudioLoader();
  const [
    wagon,
    bulb,
    switcher,
    bulbAudioBuffer,
    doorSoundBuffer,
    footstepsSoundBuffer
  ] = await Promise.all([
    loader.loadAsync('/game-train-with-light-bulbs/wagon/scene.gltf'),
    loader.loadAsync('/game-train-with-light-bulbs/light_bulb/scene.gltf'),
    loader.loadAsync('/game-train-with-light-bulbs/light_switch/scene.gltf'),
    audioLoader.loadAsync('/game-train-with-light-bulbs/light_bulb/sound.wav'),
    audioLoader.loadAsync('/game-train-with-light-bulbs/wagon/door.wav'),
    audioLoader.loadAsync('/game-train-with-light-bulbs/wagon/footsteps.wav')
  ]);

  domElement.innerHTML = ""
  domStyle.textContent = `
    .controllable { display: flex; }
    @media (min-width: 720px) { .controllable { display: none; } }
  `;
  domElement.appendChild(domStyle);

  bulbSound.autoplay = false;
  bulbSound.setVolume(10);
  bulbSound.setBuffer(bulbAudioBuffer);
  bulbSound.setLoop(true);
  bulbSound.setRefDistance(20);

  startDoorSound.setVolume(20)
  startDoorSound.setBuffer(doorSoundBuffer);
  startDoorHandle.add(startDoorSound);
  endDoorSound.setVolume(20)
  endDoorSound.setBuffer(doorSoundBuffer);
  endDoorHandle.add(endDoorSound);

  footstepsSound.setVolume(0.2);
  footstepsSound.setBuffer(footstepsSoundBuffer);

  function animate() {
    camera.position.y = PERSON_HEIGHT;
    renderer.render(scene, camera);

    if (camera.position.z < -900) {
      camera.position.z = -900;
    }

    if (camera.position.z > 1000) {
      camera.position.z = 1000;
    }

    if (camera.position.x > 150) {
      camera.position.x = 150;
    }

    if (camera.position.x < -150) {
      camera.position.x = -150;
    }

    for (const key of moveKey.values()) {
      if (!footstepsPlaying) {
        setTimeout(() => {
          footstepsPlaying = false;
        }, 200);
        footstepsPlaying = true;
        if (!footstepsSound.isPlaying) {
          footstepsSound.play();
        }
      }

      switch (key) {
        case 87:
          person.moveForward(10)
          break
        case 68:
          person.moveRight(10)
          break
        case 83:
          person.moveForward(-10)
          break
        case 65:
          person.moveRight(-10)
          break
      }
    }

    if (rotateKey === 'R') {
      camera.rotateY(-0.02);
    } else if (rotateKey === 'L') {
      camera.rotateY(0.02);
    }

    pointLight.intensity = bulbLightValue;
    light.intensity = lightValue;

    requestAnimationFrame(animate);
  }


  bulb.scene.position.set(0, 430, 0);
  bulb.scene.rotateX(Math.PI);

  wagon.scene.position.set(0, 0, 0);

  switcher.scene.position.set(-150, 255, -1000);

  scene.add(bulb.scene);
  scene.add(switcher.scene);
  scene.add(wagon.scene);
  scene.add(startDoorHandle);
  scene.add(endDoorHandle);

  bulb.scene.add(bulbSound);

  scene.add(person.getObject());

  domElement.classList.remove('game-loading');
  domElement.appendChild(renderer.domElement);

  const { width, height } = domElement.getBoundingClientRect();

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  let resizeListener = () => {
    const { width, height } = domElement.getBoundingClientRect();
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', resizeListener);

  animate();

  const description = document.createElement('div');

  assignStyles(description, {
    'position': 'absolute',
    'top': '0',
    'right': '0',
    'bottom': '0',
    'left': '0',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'padding': '24px',
    'text-align': 'center',
    'color': 'white',
  });

  const instruction = document.createElement('p');
  instruction.innerHTML = `
Find the number of wagons<br /><br />
<p style="font-weight: 300">
To move use WASD keys<br />
To switch light/open door go to object and press "Enter".<br />
To make a guess press "Space"<br />
To enter full screen press "Meta/Alt + Enter"
</p>
`

  const startButton = document.createElement('button');
  startButton.textContent = 'Start!';

  assignButtonStyle(startButton);

  let lockListener = () => {
    try {
      person.lock();
    } catch (e) {}
  };

  startButton.addEventListener('click', () => {
    description.innerHTML = '';

    if (states[currentIndex]) {
      bulbSound.play();
    }

    function answer() {
      domElement.removeEventListener('click', lockListener);
      description.style.setProperty('background-color', 'rgba(0, 0, 0, 0.7');
      try {
        person.unlock();
      } catch (e) {

      }
      const instruction = document.createElement('p');
      instruction.innerHTML = `
        So, what is the number of wagons in train?
      `;
      const inputValue = document.createElement('input');
      inputValue.type = 'number';
      inputValue.min = MIN_COUNT;
      inputValue.max = MAX_COUNT;
      assignInputStyle(inputValue);
      const answerButton = document.createElement('button');
      answerButton.textContent = 'Answer!';
      assignButtonStyle(answerButton);
      answerButton.addEventListener('click', () => {
        description.innerHTML = '';
        if (Number.parseInt(inputValue.value) === count) {
          const instruction = document.createElement('p');
          instruction.innerHTML = 'Correct!';
          assignButtonStyle(instruction);
          const restartButton = document.createElement('button');
          restartButton.textContent = 'Restart!';
          restartButton.addEventListener('click', () => {
            count = count_new();
            states = state_new();
            currentIndex = 0;
            moveBackward();
            description.innerHTML = '';
            person.lock();
            domElement.addEventListener('click', lockListener);
            description.style.setProperty('background-color', 'transparent');
          }, { once: true });
          description.appendChild(instruction);
          description.appendChild(restartButton);
        } else {
          const instruction = document.createElement('p');
          instruction.innerHTML = 'Wrong!';
          const restartButton = document.createElement('button');
          restartButton.textContent = 'Try again!';
          assignButtonStyle(restartButton);
          restartButton.addEventListener('click', () => {
            description.innerHTML = '';
            try {
              person.lock();
            } catch (e) {}
            domElement.addEventListener('click', lockListener);
            description.style.setProperty('background-color', 'transparent');
          }, { once: true });
          description.appendChild(instruction);
          description.appendChild(restartButton);
        }
      }, { once: true });
      description.appendChild(instruction);
      description.appendChild(inputValue);
      description.appendChild(document.createElement('p'));
      description.append(answerButton);
    }
    
    function initControls() {
      const [w, d, s, a] = new Array(4).fill(null).map((_, idx) => {
        const ctrl = document.createElement('button');
        let key = 0;
        assignButtonStyle(ctrl);
        assignControlStyle(ctrl);

        switch(idx) {
          case 0:
            ctrl.textContent = 'W';
            assignStyles(ctrl, {
              'left': '40px',
              'bottom': '45px'
            });
            key = 87;
            break;
          case 1:
            ctrl.textContent = 'D';
            assignStyles(ctrl, {
              'left': '70px',
              'bottom': '10px'
            });
            key = 68;
            break;
          case 2:
            ctrl.textContent = 'S';
            assignStyles(ctrl, {
              'left': '40px',
              'bottom': '10px'
            });
            key = 83;
            break;
          case 3:
            ctrl.textContent = 'A';
            assignStyles(ctrl, {
              'left': '10px',
              'bottom': '10px'
            });
            key = 65;
            break;
        }

        ctrl.addEventListener('pointerdown', (e) => {
          domElement.removeEventListener('click', lockListener);
          moveKey.add(key);
          e.returnValue = false;
        });
        ctrl.addEventListener('pointerup', (e) => {
          domElement.addEventListener('click', lockListener);
          moveKey.delete(key);
          e.returnValue = false;
        });
        ctrl.addEventListener('pointerleave', (e) => {
          domElement.addEventListener('click', lockListener);
          moveKey.delete(key);
          e.returnValue = false;
        });

        return ctrl;
      });

      const rLeft = document.createElement('button');
      assignButtonStyle(rLeft);
      assignControlStyle(rLeft);

      assignStyles(rLeft, {
        'right': '130px',
        'bottom': '10px'
      });

      rLeft.textContent = 'L';

      rLeft.addEventListener('pointerdown', () => {
        domElement.removeEventListener('click', lockListener);
        rotateKey = 'L';
      });
      rLeft.addEventListener('pointerup', () => {
        domElement.addEventListener('click', lockListener);
        rotateKey = '';
      });
      rLeft.addEventListener('pointerleave', () => {
        domElement.addEventListener('click', lockListener);
        rotateKey = '';
      });

      const rRight = document.createElement('button');
      assignButtonStyle(rRight);
      assignControlStyle(rRight);

      assignStyles(rRight, {
        'right': '100px',
        'bottom': '10px'
      });

      rRight.textContent = 'R';

      rRight.addEventListener('pointerdown', () => {
        domElement.removeEventListener('click', lockListener);
        rotateKey = 'R';
      });
      rRight.addEventListener('pointerup', () => {
        domElement.addEventListener('click', lockListener);
        rotateKey = '';
      });
      rRight.addEventListener('pointerleave', () => {
        domElement.addEventListener('click', lockListener);
        rotateKey = '';
      });

      const answerB = document.createElement('button');
      assignButtonStyle(answerB);
      assignControlStyle(answerB);

      answerB.textContent = 'A';

      assignStyles(answerB, {
        'right': '200px',
        'bottom': '10px'
      });

      answerB.addEventListener('pointerdown', () => {
        answer();
      });

      const enterB = document.createElement('button');
      assignButtonStyle(enterB);
      assignControlStyle(enterB);

      enterB.textContent = 'E';

      assignStyles(enterB, {
        'right': '40px',
        'bottom': '10px'
      });

      enterB.addEventListener('pointerdown', () => {
        enterHandle();
      });

      return [w, d, s, a, rLeft, rRight, answerB, enterB];
    }


    initControls().forEach(ctrl => {
      domElement.appendChild(ctrl);
    })

    domElement.addEventListener('click', lockListener);

    document.addEventListener('keydown', (e) => {
      if ((e.altKey || e.metaKey) && e.keyCode === 13) {
        const width = window.screen.width;
        const height = window.screen.height;
        renderer.domElement.width = width;
        renderer.domElement.height = height;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        domElement.requestFullscreen().then(() => {
          const width = window.screen.width;
          const height = window.screen.height;
          renderer.domElement.width = width;
          renderer.domElement.height = height;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          try {
            person.lock();
          } catch (e) {}
        });
      }

      if (e.keyCode === 32) {
        answer();
      }
    });
  });


  description.appendChild(instruction);
  description.appendChild(startButton);
  domElement.appendChild(description);
}
