import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: screen.width/2,
    height: screen.height/2
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Time
const clock = new THREE.Clock()
//let time = Date.now()

//Animations
const tick = () =>
{
const currentTime = Date.now()
const deltaTime = currentTime - time
time = currentTime

console.log(deltaTime)

    //update object
    mesh.rotation.x += 0.001 * deltaTime
    mesh.rotation.z += 0.001 * deltaTime

    //render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
