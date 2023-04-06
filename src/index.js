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
  camera.lookAt(0, 0, 0);

  if (states[currentIndex]) {
    bulbSound.play();
  } else {
    bulbSound.stop();
  }
}

function placeInBegin() {
  camera.position.set(0, PERSON_HEIGHT, 900);
  camera.lookAt(0, 0, 0);

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

window.addEventListener('keydown', (e) => {
  if (e.keyCode !== 13) {
    return;
  }

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
});

const person = new PointerLockControls(camera, renderer.domElement);

let moveKey = new Set();
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


export async function init(domElement) {
  domElement.classList.add('game-loading');
  domElement.style.setProperty('display', 'flex');
  domElement.style.setProperty('background-color', 'black');
  domElement.style.setProperty('justify-content', 'center');
  domElement.style.setProperty('align-items', 'center');
  domElement.style.setProperty('font-size', '24px');
  domElement.style.setProperty('font-weight', '600');
  domElement.style.setProperty('position', 'relative');


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
    loader.loadAsync('wagon/scene.gltf'),
    loader.loadAsync('light_bulb/scene.gltf'),
    loader.loadAsync('light_switch/scene.gltf'),
    audioLoader.loadAsync('light_bulb/sound.ogg'),
    audioLoader.loadAsync('wagon/door.ogg'),
    audioLoader.loadAsync('wagon/footsteps.ogg')
  ]);

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
        footstepsSound.play();
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

  description.style.setProperty('position', 'absolute');
  description.style.setProperty('top', '0');
  description.style.setProperty('right', '0');
  description.style.setProperty('bottom', '0');
  description.style.setProperty('left', '0');
  description.style.setProperty('display', 'flex');
  description.style.setProperty('flex-direction', 'column');
  description.style.setProperty('justify-content', 'center');
  description.style.setProperty('align-items', 'center');
  description.style.setProperty('padding', '24px');
  description.style.setProperty('text-align', 'center');
  description.style.setProperty('color', 'white');

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

  let lockListener = () => {
    person.lock();
  };

  startButton.addEventListener('click', () => {
    description.innerHTML = '';

    if (states[currentIndex]) {
      bulbSound.play();
    }


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
          person.lock();
        });
      }

      if (e.keyCode === 32) {
        domElement.removeEventListener('click', lockListener);
        description.style.setProperty('background-color', 'rgba(0, 0, 0, 0.7');
        person.unlock();
        const instruction = document.createElement('p');
        instruction.innerHTML = `
          So, what is the number of wagons in train?
        `;
        const inputValue = document.createElement('input');
        inputValue.type = 'number';
        inputValue.min = MIN_COUNT;
        inputValue.max = MAX_COUNT;
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Answer!';
        answerButton.addEventListener('click', () => {
          description.innerHTML = '';
          if (Number.parseInt(inputValue.value) === count) {
            const instruction = document.createElement('p');
            instruction.innerHTML = 'Correct!';
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
            restartButton.addEventListener('click', () => {
              description.innerHTML = '';
              person.lock();
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
    });
  });


  description.appendChild(instruction);
  description.appendChild(startButton);
  domElement.appendChild(description);
}