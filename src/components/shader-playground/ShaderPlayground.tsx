"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import * as THREE from "three"
import { vertexShader, fragmentShader } from "./shaderSource"
import { ControlPanel } from "./ControlPanel"

export interface ShaderUniforms {
  // Cloud
  noiseScale: number
  cloudDensity: number
  cloudSoftness: number
  driftSpeed: number
  layerSeparation: number
  // Iridescence
  hueOffset: number
  hueRange: number
  saturation: number
  brightness: number
  fresnelPower: number
  fresnelIntensity: number
  // Light
  lightX: number
  lightY: number
  warmShift: number
  coolShift: number
  mouseInfluence: number
  // Output
  desaturation: number
  darkOverlay: number
  // Meta
  pixelRatio: number
  paused: boolean
}

const DEFAULT_UNIFORMS: ShaderUniforms = {
  noiseScale: 2.5,
  cloudDensity: 0.6,
  cloudSoftness: 0.4,
  driftSpeed: 0.08,
  layerSeparation: 0.5,
  hueOffset: 0.55,
  hueRange: 0.6,
  saturation: 0.55,
  brightness: 0.72,
  fresnelPower: 1.8,
  fresnelIntensity: 1.0,
  lightX: 0.65,
  lightY: 0.7,
  warmShift: 0.9,
  coolShift: 2.5,
  mouseInfluence: 0.3,
  desaturation: 0.1,
  darkOverlay: 0.0,
  pixelRatio: 0.5,
  paused: false,
}

export default function ShaderPlayground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
  const geometryRef = useRef<THREE.PlaneGeometry | null>(null)
  const animFrameRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const timeRef = useRef(0)
  const lastFrameRef = useRef(0)
  const pausedRef = useRef(false)
  const pixelRatioRef = useRef(DEFAULT_UNIFORMS.pixelRatio)

  const [uniforms, setUniforms] = useState<ShaderUniforms>(DEFAULT_UNIFORMS)

  const updateUniform = useCallback((key: keyof ShaderUniforms, value: number | boolean) => {
    setUniforms(prev => ({ ...prev, [key]: value }))
  }, [])

  const resetUniforms = useCallback(() => {
    setUniforms(DEFAULT_UNIFORMS)
  }, [])

  // Keep refs in sync with state for use in animation loop
  useEffect(() => {
    pausedRef.current = uniforms.paused
    pixelRatioRef.current = uniforms.pixelRatio
  }, [uniforms.paused, uniforms.pixelRatio])

  // Initialize Three.js — handles Strict Mode double-mount
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create a new canvas each mount (Strict Mode safe)
    const canvas = document.createElement("canvas")
    canvas.style.display = "block"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    container.appendChild(canvas)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false })
    rendererRef.current = renderer

    const scene = new THREE.Scene()
    sceneRef.current = scene
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    cameraRef.current = camera

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uResolution: { value: new THREE.Vector2() },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uNoiseScale: { value: DEFAULT_UNIFORMS.noiseScale },
        uCloudDensity: { value: DEFAULT_UNIFORMS.cloudDensity },
        uCloudSoftness: { value: DEFAULT_UNIFORMS.cloudSoftness },
        uDriftSpeed: { value: DEFAULT_UNIFORMS.driftSpeed },
        uLayerSeparation: { value: DEFAULT_UNIFORMS.layerSeparation },
        uHueOffset: { value: DEFAULT_UNIFORMS.hueOffset },
        uHueRange: { value: DEFAULT_UNIFORMS.hueRange },
        uSaturation: { value: DEFAULT_UNIFORMS.saturation },
        uBrightness: { value: DEFAULT_UNIFORMS.brightness },
        uFresnelPower: { value: DEFAULT_UNIFORMS.fresnelPower },
        uFresnelIntensity: { value: DEFAULT_UNIFORMS.fresnelIntensity },
        uLightPosition: { value: new THREE.Vector2(DEFAULT_UNIFORMS.lightX, DEFAULT_UNIFORMS.lightY) },
        uWarmShift: { value: DEFAULT_UNIFORMS.warmShift },
        uCoolShift: { value: DEFAULT_UNIFORMS.coolShift },
        uMouseInfluence: { value: DEFAULT_UNIFORMS.mouseInfluence },
        uDesaturation: { value: DEFAULT_UNIFORMS.desaturation },
        uDarkOverlay: { value: DEFAULT_UNIFORMS.darkOverlay },
      },
    })
    materialRef.current = material

    const geometry = new THREE.PlaneGeometry(2, 2)
    geometryRef.current = geometry
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const handleResize = () => {
      const pr = pixelRatioRef.current
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h)
      renderer.setPixelRatio(pr)
      material.uniforms.uResolution.value.set(w * pr, h * pr)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth
      mouseRef.current.y = 1.0 - e.clientY / window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    // Reset time tracking for fresh mount
    lastFrameRef.current = 0

    const animate = (timestamp: number) => {
      animFrameRef.current = requestAnimationFrame(animate)

      if (!lastFrameRef.current) lastFrameRef.current = timestamp
      const delta = (timestamp - lastFrameRef.current) / 1000
      lastFrameRef.current = timestamp

      if (!pausedRef.current) {
        timeRef.current += delta
      }

      material.uniforms.uTime.value = timeRef.current
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y)

      renderer.render(scene, camera)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      rendererRef.current = null
      materialRef.current = null
      // Remove the canvas element we created
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  // Sync uniforms to material
  useEffect(() => {
    const material = materialRef.current
    if (!material) return

    material.uniforms.uNoiseScale.value = uniforms.noiseScale
    material.uniforms.uCloudDensity.value = uniforms.cloudDensity
    material.uniforms.uCloudSoftness.value = uniforms.cloudSoftness
    material.uniforms.uDriftSpeed.value = uniforms.driftSpeed
    material.uniforms.uLayerSeparation.value = uniforms.layerSeparation
    material.uniforms.uHueOffset.value = uniforms.hueOffset
    material.uniforms.uHueRange.value = uniforms.hueRange
    material.uniforms.uSaturation.value = uniforms.saturation
    material.uniforms.uBrightness.value = uniforms.brightness
    material.uniforms.uFresnelPower.value = uniforms.fresnelPower
    material.uniforms.uFresnelIntensity.value = uniforms.fresnelIntensity
    material.uniforms.uLightPosition.value.set(uniforms.lightX, uniforms.lightY)
    material.uniforms.uWarmShift.value = uniforms.warmShift
    material.uniforms.uCoolShift.value = uniforms.coolShift
    material.uniforms.uMouseInfluence.value = uniforms.mouseInfluence
    material.uniforms.uDesaturation.value = uniforms.desaturation
    material.uniforms.uDarkOverlay.value = uniforms.darkOverlay

    // Handle pixel ratio changes
    const renderer = rendererRef.current
    if (renderer) {
      const pr = uniforms.pixelRatio
      renderer.setPixelRatio(pr)
      material.uniforms.uResolution.value.set(
        window.innerWidth * pr,
        window.innerHeight * pr
      )
    }
  }, [uniforms])

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <div ref={containerRef} className="w-full h-full" />
      <ControlPanel
        uniforms={uniforms}
        onUpdate={updateUniform}
        onReset={resetUniforms}
      />
    </div>
  )
}
