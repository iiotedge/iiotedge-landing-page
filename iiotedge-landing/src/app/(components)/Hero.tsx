import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
            IIoTEdge — Powering the Future of Edge Intelligence
          </h1>
          <p className="mt-4 max-w-prose text-lg text-zinc-700 dark:text-zinc-300">
            Smarter industries begin at the edge. Process, analyze, and act on data locally for real-time decisions, security, and resilience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              data-event="hero_cta_primary_clicked"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#e6e6e6]"
            >
              Contact Us
            </Link>
            <Link
              href="#core-focus"
              data-event="hero_cta_secondary_clicked"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-black hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Explore Platform
            </Link>
          </div>
          <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Formerly IoTMining</div>
        </div>
        <div className="relative aspect-[4/3] w-full md:aspect-[16/12]">
          <Image
            src="/globe.svg"
            alt="Edge network visualization"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain dark:invert"
          />
        </div>
      </div>
    </section>
  );
}


