"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#platform", label: "Platform" },
    { href: "#demo", label: "Live Demo" },
    { href: "#reports", label: "Reports" },
    { href: "#industries", label: "Industries" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-3 text-lg font-semibold tracking-tight text-white transition-opacity duration-300 hover:opacity-90"
          aria-label="IIoTEdge Home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-shadow group-hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]">
            <Image
              src="/IoT Mining Logo Icon.png"
              alt="IoT Mining Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
              priority
            />
          </span>
          <span>
            IIoT<span className="text-cyan-400">Edge</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-sm text-slate-300 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 md:inline-flex"
          data-event="cta_click"
          data-payload='{"location":"header"}'
        >
          Book a Call
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-md p-1.5 text-slate-300 transition-colors hover:bg-slate-900 hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-slate-800/80 bg-slate-950 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
                onClick={() => setMobileMenuOpen(false)}
                data-event="cta_click"
                data-payload='{"location":"header_mobile"}'
              >
                Book a Call
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}


