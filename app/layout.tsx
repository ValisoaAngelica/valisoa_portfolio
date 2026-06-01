import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Valisoa Portfolio",
  description: "Portfolio de Valisoa - Développeuse Web",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={GeistSans.className}>
        {children}
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
      </body>
    </html>
  )
}