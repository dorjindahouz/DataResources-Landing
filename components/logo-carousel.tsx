"use client"

import { motion } from "framer-motion"
import { Shield, Cpu, Factory, Truck, HardHat, Drill } from "lucide-react"

const logos = [
  { icon: Shield, name: "SecureMining" },
  { icon: Cpu, name: "DataCore" },
  { icon: Factory, name: "IndustrialFlow" },
  { icon: Truck, name: "LogiTrack" },
  { icon: HardHat, name: "SafetyFirst" },
  { icon: Drill, name: "DeepEarth" },
]

export function LogoCarousel() {
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="w-full py-12 bg-background/50 border-y border-white/5 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{
          x: [0, -100 * logos.length],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-muted-foreground/60 grayscale hover:grayscale-0 hover:text-primary transition-all duration-300 cursor-default"
          >
            <logo.icon className="size-8" />
            <span className="font-bold tracking-tighter text-lg uppercase">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
