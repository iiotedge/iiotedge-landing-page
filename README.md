# IIoTEdge — Edge Intelligence Landing Page

This document is the source of truth for the IIoTEdge marketing site (landing page) information architecture, content strategy, SEO, performance, accessibility, analytics, and implementation notes. It will be kept up-to-date as we implement sections one by one.

## Goals
- Establish a clear brand narrative for IIoTEdge (formerly IoTMining)
- Communicate value: "Smarter industries begin at the edge"
- Convert: Encourage contact and partnerships
- Be fast, responsive, accessible, and SEO-friendly

## Primary Audience
- Industrial leaders, operations managers, and engineering teams considering edge solutions
- Partners seeking embedded, IoT, and AI deployments at the edge

## Core Value Proposition (Site-wide)
- Edge-first architecture to process, analyze, and act on data where it’s created
- Rugged hardware + intelligent software + edge AI + cloud orchestration
- Real-time decisions, lower latency, enhanced security, reduced cloud dependency

---

## Information Architecture (Sections)
Order is optimized for clarity, scannability, and conversion. Each section below includes content, structure, SEO, responsiveness, performance, accessibility, and analytics guidance.

### 1) Hero — Edge Intelligence for Industrial IoT
- Content
  - H1: "IIoTEdge — Powering the Future of Edge Intelligence"
  - Subheading: "Smarter industries begin at the edge. Process, analyze, and act on data locally for real-time decisions, security, and resilience."
  - CTA Primary: "Contact Us"
  - CTA Secondary: "Explore Platform"
  - Badge/Note: "Formerly IoTMining"
- Structure
  - Left: Headline, subcopy, CTAs
  - Right: Visual (globe/edge network graphic or short looping animation)
- SEO
  - H1 present once; concise subcopy with target terms: Edge Computing, Industrial IoT, Edge AI
- Responsiveness
  - Stack on mobile; ensure CTAs are visible above the fold
- Performance
  - Use `next/image` with responsive sizes. Defer/lazy image loading if below the fold
- Accessibility
  - Clear focus states, high contrast, aria-labels on CTAs
- Analytics
  - Events: `hero_cta_primary_clicked`, `hero_cta_secondary_clicked`

### 2) Our Core Focus — Edge Computing
- Content
  - H2: "Our Core Focus — Edge Computing"
  - Bullets:
    - Edge AI Processing — Analyze telemetry, detect anomalies, make decisions in real-time
    - Offline Autonomy — Continue operations without internet
    - Secure OTA Updates — Safe firmware/software updates over the air
    - Multi-Protocol Support — CAN, RS-485, MQTT, Modbus, LoRa, Ethernet, 4G/5G
    - Containerized Edge Apps — Deploy analytics or control logic with container support
- Structure
  - 2-column feature list with icons
- SEO
  - Use keyword variations: Edge gateways, industrial protocols, secure OTA, containerized apps
- Responsiveness
  - Cards reorganize to single column on mobile
- Performance
  - SVG icons, minimal JS
- Accessibility
  - List semantics, descriptive headings
- Analytics
  - Event per feature expand (if interactive): `feature_expand` with `feature_name`

### 3) Edge-to-Cloud Ecosystem
- Content
  - H2: "Our Edge-to-Cloud Ecosystem"
  - Three columns: Edge Layer, Cloud Layer, Intelligence Layer
    - Edge Layer: Rugged hardware, intelligent firmware, local data processing
    - Cloud Layer: Scalable microservices for device management, analytics, visualization
    - Intelligence Layer: AI models for predictive maintenance, optimization, anomaly detection
- Structure
  - 3-column grid with simple iconography
- SEO
  - Internal anchor links for each layer; reinforce topical relevance
- Responsiveness
  - Collapse to accordion on mobile (optional) or stacked columns
- Performance
  - Avoid heavy animations; use `prefers-reduced-motion`
- Accessibility
  - Proper headings and region roles
- Analytics
  - `ecosystem_layer_view` with `layer_name`

### 4) What We Deliver
- Content
  - H2: "What We Deliver"
  - Subsections (cards):
    - Edge Hardware & Embedded Solutions
      - STM32 & RISC-V controllers
      - Modular cards (4G/5G, Ethernet, RS-485, LoRa)
      - Edge gateways with on-device analytics
    - Edge Computing Platform
      - Local rule engine, real-time stream processing, secure OTA, remote diagnostics
    - Edge AI & Automation
      - Predictive maintenance, on-device ML, containerized model deployment
    - Engineering & Outsourced Development
      - Firmware/PCB design, IoT apps, cloud integration, industrial-grade deployment
- Structure
  - 2x2 grid of feature cards
- SEO
  - Include long-tail keywords related to industrial edge hardware/software
- Responsiveness
  - Cards stack 1-column on small screens
- Performance
  - Lazy-load non-critical images
- Accessibility
  - Use `aria-describedby` to connect card titles and descriptions
- Analytics
  - `deliverable_card_click` with `card_name`

### 5) Industries We Empower
- Content
  - H2: "Industries We Empower"
  - Grid of 4–6 items: Smart Manufacturing, Energy & Utilities, Safety & Condition Monitoring, Transportation & Fleet, Smart Infrastructure & Cities
- Structure
  - Grid with brief 1–2 line benefits under each
- SEO
  - Industry-specific keywords
- Responsiveness
  - Grid → stacked on mobile
- Performance
  - SVG/emoji instead of heavy images
- Accessibility
  - Clear headings, list semantics
- Analytics
  - `industry_card_click` with `industry_name`

### 6) Why Choose IIoTEdge
- Content
  - H2: "Why Choose IIoTEdge"
  - Checklist:
    - Edge-First Architecture — Compute where it matters most
    - AI-Driven Insights — Smarter decisions with local analytics
    - Resilient & Secure — Built for harsh industrial environments
    - Open & Scalable — Compatible with existing infrastructure
    - End-to-End Expertise — From device to dashboard
- Structure
  - Two-column: checklist + illustration
- SEO
  - Reinforce brand differentiators
- Responsiveness
  - Stack on mobile
- Performance
  - Static assets only
- Accessibility
  - Use semantic lists; ensure contrast
- Analytics
  - `why_choose_cta_click` (if present)

### 7) Partner With Us — CTA
- Content
  - H2: "Partner With Us"
  - Paragraph: "Whether you’re modernizing existing systems or building next‑gen industrial intelligence, IIoTEdge is your trusted partner."
  - CTA: "Contact Us" (mailto and form)
- Structure
  - Full-width band with strong contrast
- SEO
  - Internal link anchor `#contact`
- Responsiveness
  - Centered, generous touch targets
- Performance
  - No blocking assets
- Accessibility
  - Button role and clear label
- Analytics
  - `partner_cta_click`

### 8) Contact
- Content
  - H2: "Contact"
  - Email: `info@iiotedge.com` and short form (name, email, message)
- Structure
  - Simple form; post placeholder or mailto
- SEO
  - `Organization` JSON-LD includes contact; page contains email as text
- Responsiveness
  - Single-column form
- Performance
  - No client-side validation framework; use native validation
- Accessibility
  - Labels tied to inputs, proper error text, keyboard-friendly
- Analytics
  - `contact_submit_attempt`, `contact_submit_success`

### 9) Footer
- Content
  - Logo, short tagline, navigation anchors, copyright
- Structure
  - 2–3 column layout
- SEO
  - Link anchors assist crawl
- Responsiveness
  - Stack on mobile
- Accessibility
  - Footer landmark

---

## Global SEO Strategy
- Page Title: "IIoTEdge | Edge Intelligence for Industrial IoT — From Device to Cloud"
- Meta Description: "IIoTEdge delivers rugged edge hardware and intelligent software to process, analyze, and act on industrial data in real time—secure, scalable, and edge‑first."
- Canonical URL: `https://www.iiotedge.com/`
- Open Graph: title, description, image (1200×630), `og:url`
- Twitter Card: summary_large_image
- JSON-LD: `Organization` and `WebSite` with search action
- Sitemap: `/sitemap.xml` and `/robots.txt`

### Next.js metadata example (to add in `src/app/layout.tsx`)
```ts
export const metadata = {
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
        url: "/og.jpg",
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
    images: ["/og.jpg"],
  },
} satisfies import("next").Metadata;
```

### Organization & WebSite JSON-LD (inject in `layout.tsx`)
```tsx
const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IIoTEdge",
  url: "https://www.iiotedge.com/",
  email: "info@iiotedge.com",
  sameAs: [
    // add socials if available
  ],
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
```

### Sitemap and Robots (create in `src/app/`)
```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.iiotedge.com";
  return [
    { url: `${base}/`, priority: 1.0, changeFrequency: "monthly" },
  ];
}
```
```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.iiotedge.com/sitemap.xml",
  };
}
```

---

## Visual System
- Typography: Geist (already configured). Maintain sizes with Tailwind v4 tokens
- Colors (proposal — adjust to brand):
  - `--color-primary`: #0B5FFF (edge blue)
  - `--color-accent`: #22D3EE (cyan) for highlights
  - `--foreground` / `--background` already in use
- Iconography: Simple line icons (SVG). Avoid bitmap icons unless necessary
- Imagery: Abstract edge network/globe, industrial environments. Optimize and compress

## Component Structure (proposed)
- `src/app/page.tsx` — composes sections
- `src/app/(components)/Hero.tsx`
- `src/app/(components)/CoreFocus.tsx`
- `src/app/(components)/Ecosystem.tsx`
- `src/app/(components)/Deliverables.tsx`
- `src/app/(components)/Industries.tsx`
- `src/app/(components)/WhyChoose.tsx`
- `src/app/(components)/PartnerCTA.tsx`
- `src/app/(components)/Contact.tsx`
- `src/app/(components)/Footer.tsx`

Keep components server by default; use client components only for interactivity.

## Performance Checklist
- Use `next/image` with `sizes` and modern formats (AVIF/WebP)
- Lazy load non-critical imagery and components below the fold
- Keep animations subtle; respect `prefers-reduced-motion`
- Font loading: current `next/font` Geist is optimal; avoid additional webfont weight bloat
- Minify SVGs; inline icons
- Avoid large client components; code-split if necessary via dynamic import

## Accessibility Checklist
- Logical heading order (one H1 on the page)
- Keyboard focus order and visible focus indicator
- Sufficient color contrast (WCAG AA)
- Form fields with labels, error messages, and descriptive help text
- Alt text for images and `aria-label` for icon-only controls

## Analytics
- Prefer Vercel Analytics for lightweight metrics
- Add basic CTA click events via small `onClick` handlers only where needed
- Respect DNT and privacy expectations; no PII

### Vercel Analytics (add to `layout.tsx`)
```tsx
import { Analytics } from "@vercel/analytics/react";

// inside <body>
<Analytics />
```

---

## Implementation Plan (one by one)
1) Global SEO and metadata in `layout.tsx`
2) Layout shell: header, nav, footer
3) Sections in order: Hero → Core Focus → Ecosystem → Deliverables → Industries → Why Choose → Partner CTA → Contact
4) Sitemap and robots
5) Analytics wiring
6) A11y pass and performance review

Each step will be reflected below with change notes and acceptance criteria.

---

## Change Log (to be updated as we implement)
- [x] Global SEO configured in `layout.tsx`
  - Title, description, OG/Twitter, canonical
  - JSON-LD injected for Organization, WebSite
- [x] Layout shell created with responsive nav and footer
- [x] Hero implemented with optimized media and CTAs
- [x] Core Focus implemented with icons
- [x] Ecosystem implemented (Edge/Cloud/Intelligence)
- [x] Deliverables cards implemented
- [x] Industries grid implemented
- [x] Why Choose checklist implemented
- [x] Partner CTA band implemented
- [x] Contact section with mailto and form placeholder
- [x] Sitemap and robots exported
- [x] Analytics added
- [ ] A11y & performance verified

---

## Operational Notes
- Tech stack: Next.js App Router, React 19, Tailwind v4 (already configured), TypeScript
- Hosting: Vercel (recommended). Ensure environment URL is set for correct canonical in production
- Assets: place in `public/` (e.g., `logo.png`, `og.jpg` 1200×630)
- Branching: feature branches per section; PRs include lighthouse/a11y notes when relevant

## Contact
- Email: `info@iiotedge.com`
- Add social links once available