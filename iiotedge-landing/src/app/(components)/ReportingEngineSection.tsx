import Image from "next/image";
import {
  BarChart3,
  LineChart,
  Bell,
  PieChart,
  Grid3x3,
  FileCheck,
  Wrench,
  Sliders,
  ArrowRight,
  Activity,
  Calendar,
  CircleDot,
  Sparkles,
} from "lucide-react";

const REPORT_TYPES: Array<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  accent: string;
  border: string;
  iconColor: string;
}> = [
  {
    icon: BarChart3,
    title: "Device Performance",
    desc: "Analyze device performance metrics, uptime and efficiency.",
    accent: "bg-blue-500/10",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: LineChart,
    title: "Energy Consumption",
    desc: "Track energy usage patterns and optimization opportunities.",
    accent: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: Bell,
    title: "Alarm & Alert",
    desc: "Summary of system alarms, alerts and their resolution status.",
    accent: "bg-amber-500/10",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    icon: PieChart,
    title: "Production Efficiency",
    desc: "Production metrics, throughput and efficiency analysis.",
    accent: "bg-purple-500/10",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Grid3x3,
    title: "Asset Utilization",
    desc: "Asset usage, maintenance schedules and lifecycle analysis.",
    accent: "bg-rose-500/10",
    border: "border-rose-500/30",
    iconColor: "text-rose-400",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    desc: "Regulatory compliance status and audit trails.",
    accent: "bg-teal-500/10",
    border: "border-teal-500/30",
    iconColor: "text-teal-400",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Maintenance activities, schedules and equipment health.",
    accent: "bg-orange-500/10",
    border: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    icon: Sliders,
    title: "Custom Report",
    desc: "Build a custom report with specific data sources and metrics.",
    accent: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
];

const SCHEDULE_MODES = ["Manual", "Daily", "Weekly", "Monthly"];

function BrowserFrame({
  src,
  alt,
  url,
  aspect = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  url: string;
  aspect?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/30">
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        <div className="ml-3 flex-1 truncate rounded bg-slate-950/80 px-3 py-1 text-center font-mono text-[11px] text-slate-500">
          {url}
        </div>
      </div>
      <div className={`relative w-full ${aspect} bg-slate-50`}>
        {/* All three Reporting Engine screenshots are eager-loaded so a print/PDF
            capture catches them even without the user scrolling. They're below the
            fold but central to the section's credibility. */}
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function ReportingEngineSection() {
  return (
    <section
      id="reports"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[420px] w-[820px] rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            Reporting Engine
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Turn noisy edge data into{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              clear operational value
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Manage report configurations, schedules and data exports in one console. Orchestrate
            device profiles, map metrics and ship branded PDFs to stakeholders on the cadence your
            operations actually run on — Manual, Daily, Weekly or Monthly.
          </p>
        </div>

        {/* Hero screenshot — Reports dashboard */}
        <div className="mt-16">
          <BrowserFrame
            src="/images/screenshots/reports-dashboard.jpeg"
            alt="IIoTEdge Reports dashboard listing report configurations, schedules and live system status"
            url="demo.iiotedge.in/reports"
          />
        </div>

        {/* Live stats strip — matches the real product header */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 md:grid-cols-4">
          {[
            {
              icon: BarChart3,
              label: "Configurations",
              value: "Unlimited",
              hint: "Per-tenant, per-environment",
              color: "text-blue-400",
            },
            {
              icon: Calendar,
              label: "Active Schedules",
              value: "Cron-grade",
              hint: "Manual / Daily / Weekly / Monthly",
              color: "text-emerald-400",
            },
            {
              icon: CircleDot,
              label: "System Status",
              value: "Processing Service Active",
              hint: "Decoupled async event streams",
              color: "text-emerald-400",
            },
            {
              icon: Activity,
              label: "Generation Success Rate",
              value: "99.9%",
              hint: "Retries + idempotent generation",
              color: "text-cyan-300",
            },
          ].map(({ icon: Icon, label, value, hint, color }) => (
            <div key={label} className="bg-slate-950 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Icon className={`h-3.5 w-3.5 ${color}`} />
                {label}
              </div>
              <div className="mt-3 text-xl font-semibold text-white">{value}</div>
              <div className="mt-1 text-xs text-slate-500">{hint}</div>
            </div>
          ))}
        </div>

        {/* 8 Report Types grid */}
        <div className="mt-24">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Eight report types — one orchestration layer
              </span>
              <h3 className="mt-2 text-3xl font-semibold text-white">
                Built-in templates, plus a custom builder for the long tail
              </h3>
            </div>
            <a
              href="https://demo.iiotedge.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/5 sm:self-end"
              data-event="cta_click"
              data-payload='{"location":"reporting_engine_demo"}'
            >
              Try in Live Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
            {REPORT_TYPES.map(({ icon: Icon, title, desc, accent, border, iconColor }) => (
              <div
                key={title}
                className="group relative overflow-hidden bg-slate-950 p-6 transition-colors duration-300 hover:bg-slate-900"
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${border} ${accent}`}
                >
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </span>
                <h4 className="mt-4 text-base font-semibold text-white">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two-column secondary screenshots */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Step 1 — Pick a type
            </span>
            <h3 className="mt-2 mb-6 text-2xl font-semibold text-white">
              Open the wizard
            </h3>
            <BrowserFrame
              src="/images/screenshots/report-types.jpeg"
              alt="Report type selection wizard with eight pre-built report templates and a Custom Report option"
              url="demo.iiotedge.in/reports/new"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Step 2 — Configure
            </span>
            <h3 className="mt-2 mb-6 text-2xl font-semibold text-white">
              Map metrics, schedule delivery, ship to stakeholders
            </h3>
            <BrowserFrame
              src="/images/screenshots/create-report.jpeg"
              alt="Report configuration form showing report name, output format, data mapping profile, asset selector, time range, metrics and scheduling options"
              url="demo.iiotedge.in/reports/new/configure"
            />
          </div>
        </div>

        {/* Architecture note */}
        <div className="mt-20 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-sm sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Architecture
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Decoupled by design — config layer talks to processing service through clean,
                asynchronous event streams.
              </h3>
              <p className="mt-4 text-slate-400">
                Schedule a thousand reports across a thousand sites. The orchestration layer stays
                responsive under load because configuration and generation never block each other.
                AI / LLM predictive insights plug into the same pipeline next — same contracts, same
                identity, same observability.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Schedule modes
              </div>
              <div className="flex flex-wrap gap-2">
                {SCHEDULE_MODES.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {mode}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Output formats
              </div>
              <div className="flex flex-wrap gap-2">
                {["PDF", "CSV", "XLSX", "JSON"].map((fmt) => (
                  <span
                    key={fmt}
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
