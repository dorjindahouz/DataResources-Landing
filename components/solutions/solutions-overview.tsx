"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Monitor, Truck, Cpu, BarChart3 } from "lucide-react"

const solutions = [
  {
    icon: Monitor,
    title: "Enterprise Asset Management",
    description:
      "Track, maintain, and optimize every piece of equipment across your mining operation. Offline-first architecture ensures zero downtime in connectivity-challenged environments.",
    href: "/solutions#eam",
  },
  {
    icon: Truck,
    title: "Fleet Management System",
    description:
      "Real-time GPS tracking, dispatch optimization, and fuel management for your entire fleet. Works seamlessly with edge computing for remote sites.",
    href: "/solutions#fms",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description:
      "Deploy processing power at the mine face. Our edge nodes ensure data capture and critical operations continue even when satellite links drop.",
    href: "/solutions#edge",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Transform operational data into actionable insights. OEE dashboards, predictive maintenance alerts, and custom reports for every stakeholder.",
    href: "/solutions#analytics",
  },
]

export function SolutionsOverview() {
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
            Our Platform
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Purpose-built software modules designed for Mongolia&apos;s unique mining challenges.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              className="glass-card rounded-2xl p-8 hover:shadow-glow transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="size-14 bg-secondary rounded-xl flex items-center justify-center text-primary mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <solution.icon className="size-7" />
              </div>
              <h3 className="font-bold text-foreground text-xl mb-3">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{solution.description}</p>
              <Link href={solution.href} className="text-primary text-sm font-bold hover:underline">
                Learn more &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
