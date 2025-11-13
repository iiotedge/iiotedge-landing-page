"use client";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Let's Build the Edge Together
      </h2>
      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
        Share your initiative and our edge engineering pod will reach out within one business day. Email us at{" "}
        <a href="mailto:info@iiotedge.com" className="underline">info@iiotedge.com</a> or use the form below.
      </p>
      <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input id="name" name="name" type="text" required className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-black" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-black" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-black"></textarea>
        </div>
        <div className="sm:col-span-2">
          <button type="submit" className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#e6e6e6]">
            Send Project Brief
          </button>
        </div>
      </form>
    </section>
  );
}


