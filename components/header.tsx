"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Framework", href: "#framework" },
  { label: "Implementation", href: "#implementation" },
  { label: "Pilot", href: "#pilot" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 lg:px-20 py-4 sticky top-0 z-50 bg-deep-navy/80 backdrop-blur-md border-b border-white/10">
      <a href="#" className="flex items-center gap-3">
        <Logo />
        <h2 className="font-black tracking-tighter text-foreground">
          Data Resources LLC
        </h2>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-glow duration-300"
        >
          Technical Services
        </a>
      </nav>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-deep-navy/95 backdrop-blur-lg border-b border-white/10 md:hidden z-40">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors py-2"
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-lg text-sm font-bold transition-all text-center mt-2"
            >
              Technical Services
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
