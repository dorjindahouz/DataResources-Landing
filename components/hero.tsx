"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="px-6 lg:px-20 py-12 lg:py-24 bg-grid relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-deep-navy/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded">
              High-Availability Solutions
            </span>
            <h1 className="font-black tracking-tighter text-4xl lg:text-5xl xl:text-6xl text-balance text-foreground">
              Industrial-Grade Mining Software Solutions for Mongolia
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl">
              Architecting and deploying offline-first, high-availability
              Enterprise Asset Management (EAM) and Fleet Management Systems
              (FMS) for the world{"'"}s most demanding environments.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#pilot"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-glow duration-300"
            >
              Start Your 90-Day Pilot
            </a>
            <a
              href="#framework"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-lg text-base font-bold transition-all border border-border"
            >
              Explore Our Architecture
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="aspect-video bg-secondary rounded-xl overflow-hidden shadow-2xl relative border-4 border-border">
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy/40 to-primary/20 z-10" />
            <img
              alt="Industrial control room dashboard showing mining operation monitoring systems"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbEVAbGjdJ8fTuSt6E2It4OyjrpDIOStnBne8HaKRKm4YhPCa2CL7RoRmiXAHuG8ne2xA58odscpFwI0qr19wIe4MBorNznriPLTSllOE580sf9j4sCNbItmnYwc_wEqDHRiNCUHzcOcIjj_n5jA6uQyKPoSzvQdSNj_twwBQ-DSKuooh7J1FOJHMksXr4IuxXtWRDvR-leXQapp71t8SIihPv27gkeNdvQkgyGDm3nrG6nOJnFE7wUcL9QyNku6sRlS6aW6wCaRg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
