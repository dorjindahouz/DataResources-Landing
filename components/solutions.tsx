"use client"

import { CloudOff, Fingerprint, Mic, Cpu } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: CloudOff,
    title: "Offline-First Design",
    description:
      "Synchronize mission-critical data automatically once telemetry is restored.",
  },
  {
    icon: Fingerprint,
    title: "Greasy-Finger UX",
    description:
      "High-contrast, large-target interfaces designed for field tablets and gloved use.",
  },
  {
    icon: Mic,
    title: "Voice-to-Text",
    description:
      "Hands-free data entry for mechanics during maintenance cycles.",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description:
      "Local processing power for sub-millisecond response times in the pit.",
  },
]

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      className="p-6 rounded-xl glass-card hover:shadow-glow transition-all duration-300 group hover:border-primary"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <Icon className="text-primary size-8 mb-4" />
      <h3 className="text-foreground font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  )
}

export function Solutions() {
  return (
    <section className="px-6 lg:px-20 py-20" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <motion.h2
              className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Engineered for the Field
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our solutions are built to withstand deep-pit constraints and
              limited connectivity, ensuring your data flows even when the
              network doesn{"'"}t. We bridge the gap between heavy machinery and
              digital intelligence.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, i) => (
                <FeatureCard key={feature.title} {...feature} index={i} />
              ))}
            </div>
          </div>

          <motion.div
            className="relative rounded-2xl overflow-hidden h-full min-h-[400px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              alt="Heavy duty excavator working in a deep open-pit mine"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMoh8f8MlSSSdS09wocK1U66kgOkPHRu4VYTFHuET230bG1XnYHAkEbSz2txPNapoD4MmLdlJECdl-k3nhm5Z5kOGd3pKon5dhHdpERgC7ry-7QMkBRzlW36_SxLGkdNbhJGOCjqLb_Zo3J3tGYEFuPSVa8qDuqrNfehIZp7ZaiwQNZYGYvKcBBAsjg6WcuSA7a-1ZOAzoBKD2FRGRdwTYipYT3q6w6YTz9cj9-1uscw2AYPjGCgpbdt5ZTn42afuT3XjrG6zO7Xg"
            />
            <div className="absolute inset-0 bg-deep-navy/20 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
