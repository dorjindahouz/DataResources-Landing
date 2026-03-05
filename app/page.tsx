import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Framework } from "@/components/framework"
import { Implementation } from "@/components/implementation"
import { CaseStudy } from "@/components/case-study"
import { Pilot } from "@/components/pilot"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col [overflow-x:clip]">
      {/* Fixed gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-primary/5 via-transparent to-deep-navy pointer-events-none z-0" />

      <Header />

      <main className="flex flex-col relative z-10">
        <Hero />
        <Solutions />
        <Framework />
        <Implementation />
        <CaseStudy />
        <Pilot />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
