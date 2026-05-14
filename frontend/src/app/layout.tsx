import type { Metadata } from "next";
import { Yeseva_One, Dancing_Script, Jost } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import Script from "next/script";

const yesevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva-one",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Coraluxe - Resort Website Template",
  description: "Luxury resort and hotel website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${yesevaOne.variable} ${dancingScript.variable} ${jost.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" />
        <link rel="stylesheet" href="/lib/animate/animate.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <BootstrapClient />
        <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
