import type { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"
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
    template: "%s | Todd Productions Inc.",
  },
  description:
    "A multimedia production company that offers an incredibly wide range of services from video production to website design services in Northwest Ohio",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const FB_ID = process.env.NEXT_PUBLIC_FB_ID

  return (
    <html lang="en">
      <body className={fontHeading.variable}>{children}</body>

      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
          </Script>
        </>
      )}

      {FB_ID && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_ID}');
            fbq('track', 'PageView');
          `,
          }}
        />
      )}
    </html>
  )
}

export default RootLayout
