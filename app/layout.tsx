import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Reduyan Ahmed - Motion Graphic Designer",
  description:
    "Professional Motion Graphic Designer specializing in logo animation, video editing, 3D design, and kinetic typography. Available for freelance projects.",
  generator: "v0.app",
  keywords: [
    "motion graphics",
    "video editing",
    "logo animation",
    "3D design",
    "kinetic typography",
    "freelance designer",
  ],
  authors: [{ name: "Reduyan Ahmed" }],
  openGraph: {
    title: "Reduyan Ahmed - Motion Graphic Designer",
    description: "Professional Motion Graphic Designer specializing in creative visual solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
