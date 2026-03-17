"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Wrench, Users, Globe, Zap } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "99.9% Uptime SLA",
    description: "Guaranteed availability even in offline-first environments with edge computing failover.",
  },
  {
    icon: Clock,
    title: "90-Day Pilot Program",
    description: "Start with a risk-free pilot deployment to validate ROI before full commitment.",
  },
  {
    icon: Wrench,
    title: "Custom Integration",
    description: "Seamless integration with your existing SCADA, ERP, and maintenance systems.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "On-site technical lead and 24/7 remote support throughout deployment.",
  },
  {
    icon: Globe,
    title: "Mongolia Expertise",
    description: "Deep understanding of Mongolian business regulations, infrastructure, and operational challenges across all major sectors.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "From contract to production in as little as 12 weeks with our proven framework.",
  },
]

export function SalesBenefits() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-balance">
          Why Mongolian Enterprises Choose Us
        </h2>
        <p className="text-muted-foreground text-lg mt-4">
          Across every major industry in Mongolia, we&apos;ve deployed and supported enterprise software in some of the country&apos;s most challenging operational environments.
        </p>
      </div>

      <div className="space-y-4">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="size-10 bg-secondary rounded-lg flex items-center justify-center text-primary shrink-0">
              <benefit.icon className="size-5" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
