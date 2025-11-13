export default function Deliverables() {
  const cards = [
    {
      title: "Rugged Edge Hardware & Field Kits",
      points: [
        "Arm, x86, and RISC-V gateways with modular I/O & GPU options",
        "Certified enclosures for plant, mining, and energy deployments",
        "Reference kits with sensors, connectivity, and starter workloads",
      ],
    },
    {
      title: "IIoTEdge Control Plane",
      points: [
        "Device identity, provisioning, and lifecycle automation",
        "GitOps-style configuration management with safe rollbacks",
        "Fleet-wide observability for workloads, health, and compliance",
      ],
    },
    {
      title: "Edge AI & Advanced Analytics",
      points: [
        "Model packaging for TensorRT, ONNX, and custom runtimes",
        "Closed-loop feedback on drift, confidence, and anomalies",
        "Federated learning pipelines across distributed assets",
      ],
    },
    {
      title: "Delivery & Co-Development Pods",
      points: [
        "Edge-first architecture, pilots, and rollout planning",
        "Integrations with MES, SCADA, ERP, and cloud platforms",
        "24/7 SRE support, shared runbooks, and governed SLAs",
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


