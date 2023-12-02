import React from "react"
import localFont from "next/font/local"
import type { Metadata } from "next"

import { getCanonicalLink } from "../../utils/common"

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
    template: "%s | Todd Productions Inc.",
  },
  description:
    "A multimedia production company that offers an incredibly wide range of services from video production to website design services in Northwest Ohio",
  alternates: {
    canonical: getCanonicalLink(null),
  },
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
