import type { Metadata } from "next"
import { softwarePages } from "@/lib/page-data"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

const page = softwarePages.find((p) => p.slug === "eam")!
export const metadata: Metadata = page.metadata

export default function EAMPage() {
  return <SolutionPageLayout data={page} />
}
