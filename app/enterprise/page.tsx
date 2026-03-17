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
    "Enterprise-scale software deployment and support for Mongolia's largest organizations.",
}

const metrics = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "8", label: "Industry Sectors" },
  { value: "200+", label: "Deployments Completed" },
]

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        badge="Enterprise"
        title="Enterprise-Scale Software Deployment Across Mongolia"
        subtitle="Multi-site, multi-platform deployments with white-glove service. Our engineers work on-site until every system runs flawlessly."
        primaryCTA={{ label: "Book Consultation", href: "/contact-sales" }}
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
        headline="Your operations don't pause. Neither do we."
        description="Book a consultation and get your deployment plan in 48 hours. Our engineers deploy on-site — not from a ticket queue."
        primaryCTA={{ label: "Book Consultation", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />

      <FloatingConsultationTerminal />
    </>
  )
}
