import type { Metadata } from "next"
import { softwarePages } from "@/lib/page-data"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

const page = softwarePages.find((p) => p.slug === "fleet")!
export const metadata: Metadata = page.metadata

export default function FleetPage() {
  return <SolutionPageLayout data={page} />
}
