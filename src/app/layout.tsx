import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
