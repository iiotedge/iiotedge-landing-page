import Link from "next/link";

export default function PartnerCTA() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="partner-heading">
      <div className="rounded-3xl bg-black px-8 py-12 text-white dark:bg-white dark:text-black">
        <h2 id="partner-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Partner With Our Edge Experts
        </h2>
        <p className="mt-3 max-w-prose text-sm sm:text-base">
          Transform pilots into production edge programs with architecture sprints, co-development pods, and 24/7 operations support tailored to your environment.
        </p>
        <Link
          href="#contact"
          className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
        >
          Book a Strategy Call
        </Link>
      </div>
    </section>
  );
}


