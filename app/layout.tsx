import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Payflox - Secure Crypto Payment Gateway",
  description:
    "Accept cryptocurrency payments with ease. Secure, fast, and reliable payment processing for your business.",
  generator: "Payflox",
  keywords: ["crypto payments", "payment gateway", "cryptocurrency", "bitcoin", "ethereum", "payment processing"],
  authors: [{ name: "Payflox Team" }],
  creator: "Payflox",
  publisher: "Payflox",
  robots: "index, follow",
  openGraph: {
    title: "Payflox - Secure Crypto Payment Gateway",
    description:
      "Accept cryptocurrency payments with ease. Secure, fast, and reliable payment processing for your business.",
    type: "website",
    locale: "en_US",
    siteName: "Payflox",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payflox - Secure Crypto Payment Gateway",
    description:
      "Accept cryptocurrency payments with ease. Secure, fast, and reliable payment processing for your business.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
