import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SalesForm } from "@/components/contact-sales/sales-form"
import { SalesBenefits } from "@/components/contact-sales/sales-benefits"
import { SocialProof } from "@/components/social-proof"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Contact Sales | Data Resources LLC",
  description:
    "Get in touch with our sales team to discuss EAM, Fleet Management, and Edge Computing solutions for your mining operation in Mongolia.",
}

const metrics = [
  { value: "-73%", label: "Equipment Downtime" },
  { value: "+41%", label: "OEE Improvement" },
  { value: "99.9%", label: "System Uptime" },
  { value: "12 wk", label: "Avg. Deployment" },
]

const faqs = [
  {
    question: "How long does a typical deployment take?",
    answer:
      "Our 90-day pilot program gets you operational within 12 weeks. Full enterprise deployments typically take 4-6 months depending on scope and integration requirements.",
  },
  {
    question: "Do you support offline environments?",
    answer:
      "Yes. Our edge computing architecture is designed for offline-first operation. All critical functions continue working even without connectivity, with automatic sync when connections are restored.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "We integrate with all major ERP, SCADA, and CMMS platforms. Our Professional and Enterprise tiers include custom integration development and API access.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "All tiers include email support. Professional includes 24/7 phone support and an on-site technical lead. Enterprise adds a dedicated account manager and executive sponsor.",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "The pilot program is 90 days. Full deployments start with an annual contract. We offer flexible terms for multi-year commitments with volume discounts.",
  },
]

export default function ContactSalesPage() {
  return (
    <>
      <PageHero
        badge="Sales Inquiry"
        title="Let's Talk About Your Mining Operation"
        subtitle="Our team has deployed industrial software across Mongolia's toughest mining environments. Tell us about your operation and we'll design a solution that fits."
        centered
      />

      <section className="px-6 lg:px-20 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <SalesBenefits />
          <SalesForm />
        </div>
      </section>

      <SocialProof metrics={metrics} />

      <FAQSection items={faqs} />
    </>
  )
}
