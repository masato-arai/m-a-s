import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Canvas = () => {
  const mount = useRef(null)
  const scene = new THREE.Scene();

  let camera
  let mesh
  let mouse2D
  let mouseObj = { x: 0, y: 0, percentX: 0, percentY: 0, lastX: 0, lastY: 0 }
  let renderer

  function setBackground() {
    scene.background = new THREE.Color(0x1a1a1a)
  }

  function setLights() {
    let light
    light = new THREE.DirectionalLight(0xffffff)
    light.position.set(1, 1, 1)
    scene.add(light)

    light = new THREE.DirectionalLight(0xffffff)
    light.position.set(-1, -1, -1)
    scene.add(light)

    light = new THREE.AmbientLight(0x222222)
    scene.add(light)
  }

  function setCamera() {
    camera = new THREE.PerspectiveCamera(1.4, window.innerWidth / window.innerHeight, 5, 100000)
    camera.position.z = 1400
  }

  function setMaterial() {
    const geometry = new THREE.TorusGeometry(10, 3, 16, 50)
    const material = new THREE.MeshPhongMaterial({
      color: 0x828282,
      wireframe: true,
    })
    mesh = new THREE.Mesh(geometry , material)
    mesh.rotation.x = -(Math.PI * 0.2)
    mesh.rotation.y = -(Math.PI * 0.2)
    mesh.autoUpdateMatrix = false
    scene.add(mesh)
  }

  function setDomElement() {
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    mouse2D = new THREE.Vector2()
    mount.current.appendChild(renderer.domElement)
  }

  function animate() {
    window.requestAnimationFrame(animate)
    const euler = new THREE.Euler(-mouse2D.y, mouse2D.x, 0)
    const quaternion = new THREE.Quaternion().setFromEuler(euler)
    const newQuaternion = new THREE.Quaternion()
    THREE.Quaternion.slerp(mesh.quaternion, quaternion, newQuaternion, 0.1)
    mesh.quaternion.slerp(newQuaternion, 0.1)
    renderer.render(scene, camera)
  }

  function setEventListers() {
    window.addEventListener('mousemove', (event) => {
      mouse2D.x = ((event.pageX / window.innerWidth) * 2) - 1;
      mouse2D.y = (-(event.pageY / window.innerHeight) * 2) + 1;

      mouseObj.x = event.pageX - (window.innerWidth / 2)
      mouseObj.y = event.pageY - (window.innerHeight / 2)
      mouseObj.percentX = Math.ceil((mouseObj.x / (window.innerWidth / 2)) * 100)
      mouseObj.percentY = Math.ceil((mouseObj.y / (window.innerHeight / 2)) * 100)
      mouseObj.lastX = event.pageX;
      mouseObj.lastY = event.pageY;
    }, false)

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)
    }, false)
  }

  useEffect(() => {
    setBackground()
    setLights()
    setCamera()
    setMaterial()
    setDomElement()
    animate()
    setEventListers()
  }, [])

  return (
    <div ref={mount} />
  )
}

export default Canvas