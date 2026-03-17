import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SocialProof } from "@/components/social-proof"
import { ArchitectureFlowMap } from "@/components/enterprise/architecture-flow-map"
import { ParallaxFeatureGrid } from "@/components/enterprise/parallax-feature-grid"
import { BeforeAfterComparison } from "@/components/enterprise/before-after-comparison"
import { SecuritySection } from "@/components/enterprise/security-section"
import { CTABanner } from "@/components/cta-banner"
import { SystemHeartbeat } from "@/components/enterprise/system-heartbeat"
import { FloatingConsultationTerminal } from "@/components/enterprise/floating-consultation-terminal"

export const metadata: Metadata = {
  title: "Enterprise | Data Resources LLC",
  description:
    "Purpose-built mining software for Mongolia's largest operations. Offline-resilient, sovereignty-compliant, with white-glove deployment.",
}

const metrics = [
  { value: "47", label: "Active Mine Sites" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "12k+", label: "Assets Tracked" },
  { value: "0", label: "Data Lost in Outages" },
]

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        badge="Enterprise"
        title="Command Every Asset Across the Gobi — From One Screen in UB"
        subtitle="Purpose-built for Mongolia's mining operations: offline-resilient, sovereignty-compliant, deployed by engineers who live on your site until it works."
        primaryCTA={{ label: "Book Site Assessment", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      >
        <SystemHeartbeat />
      </PageHero>

      <SocialProof metrics={metrics} />

      <ArchitectureFlowMap />

      <ParallaxFeatureGrid />

      <BeforeAfterComparison />

      <SecuritySection />

      <CTABanner
        headline="Your fleet doesn't sleep. Neither do we."
        description="Book a site assessment and get your pilot plan in 48 hours. Our engineers deploy on-site — not from a ticket queue."
        primaryCTA={{ label: "Book Site Assessment", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />

      <FloatingConsultationTerminal />
    </>
  )
}
