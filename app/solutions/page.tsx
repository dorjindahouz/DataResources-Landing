import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SolutionsOverview } from "@/components/solutions/solutions-overview"
import { IndustriesOverview } from "@/components/solutions/industries-overview"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Solutions | Data Resources LLC",
  description:
    "Enterprise software solutions across mining, construction, energy, logistics, and more in Mongolia.",
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Solutions"
        title="Explore Our Software & Industry Solutions"
        subtitle="We match your operational challenges with the world's best software platforms — then deploy, integrate, and support them locally."
        centered
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />

      <SolutionsOverview />

      <IndustriesOverview />

      <CTABanner
        headline="Ready to transform your operations?"
        description="Join the enterprises that trust Data Resources for their software needs."
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  )
}
