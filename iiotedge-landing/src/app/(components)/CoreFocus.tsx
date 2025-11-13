export default function CoreFocus() {
  const items = [
    {
      title: "Unified Edge Orchestration",
      description:
        "Push containers, rules, and firmware to thousands of sites with one automated pipeline.",
      icon: "🧭",
    },
    {
      title: "Deterministic Telemetry Fabric",
      description:
        "Buffer, compress, and stream sensor data with millisecond fidelity and built-in QoS.",
      icon: "📡",
    },
    {
      title: "AI Lifecycle Automation",
      description: "Version, monitor, and retrain edge-resident ML models from a single control plane.",
      icon: "🤖",
    },
    {
      title: "Zero-Trust Security Mesh",
      description:
        "Hardware attestation, policy-based routing, and encrypted comms across every device.",
      icon: "🔐",
    },
    {
      title: "Offline-First Resilience",
      description: "Keep plants productive across lossy or air-gapped networks with local autonomy.",
      icon: "⚡️",
    },
    {
      title: "Operations Studio",
      description: "Convert raw telemetry into dashboards, workflows, and closed-loop automations.",
      icon: "📊",
    },
  ];

  return (
    <section id="core-focus" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="core-focus-heading">
      <h2 id="core-focus-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Core Edge Capabilities
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <div className="text-2xl" aria-hidden>{item.icon}</div>
            <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


