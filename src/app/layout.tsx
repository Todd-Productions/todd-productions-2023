import type { Metadata } from "next"
import localFont from "next/font/local"
import React from "react"

import "./globals.css"

const fontHeading = localFont({
  src: [
    {
      path: "../../assets/fonts/Helvetica.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/HelveticaBlack.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: "Todd Productions",
    template: "%s Maumee Ohio | Todd Productions Inc.",
  },
  description:
    "A multimedia production company that offers an incredibly wide range of services from video production to website design services in Northwest Ohio",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang="en">
      <body className={fontHeading.variable}>{children}</body>
    </html>
  )
}

export default RootLayout
