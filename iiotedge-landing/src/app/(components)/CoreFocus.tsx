export default function CoreFocus() {
  const items = [
    {
      title: "Edge AI Processing",
      description:
        "Analyze telemetry, detect anomalies, and make decisions in real time.",
      icon: "⚙️",
    },
    {
      title: "Offline Autonomy",
      description:
        "Continue operations even without internet connectivity.",
      icon: "🔌",
    },
    {
      title: "Secure OTA Updates",
      description: "Update firmware and software safely over the air.",
      icon: "🔒",
    },
    {
      title: "Multi-Protocol Support",
      description:
        "CAN, RS-485, MQTT, Modbus, LoRa, Ethernet, and 4G/5G connectivity.",
      icon: "🔗",
    },
    {
      title: "Containerized Edge Apps",
      description:
        "Deploy your own analytics or control logic with container support.",
      icon: "📦",
    },
  ];

  return (
    <section id="core-focus" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="core-focus-heading">
      <h2 id="core-focus-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Our Core Focus — Edge Computing
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


