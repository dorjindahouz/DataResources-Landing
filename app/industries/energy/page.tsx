import type { Metadata } from "next"
import { industryPages } from "@/lib/page-data"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

const page = industryPages.find((p) => p.slug === "energy")!
export const metadata: Metadata = page.metadata

export default function EnergyPage() {
  return <SolutionPageLayout data={page} />
}
