export default function WhyChoose() {
  const points = [
    "Edge-First Architecture — Compute where it matters most",
    "AI-Driven Insights — Smarter decisions with local analytics",
    "Resilient & Secure — Built for harsh industrial environments",
    "Open & Scalable — Compatible with existing infrastructure",
    "End-to-End Expertise — From device to dashboard",
  ];
  return (
    <section id="why-choose" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="why-choose-heading">
      <h2 id="why-choose-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Why Choose IIoTEdge
      </h2>
      <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <span aria-hidden>✅</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}


