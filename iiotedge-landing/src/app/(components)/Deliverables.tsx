export default function Deliverables() {
  const cards = [
    {
      title: "Edge Hardware & Embedded Solutions",
      points: [
        "STM32 & RISC-V industrial controllers",
        "Modular comms (4G/5G, Ethernet, RS-485, LoRa)",
        "Edge gateways with on-device analytics",
      ],
    },
    {
      title: "Edge Computing Platform",
      points: [
        "Local rule engine & event handling",
        "Real-time stream processing & decisions",
        "Secure OTA firmware management & diagnostics",
      ],
    },
    {
      title: "Edge AI & Automation",
      points: [
        "Predictive maintenance at the edge",
        "On-device ML models",
        "Containerized model deployment",
      ],
    },
    {
      title: "Engineering & Outsourced Development",
      points: [
        "Firmware & PCB design",
        "IoT app development & cloud integration",
        "Industrial-grade testing & deployment",
      ],
    },
  ];

  return (
    <section id="deliverables" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="deliverables-heading">
      <h2 id="deliverables-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        What We Deliver
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <h3 className="text-lg font-medium">{card.title}</h3>
            <ul className="mt-3 list-outside space-y-2 pl-0 text-sm text-zinc-700 dark:text-zinc-300">
              {card.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span aria-hidden>•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


