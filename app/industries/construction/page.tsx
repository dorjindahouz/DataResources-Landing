import type { Metadata } from "next"
import { industryPages } from "@/lib/page-data"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

const page = industryPages.find((p) => p.slug === "construction")!
export const metadata: Metadata = page.metadata

export default function ConstructionPage() {
  return <SolutionPageLayout data={page} />
}
