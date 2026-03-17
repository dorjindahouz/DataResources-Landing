"use client"

import { motion } from "framer-motion"
import { Truck, Server, BarChart3 } from "lucide-react"

const nodes = [
  { icon: Truck, label: "Field Operations", status: "Edge-capable" },
  { icon: Server, label: "Regional Server", status: "Always-on buffer" },
  { icon: BarChart3, label: "HQ Dashboard", status: "Real-time" },
]

function FlowPath({ index }: { index: number }) {
  return (
    <div className="hidden md:flex items-center justify-center flex-1 relative">
      <svg className="w-full h-8" viewBox="0 0 200 30" preserveAspectRatio="none">
        <motion.path
          d="M 0 15 L 200 15"
          stroke="rgba(27,198,228,0.3)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.4 }}
        />
        <motion.circle
          cx="0"
          cy="15"
          r="4"
          fill="rgba(27,198,228,0.8)"
          animate={{ cx: [0, 200] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        >
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
        </motion.circle>
      </svg>
    </div>
  )
}

function VerticalFlowPath({ index }: { index: number }) {
  return (
    <div className="flex md:hidden items-center justify-center h-12 relative">
      <svg className="w-8 h-full" viewBox="0 0 30 50" preserveAspectRatio="none">
        <motion.path
          d="M 15 0 L 15 50"
          stroke="rgba(27,198,228,0.3)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.4 }}
        />
        <motion.circle
          cx="15"
          cy="0"
          r="4"
          fill="rgba(27,198,228,0.8)"
          animate={{ cy: [0, 50] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        />
      </svg>
    </div>
  )
}

export function ArchitectureFlowMap() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-grid relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase">
            Deployment Architecture
          </span>
          <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground mt-2 text-balance">
            Seamless Data Flow From Field to Headquarters
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Edge-to-HQ data flow that never loses a byte — even when connectivity drops for days.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-center justify-center gap-0">
          {nodes.map((node, i) => (
            <div key={node.label} className="contents">
              <motion.div
                className="glass-card rounded-2xl p-6 text-center min-w-[180px] relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="size-14 bg-secondary/50 rounded-xl flex items-center justify-center text-primary mx-auto mb-3 group-hover:shadow-glow transition-shadow">
                  <node.icon className="size-7" />
                </div>
                <p className="text-sm font-bold text-foreground">{node.label}</p>
                <p className="text-xs text-primary mt-1 font-mono">{node.status}</p>
              </motion.div>
              {i < nodes.length - 1 && <FlowPath index={i} />}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col items-center gap-0">
          {nodes.map((node, i) => (
            <div key={node.label} className="contents">
              <motion.div
                className="glass-card rounded-2xl p-6 text-center w-full max-w-[260px] relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="size-14 bg-secondary/50 rounded-xl flex items-center justify-center text-primary mx-auto mb-3">
                  <node.icon className="size-7" />
                </div>
                <p className="text-sm font-bold text-foreground">{node.label}</p>
                <p className="text-xs text-primary mt-1 font-mono">{node.status}</p>
              </motion.div>
              {i < nodes.length - 1 && <VerticalFlowPath index={i} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
