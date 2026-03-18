"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface CTABannerProps {
  headline: string
  description?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export function CTABanner({ headline, description, primaryCTA, secondaryCTA }: CTABannerProps) {
  return (
    <section className="px-6 lg:px-20 py-24">
      <motion.div
        className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 lg:p-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan/5 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-balance">
            {headline}
          </h2>
          {description && (
            <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <Link
              href={primaryCTA.href}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-glow duration-300"
            >
              {primaryCTA.label}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="border border-black/10 hover:border-primary/50 text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-black/5 duration-300"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
