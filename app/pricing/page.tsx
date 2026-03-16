import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { FeatureComparison } from "@/components/pricing/feature-comparison"
import { CTABanner } from "@/components/cta-banner"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Pricing | Data Resources LLC",
  description:
    "Transparent, custom pricing for mining software — from 90-day pilots to enterprise-scale multi-site deployments.",
}

const faqs = [
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on the number of assets tracked, sites deployed, and modules selected. We tailor every proposal to your specific operation — contact our sales team for a detailed quote.",
  },
  {
    question: "Can I start with the Pilot and upgrade later?",
    answer:
      "Absolutely. The 90-day Pilot is designed as a stepping stone. All data, configurations, and customizations carry forward when you upgrade to Professional or Enterprise.",
  },
  {
    question: "Are there additional costs for edge computing hardware?",
    answer:
      "Edge computing nodes are included in your subscription tier. We provide, configure, and maintain the hardware as part of your deployment.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We offer annual and multi-year billing. Enterprise clients can negotiate custom payment schedules. All pricing is in USD with local currency options available.",
  },
  {
    question: "Is training included?",
    answer:
      "Yes. All tiers include initial training. Professional adds quarterly reviews, and Enterprise includes annual on-site training programs for your entire team.",
  },
  {
    question: "What happens if we need to scale mid-contract?",
    answer:
      "Our contracts are designed to grow with you. Adding sites or assets mid-contract is straightforward — your account manager handles the expansion seamlessly.",
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="Transparent Pricing for Every Operation Scale"
        subtitle="From single-site pilots to multi-site enterprise deployments. Every plan includes our proven deployment framework and Mongolia-specific expertise."
        centered
      />

      <PricingTiers />

      <FeatureComparison />

      <CTABanner
        headline="Not sure which plan is right?"
        description="Our team will help you evaluate the best option based on your fleet size, site count, and operational requirements."
        primaryCTA={{ label: "Talk to Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Enterprise", href: "/enterprise" }}
      />

      <FAQSection title="Pricing FAQ" items={faqs} />
    </>
  )
}
