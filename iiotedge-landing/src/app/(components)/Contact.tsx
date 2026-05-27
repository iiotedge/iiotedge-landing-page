"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const trustPoints = [
  "Architecture sprint within 5 business days",
  "Pilot-to-production rollout plans",
  "24/7 SRE coverage with shared runbooks",
  "ISO 27001 controls and zero-trust by default",
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Tell us about your initiative";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "At least 10 characters, please";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      setErrors({});
      if (typeof window !== "undefined") {
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "form_submit", form_name: "contact" });
      }
      setTimeout(() => setStatus("idle"), 6000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const fieldBase =
    "mt-2 w-full rounded-lg border bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2";
  const fieldOk =
    "border-slate-700 focus:border-cyan-400/50 focus:ring-cyan-400/20";
  const fieldErr =
    "border-red-500/60 focus:border-red-500 focus:ring-red-500/20";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.12), transparent 50%), radial-gradient(circle at 80% 80%, rgba(37,99,235,0.12), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: CTA + trust points (PartnerCTA absorbed) */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              Partner With Us
            </span>
            <h2
              id="contact-heading"
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Let&apos;s build the{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                edge together
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Whether you&apos;re modernizing brownfield infrastructure or launching greenfield industrial intelligence,
              our edge engineering pod will scope an architecture sprint with you in one business day.
            </p>

            <ul className="mt-8 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-[15px]">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4 border-t border-slate-800 pt-8">
              <a
                href="mailto:info@iiotedge.com"
                className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/5">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</div>
                  <div className="text-sm font-medium">info@iiotedge.com</div>
                </div>
              </a>
              <a
                href="tel:+918506031507"
                className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/5">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Talk to us</div>
                  <div className="text-sm font-medium">+91 85060 31507</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Headquarters</div>
                  <div className="text-sm font-medium">Bengaluru, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-sm shadow-2xl shadow-cyan-950/20 sm:p-10">
              <h3 className="text-xl font-semibold text-white">Send a project brief</h3>
              <p className="mt-1 text-sm text-slate-400">We&apos;ll respond within one business day.</p>

              {status === "success" && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 text-sm text-emerald-200"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    Thanks — your brief is in. An engineer will reach out within one business day.
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-200"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <div>
                    Something went wrong. Please retry, or email{" "}
                    <a href="mailto:info@iiotedge.com" className="underline">
                      info@iiotedge.com
                    </a>
                    .
                  </div>
                </div>
              )}

              <form className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}
                    placeholder="Jane Smith"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                    Work email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
                    placeholder="jane@acme.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className={`${fieldBase} ${fieldOk}`}
                    placeholder="Acme Industrial"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                    Tell us about your initiative <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${fieldBase} ${errors.message ? fieldErr : fieldOk}`}
                    placeholder="We&apos;re modernizing 12 plant sites and want edge AI for predictive maintenance…"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2 flex items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    We treat every brief as confidential. No marketing list, no spam.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-50"
                    data-event="form_submit"
                    data-payload='{"form":"contact"}'
                  >
                    {status === "submitting" ? "Sending..." : "Send Project Brief"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
