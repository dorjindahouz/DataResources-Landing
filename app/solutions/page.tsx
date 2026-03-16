import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SolutionsOverview } from "@/components/solutions/solutions-overview"
import { SolutionDetail } from "@/components/solutions/solution-detail"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Solutions | Data Resources LLC",
  description:
    "Purpose-built mining software solutions for open-pit, underground, and remote operations across Mongolia.",
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Solutions"
        title="Solutions Built for Mongolia's Toughest Mining Environments"
        subtitle="From the Gobi Desert to the Khentii Mountains, our platform adapts to every terrain, connectivity challenge, and operational scale."
        centered
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />

      <SolutionsOverview />

      <SolutionDetail
        id="open-pit"
        iconName="Mountain"
        title="Open-Pit Mining"
        description="Large-scale surface operations demand real-time visibility across massive areas. Our platform provides fleet-wide tracking, blast planning integration, and haul road optimization."
        features={[
          "Real-time GPS tracking for 500+ vehicle fleets",
          "Haul road optimization reducing fuel costs by up to 18%",
          "Blast planning and material tracking integration",
          "Shovel-truck assignment and dispatch optimization",
          "Dust suppression and environmental monitoring",
        ]}
      />

      <SolutionDetail
        id="underground"
        iconName="HardHat"
        title="Underground Mining"
        description="Connectivity is the biggest challenge underground. Our edge computing nodes maintain full operational capability even in the deepest shafts, with mesh networking for real-time data."
        features={[
          "Mesh network edge nodes for underground connectivity",
          "Personnel tracking and safety zone management",
          "Ventilation and environmental monitoring integration",
          "Equipment maintenance scheduling for confined spaces",
          "Automatic data sync when surface connectivity is restored",
        ]}
        reversed
      />

      <SolutionDetail
        id="remote"
        iconName="Radio"
        title="Remote Site Operations"
        description="Mongolia's most productive mines are often in its most remote locations. Our satellite-linked, offline-first architecture ensures your operations never miss a beat."
        features={[
          "Satellite connectivity with automatic failover",
          "Full offline operation with smart sync queuing",
          "Solar-powered edge computing nodes",
          "Remote diagnostics and over-the-air updates",
          "Multi-site dashboard for centralized monitoring",
        ]}
      />

      <SolutionDetail
        id="multi-site"
        iconName="Building2"
        title="Multi-Site Fleet Management"
        description="Coordinate equipment, personnel, and logistics across multiple mining sites from a single command center. Optimize asset utilization across your entire portfolio."
        features={[
          "Centralized fleet visibility across all sites",
          "Inter-site equipment transfer management",
          "Unified maintenance scheduling and parts inventory",
          "Cross-site analytics and benchmarking",
          "Role-based access with site-level permissions",
        ]}
        reversed
      />

      <CTABanner
        headline="Ready to transform your operations?"
        description="Join the mining operators who have already modernized their fleet with Data Resources."
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  )
}
