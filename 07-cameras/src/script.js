import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


/**
 * Cursor
 */
//coordinates of mouse
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => 
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//Checking for resize
window.addEventListener('resize', () => 
{
    //Update Camera
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //Change the aspect ratio of the camera
    camera.aspect = sizes.width / sizes.height
    //Update it
    camera.updateProjectionMatrix()

    //Update renderer (and canvas)
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
})

// Scene
const scene = new THREE.Scene()

//Float32Array's are a lot easier for computers

const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
    new THREE.MeshBasicMaterial(
        { color: 0xff0000, 
            wireframe: true
        })
)
scene.add(mesh)


//going fullscreen with a doubleclick, compatible for safari as well. this updates the canvas parent to become fullscreen
window.addEventListener('dblclick', () => 
{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    if(!fullscreenElement){
        if(canvas.requestFullscreen){
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen()
        }
    }
    else{
        if(document.exitFullscreen){
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen()
        }
    }
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)

// const aspectRatio = sizes.width/sizes.height
// const camera = new THREE.OrthographicCamera(
//     -1 * aspectRatio, 
//     1 * aspectRatio, 
//     1, 
//     -1, 
//     0.1, 
//     100)
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 2
camera.lookAt(mesh.position)
scene.add(camera)

//Controls
const controls = new OrbitControls(camera, canvas) //canvas is the dom element
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))


// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //mesh.rotation.y = elapsedTime;
    // camera.position.x = Math.sin(cursor.x * Math.PI*2) * 3 
    // camera.position.z = Math.cos(cursor.x * Math.PI*2) * 3
    // camera.position.y = cursor.y * 5
    // camera.lookAt(mesh.position)

    //Update controls
    controls.update() //have to update on every frame

    // Render
    renderer.render(scene, camera)  

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()