"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

const DISMISS_KEY = "iiotedge-sticky-cta-dismissed";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Respect previous dismiss within this session
    if (typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY) === "1") {
      setDismissed(true);
      return;
    }

    // Show the bar after the hero scrolls out (~70% viewport height) and hide
    // again when the user is near the contact section (so it doesn't double up
    // with the inline CTA).
    const onScroll = () => {
      const heroOut = window.scrollY > window.innerHeight * 0.7;
      const contact = document.getElementById("contact");
      const nearContact =
        contact !== null &&
        contact.getBoundingClientRect().top < window.innerHeight * 0.9;
      setVisible(heroOut && !nearContact);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(DISMISS_KEY, "1");
    }
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-40 -translate-x-1/2 px-4 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-8"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3 rounded-full border border-cyan-400/30 bg-slate-900/95 px-3 py-2 shadow-2xl shadow-cyan-500/20 backdrop-blur-md sm:px-4">
        <span className="hidden text-sm text-slate-300 sm:inline">
          Ready to scope an architecture sprint?
        </span>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40"
          data-event="cta_click"
          data-payload='{"location":"sticky_cta"}'
        >
          Book a call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="rounded-full p-1.5 text-slate-500 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
