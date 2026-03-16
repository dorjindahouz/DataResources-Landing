import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SocialProof } from "@/components/social-proof"
import { EnterpriseFeatures } from "@/components/enterprise/enterprise-features"
import { SecuritySection } from "@/components/enterprise/security-section"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Enterprise | Data Resources LLC",
  description:
    "Enterprise-grade mining software with dedicated SLA, SSO/RBAC, custom integrations, and 24/7 support for large-scale operations.",
}

const metrics = [
  { value: "50+", label: "Enterprise Deployments" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10k+", label: "Assets Managed" },
  { value: "24/7", label: "Dedicated Support" },
]

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        badge="Enterprise"
        title="Enterprise-Grade Mining Software at Scale"
        subtitle="Purpose-built for multi-site mining operations that demand the highest levels of reliability, security, and customization."
        centered
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />

      <SocialProof metrics={metrics} />

      <EnterpriseFeatures />

      <SecuritySection />

      <CTABanner
        headline="Let's build your deployment plan"
        description="Our enterprise team will work with you to design a solution that meets your scale, security, and compliance requirements."
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  )
}
