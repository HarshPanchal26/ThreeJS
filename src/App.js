import React from 'react';
import * as THREE from 'three';
import './App.css';

function App() {
  
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 0 , 1000);
  
  // add helper 
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  camera.position.z = 15;
  
  renderer.render(scene,camera);

  
  
  document.getElementById('app') && document.getElementById('app').appendChild(renderer.domElement);


  return (
    <div className="App" id='app'>
      {/* <header className="App-header">
        <h1>dcdnck</h1>
      </header> */}
    </div>
  );
}

export default App;
