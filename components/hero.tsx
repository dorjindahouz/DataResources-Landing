"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="px-6 lg:px-20 py-12 lg:py-24 bg-grid relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded">
              Mongolia&apos;s Software Distribution Partner
            </span>
            <h1 className="font-black tracking-tighter text-4xl lg:text-5xl xl:text-6xl text-balance text-foreground">
              World-Class Software Solutions for Every Mongolian Enterprise
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl">
              We connect Mongolia&apos;s leading enterprises with the world&apos;s best
              software platforms. From deployment to support, we bridge the gap
              between global technology and local operations across mining,
              construction, energy, and beyond.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/solutions"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-glow duration-300"
            >
              Explore Our Solutions
            </a>
            <a
              href="/contact-sales"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-lg text-base font-bold transition-all border border-border"
            >
              Talk to Our Team
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="aspect-video bg-secondary rounded-xl overflow-hidden shadow-2xl relative border-4 border-border">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-primary/10 z-10" />
            <img
              alt="Industrial control room dashboard showing mining operation monitoring systems"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbEVAbGjdJ8fTuSt6E2It4OyjrpDIOStnBne8HaKRKm4YhPCa2CL7RoRmiXAHuG8ne2xA58odscpFwI0qr19wIe4MBorNznriPLTSllOE580sf9j4sCNbItmnYwc_wEqDHRiNCUHzcOcIjj_n5jA6uQyKPoSzvQdSNj_twwBQ-DSKuooh7J1FOJHMksXr4IuxXtWRDvR-leXQapp71t8SIihPv27gkeNdvQkgyGDm3nrG6nOJnFE7wUcL9QyNku6sRlS6aW6wCaRg"
            />
            
            {/* Overlay UI Elements */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              <span className="text-[10px] font-mono font-bold text-white tracking-wider uppercase">System Live: Enterprise Deployment Monitor</span>
            </div>

            <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/20 hidden sm:block">
              <div className="flex gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] text-white/50 uppercase font-bold">Uptime</div>
                  <div className="text-xs font-mono text-primary">99.98%</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="space-y-1">
                  <div className="text-[10px] text-white/50 uppercase font-bold">Latency</div>
                  <div className="text-xs font-mono text-primary">14ms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Data Points */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-2 bg-primary/40 rounded-full blur-[2px] hidden lg:block"
              animate={{
                y: [0, -40, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${20 + i * 30}%`,
                left: `${-5 + i * 5}%`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
