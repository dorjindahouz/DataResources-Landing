import Link from "next/link"
import { Logo } from "@/components/logo"

const footerLinks = {
  Software: [
    { label: "EAM Platforms", href: "/software/eam" },
    { label: "Fleet Management", href: "/software/fleet" },
    { label: "Business Intelligence", href: "/software/analytics" },
    { label: "ERP Solutions", href: "/software/erp" },
  ],
  Industries: [
    { label: "Mining", href: "/industries/mining" },
    { label: "Construction", href: "/industries/construction" },
    { label: "Energy", href: "/industries/energy" },
    { label: "Logistics", href: "/industries/logistics" },
  ],
  Resources: [
    { label: "Case Studies", href: "/#case-study" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact Sales", href: "/contact-sales" },
    { label: "Pricing", href: "/pricing" },
    { label: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/50 relative z-10 bg-white/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        {/* Top section: Logo + Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Logo className="size-8" />
              <span className="font-black tracking-tighter text-foreground">
                Data Resources
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Mongolia&apos;s trusted partner for world-class enterprise software distribution, deployment, and support.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-foreground text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 Data Resources LLC. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Enterprise Software Distribution &mdash; Ulaanbaatar, Mongolia
          </p>
        </div>
      </div>
    </footer>
  )
}
