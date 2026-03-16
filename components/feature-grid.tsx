"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

const colClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div className={`grid gap-6 ${colClasses[columns]}`}>
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          className="glass-card rounded-2xl p-6 hover:shadow-glow transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <div className="size-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-4">
            <feature.icon className="size-6" />
          </div>
          <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
