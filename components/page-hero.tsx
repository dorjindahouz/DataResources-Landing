"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface PageHeroProps {
  badge?: string
  title: string
  subtitle: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  centered?: boolean
  children?: React.ReactNode
}

export function PageHero({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  centered = false,
  children,
}: PageHeroProps) {
  return (
    <section className="relative px-6 lg:px-20 py-24 lg:py-32 overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className={`max-w-7xl mx-auto relative z-10 ${centered ? "text-center" : "grid lg:grid-cols-2 gap-16 items-center"}`}>
        <motion.div
          className={centered ? "max-w-3xl mx-auto" : ""}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <Badge variant="secondary" className="mb-6 text-primary border-primary/20">
              {badge}
            </Badge>
          )}
          <h1 className="font-black tracking-tighter text-4xl md:text-5xl lg:text-7xl text-foreground text-balance leading-[1.1]">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mt-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className={`flex gap-4 mt-8 ${centered ? "justify-center" : ""} flex-wrap`}>
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-glow duration-300"
                >
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="border border-black/10 hover:border-primary/50 text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-black/5 duration-300"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>

        {!centered && children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
