"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

function AnimatedMetric({ label, end, format }: { label: string; end: number; format: (n: number) => string }) {
  const [value, setValue] = useState(end)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setValue((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 800)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="flex justify-between">
      <span className="text-primary/70">{label}:</span>
      <span className="text-slate-200">{format(value)}</span>
    </div>
  )
}

export function SystemHeartbeat() {
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="p-6 lg:p-8 rounded-2xl font-mono text-sm shadow-2xl relative overflow-hidden backdrop-blur-xl bg-[#0f1a2e]/80 border border-primary/30 shadow-[0_0_40px_-15px_rgba(27,198,228,0.3)]"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="text-primary/60 mb-4 text-xs">{"# DataResources — Live System Monitor"}</div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-primary/70">ACTIVE_NODES:</span>
          <span className="text-slate-200">47</span>
        </div>
        <AnimatedMetric
          label="PACKETS_SYNCED"
          end={1284096}
          format={(n) => n.toLocaleString()}
        />
        <div className="flex justify-between">
          <span className="text-primary/70">GLOBAL_UPTIME:</span>
          <span className="text-slate-200">99.97%</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <span className="text-green-400">
          {">"} SYSTEM_STATUS: NOMINAL
          <span className={cursorVisible ? "opacity-100" : "opacity-0"}>█</span>
        </span>
      </div>

      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[80px] pointer-events-none" />
    </motion.div>
  )
}
