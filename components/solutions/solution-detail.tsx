"use client"

import { motion } from "framer-motion"
import { Mountain, HardHat, Radio, Building2 } from "lucide-react"

const iconMap = {
  Mountain,
  HardHat,
  Radio,
  Building2,
}

interface SolutionDetailProps {
  id: string
  iconName: keyof typeof iconMap
  title: string
  description: string
  features: string[]
  reversed?: boolean
}

export function SolutionDetail({
  id,
  iconName,
  title,
  description,
  features,
  reversed = false,
}: SolutionDetailProps) {
  const Icon = iconMap[iconName]

  return (
    <section id={id} className="px-6 lg:px-20 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className={reversed ? "lg:order-2" : ""}
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="size-14 bg-secondary rounded-xl flex items-center justify-center text-primary mb-6">
            <Icon className="size-7" />
          </div>
          <h3 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{description}</p>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="size-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={reversed ? "lg:order-1" : ""}
          initial={{ opacity: 0, x: reversed ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass-card rounded-2xl aspect-[4/3] flex items-center justify-center bg-grid">
            <div className="size-24 bg-secondary/50 rounded-2xl flex items-center justify-center text-primary">
              <Icon className="size-12" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
