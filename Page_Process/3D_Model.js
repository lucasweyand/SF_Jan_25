
/*
// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfafafa, 1);  // Change background color to white
renderer.shadowMap.enabled = true; // Enable shadow mapping
document.getElementById('modelContainer').appendChild(renderer.domElement);

// Add OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;  // Disable zoom functionality

// Add Axes Helper (5 units long)
const axesHelper = new THREE.AxesHelper(2);
axesHelper.rotation.y = Math.PI / 2;  // Rotate 90 degrees about the Y axis
scene.add(axesHelper);

// Load the COLLADA (.dae) model
const loader = new THREE.ColladaLoader();
loader.load('Page_Process/3d_render.dae', function(collada) {
  const model = collada.scene;
  model.scale.set(0.1, 0.1, 0.1);  // Adjust scale if necessary
  model.traverse(function(child) {
    if (child.isMesh) {
      child.castShadow = true; // Allow the model to cast shadows
      child.receiveShadow = true; // Allow the model to receive shadows
    }
  });
  scene.add(model);

  // Center the model in the scene
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center); // Center the model

  // Set camera position to ensure the model is visible
  const size = box.getSize(new THREE.Vector3()).length();
  camera.position.set(0, size / 2, size * 0.8); // Adjust based on model size
  camera.lookAt(center); // Look at the center of the model

  // Render the scene once the model is loaded
  renderer.render(scene, camera);
});

// Add stationary lighting
const light = new THREE.DirectionalLight(0xffffff, 1.3);
light.position.set(-20, 10, 5).normalize(); // Set light position (adjust for better lighting)
light.castShadow = true; // Enable shadows for the light

light1 =new THREE.AmbientLight(0xc4c4c4,0.5);
light1.position.set(-600,0,400);
scene.add(light1);

// Adjust shadow properties for better quality
light.shadow.mapSize.width = 2048; // Increase shadow map size for better quality
light.shadow.mapSize.height = 2048; // Increase shadow map size for better quality
light.shadow.camera.near = 0.5; // Near plane for shadow camera
light.shadow.camera.far = 50; // Far plane for shadow camera
light.shadow.camera.left = -15; // Adjust based on your scene size
light.shadow.camera.right = 15; // Adjust based on your scene size
light.shadow.camera.top = 15; // Adjust based on your scene size
light.shadow.camera.bottom = -15; // Adjust based on your scene size
scene.add(light);

// Animation loop to update and render the scene
function animate() {
  requestAnimationFrame(animate);
  controls.update();  // Update controls for orbiting
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

*/


// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Set pixel ratio for higher resolution
renderer.setClearColor(0xfafafa, 1);  // Change background color to white
renderer.shadowMap.enabled = true; // Enable shadow mapping
document.getElementById('modelContainer').appendChild(renderer.domElement);

// Add OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;  // Disable zoom functionality

// Add Axes Helper (5 units long)
const axesHelper = new THREE.AxesHelper(2);
axesHelper.rotation.y = Math.PI / 2;  // Rotate 90 degrees about the Y axis
scene.add(axesHelper);

// Load the COLLADA (.dae) model
const loader = new THREE.ColladaLoader();
loader.load('Page_Process/3d_render.dae', function(collada) {
  const model = collada.scene;
  model.scale.set(0.1, 0.1, 0.1);  // Adjust scale if necessary
  model.traverse(function(child) {
    if (child.isMesh) {
      child.castShadow = true; // Allow the model to cast shadows
      child.receiveShadow = true; // Allow the model to receive shadows
    }
  });
  scene.add(model);

 // Ensure model is added to the scene before calculations
 scene.add(model);

 model.traverse((child) => {
   if (child.isMesh) {
     child.geometry.computeBoundingBox(); // Ensure bounding box is calculated
   }
 });

 // Center the model in the scene
const box = new THREE.Box3().setFromObject(model);
const center = box.getCenter(new THREE.Vector3());
model.position.sub(center); // Centers the model

// Move the model up by adjusting the Y position
const modelHeight = box.max.y - box.min.y; // Get model height
model.position.y += modelHeight * 0.50; // Moves it up by half its height


  // Set camera position to ensure the model is visible
  const size = box.getSize(new THREE.Vector3()).length();
  camera.position.set(0, size / 2, size * 1); // Adjust based on model size
  camera.lookAt(center); // Look at the center of the model

  // Render the scene once the model is loaded
  renderer.render(scene, camera);
});

// Add stationary lighting
const light = new THREE.DirectionalLight(0xffffff, 1.3);
light.position.set(-20, 10, 5).normalize(); // Set light position (adjust for better lighting)
light.castShadow = true; // Enable shadows for the light

const ambientLight = new THREE.AmbientLight(0xc4c4c4, 0.5);
scene.add(ambientLight);

// Adjust shadow properties for better quality
light.shadow.mapSize.width = 2048; // Increase shadow map size for better quality
light.shadow.mapSize.height = 2048; // Increase shadow map size for better quality
light.shadow.camera.near = 0.5; // Near plane for shadow camera
light.shadow.camera.far = 50; // Far plane for shadow camera
light.shadow.camera.left = -15; // Adjust based on your scene size
light.shadow.camera.right = 15; // Adjust based on your scene size
light.shadow.camera.top = 15; // Adjust based on your scene size
light.shadow.camera.bottom = -15; // Adjust based on your scene size
scene.add(light);

// Add additional lighting if necessary
const pointLight = new THREE.PointLight(0xffffff, 0.5, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Animation loop to update and render the scene
function animate() {
  requestAnimationFrame(animate);
  controls.update();  // Update controls for orbiting
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});



