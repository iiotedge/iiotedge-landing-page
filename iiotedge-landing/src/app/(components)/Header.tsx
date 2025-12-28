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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link 
          href="/" 
          className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
          aria-label="IIoTEdge Home"
        >
          IIoTEdge
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 text-sm text-zinc-700 md:flex dark:text-zinc-300" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#e6e6e6] md:inline-block"
          data-event="cta_click"
          data-payload='{"location":"header"}'
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
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
          className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-black md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 rounded-full bg-black px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#e6e6e6]"
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


