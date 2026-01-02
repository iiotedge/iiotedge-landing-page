export default function Overview() {
  const whatWeOffer = [
    "End-to-End IoT Solutions – from edge devices to cloud platforms, ensuring seamless connectivity and management.",
    "Custom Devices & Controllers – purpose-built IoT cards, gateways, and controllers designed for industrial, EV, energy, and smart factory environments.",
    "Cloud & Management Platforms – secure and scalable platforms for device management, analytics, and enterprise integrations.",
    "Smart Insights & Automation – AI-powered analytics to reduce downtime, predict failures, and improve efficiency.",
    "Outsourcing & Development Services – flexible models for companies looking to accelerate their digital transformation.",
  ];

  const outsourcingServices = [
    "Custom Software Development – web, mobile, and enterprise applications.",
    "Product Engineering – hardware design, prototyping, and embedded systems.",
    "Dedicated Engineering Teams – experts working as an extension of your business.",
    "Integration & Ongoing Support – smooth adoption, scaling, and 24/7 assistance.",
  ];

  const whyChoosePoints = [
    "One-stop partner for IoT hardware, software, cloud, and AI.",
    "Scalable and secure solutions designed for industrial needs.",
    "Proven expertise in both product development and outsourcing.",
    "Flexible engagement models for startups, SMEs, and enterprises.",
  ];

  return (
    <section id="overview" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="overview-heading">
      <div className="space-y-12">
        {/* About Section */}
        <div>
          <h2 id="overview-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About IIoTEdge
          </h2>
          <div className="mt-6 space-y-4 text-base text-zinc-700 dark:text-zinc-300">
            <p>
              At IIoTEdge, we go beyond hardware and software — we provide complete Industrial IoT solutions that help businesses connect, monitor, and optimize operations in real time.
            </p>
            <p>
              We combine smart devices, secure platforms, and AI-driven intelligence into a single ecosystem that delivers reliability, scalability, and future readiness.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What We Offer
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            {whatWeOffer.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span aria-hidden className="text-lg">🔹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outsourcing & Development Services */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Our Outsourcing & Development Services Include
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            {outsourcingServices.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span aria-hidden className="text-lg">🔹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose IIoTEdge */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Why Choose IIoTEdge?
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            {whyChoosePoints.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span aria-hidden>✔️</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Details */}
        <div className="rounded-2xl border border-black/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-zinc-900/50">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl mb-4">
            Company Information
          </h3>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Website</dt>
              <dd className="mt-1">
                <a
                  href="https://iiotedge.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  iiotedge.in
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Industry</dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Technology, Information and Internet
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Company Size</dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">2-10 employees</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Founded</dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">2024</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

