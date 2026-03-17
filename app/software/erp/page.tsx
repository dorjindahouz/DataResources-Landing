import type { Metadata } from "next"
import { softwarePages } from "@/lib/page-data"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

const page = softwarePages.find((p) => p.slug === "erp")!
export const metadata: Metadata = page.metadata

export default function ERPPage() {
  return <SolutionPageLayout data={page} />
}
