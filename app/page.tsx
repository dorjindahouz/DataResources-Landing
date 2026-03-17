import { Hero } from "@/components/hero"
import { LogoCarousel } from "@/components/logo-carousel"
import { Solutions } from "@/components/solutions"
import { Framework } from "@/components/framework"
import { Implementation } from "@/components/implementation"
import { CaseStudy } from "@/components/case-study"
import { Pilot } from "@/components/pilot"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Solutions />
      <Framework />
      <Implementation />
      <CaseStudy />
      <Pilot />
      <Contact />
    </>
  )
}
