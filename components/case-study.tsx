"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { ImageIcon } from "lucide-react"

interface Metric {
  label: string
  before: string
  after: string
  delta: string
}

interface CaseStudyData {
  id: string
  company: string
  tagline: string
  location: string
  fleet: string
  metrics: Metric[]
  highlight: string
  accentColor: string
}

const caseStudies: CaseStudyData[] = [
  {
    id: "erdene-mongol",
    company: "Erdene Mongol",
    tagline: "Gold & Copper Exploration → Fleet Intelligence",
    location: "Darkhan Region, Mongolia",
    fleet: "24 haul trucks · 8 drill rigs",
    metrics: [
      {
        label: "Unplanned Downtime",
        before: "12.1 days / mo",
        after: "3.2 days / mo",
        delta: "−73%",
      },
      {
        label: "Overall Equipment Effectiveness",
        before: "51%",
        after: "72%",
        delta: "+41%",
      },
      {
        label: "Time to Positive ROI",
        before: "—",
        after: "58 days",
        delta: "",
      },
    ],
    highlight: "73% reduction in unplanned downtime",
    accentColor: "#1bc6e4",
  },
  {
    id: "oyu-tolgoi",
    company: "Oyu Tolgoi",
    tagline: "Multi-Pit Open-Cast → Real-Time Dispatch",
    location: "South Gobi, Mongolia",
    fleet: "180+ vehicles · 3 active pits",
    metrics: [
      {
        label: "Shovel-Truck Idle Time",
        before: "18%",
        after: "6%",
        delta: "−67%",
      },
      {
        label: "Material Moved Per Shift",
        before: "Baseline",
        after: "+28%",
        delta: "+28%",
      },
      {
        label: "Near-Miss Safety Incidents",
        before: "High frequency",
        after: "Reduced",
        delta: "−34%",
      },
    ],
    highlight: "+28% material moved per shift",
    accentColor: "#f59e0b",
  },
  {
    id: "gobi-minerals",
    company: "Gobi Minerals",
    tagline: "Remote Coal Site → Satellite-Synced Edge",
    location: "Ömnögovi Province, Mongolia",
    fleet: "62 vehicles · 340 km from nearest city",
    metrics: [
      {
        label: "Fuel Consumption",
        before: "Baseline",
        after: "−22%",
        delta: "−22%",
      },
      {
        label: "Manual Report Entries / Day",
        before: "4+ hours",
        after: "0 min",
        delta: "−100%",
      },
      {
        label: "Data Latency to HQ",
        before: "Monthly batch",
        after: "< 90 sec",
        delta: "Real-time",
      },
    ],
    highlight: "22% fuel savings · zero manual entry",
    accentColor: "#10b981",
  },
]

const VIEWPORT_MARGIN = "-35% 0px -35% 0px"

function CaseStudyCard({
  study,
  index,
  setActive,
}: {
  study: CaseStudyData
  index: number
  setActive: (i: number) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: VIEWPORT_MARGIN })

  useEffect(() => {
    if (isInView) setActive(index)
  }, [isInView, index, setActive])

  return (
    <div ref={ref} className="min-h-[85vh] flex items-center py-12">
      <motion.div
        className="w-full rounded-2xl p-8 lg:p-10 bg-card/60 backdrop-blur-sm border border-border/50"
        style={{ borderLeft: `3px solid ${study.accentColor}` }}
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: VIEWPORT_MARGIN }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── Image placeholder ────────────────────────────────────────────
            Replace this div with a Next.js <Image /> component when ready.
            Suggested props: fill, sizes="(max-width: 768px) 100vw, 50vw", className="object-cover"
        ──────────────────────────────────────────────────────────────── */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 mb-8 flex items-center justify-center">
          <ImageIcon className="w-10 h-10 text-slate-600" />
        </div>

        {/* Card header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <span
              className="text-xs font-mono font-semibold tracking-widest uppercase mb-1.5 block"
              style={{ color: study.accentColor }}
            >
              {study.location}
            </span>
            <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-foreground">
              {study.company}
            </h3>
            <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
              {study.tagline}
            </p>
          </div>
          <span className="shrink-0 text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-md self-start">
            {study.fleet}
          </span>
        </div>

        {/* Metrics table */}
        <div className="divide-y divide-border/40">
          <div className="grid grid-cols-3 gap-4 pb-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">
              Metric
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">
              Before
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">
              After / Delta
            </span>
          </div>

          {study.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="grid grid-cols-3 gap-4 py-4"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: VIEWPORT_MARGIN }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: "easeOut" }}
            >
              <span className="text-sm text-muted-foreground leading-snug">
                {m.label}
              </span>
              <span className="text-sm font-mono text-muted-foreground/50 line-through decoration-muted-foreground/30">
                {m.before}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-mono font-bold text-foreground">
                  {m.after}
                </span>
                {m.delta && (
                  <span
                    className="text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded"
                    style={{
                      color: study.accentColor,
                      backgroundColor: `${study.accentColor}1a`,
                    }}
                  >
                    {m.delta}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key result */}
        <motion.div
          className="mt-8 pt-6 border-t border-border/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: VIEWPORT_MARGIN }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <p className="text-sm font-semibold" style={{ color: study.accentColor }}>
            Key result: {study.highlight}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export function CaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0)
  const setActive = useCallback((i: number) => setActiveIndex(i), [])

  const active = caseStudies[activeIndex]

  return (
    /*
      IMPORTANT: `overflow: clip` is used here instead of `overflow: hidden`.
      They look identical visually, but `overflow: clip` does NOT create a scroll
      container — which means `position: sticky` on the left column works correctly.
      Never change this back to `overflow-hidden`.
    */
    <section id="case-study" className="relative [overflow:clip]">
      {/* Ambient background glow — transitions color with active study */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: active.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative">
        {/*
          `items-start` is required here. Without it, CSS Grid stretches both
          columns to equal height, which collapses the sticky scroll window on
          the left column down to zero effective range.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-start">

          {/* ── LEFT: sticky panel (desktop only) ─────────────────────── */}
          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:self-start py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground/60 mb-4 block">
                Field Results
              </span>

              <h2 className="font-black tracking-tighter text-4xl xl:text-5xl text-foreground leading-[1.05] text-balance mb-5">
                Case Studies /<br />Transformation
              </h2>

              <p className="text-muted-foreground text-base max-w-xs leading-relaxed mb-10">
                Three Mongolian mining operations. Three deployments.
                Measurable outcomes in under 90 days — tracked from edge to board.
              </p>

              {/* Active study callout — cross-fades as scroll position changes */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mb-10"
                >
                  <span
                    className="text-[10px] font-mono font-semibold tracking-widest uppercase mb-1 block"
                    style={{ color: active.accentColor }}
                  >
                    Now viewing · {active.company}
                  </span>
                  <span
                    className="text-xl font-black tracking-tight"
                    style={{ color: active.accentColor }}
                  >
                    {active.highlight}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Progress indicators */}
              <div className="flex items-center gap-4">
                {caseStudies.map((s, i) => (
                  <div key={s.id} className="flex items-center gap-2">
                    <motion.div
                      className="h-0.5 rounded-full"
                      animate={{
                        width: i === activeIndex ? 28 : 16,
                        backgroundColor:
                          i === activeIndex ? active.accentColor : "#334155",
                      }}
                      transition={{ duration: 0.35 }}
                    />
                    <motion.span
                      className="text-xs font-mono"
                      animate={{
                        color: i === activeIndex ? active.accentColor : "#475569",
                        fontWeight: i === activeIndex ? 700 : 400,
                      }}
                      transition={{ duration: 0.35 }}
                    >
                      0{i + 1}
                    </motion.span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: scrolling cards ─────────────────────────────────── */}
          <div className="py-16 lg:py-24">
            {/* Mobile-only heading */}
            <div className="lg:hidden mb-12">
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground/60 mb-3 block">
                Field Results
              </span>
              <h2 className="font-black tracking-tighter text-3xl text-foreground mb-3">
                Case Studies / Transformation
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Three operations. Measurable outcomes in under 90 days.
              </p>
            </div>

            {caseStudies.map((study, i) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={i}
                setActive={setActive}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
