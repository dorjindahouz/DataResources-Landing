"use client"

import { motion } from "framer-motion"

const phases = [
  {
    phase: "Phase 01",
    title: "Discovery & Setup",
    description: "Requirements analysis, environment preparation, and initial configuration.",
  },
  {
    phase: "Phase 02",
    title: "Deploy & Train",
    description:
      "Full platform deployment with hands-on Mongolian-language training for your team.",
  },
  {
    phase: "Phase 03",
    title: "Evaluate & Scale",
    description:
      "Performance review, ROI assessment, and roadmap for organization-wide rollout.",
  },
]

export function Pilot() {
  return (
    <section className="px-6 lg:px-20 py-24" id="pilot">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-bold text-muted-foreground">
            Risk-Free Evaluation
          </span>
        </motion.div>

        <motion.h2
          className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The 90-Day Deployment Program
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          See the impact before you commit. Our structured 90-day program lets
          you evaluate the software in your real environment, with full deployment
          support, before scaling across your organization.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              className="bg-secondary p-6 rounded-xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="text-2xl font-bold text-primary mb-2">
                {p.phase}
              </div>
              <h4 className="font-bold text-foreground">{p.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-lg text-lg font-bold transition-all shadow-xl hover:shadow-glow duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Request Your Pilot Setup
        </motion.a>
      </div>
    </section>
  )
}
