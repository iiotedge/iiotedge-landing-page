import Link from "next/link";

export default function PartnerCTA() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="partner-heading">
      <div className="rounded-3xl bg-black px-8 py-12 text-white dark:bg-white dark:text-black">
        <h2 id="partner-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Partner With Us
        </h2>
        <p className="mt-3 max-w-prose text-sm sm:text-base">
          Whether you’re modernizing existing systems or building next‑gen industrial intelligence, IIoTEdge is your trusted partner.
        </p>
        <Link
          href="#contact"
          className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}


