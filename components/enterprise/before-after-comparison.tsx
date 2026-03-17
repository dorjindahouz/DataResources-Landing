"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels"

const beforeItems = [
  "Paper clipboards lost between shifts",
  "Fuel data reconciled manually each week",
  "No visibility until site manager calls UB",
  "Maintenance scheduled by gut feeling",
  "Satellite outage = total data blackout",
]

const afterItems = [
  "Digital checklists synced in real-time",
  "Fuel burn tracked per-asset, per-hour",
  "Live dashboard accessible from anywhere",
  "Predictive alerts before breakdowns happen",
  "48-hour offline buffer — zero data loss",
]

export function BeforeAfterComparison() {
  return (
    <section className="px-6 lg:px-20 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-balance">
            From Paper Clipboards to Real-Time Intelligence
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Drag the slider to compare your current operations with what&apos;s possible.
          </p>
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PanelGroup direction="horizontal" className="min-h-[360px]">
            <Panel defaultSize={50} minSize={25}>
              <div className="h-full p-6 lg:p-8 bg-red-500/5 border-r border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <div className="size-3 rounded-full bg-red-500" />
                  <span className="text-sm font-bold uppercase tracking-wider text-red-400">
                    Before
                  </span>
                </div>
                <ul className="space-y-4">
                  {beforeItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="size-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>

            <PanelResizeHandle className="w-2 bg-primary/20 hover:bg-primary/40 transition-colors relative group data-[resize-handle-active]:bg-primary/60">
              <motion.div
                className="absolute inset-0 bg-primary/30"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: 2, ease: "easeInOut" }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-10 rounded-full bg-primary/30 group-hover:bg-primary/50 transition-colors flex items-center justify-center">
                <div className="w-0.5 h-4 bg-primary/70 rounded-full" />
              </div>
            </PanelResizeHandle>

            <Panel defaultSize={50} minSize={25}>
              <div className="h-full p-6 lg:p-8 bg-green-500/5">
                <div className="flex items-center gap-2 mb-6">
                  <div className="size-3 rounded-full bg-green-500" />
                  <span className="text-sm font-bold uppercase tracking-wider text-green-400">
                    After
                  </span>
                </div>
                <ul className="space-y-4">
                  {afterItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="size-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          </PanelGroup>
        </motion.div>
      </div>
    </section>
  )
}
