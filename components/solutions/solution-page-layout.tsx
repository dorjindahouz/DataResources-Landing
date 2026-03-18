"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SolutionDetail } from "@/components/solutions/solution-detail"
import { CTABanner } from "@/components/cta-banner"
import { softwarePages, industryPages, type PageData } from "@/lib/page-data"

function RelatedPages({ data }: { data: PageData }) {
  const allPages = [...softwarePages, ...industryPages]
  const related = data.relatedSlugs.map((ref) =>
    allPages.find(
      (p) =>
        p.slug === ref.slug &&
        ((ref.type === "software" && softwarePages.includes(p)) ||
          (ref.type === "industries" && industryPages.includes(p)))
    )
  ).filter(Boolean) as PageData[]

  if (related.length === 0) return null

  const heading =
    data.badge === "Software" ? "Related Industries" : "Related Software"

  return (
    <section className="px-6 lg:px-20 py-24 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {heading}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {related.map((page, i) => {
            const href =
              page.badge === "Software"
                ? `/software/${page.slug}`
                : `/industries/${page.slug}`
            return (
              <motion.div
                key={page.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={href}
                  className="glass-card rounded-2xl p-8 hover:shadow-glow transition-shadow duration-300 block group"
                >
                  <h3 className="font-bold text-foreground text-xl mb-2">
                    {page.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {page.subtitle}
                  </p>
                  <span className="text-primary text-sm font-bold mt-4 inline-block group-hover:underline">
                    Learn more &rarr;
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SolutionPageLayout({ data }: { data: PageData }) {
  return (
    <>
      <PageHero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        centered
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />

      <SolutionDetail
        id={data.slug}
        iconName={data.iconName as any}
        title={data.title}
        description={data.description}
        features={data.features}
      />

      <RelatedPages data={data} />

      <CTABanner
        headline="Ready to transform your operations?"
        description="Join the enterprises that trust Data Resources for their software needs."
        primaryCTA={{ label: "Contact Sales", href: "/contact-sales" }}
        secondaryCTA={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  )
}
