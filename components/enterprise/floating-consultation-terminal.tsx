"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"

export function FloatingConsultationTerminal() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (sessionStorage.getItem("consultation-dismissed") === "true") return

    setDismissed(false)
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem("consultation-dismissed", "true")
  }

  if (dismissed && !visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 w-[280px]"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="rounded-xl font-mono text-xs shadow-2xl overflow-hidden backdrop-blur-xl bg-[#0f1a2e]/90 border border-primary/30 shadow-[0_0_30px_-10px_rgba(27,198,228,0.25)]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label="Dismiss"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <div>
                <span className="text-green-400">SYSTEM_STATUS:</span>{" "}
                <span className="text-green-300">READY</span>
              </div>
              <div>
                <span className="text-cyan-400">CONSULTATION_QUEUE:</span>{" "}
                <span className="text-cyan-300">OPEN</span>
              </div>
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="/contact-sales"
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                >
                  $ book-consultation
                  <span className={cursorVisible ? "opacity-100" : "opacity-0"}>_</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
