"use client";

import { useEffect } from "react";

export default function AnalyticsClient() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const el = target.closest<HTMLElement>("[data-event]");
      if (!el) return;
      const eventName = el.dataset.event;
      const payload = el.dataset.payload ? JSON.parse(el.dataset.payload) : {};
      if (!eventName) return;
      // Console for development; push to dataLayer if present
      // eslint-disable-next-line no-console
      console.log("analytics:event", eventName, payload);
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({ event: eventName, ...payload });
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);
  return null;
}


