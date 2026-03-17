import type { Metadata } from "next"
import { softwarePages } from "@/lib/page-data"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

const page = softwarePages.find((p) => p.slug === "analytics")!
export const metadata: Metadata = page.metadata

export default function AnalyticsPage() {
  return <SolutionPageLayout data={page} />
}
