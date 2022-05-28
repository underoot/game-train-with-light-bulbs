import './style.css'

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';

const MIN_COUNT = 3;
const MAX_COUNT = 25;
const PERSON_HEIGHT = 250;

let currentIndex = 0;

const count = Math.floor(Math.random() * MAX_COUNT + MIN_COUNT);
const states = new Array(count).fill(null).map(() => {
  return Math.random() > 0.5
});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2100
);

camera.position.set(0, PERSON_HEIGHT);

const renderer = new THREE.WebGLRenderer();

let lightValue = 1;
let bulbLightValue = states[currentIndex] ? 1 : 0;

const bulbLightSphere = new THREE.Mesh(
  new THREE.SphereGeometry(12, 250, 250),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
);
bulbLightSphere.position.set(-5, 415, 0);
bulbLightSphere.visible = states[currentIndex];
scene.add(bulbLightSphere);

const light = new THREE.AmbientLight(0xffffff, lightValue)
scene.add(light)

const pointLight = new THREE.PointLight( 0xffff00, bulbLightValue);
pointLight.position.set( 0, 220, 0 );
scene.add( pointLight );

renderer.setSize( window.innerWidth, window.innerHeight );

window.addEventListener('resize', () => {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
});

var axis = new THREE.Vector3(0, 1, 0);
var step = Math.PI;

document.body.appendChild( renderer.domElement );

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
  } else {
    bulbLightValue = 0;
  }

  bulbLightSphere.visible = !bulbLightSphere.visible;
  states[currentIndex] = !states[currentIndex];
}

function placeInEnd() {
  camera.position.set(0, PERSON_HEIGHT, -900);
  camera.rotateY(-Math.PI / 2);
}

function placeInBegin() {
  camera.position.set(0, PERSON_HEIGHT, 900);
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
    moveBackward();
    return;
  }

  if (x <= 50 && x >= -50 && z < -800) {
    moveForward();
    return;
  }
});

const person =  new FirstPersonControls(camera, document);
person.movementSpeed = 10;
person.lookSpeed = 0.004;


function animate(time) {
  camera.position.y = PERSON_HEIGHT;
  renderer.render(scene, camera);
  person.update(0.5);

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

  pointLight.intensity = bulbLightValue;
  light.intensity = lightValue;

  requestAnimationFrame(animate);
}

async function start() {
  const loader = new GLTFLoader();
  const vagon = await loader.loadAsync('vagon/scene.gltf');
  const bulb = await loader.loadAsync('light_bulb/scene.gltf');
  const switcher = await loader.loadAsync('light_switch/scene.gltf');

  bulb.scene.position.set(0, 430, 0);
  bulb.scene.rotateX(Math.PI);

  vagon.scene.position.set(0, 0, 0);

  switcher.scene.position.set(-150, 255, -1000);

  scene.add(bulb.scene);
  scene.add(switcher.scene);
  scene.add(vagon.scene);

  document.querySelector('#loading').textContent = '';

  animate();
}

start();

document.querySelector('#answer').addEventListener('click', () => {
  const answer = window.prompt('How many vagons the train have?');

  if (Number.parseInt(answer) === states.length) {
    window.alert('You are right!');
  } else {
    window.alert('You are wrong!');
  }
});

document.querySelector('#reboot').addEventListener('click', () => {
  window.location.reload();
});
