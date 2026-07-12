import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import AnalyticsClient from "./(components)/AnalyticsClient";
import StickyCTA from "./(components)/StickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#050816" },
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iiotedge.com"),
  title: {
    default: "IIoTEdge — Edge Intelligence for Industrial IoT",
    template: "%s | IIoTEdge",
  },
  description:
    "IIoTEdge delivers rugged edge hardware, 5G-ready connectivity and edge AI to process, analyze and act on industrial data in real time — secure, scalable, and edge-first.",
  keywords: [
    "Industrial IoT",
    "Edge Computing",
    "Edge AI",
    "5G Industrial",
    "OPC-UA",
    "MQTT",
    "Predictive Maintenance",
    "Smart Manufacturing",
    "IIoT Platform",
  ],
  authors: [{ name: "IIoTEdge" }],
  creator: "IIoTEdge",
  publisher: "IIoTEdge",
  applicationName: "IIoTEdge",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.iiotedge.com/",
    siteName: "IIoTEdge",
    title: "IIoTEdge — Edge Intelligence for Industrial IoT",
    description:
      "Rugged edge hardware, 5G-ready connectivity and edge AI for real-time industrial decisions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IIoTEdge — Edge Intelligence for Industrial IoT",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IIoTEdge — Edge Intelligence for Industrial IoT",
    description:
      "Rugged edge hardware + intelligent software for real-time industrial decisions.",
    images: ["/og-image.jpg"],
  },
  // Icons are auto-generated from src/app/icon.png and src/app/apple-icon.png
  // (Next.js App Router file convention) so no manual `icons` entries needed.
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IIoTEdge",
    url: "https://www.iiotedge.com/",
    email: "info@iiotedge.com",
    logo: "https://www.iiotedge.com/IoT%20Mining%20Logo%20Icon.png",
    slogan: "Building the brain behind the machine.",
    description:
      "Rugged edge hardware, 5G-ready connectivity and edge AI for industrial operations.",
    telephone: "+91-85060-31507",
    sameAs: [
      "https://www.linkedin.com/company/iiotedge",
      "https://github.com/iiotedge",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
  };

  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IIoTEdge",
    url: "https://www.iiotedge.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.iiotedge.com/search?q={query}",
      "query-input": "required name=query",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-cyan-500 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <AnalyticsClient />
      </body>
    </html>
  );
}
