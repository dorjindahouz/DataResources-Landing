"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const features = [
  { name: "Asset Tracking", pilot: true, professional: true, enterprise: true },
  { name: "Work Order Management", pilot: true, professional: true, enterprise: true },
  { name: "Fleet Management (FMS)", pilot: false, professional: true, enterprise: true },
  { name: "Edge Computing Nodes", pilot: "1", professional: "3", enterprise: "Unlimited" },
  { name: "Custom Integrations", pilot: false, professional: true, enterprise: true },
  { name: "Advanced Analytics & OEE", pilot: false, professional: true, enterprise: true },
  { name: "Multi-Site Support", pilot: false, professional: true, enterprise: true },
  { name: "SSO / RBAC", pilot: false, professional: false, enterprise: true },
  { name: "Audit Trails & Compliance", pilot: false, professional: false, enterprise: true },
  { name: "Custom Development", pilot: false, professional: false, enterprise: true },
  { name: "Data Sovereignty Controls", pilot: false, professional: false, enterprise: true },
  { name: "White-Label Option", pilot: false, professional: false, enterprise: true },
  { name: "On-Site Technical Lead", pilot: false, professional: true, enterprise: true },
  { name: "SLA Guarantee", pilot: "Best effort", professional: "99.5%", enterprise: "99.9%" },
  { name: "Support", pilot: "Email", professional: "24/7", enterprise: "Dedicated" },
]

function CellContent({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-muted-foreground text-sm">{value}</span>
  }
  return value ? (
    <Check className="size-4 text-primary mx-auto" />
  ) : (
    <X className="size-4 text-muted-foreground/40 mx-auto" />
  )
}

export function FeatureComparison() {
  return (
    <section className="px-6 lg:px-20 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Compare Plans
        </motion.h2>
        <motion.div
          className="glass-card rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200/50 hover:bg-transparent">
                <TableHead className="w-[40%] text-foreground font-bold">Feature</TableHead>
                <TableHead className="text-center text-foreground font-bold">Pilot</TableHead>
                <TableHead className="text-center text-foreground font-bold">Professional</TableHead>
                <TableHead className="text-center text-foreground font-bold">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.name} className="border-gray-200/50">
                  <TableCell className="text-muted-foreground">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    <CellContent value={feature.pilot} />
                  </TableCell>
                  <TableCell className="text-center">
                    <CellContent value={feature.professional} />
                  </TableCell>
                  <TableCell className="text-center">
                    <CellContent value={feature.enterprise} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}
