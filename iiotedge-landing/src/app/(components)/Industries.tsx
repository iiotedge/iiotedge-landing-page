export default function Industries() {
  const sectors = [
    { name: "Smart Manufacturing & Automation", blurb: "Optimize production with real-time insights and control." },
    { name: "Energy & Utilities", blurb: "Improve reliability and efficiency across distributed assets." },
    { name: "Industrial Safety & Monitoring", blurb: "Detect anomalies and prevent incidents proactively." },
    { name: "Transportation & Fleet", blurb: "Track, analyze, and optimize fleet operations at the edge." },
    { name: "Smart Infrastructure & Cities", blurb: "Enable responsive, data-driven infrastructure." },
  ];

  return (
    <section id="industries" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="industries-heading">
      <h2 id="industries-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Industries We Empower
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


