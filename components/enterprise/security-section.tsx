"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Server, Database, FileKey } from "lucide-react"

const securityFeatures = [
  { icon: Shield, title: "Data Sovereignty", description: "All data stored within Mongolia with full jurisdictional control." },
  { icon: Lock, title: "End-to-End Encryption", description: "AES-256 encryption at rest and TLS 1.3 in transit for all data." },
  { icon: Eye, title: "Audit Trails", description: "Complete activity logging with tamper-proof records for compliance." },
  { icon: Server, title: "On-Premise Option", description: "Deploy entirely within your infrastructure — no cloud dependency." },
  { icon: Database, title: "Automated Backups", description: "Real-time replication with point-in-time recovery across sites." },
  { icon: FileKey, title: "Access Controls", description: "Granular permissions with multi-factor authentication and SSO." },
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
            Enterprise-Grade Security
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Built for industries where data integrity and security are non-negotiable. Our platform meets the strictest compliance requirements.
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
          <div className="glass-card rounded-2xl p-12 text-center bg-grid">
            <div className="size-24 bg-secondary/50 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <Shield className="size-12" />
            </div>
            <p className="text-2xl font-black tracking-tighter text-foreground mb-2">
              SOC 2 Type II
            </p>
            <p className="text-muted-foreground text-sm">
              Compliant infrastructure with annual third-party audits
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
