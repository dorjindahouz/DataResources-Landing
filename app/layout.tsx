import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MouseGlow } from "@/components/mouse-glow"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Data Resources LLC | Enterprise Software Solutions Mongolia",
  description:
    "Mongolia's trusted software distribution and implementation partner. Connecting enterprises across mining, energy, construction, logistics, and more with world-class software solutions.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a1112",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-deep-navy text-foreground`}
      >
        <MouseGlow />
        <div className="relative flex min-h-screen w-full flex-col [overflow-x:clip]">
          <div className="fixed inset-0 bg-gradient-to-b from-primary/5 via-transparent to-deep-navy pointer-events-none z-0" />
          <Header />
          <main className="flex flex-col relative z-10 flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
