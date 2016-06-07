var camera;
var controls;
var scene;
var light;
var renderer;
var html3d = new HtmlRenderer();

init();
animate();

function init() {
  //camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 0, -1000);

  //controls
  controls = new THREE.OrbitControls(camera);
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;

  //Scene
  scene = new THREE.Scene();

  //HemisphereLight
  light = new THREE.HemisphereLight(0xffbf67, 0x15c6ff);
  scene.add(light);

  //WebGL Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0xffffff, 1)
  renderer.setSize(window.innerWidth - 50, window.innerHeight - 50);
  renderer.domElement.style.zIndex = 5;
  document.getElementById('view').appendChild(renderer.domElement);

  html3d.init(camera);
}

function animate() {
  requestAnimationFrame(animate);
  html3d.render();
  renderer.render(scene, camera);
  controls.update();
}
