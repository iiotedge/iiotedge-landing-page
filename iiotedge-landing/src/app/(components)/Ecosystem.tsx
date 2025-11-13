export default function Ecosystem() {
  const layers = [
    {
      name: "Edge Fabric",
      description:
        "Industrial gateways, PLC bridges, time-series buffers, and deterministic runtime services.",
    },
    {
      name: "Control Plane",
      description: "Device onboarding, configuration-as-code, fleet diagnostics, and secure OTA orchestration.",
    },
    {
      name: "Intelligence Ops",
      description: "Model registry, performance scoring, drift detection, and automated retraining pipelines.",
    },
    {
      name: "Integration Mesh",
      description: "REST, OPC UA, MQTT, GraphQL, and data lake connectors for enterprise systems.",
    },
  ];
  return (
    <section id="ecosystem" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="ecosystem-heading">
      <h2 id="ecosystem-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        An Edge-to-Cloud Operating System
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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


