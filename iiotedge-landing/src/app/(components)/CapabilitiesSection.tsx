import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  Cpu,
  GitBranch,
  Lock,
  Activity,
  LineChart,
  Wifi,
  ServerCog,
  Sparkles,
} from "lucide-react";

const hardwareBullets = [
  "Arm, x86 and RISC-V gateways with modular I/O and on-device GPU",
  "Zero-Touch Provisioning with cache-aside Redis OTP authentication",
  "Bi-directional MQTT closed loop with strict ACK confirmation",
  "IP67-rated enclosures certified for plant, mining and energy sites",
];

const platformBullets = [
  "Reporting Engine — device-profile selection, metric mapping, scheduled exports",
  "Decoupled async event streams between configuration layer and processing service",
  "Edge model registry with drift detection and automated retraining",
  "AI / LLM predictive maintenance insights (in delivery)",
];

const capabilities = [
  {
    icon: Boxes,
    title: "Unified Edge Orchestration",
    desc: "Push containers, rules and firmware to thousands of sites through one automated pipeline.",
  },
  {
    icon: Activity,
    title: "Deterministic Telemetry",
    desc: "Buffer, compress and stream sensor data with millisecond fidelity and built-in QoS.",
  },
  {
    icon: Sparkles,
    title: "AI Lifecycle Automation",
    desc: "Version, monitor and retrain edge-resident ML models from a single control plane.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Security",
    desc: "Hardware attestation, policy routing and encrypted comms across every device on the network.",
  },
  {
    icon: Wifi,
    title: "Offline-First Resilience",
    desc: "Keep plants productive through lossy or air-gapped links with local autonomy and resync.",
  },
  {
    icon: LineChart,
    title: "Operations Studio",
    desc: "Convert raw telemetry into dashboards, workflows and closed-loop automations without code.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-300">
          <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <span className="text-[15px] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Section background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
            <ServerCog className="h-3.5 w-3.5" />
            Capabilities
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Engineering at every layer{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              of the industrial stack
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            From ruggedized field hardware to a fleet-wide control plane and edge-resident AI, IIoTEdge ships the full
            stack — and the engineering pod that runs it with you.
          </p>
        </div>

        {/* Block 1: Hardware (image left, text right) */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-blue-950/40">
              <Image
                src="/images/hardware/edge-device.webp"
                alt="Rugged industrial edge gateway hardware"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur">
                  IP67
                </span>
                <span className="rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur">
                  -40 to 75&deg;C
                </span>
                <span className="rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur">
                  Arm / x86 / RISC-V
                </span>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-2xl"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 text-cyan-400">
              <Cpu className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Hardware &amp; Field Kits</span>
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Rugged hardware built for the floor — not the lab
            </h3>
            <p className="mt-4 text-slate-400">
              Gateways and controllers engineered to survive the temperatures, vibration and bandwidth realities of real
              industrial environments. Modular I/O lets you wire any sensor, any protocol, any time.
            </p>
            <div className="mt-8">
              <BulletList items={hardwareBullets} />
            </div>
          </div>
        </div>

        {/* Block 2: Platform (text left, image right) */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-950/40">
              <Image
                src="/images/hardware/control-room.webp"
                alt="Industrial control room with real-time dashboards"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur">
                  GitOps rollouts
                </span>
                <span className="rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur">
                  &lt;50ms refresh
                </span>
                <span className="rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur">
                  Drift detection
                </span>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tl from-blue-500/10 to-cyan-500/10 blur-2xl"
            />
          </div>

          <div className="lg:order-1">
            <div className="flex items-center gap-3 text-cyan-400">
              <GitBranch className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Control Plane &amp; AI</span>
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Software, models and operations that run themselves
            </h3>
            <p className="mt-4 text-slate-400">
              Configuration as code, fleet-wide observability and an edge model registry that detects drift before it
              shows up on a plant floor. Deploy once. Manage everything from one console.
            </p>
            <div className="mt-8">
              <BulletList items={platformBullets} />
            </div>
          </div>
        </div>

        {/* Block 3: 6 capability cards */}
        <div className="mt-24">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Six Core Capabilities
              </span>
              <h3 className="mt-2 text-3xl font-semibold text-white">A single platform. Six engineering pillars.</h3>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden bg-slate-950 p-8 transition-colors duration-300 hover:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 transition-colors group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="text-base font-semibold text-white">{title}</h4>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{desc}</p>
                <ArrowRight className="absolute right-6 top-6 h-4 w-4 text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
