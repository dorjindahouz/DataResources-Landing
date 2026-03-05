import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3 grayscale opacity-60">
          <Logo className="size-6" />
          <span className="text-sm font-bold tracking-tight text-foreground">
            Data Resources LLC
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          {"© 2024 Data Resources LLC. All rights reserved. Industrial Engineering & Distribution."}
        </p>
        <div className="flex gap-6">
          <a
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
            href="#"
          >
            Technical Specifications
          </a>
        </div>
      </div>
    </footer>
  )
}
