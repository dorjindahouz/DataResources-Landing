"use client"

import {
  Clock,
  KeyRound,
  Puzzle,
  Headphones,
  Building2,
  BarChart3,
  FileCheck,
  GraduationCap,
} from "lucide-react"
import { FeatureGrid } from "@/components/feature-grid"

const features = [
  {
    icon: Clock,
    title: "Dedicated SLA",
    description: "99.9% uptime guarantee with priority incident response and escalation paths.",
  },
  {
    icon: KeyRound,
    title: "SSO & RBAC",
    description: "Enterprise single sign-on, role-based access control, and directory integration.",
  },
  {
    icon: Puzzle,
    title: "Custom Integrations",
    description: "Deep integration with your ERP, SCADA, CMMS, and other enterprise systems.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "Named account manager, on-site engineers, and round-the-clock remote support.",
  },
  {
    icon: Building2,
    title: "Multi-Site Management",
    description: "Centralized control across all mining operations with site-level customization.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Predictive maintenance, OEE optimization, and custom executive dashboards.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit",
    description: "Full audit trails, regulatory compliance reporting, and data retention policies.",
  },
  {
    icon: GraduationCap,
    title: "White-Glove Onboarding",
    description: "Dedicated implementation team, on-site training, and change management support.",
  },
]

export function EnterpriseFeatures() {
  return (
    <section className="px-6 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <FeatureGrid features={features} columns={4} />
      </div>
    </section>
  )
}
