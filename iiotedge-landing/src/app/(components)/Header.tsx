"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#core-focus", label: "Capabilities" },
    { href: "#ecosystem", label: "Platform" },
    { href: "#deliverables", label: "Deliverables" },
    { href: "#industries", label: "Industries" },
    { href: "#why-choose", label: "Why IIoTEdge" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
          aria-label="IIoTEdge Home"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            IIoTEdge
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-sm text-slate-300 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 md:inline-block"
          data-event="cta_click"
          data-payload='{"location":"header"}'
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
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
          className="border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
                onClick={() => setMobileMenuOpen(false)}
                data-event="cta_click"
                data-payload='{"location":"header_mobile"}'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}


