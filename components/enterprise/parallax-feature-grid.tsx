"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Wifi, Shield, Monitor, Users, Cpu, Globe } from "lucide-react"

const features = [
  {
    icon: Wifi,
    title: "Satellite-Resilient Sync",
    description:
      "Data buffers locally for up to 48 hours and auto-syncs the moment connectivity returns. Zero bytes lost.",
    yOffset: 20,
  },
  {
    icon: Shield,
    title: "Mongolian Data Sovereignty",
    description:
      "All data stored on Mongolian soil. Full jurisdictional control — no foreign cloud dependency.",
    yOffset: 40,
  },
  {
    icon: Monitor,
    title: "One-Screen Fleet View",
    description:
      "Your CEO in UB sees real-time fuel burn, maintenance status, and fleet positions across every site.",
    yOffset: 20,
  },
  {
    icon: Users,
    title: "White-Glove Deployment",
    description:
      "Our engineers live on your site until the system works. No remote hand-offs, no ticket queues.",
    yOffset: 40,
  },
  {
    icon: Cpu,
    title: "Predictive Maintenance AI",
    description:
      "ML models trained on Mongolian fleet data predict failures before they strand equipment in the field.",
    yOffset: 20,
  },
  {
    icon: Globe,
    title: "Multi-Site Command",
    description:
      "Unified dashboard across Gobi, Erdenet, and OT — with per-site permissions and drill-down.",
    yOffset: 40,
  },
]

function ParallaxCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [feature.yOffset, -feature.yOffset])

  const Icon = feature.icon

  return (
    <motion.div ref={ref} style={{ y }}>
      <motion.div
        className="p-6 rounded-xl glass-card hover:shadow-glow transition-all duration-300 group hover:border-primary relative overflow-hidden h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          rotateX: 5,
          rotateY: -5,
          scale: 1.02,
          y: -10,
        }}
        style={{ perspective: 1000 }}
      >
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
          <Icon className="size-16" />
        </div>
        <Icon className="text-primary size-8 mb-4 relative z-10" />
        <h3 className="text-foreground font-bold mb-2 relative z-10">{feature.title}</h3>
        <p className="text-muted-foreground text-sm relative z-10">{feature.description}</p>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.div>
  )
}

export function ParallaxFeatureGrid() {
  return (
    <section className="px-6 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-balance">
            Your CEO in UB Sees Real-Time Fuel Burn 600km Away
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Every feature addresses a real anxiety of large-scale Mongolian mining operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ParallaxCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
