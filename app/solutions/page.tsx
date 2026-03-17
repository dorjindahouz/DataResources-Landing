import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SolutionsOverview } from "@/components/solutions/solutions-overview"
import { SolutionDetail } from "@/components/solutions/solution-detail"
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
        title="Software Solutions for Every Mongolian Industry"
        subtitle="We match your operational challenges with the world's best software platforms — then deploy, integrate, and support them locally."
        centered
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />

      <SolutionsOverview />

      <SolutionDetail
        id="mining"
        iconName="Mountain"
        title="Mining & Resources"
        description="From open-pit to underground operations, we deploy enterprise asset management, fleet tracking, and predictive maintenance platforms trusted by Mongolia's leading mining companies."
        features={[
          "Real-time GPS tracking for fleets of any size",
          "Predictive maintenance reducing unplanned downtime",
          "Haul road optimization and dispatch systems",
          "Environmental monitoring and compliance reporting",
          "Offline-capable deployments for remote mine sites",
        ]}
      />

      <SolutionDetail
        id="construction"
        iconName="HardHat"
        title="Construction & Infrastructure"
        description="Heavy civil projects demand precise coordination across multiple sites. We deploy fleet management, project tracking, and equipment utilization platforms built for Mongolia's construction sector."
        features={[
          "Multi-site fleet and equipment tracking",
          "Project delivery timeline management",
          "Equipment utilization and idle-time reduction",
          "Fuel management and cost allocation per project",
          "Safety compliance and incident tracking",
        ]}
        reversed
      />

      <SolutionDetail
        id="energy"
        iconName="Zap"
        title="Energy & Utilities"
        description="Power generation and distribution networks require complete asset lifecycle visibility. We deploy platforms that give energy companies full control over maintenance, compliance, and operations."
        features={[
          "Asset lifecycle management for distributed networks",
          "Preventive maintenance scheduling and tracking",
          "Outage response and resolution management",
          "Regulatory compliance and audit-ready reporting",
          "SCADA and control system integration",
        ]}
      />

      <SolutionDetail
        id="logistics"
        iconName="Truck"
        title="Logistics & Supply Chain"
        description="Mongolia's vast distances demand intelligent logistics. We deploy route optimization, fleet tracking, and supply chain visibility platforms that keep goods moving efficiently."
        features={[
          "Route optimization across Mongolia's road network",
          "Real-time fleet tracking and driver management",
          "Warehouse and inventory management integration",
          "Fuel consumption monitoring and optimization",
          "Cross-border logistics and customs documentation",
        ]}
        reversed
      />

      <CTABanner
        headline="Ready to transform your operations?"
        description="Join the enterprises that trust Data Resources for their software needs."
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  )
}
