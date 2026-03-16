"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "Pilot",
    description: "90-day proof of concept for a single site",
    price: "Custom",
    priceNote: "Based on fleet size",
    badge: null,
    features: [
      "Single-site deployment",
      "Up to 25 assets tracked",
      "Core EAM modules",
      "Edge computing node (1x)",
      "Email support",
      "Data migration assistance",
      "Basic reporting dashboard",
    ],
    cta: { label: "Start Pilot", href: "/contact-sales" },
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Full deployment for growing operations",
    price: "Custom",
    priceNote: "Volume-based pricing",
    badge: "Most Popular",
    features: [
      "Multi-site deployment",
      "Unlimited assets",
      "Full EAM + FMS suite",
      "Edge computing nodes (3x)",
      "24/7 phone & email support",
      "Custom integrations (ERP/SCADA)",
      "Advanced analytics & OEE",
      "On-site technical lead",
      "Quarterly business reviews",
    ],
    cta: { label: "Contact Sales", href: "/contact-sales" },
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Bespoke solution for large-scale mining",
    price: "Custom",
    priceNote: "Tailored to your operation",
    badge: null,
    features: [
      "Unlimited sites & assets",
      "Full platform + white-label",
      "Dedicated edge clusters",
      "Dedicated SLA (99.9%)",
      "SSO / RBAC / audit trails",
      "Custom development hours",
      "White-glove onboarding",
      "Compliance & data sovereignty",
      "Executive sponsor program",
      "Annual on-site training",
    ],
    cta: { label: "Talk to Enterprise", href: "/contact-sales" },
    highlighted: false,
  },
]

export function PricingTiers() {
  return (
    <section className="px-6 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`glass-card rounded-2xl p-8 flex flex-col relative ${
                tier.highlighted ? "ring-2 ring-primary shadow-glow" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {tier.badge}
                </Badge>
              )}
              <div className="mb-6">
                <h3 className="font-black tracking-tighter text-2xl text-foreground">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">{tier.description}</p>
              </div>
              <div className="mb-8">
                <p className="text-4xl font-black tracking-tighter text-foreground">{tier.price}</p>
                <p className="text-muted-foreground text-sm mt-1">{tier.priceNote}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.cta.href}
                className={`w-full py-3 rounded-lg font-bold text-center transition-all duration-300 block ${
                  tier.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-glow"
                    : "border border-white/20 hover:border-primary/50 text-foreground hover:bg-white/5"
                }`}
              >
                {tier.cta.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
