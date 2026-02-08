"use client"

import { useState, useCallback } from "react"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronRight, RotateCcw, Pause, Play, Copy, X, GripVertical } from "lucide-react"
import type { ShaderUniforms } from "./ShaderPlayground"

interface ControlPanelProps {
  uniforms: ShaderUniforms
  onUpdate: (key: keyof ShaderUniforms, value: number | boolean) => void
  onReset: () => void
}

interface SliderControlProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (value: number) => void
}

function SliderControl({ label, value, min, max, step, onChange }: SliderControlProps) {
  return (
    <div className="flex items-center gap-3 group">
      <Label className="w-[110px] shrink-0 text-[10px]">{label}</Label>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([v]) => onChange(v)}
        className="flex-1"
      />
      <span className="w-[42px] text-right text-[10px] text-white/40 font-mono tabular-nums shrink-0">
        {value.toFixed(step < 0.1 ? 2 : 1)}
      </span>
    </div>
  )
}

interface SectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function Section({ title, children, defaultOpen = true }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 w-full py-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-white/40 hover:text-white/60 transition-colors"
      >
        {open ? <ChevronDown size={10} /> : <ChevronRight size={10} />}
        {title}
      </button>
      {open && (
        <div className="px-3 pb-3 flex flex-col gap-2.5">
          {children}
        </div>
      )}
    </div>
  )
}

export function ControlPanel({ uniforms, onUpdate, onReset }: ControlPanelProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [position, setPosition] = useState({ x: 16, y: 16 })
  const [dragging, setDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }, [position])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return
    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    })
  }, [dragging, dragOffset])

  const handleMouseUp = useCallback(() => {
    setDragging(false)
  }, [])

  const exportConfig = useCallback(() => {
    const config = { ...uniforms }
    navigator.clipboard.writeText(JSON.stringify(config, null, 2))
  }, [uniforms])

  return (
    <div
      className="fixed z-50 select-none"
      style={{ left: position.x, top: position.y }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="rounded-xl overflow-hidden shadow-2xl shadow-black/50"
        style={{
          background: "rgba(10, 10, 10, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          width: collapsed ? "auto" : 300,
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-1.5">
            <GripVertical size={10} className="text-white/20" />
            <span className="text-[11px] font-medium text-white/70">
              Shader Controls
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onUpdate("paused", !uniforms.paused)}
              className="p-1 rounded hover:bg-white/10 transition-colors text-white/40 hover:text-white/70"
              title={uniforms.paused ? "Play" : "Pause"}
            >
              {uniforms.paused ? <Play size={11} /> : <Pause size={11} />}
            </button>
            <button
              onClick={exportConfig}
              className="p-1 rounded hover:bg-white/10 transition-colors text-white/40 hover:text-white/70"
              title="Copy config to clipboard"
            >
              <Copy size={11} />
            </button>
            <button
              onClick={onReset}
              className="p-1 rounded hover:bg-white/10 transition-colors text-white/40 hover:text-white/70"
              title="Reset to defaults"
            >
              <RotateCcw size={11} />
            </button>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 rounded hover:bg-white/10 transition-colors text-white/40 hover:text-white/70"
              title={collapsed ? "Expand" : "Collapse"}
            >
              <X size={11} className={collapsed ? "rotate-45" : ""} />
            </button>
          </div>
        </div>

        {/* Controls */}
        {!collapsed && (
          <div className="max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain scrollbar-thin">
            <Section title="Clouds">
              <SliderControl
                label="Scale"
                value={uniforms.noiseScale}
                min={0.5}
                max={8}
                step={0.1}
                onChange={v => onUpdate("noiseScale", v)}
              />
              <SliderControl
                label="Density"
                value={uniforms.cloudDensity}
                min={0}
                max={1}
                step={0.01}
                onChange={v => onUpdate("cloudDensity", v)}
              />
              <SliderControl
                label="Softness"
                value={uniforms.cloudSoftness}
                min={0.01}
                max={1}
                step={0.01}
                onChange={v => onUpdate("cloudSoftness", v)}
              />
              <SliderControl
                label="Drift speed"
                value={uniforms.driftSpeed}
                min={0}
                max={0.5}
                step={0.005}
                onChange={v => onUpdate("driftSpeed", v)}
              />
              <SliderControl
                label="Layer depth"
                value={uniforms.layerSeparation}
                min={0}
                max={2}
                step={0.05}
                onChange={v => onUpdate("layerSeparation", v)}
              />
            </Section>

            <Section title="Iridescence">
              <SliderControl
                label="Hue offset"
                value={uniforms.hueOffset}
                min={0}
                max={1}
                step={0.01}
                onChange={v => onUpdate("hueOffset", v)}
              />
              <SliderControl
                label="Hue range"
                value={uniforms.hueRange}
                min={0}
                max={2}
                step={0.01}
                onChange={v => onUpdate("hueRange", v)}
              />
              <SliderControl
                label="Saturation"
                value={uniforms.saturation}
                min={0}
                max={1}
                step={0.01}
                onChange={v => onUpdate("saturation", v)}
              />
              <SliderControl
                label="Brightness"
                value={uniforms.brightness}
                min={0.1}
                max={1}
                step={0.01}
                onChange={v => onUpdate("brightness", v)}
              />
              <SliderControl
                label="Fresnel power"
                value={uniforms.fresnelPower}
                min={0.1}
                max={5}
                step={0.1}
                onChange={v => onUpdate("fresnelPower", v)}
              />
              <SliderControl
                label="Fresnel intensity"
                value={uniforms.fresnelIntensity}
                min={0}
                max={3}
                step={0.05}
                onChange={v => onUpdate("fresnelIntensity", v)}
              />
            </Section>

            <Section title="Light source">
              <SliderControl
                label="Light X"
                value={uniforms.lightX}
                min={0}
                max={1}
                step={0.01}
                onChange={v => onUpdate("lightX", v)}
              />
              <SliderControl
                label="Light Y"
                value={uniforms.lightY}
                min={0}
                max={1}
                step={0.01}
                onChange={v => onUpdate("lightY", v)}
              />
              <SliderControl
                label="Warm shift"
                value={uniforms.warmShift}
                min={-2}
                max={4}
                step={0.05}
                onChange={v => onUpdate("warmShift", v)}
              />
              <SliderControl
                label="Cool shift"
                value={uniforms.coolShift}
                min={-2}
                max={4}
                step={0.05}
                onChange={v => onUpdate("coolShift", v)}
              />
              <SliderControl
                label="Mouse follow"
                value={uniforms.mouseInfluence}
                min={0}
                max={1}
                step={0.01}
                onChange={v => onUpdate("mouseInfluence", v)}
              />
            </Section>

            <Section title="Output" defaultOpen={false}>
              <SliderControl
                label="Desaturation"
                value={uniforms.desaturation}
                min={0}
                max={1}
                step={0.01}
                onChange={v => onUpdate("desaturation", v)}
              />
              <SliderControl
                label="Dark overlay"
                value={uniforms.darkOverlay}
                min={0}
                max={0.8}
                step={0.01}
                onChange={v => onUpdate("darkOverlay", v)}
              />
              <SliderControl
                label="Render quality"
                value={uniforms.pixelRatio}
                min={0.25}
                max={2}
                step={0.25}
                onChange={v => onUpdate("pixelRatio", v)}
              />
            </Section>
          </div>
        )}
      </div>
    </div>
  )
}
