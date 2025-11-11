import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          IIoTEdge
        </Link>
        <nav className="hidden gap-6 text-sm text-zinc-700 md:flex dark:text-zinc-300">
          <Link href="#core-focus" className="hover:text-black dark:hover:text-white">Core Focus</Link>
          <Link href="#ecosystem" className="hover:text-black dark:hover:text-white">Ecosystem</Link>
          <Link href="#deliverables" className="hover:text-black dark:hover:text-white">What We Deliver</Link>
          <Link href="#industries" className="hover:text-black dark:hover:text-white">Industries</Link>
          <Link href="#why-choose" className="hover:text-black dark:hover:text-white">Why Us</Link>
          <Link href="#contact" className="hover:text-black dark:hover:text-white">Contact</Link>
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#e6e6e6]"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}


