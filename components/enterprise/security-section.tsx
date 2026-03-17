"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Server, Database, FileKey } from "lucide-react"
import { SLAPulse } from "./sla-pulse"

const securityFeatures = [
  { icon: Shield, title: "Data Sovereignty", description: "All data stored on Mongolian soil — full jurisdictional control, zero foreign cloud dependency." },
  { icon: Lock, title: "End-to-End Encryption", description: "AES-256 encryption at rest and TLS 1.3 in transit across every edge node and HQ link." },
  { icon: Eye, title: "Audit Trails", description: "Tamper-proof activity logs for every asset, user, and data sync — compliance-ready out of the box." },
  { icon: Server, title: "On-Premise Option", description: "Deploy entirely within your infrastructure. Your servers, your network, your rules." },
  { icon: Database, title: "Automated Backups", description: "Real-time replication with point-in-time recovery across all mine sites." },
  { icon: FileKey, title: "Access Controls", description: "Granular per-site permissions with MFA and SSO — from HQ admins to field operators." },
]

export function SecuritySection() {
  return (
    <section className="px-6 lg:px-20 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground mb-4">
            Your Data Never Leaves Mongolia
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Built for operations where data sovereignty isn&apos;t optional — it&apos;s the law. Every byte stays within Mongolian borders, on infrastructure you control, with encryption that meets international enterprise compliance standards.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="flex items-start gap-3 p-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <feature.icon className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-foreground">{feature.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SLAPulse />
        </motion.div>
      </div>
    </section>
  )
}
