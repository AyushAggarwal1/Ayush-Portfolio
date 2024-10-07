// Set up the scene, camera, and renderer for the background particles
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-canvas').appendChild(renderer.domElement);

// Create particles
let particles = new THREE.Geometry();
let particleCount = 10000;
let pMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 2
});

for (let p = 0; p < particleCount; p++) {
    let pX = Math.random() * 1000 - 500,
        pY = Math.random() * 1000 - 500,
        pZ = Math.random() * 1000 - 500;
    let particle = new THREE.Vector3(pX, pY, pZ);
    particles.vertices.push(particle);
}

let particleSystem = new THREE.Points(particles, pMaterial);
scene.add(particleSystem);
camera.position.z = 300;

function animateParticles() {
    requestAnimationFrame(animateParticles);

    particleSystem.rotation.y += 0.001;
    particleSystem.rotation.x += 0.0005;

    renderer.render(scene, camera);
}

animateParticles();

// Set up for the 3D rotating cube
let cubeScene = new THREE.Scene();
let cubeCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let cubeRenderer = new THREE.WebGLRenderer();
cubeRenderer.setSize(400, 400);
document.getElementById('cube-canvas').appendChild(cubeRenderer.domElement);

let geometry = new THREE.BoxGeometry(2, 2, 2);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
let cube = new THREE.Mesh(geometry, material);
cubeScene.add(cube);
cubeCamera.position.z = 5;

function animateCube() {
    requestAnimationFrame(animateCube);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cubeRenderer.render(cubeScene, cubeCamera);
}

animateCube();
