import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

console.log(gsap)

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


gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
gsap.to(mesh.position, {duration: 1, delay: 2, x: 0})

//Animations
const tick = () =>
{

const elapsedTime = clock.getElapsedTime()
//const currentTime = Date.now()
//const deltaTime = currentTime - time
//time = currentTime

console.log(elapsedTime)

    //update object
    //camera.position.y = Math.sin(elapsedTime)
    //camera.position.x = Math.sin(elapsedTime)
    //camera.lookAt(mesh.position)


    //render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
