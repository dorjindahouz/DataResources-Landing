"use client"

import { motion } from "framer-motion"

const frameworks = [
  {
    title: "Asset & Operations Management",
    description:
      "Enterprise Asset Management, CMMS, and operational intelligence platforms that give you complete visibility across every asset, every site.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQUihI-rGrXF3cIL9SzpOqWS4fvbSnGoqqmW05UCoGRRcsHSXDBPvVFJ24IFNOOgQ22FozOTSjCnK5FwBvTH6BdAXuIuuwyfEAF__9q3F0xtABxmC1v9G5fQMM7gTvZBOAiCM3c1GApjOm24D5gQ_wAFibBa_XLusDSACcS0czmZti7gOn2mXI1swC_znG9MHt4aUUJ0XYIo8zDBe8AU-VqULsdPMAFuvzIGhZ21rKvTNg3xNcv5KaccYzGbwBvUJy6pRiGCtVHlc",
    alt: "Abstract digital data points connecting into a grid pattern",
  },
  {
    title: "Fleet & Logistics",
    description:
      "GPS tracking, dispatch optimization, route planning, and fuel management systems for fleets of any size — from 10 vehicles to 500+.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoEHP6tVVhgQxb3vBIy040OP8w1lZGIsHaaJgXjFqQ32Esg5LKxST7sXLCcIt63-uFA8lin7NhW0HH0uCMAFW55CMTLRITn_e78DrkJveAGzrYlVAagfTZG1fnAFYvBV9JKZdgfcNVB8SVG6K5CKxO86dnrAovd3EPzPf8EaSCCE_eumMyDf7NYy6ppW7iPK6-m77qlbTHfxqXsuLqqygOVHtMgQp4--zInGK0dw_9mA32WbaKkpy1WQ8DDcwgV-QtUYiUhaiFHRk",
    alt: "Close up of high speed server rack cooling system lights",
  },
  {
    title: "Analytics & Intelligence",
    description:
      "Business intelligence, predictive analytics, and real-time dashboards that transform operational data into strategic decisions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaYv5PQLRBl9fOW2b6V08qPV6O6oYltDPhOBsfMe-IBjHw4UKL6Z5m3Wa6291FMAZMX-bBAOn_KvKy3amjutUO9Nw5hikJ-qlVxg7LVRu3bn_UBhG4H4Uw6Z596IAADjZB4AYh5932JOpESO9mgXRinmUwzFzjXFqWfxBq0D_CTecUQOpO7o9d3vRZlaBaGx4kGdCZuLBemhTT4CgsW1eMNkH0lic8W7OMhA507CPfVQiyT3Z8a6CtvjZpziN5fnkkW0c8M1p9UtI",
    alt: "Abstract 3D sphere representing data processing and prediction",
  },
]

export function Framework() {
  return (
    <section className="px-6 lg:px-20 py-24" id="framework">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-black tracking-tighter text-3xl lg:text-4xl text-foreground text-balance">
            Our Software Portfolio
          </h2>
          <p className="text-muted-foreground text-lg">
            Enterprise-grade platforms for every operational challenge — deployed and supported locally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {frameworks.map((fw, i) => (
            <motion.div
              key={fw.title}
              className="flex flex-col rounded-2xl overflow-hidden glass-card hover:shadow-glow-lg transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={fw.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={fw.image}
                />
              </div>
              <div className="p-8 space-y-3">
                <h3 className="text-xl font-bold text-foreground">
                  {fw.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {fw.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
