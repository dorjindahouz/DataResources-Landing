"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mountain, HardHat, Zap, Truck } from "lucide-react"

const industries = [
  {
    icon: Mountain,
    title: "Mining & Resources",
    description:
      "Open-pit, underground, and remote operations — asset management, fleet tracking, and predictive maintenance for Mongolia's mining sector.",
    href: "/industries/mining",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    description:
      "Fleet management, project tracking, and equipment utilization platforms built for heavy civil projects across Mongolia.",
    href: "/industries/construction",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Asset lifecycle management, maintenance scheduling, and compliance platforms for power generation and distribution networks.",
    href: "/industries/energy",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Route optimization, fleet tracking, and supply chain visibility platforms for Mongolia's vast operational distances.",
    href: "/industries/logistics",
  },
]

export function IndustriesOverview() {
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
          <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Deep expertise across Mongolia&apos;s most demanding industries, with software tailored to each sector.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              className="glass-card rounded-2xl p-8 hover:shadow-glow transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="size-14 bg-secondary rounded-xl flex items-center justify-center text-primary mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <industry.icon className="size-7" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
              <Link href={industry.href} className="text-primary text-sm font-bold hover:underline">
                Learn more &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
