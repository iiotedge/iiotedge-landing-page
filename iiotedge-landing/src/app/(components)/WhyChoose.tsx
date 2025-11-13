export default function WhyChoose() {
  const points = [
    "Offline-first reliability - keep production running through outages",
    "Continuous intelligence - instrument models, data, and actions in real time",
    "Zero-trust security - hardware attestation, policy enforcement, and encryption by default",
    "Protocol-agnostic integration - bridge brownfield PLCs with modern cloud-native workloads",
    "Delivery pods - multidisciplinary teams from architecture to 24/7 operations",
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


