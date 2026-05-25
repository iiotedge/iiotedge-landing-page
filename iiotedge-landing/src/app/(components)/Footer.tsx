import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const navColumns = [
  {
    heading: "Platform",
    links: [
      { href: "#platform", label: "End-to-end Stack" },
      { href: "#demo", label: "Live Demo" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#industries", label: "Industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "#problem", label: "Why Edge" },
      { href: "#contact", label: "Contact" },
      { href: "mailto:info@iiotedge.com", label: "info@iiotedge.com" },
    ],
  },
];

const socials = [
  { href: "https://www.linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
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
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
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
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Rugged edge hardware and intelligent software for industrial operations. Process, analyze and act on data
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
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-cyan-400" />
                Bengaluru, India
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((column) => (
            <div key={column.heading} className="md:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{column.heading}</h4>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Socials */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Follow</h4>
            <ul className="mt-4 flex gap-3">
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
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <div>&copy; {new Date().getFullYear()} IIoTEdge. All rights reserved.</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
            Smarter industries begin at the edge
          </div>
        </div>
      </div>
    </footer>
  );
}
