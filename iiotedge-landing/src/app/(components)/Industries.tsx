export default function Industries() {
  const sectors = [
    {
      name: "Discrete & Process Manufacturing",
      blurb: "Stabilize yields, reduce downtime, and coordinate lines with real-time edge visibility.",
    },
    {
      name: "Energy, Oil & Gas",
      blurb: "Monitor wells, substations, and renewables with autonomous inspection and anomaly alerts.",
    },
    {
      name: "Power & Utilities",
      blurb: "Balance loads, orchestrate microgrids, and modernize grid automation without ripping legacy systems.",
    },
    {
      name: "Mining & Heavy Industry",
      blurb: "Bring reliable telemetry, AI safety, and remote operations to harsh, bandwidth-constrained sites.",
    },
    {
      name: "Pharma & Life Sciences",
      blurb: "Achieve compliant production with validated models, batch traceability, and real-time quality checks.",
    },
    {
      name: "Transportation & Logistics",
      blurb: "Optimize fleets, yards, and warehouses with on-vehicle analytics and resilient edge coordination.",
    },
  ];

  return (
    <section id="industries" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="industries-heading">
      <h2 id="industries-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Industries Leading With IIoTEdge
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s) => (
          <div key={s.name} className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <h3 className="text-lg font-medium">{s.name}</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{s.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


