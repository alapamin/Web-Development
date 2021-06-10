import './style.css'
import * as THREE from 'three'

// Scene Creation

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: (screen.width * .5),
    height: (screen.height * .5)
}

// Camera (Point of View)
// Field of View (vertical > horizontal)  vvvv  aspect ratio vvvv
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height)

//our camera is inside our object by default, so we have to move it out of it to see the object
camera.position.z = 3
camera.position.x = 1
camera.position.y = .5

//ALWAYS ADD TO THE SCENEEEEE
scene.add(camera)

//We use the doc query function to retrieve the canvas we created in the HTML file
//and then store it in our 'canvas' variable
const canvas = document.querySelector('.webgl')
console.log(canvas)
//Render (WebGL Renderer)
const renderer = new THREE.WebGLRenderer({
    canvas //in javascript if the property has the same name as the variable you don't need to do property: variable

})
//set the render size
renderer.setSize(sizes.width, sizes.height)

//render our scene with the camera!
renderer.render(scene,camera)



