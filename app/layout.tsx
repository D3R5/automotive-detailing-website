import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Dino Gloss | Lavado y Detailing Automotriz Profesional en Chile",
  description:
    "Servicio profesional de lavado, detailing y protección automotriz en Chile. Pulido, encerado, protección cerámica y más. Cotiza ahora por WhatsApp.",
  keywords: [
    "detailing",
    "lavado de autos",
    "pulido",
    "encerado",
    "protección cerámica",
    "Chile",
  ],
  authors: [{ name: "AutoShine Pro" }],
  openGraph: {
    title: "Dino Gloss | Lavado y Detailing Automotriz Profesional",
    description:
      "Protegemos, limpiamos y realzamos tu vehículo como se merece.",
    type: "website",
    locale: "es_CL",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0a0a12",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
