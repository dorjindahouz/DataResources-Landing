"use client"

import { Globe, Users, Wrench, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Globe,
    title: "Global Software Partners",
    description:
      "Access to the world's leading enterprise software platforms, vetted and certified for Mongolian deployment.",
  },
  {
    icon: Users,
    title: "Local Deployment Teams",
    description:
      "On-the-ground engineers who understand Mongolian infrastructure, regulations, and business culture.",
  },
  {
    icon: Wrench,
    title: "End-to-End Implementation",
    description:
      "From needs assessment through deployment, training, and ongoing support — all in one partner.",
  },
  {
    icon: Headphones,
    title: "Mongolian-Language Support",
    description:
      "Dedicated support teams operating from Ulaanbaatar, fluent in both the technology and the language.",
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
      className="p-6 rounded-xl glass-card hover:shadow-glow transition-all duration-300 group hover:border-primary relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
      }}
      style={{ perspective: 1000 }}
    >
      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
        <Icon className="size-16" />
      </div>
      <Icon className="text-primary size-8 mb-4 relative z-10" />
      <h3 className="text-foreground font-bold mb-2 relative z-10">{title}</h3>
      <p className="text-muted-foreground text-sm relative z-10">{description}</p>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
              Why Mongolian Enterprises Choose Us
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We don{"'"}t just sell software — we deploy it, configure it, and
              support it in environments where global vendors can{"'"}t reach. Our
              team provides the local expertise that makes world-class technology
              work across Mongolia.
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
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
