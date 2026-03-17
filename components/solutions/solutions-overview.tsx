"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Monitor, Truck, Cpu, BarChart3 } from "lucide-react"

const solutions = [
  {
    icon: Monitor,
    title: "Enterprise Asset Management",
    description:
      "Track, maintain, and optimize every asset across your organization. Full lifecycle management with preventive maintenance, compliance tracking, and real-time visibility.",
    href: "/software/eam",
  },
  {
    icon: Truck,
    title: "Fleet Management System",
    description:
      "Real-time GPS tracking, dispatch optimization, and fuel management for fleets of any size. Deployed and supported locally across Mongolia.",
    href: "/software/fleet",
  },
  {
    icon: Cpu,
    title: "ERP & Operations",
    description:
      "Integrated enterprise resource planning platforms that connect finance, procurement, inventory, and operations into a single system of record.",
    href: "/software/erp",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Transform operational data into actionable insights. Business intelligence dashboards, predictive analytics, and custom reports for every stakeholder.",
    href: "/software/analytics",
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
            Software We Distribute
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Enterprise-grade platforms from world-leading vendors, deployed and supported locally in Mongolia.
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
