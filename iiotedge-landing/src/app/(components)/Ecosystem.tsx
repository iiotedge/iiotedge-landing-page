export default function Ecosystem() {
  const layers = [
    {
      name: "Edge Layer",
      description:
        "Rugged hardware, intelligent firmware, and local data processing.",
    },
    {
      name: "Cloud Layer",
      description:
        "Scalable microservices for device management, analytics, and visualization.",
    },
    {
      name: "Intelligence Layer",
      description:
        "AI models for predictive maintenance, operational optimization, and anomaly detection.",
    },
  ];
  return (
    <section id="ecosystem" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="ecosystem-heading">
      <h2 id="ecosystem-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Our Edge-to-Cloud Ecosystem
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {layers.map((layer) => (
          <div key={layer.name} className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <h3 className="text-lg font-medium">{layer.name}</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{layer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


