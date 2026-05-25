"use client";

import { useEffect } from "react";

type AnalyticsEvent = Record<string, unknown> & { event: string };
type WindowWithDataLayer = Window & { dataLayer?: AnalyticsEvent[] };

export default function AnalyticsClient() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const el = target.closest<HTMLElement>("[data-event]");
      if (!el) return;
      const eventName = el.dataset.event;
      const payload: Record<string, unknown> = el.dataset.payload
        ? JSON.parse(el.dataset.payload)
        : {};
      if (!eventName) return;
      if (typeof window !== "undefined") {
        const w = window as WindowWithDataLayer;
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: eventName, ...payload });
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);
  return null;
}


