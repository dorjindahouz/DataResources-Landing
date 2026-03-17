"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

export function SLAPulse() {
  const [displayValue, setDisplayValue] = useState("0")
  const containerRef = useRef<HTMLDivElement>(null)
  const [glowIntensity, setGlowIntensity] = useState(0)

  // Animated count-up
  useEffect(() => {
    const end = 99.9
    const duration = 2000
    let startTime: number | null = null
    let animationId: number

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const current = progress * end
            setDisplayValue(current.toFixed(1))
            if (progress < 1) {
              animationId = requestAnimationFrame(animate)
            }
          }
          animationId = requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      observer.disconnect()
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  // Mouse proximity glow
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    )
    const maxDistance = 400
    const intensity = Math.max(0, 1 - distance / maxDistance)
    setGlowIntensity(intensity)
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return (
    <div
      ref={containerRef}
      className="glass-card rounded-2xl p-12 text-center bg-grid relative overflow-hidden"
      style={{
        boxShadow: `0 0 ${60 * glowIntensity}px ${20 * glowIntensity}px rgba(27,198,228,${0.15 * glowIntensity})`,
        transition: "box-shadow 0.15s ease-out",
      }}
    >
      {/* Orbital ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="size-48 lg:size-56" viewBox="0 0 200 200">
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(27,198,228,0.15)"
            strokeWidth="1"
            strokeDasharray="6 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
          {/* Radar pulse */}
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(27,198,228,0.2)"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      </div>

      <div className="relative z-10">
        <p className="text-6xl font-black text-primary tracking-tighter">
          {displayValue}%
        </p>
        <p className="text-muted-foreground text-sm font-medium mt-2 uppercase tracking-wider">
          Uptime SLA Guarantee
        </p>
      </div>
    </div>
  )
}
