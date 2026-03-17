"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Monitor, Truck, Cpu, Layers, Mountain, HardHat, Radio, BarChart3 } from "lucide-react"
import { Logo } from "@/components/logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const products = [
  {
    icon: Monitor,
    title: "EAM Platform",
    description: "Enterprise Asset Management for mining operations",
    href: "/#solutions",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description: "Real-time fleet tracking and optimization",
    href: "/#solutions",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Offline-first processing for remote sites",
    href: "/solutions",
  },
  {
    icon: Layers,
    title: "The Framework",
    description: "Our proven deployment methodology",
    href: "/#framework",
  },
]

const solutions = [
  {
    icon: Mountain,
    title: "Open-Pit Mining",
    description: "Large-scale surface operation management",
    href: "/solutions#open-pit",
  },
  {
    icon: HardHat,
    title: "Underground Mining",
    description: "Connectivity solutions for subsurface ops",
    href: "/solutions#underground",
  },
  {
    icon: Radio,
    title: "Remote Operations",
    description: "Satellite-linked offline-first deployments",
    href: "/solutions#remote",
  },
  {
    icon: BarChart3,
    title: "Case Studies",
    description: "Real results from Mongolian mining sites",
    href: "/#case-study",
  },
]

function NavDropdownItem({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ElementType
  title: string
  description: string
  href: string
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5 transition-colors"
      >
        <div className="size-10 bg-secondary rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Link>
    </NavigationMenuLink>
  )
}

export function Header() {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 lg:px-20 py-4 sticky top-0 z-50 bg-deep-navy/80 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center gap-3">
        <Logo />
        <h2 className="font-black tracking-tighter text-foreground">
          Data Resources LLC
        </h2>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex flex-1 justify-end gap-2 items-center">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-primary hover:bg-white/5 data-[state=open]:bg-white/5">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!bg-deep-navy/95 backdrop-blur-lg !border-white/10 !rounded-xl !shadow-glow overflow-hidden">
                <div className="grid w-[500px] grid-cols-2 gap-1 p-3">
                  {products.map((item) => (
                    <NavDropdownItem key={item.title} {...item} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-primary hover:bg-white/5 data-[state=open]:bg-white/5">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!bg-deep-navy/95 backdrop-blur-lg !border-white/10 !rounded-xl !shadow-glow overflow-hidden">
                <div className="grid w-[500px] grid-cols-2 gap-1 p-3">
                  {solutions.map((item) => (
                    <NavDropdownItem key={item.title} {...item} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/enterprise"
                  className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors"
                >
                  Enterprise
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/pricing"
                  className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors"
                >
                  Pricing
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href="/contact-sales"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-glow duration-300 ml-4"
        >
          Contact Sales
        </Link>
      </nav>

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button className="text-foreground" aria-label="Open menu">
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-deep-navy border-white/10 w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3">
                <Logo className="size-6" />
                <span className="font-black tracking-tighter text-foreground text-base">
                  Data Resources
                </span>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 px-4 py-6">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="products" className="border-white/10">
                  <AccordionTrigger className="text-foreground font-bold hover:no-underline hover:text-primary">
                    Products
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 pl-2">
                      {products.map((item) => (
                        <SheetClose asChild key={item.title}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg p-2.5 hover:bg-white/5 transition-colors"
                            onClick={() => setSheetOpen(false)}
                          >
                            <item.icon className="size-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{item.title}</span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="solutions" className="border-white/10">
                  <AccordionTrigger className="text-foreground font-bold hover:no-underline hover:text-primary">
                    Solutions
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 pl-2">
                      {solutions.map((item) => (
                        <SheetClose asChild key={item.title}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg p-2.5 hover:bg-white/5 transition-colors"
                            onClick={() => setSheetOpen(false)}
                          >
                            <item.icon className="size-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{item.title}</span>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <SheetClose asChild>
                <Link
                  href="/enterprise"
                  className="text-foreground font-bold py-4 hover:text-primary transition-colors"
                  onClick={() => setSheetOpen(false)}
                >
                  Enterprise
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/pricing"
                  className="text-foreground font-bold py-4 border-b border-white/10 hover:text-primary transition-colors"
                  onClick={() => setSheetOpen(false)}
                >
                  Pricing
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/contact-sales"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-lg text-sm font-bold transition-all text-center mt-4"
                  onClick={() => setSheetOpen(false)}
                >
                  Contact Sales
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
