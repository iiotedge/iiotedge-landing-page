import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">IIoTEdge</div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Powering the future of edge intelligence.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <div className="flex flex-col gap-2">
            <Link href="#core-focus">Core Focus</Link>
            <Link href="#ecosystem">Ecosystem</Link>
            <Link href="#deliverables">What We Deliver</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="#industries">Industries</Link>
            <Link href="#why-choose">Why Us</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </nav>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          <div>© {new Date().getFullYear()} IIoTEdge. All rights reserved.</div>
          <div className="mt-2">
            <a href="mailto:info@iiotedge.com" className="underline decoration-zinc-400 hover:decoration-zinc-800 dark:hover:decoration-zinc-200">
              info@iiotedge.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


