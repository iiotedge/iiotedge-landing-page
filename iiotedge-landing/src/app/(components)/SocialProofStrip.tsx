"use client";

import React from "react";
import { Award, Shield, CheckCircle2, Star, ServerCog, Activity, Clock } from "lucide-react";

interface Certification {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel: string;
}

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const CERTIFICATIONS: Certification[] = [
  { icon: Shield, label: "ISO 27001", sublabel: "Information Security" },
  { icon: Award, label: "Industry 4.0", sublabel: "Production Ready" },
  { icon: CheckCircle2, label: "CE Marked", sublabel: "EU Compliant" },
  { icon: Star, label: "AWS Partner", sublabel: "Verified" },
];

const STATS: Stat[] = [
  { icon: ServerCog, value: "50+", label: "Active Deployments" },
  { icon: Activity, value: "99.95%", label: "Uptime SLA" },
  { icon: Clock, value: "24/7", label: "SRE Support" },
];

const SocialProofStrip = () => {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className="relative overflow-hidden border-y border-slate-800/60 bg-slate-950 py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300">
            <Shield className="h-3.5 w-3.5" />
            Engineered to Enterprise Standards
          </span>
          <h2
            id="social-proof-heading"
            className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Built for the most demanding industrial environments
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Powering operations across manufacturing, energy, logistics and smart infrastructure.
          </p>
        </div>

        {/* Certifications row */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map(({ icon: Icon, label, sublabel }) => (
            <div
              key={label}
              className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5">
                <Icon className="h-4 w-4 text-cyan-300" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-white">{label}</div>
                <div className="truncate text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  {sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-3">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 bg-slate-950 px-6 py-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5">
                <Icon className="h-5 w-5 text-cyan-300" />
              </span>
              <div>
                <div className="text-2xl font-semibold text-white">{value}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-slate-500">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
