import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import AnalyticsClient from "./(components)/AnalyticsClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iiotedge.com"),
  title: "IIoTEdge | Edge Intelligence for Industrial IoT — From Device to Cloud",
  description:
    "IIoTEdge delivers rugged edge hardware and intelligent software to process, analyze, and act on industrial data in real time—secure, scalable, and edge‑first.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.iiotedge.com/",
    title: "IIoTEdge | Edge Intelligence for Industrial IoT — From Device to Cloud",
    description:
      "Process, analyze, and act on industrial data at the edge with IIoTEdge.",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "IIoTEdge — Edge Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IIoTEdge | Edge Intelligence for Industrial IoT",
    description:
      "Rugged edge hardware + intelligent software for real-time industrial decisions.",
    images: ["/vercel.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IIoTEdge",
    url: "https://www.iiotedge.com/",
    email: "info@iiotedge.com",
    sameAs: [],
    logo: "https://www.iiotedge.com/logo.png",
    slogan: "Smarter industries begin at the edge.",
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
    <html lang="en">
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <AnalyticsClient />
      </body>
    </html>
  );
}
