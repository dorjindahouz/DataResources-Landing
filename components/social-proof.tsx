"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface Metric {
  value: string
  label: string
}

interface SocialProofProps {
  metrics: Metric[]
}

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef(null)
  const isNumeric = !isNaN(parseFloat(value.replace(/[^0-9.]/g, "")))
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""))
  const suffix = value.replace(/[0-9.]/g, "")
  const hasDecimal = value.includes(".")

  useEffect(() => {
    if (!isNumeric) {
      setDisplayValue(value)
      return
    }

    let start = 0
    const end = numericValue
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = progress * (end - start) + start
      
      const formatted = hasDecimal 
        ? current.toFixed(1)
        : Math.floor(current).toString()

      setDisplayValue(`${formatted}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, isNumeric, numericValue, suffix, hasDecimal])

  return <span ref={ref}>{displayValue}</span>
}

export function SocialProof({ metrics }: SocialProofProps) {
  return (
    <section className="px-6 lg:px-20 py-16 border-y border-white/5 bg-deep-navy/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center group">
              <p className="text-3xl lg:text-4xl font-black tracking-tighter text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                <AnimatedNumber value={metric.value} />
              </p>
              <p className="text-muted-foreground text-sm mt-1 font-medium tracking-wide uppercase opacity-70">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
