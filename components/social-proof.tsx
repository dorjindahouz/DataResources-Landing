"use client"

import { motion } from "framer-motion"

interface Metric {
  value: string
  label: string
}

interface SocialProofProps {
  metrics: Metric[]
}

export function SocialProof({ metrics }: SocialProofProps) {
  return (
    <section className="px-6 lg:px-20 py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-black tracking-tighter text-primary">
                {metric.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
