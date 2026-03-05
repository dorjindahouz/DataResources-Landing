"use client"

import { Server, Network, Terminal } from "lucide-react"
import { motion } from "framer-motion"

const capabilities = [
  {
    icon: Server,
    title: "Bare-Metal & VM Deployment",
    description:
      "Robust server setups built for extreme temperature variances and dust protection.",
  },
  {
    icon: Network,
    title: "VLAN & Network Segmentation",
    description:
      "Securing operational technology (OT) from corporate networks via complex VLAN configs.",
  },
  {
    icon: Terminal,
    title: "C4M, R4M, H4M Stack",
    description:
      "Custom integration of mining-specific protocols for real-time asset tracking.",
  },
]

export function Implementation() {
  return (
    <section
      className="px-6 lg:px-20 py-20 bg-grid relative"
      id="implementation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                Field Ready Architecture
              </span>
              <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground mt-2 text-balance">
                Remote Implementation Capabilities
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We specialize in the technical heavy-lifting required for remote
              Mongolian sites. From Ulaanbaatar to the deep Gobi, we ensure
              infrastructure stability.
            </p>
            <ul className="space-y-4">
              {capabilities.map((cap, i) => (
                <motion.li
                  key={cap.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <cap.icon className="text-primary size-6 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-foreground">
                      {cap.title}
                    </strong>
                    <span className="text-muted-foreground text-sm">
                      {cap.description}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl font-mono text-sm shadow-2xl relative overflow-hidden backdrop-blur-xl bg-[#0f1a2e]/80 border border-primary/30 shadow-[0_0_40px_-15px_rgba(27,198,228,0.3)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-primary/80 mb-2">
              {"# Initializing Remote Deployment v4.2"}
            </div>
            <div className="text-slate-300">
              {'$ connect --site "Gobi South" --vlan 40'}
            </div>
            <div className="text-green-400">
              Success: Secure tunnel established via local edge server
            </div>
            <div className="text-slate-300 mt-2">
              {'$ deploy --core "EAM-Ledger" --type "bare-metal"'}
            </div>
            <div className="text-slate-500 mt-2">
              {"[..........] 45% VM Container Sync"}
            </div>
            <div className="text-slate-500">
              {"[...............] 82% Network Calibration"}
            </div>
            <div className="text-green-400 mt-4">
              Node Active: Ready for 90-day pilot sync.
            </div>
            {/* Abstract glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
