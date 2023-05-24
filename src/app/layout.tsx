import localFont from "next/font/local";
import type { Metadata } from "next";

import "./globals.css";

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
});

export const metadata: Metadata = {
  title: "Todd Productions",
  description:
    "A multimedia production company that offers an incredibly wide range of services from video production to website design services in Northwest Ohio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontHeading.variable}>{children}</body>
    </html>
  );
}
