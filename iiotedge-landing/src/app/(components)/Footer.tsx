import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Phone,
  Shield,
  Award,
  CheckCircle2,
  Star,
} from "lucide-react";

// Coming-soon resources / legal routes don't exist as pages yet — they route to
// #contact so the user lands somewhere useful instead of a 404. Swap to real
// hrefs once the pages ship.
const COMING_SOON = "#contact";

const navColumns = [
  {
    heading: "Platform",
    links: [
      { href: "#platform", label: "End-to-end Stack" },
      { href: "#demo", label: "Live Console" },
      { href: "#reports", label: "Reporting Engine" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#industries", label: "Industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "#problem", label: "Why Edge" },
      { href: "#contact", label: "Contact" },
      { href: COMING_SOON, label: "Careers" },
      { href: COMING_SOON, label: "About" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: COMING_SOON, label: "Docs" },
      { href: COMING_SOON, label: "Architecture Guides" },
      { href: "#industries", label: "Case Studies" },
      { href: COMING_SOON, label: "Engineering Blog" },
      {
        href: "https://demo.iiotedge.in/",
        label: "Live Demo",
        external: true,
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: COMING_SOON, label: "Privacy Policy" },
      { href: COMING_SOON, label: "Terms of Service" },
      { href: COMING_SOON, label: "Security" },
      { href: COMING_SOON, label: "Data Processing Agreement" },
    ],
  },
];

const socials = [
  {
    href: "https://www.linkedin.com/company/iiotedge",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/iiotedge",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://demo.iiotedge.in/",
    label: "Live Demo",
    icon: ExternalLink,
  },
];

const COMPLIANCE = [
  { icon: Shield, label: "ISO 27001" },
  { icon: Award, label: "Industry 4.0 Ready" },
  { icon: CheckCircle2, label: "CE Marked" },
  { icon: Star, label: "AWS Partner" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 text-slate-300">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Top: brand + 4 nav columns */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
              aria-label="IIoTEdge Home"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                <Image
                  src="/IoT Mining Logo Icon.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <span>
                IIoT<span className="text-cyan-400">Edge</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Building the brain behind the machine. Rugged edge hardware and intelligent
              software for industrial operations &mdash; process, analyze and act on data
              where it&apos;s created.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:info@iiotedge.com"
                className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                info@iiotedge.com
              </a>
              <a
                href="tel:+918506031507"
                className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                +91 85060 31507
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-cyan-400" />
                Bengaluru, India
              </div>
            </div>

            {/* Socials */}
            <ul className="mt-6 flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:text-cyan-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {navColumns.map((column) => (
              <div key={column.heading}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {column.heading}
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-white"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3 opacity-70" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-slate-400 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance strip */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-400">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              Compliance &amp; Certifications
            </span>
            {COMPLIANCE.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300"
              >
                <Icon className="h-3.5 w-3.5 text-cyan-300" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom legal strip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <div>&copy; {new Date().getFullYear()} IIoTEdge. All rights reserved.</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
            Built in Bengaluru &middot; Deployed across 12+ countries
          </div>
        </div>
      </div>
    </footer>
  );
}
