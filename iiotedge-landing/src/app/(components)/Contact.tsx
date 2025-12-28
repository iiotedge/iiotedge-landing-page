"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      // TODO: Replace with your actual form submission endpoint
      // For now, this will log to console and show success
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      // Track form submission
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "form_submit",
          form_name: "contact",
        });
      }

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto mt-20 max-w-6xl px-6"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Let's Build the Edge Together
      </h2>
      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
        Share your initiative and our edge engineering pod will reach out within
        one business day. Email us at{" "}
        <a
          href="mailto:info@iiotedge.com"
          className="underline transition-colors hover:text-black dark:hover:text-white"
        >
          info@iiotedge.com
        </a>{" "}
        or use the form below.
      </p>

      {status === "success" && (
        <div
          className="mt-6 rounded-xl border border-green-500/20 bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200"
          role="alert"
        >
          Thank you! We've received your message and will get back to you within
          one business day.
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-6 rounded-xl border border-red-500/20 bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-200"
          role="alert"
        >
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:info@iiotedge.com" className="underline">
            info@iiotedge.com
          </a>
          .
        </div>
      )}

      <form
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-sm font-medium">
            Name <span className="text-red-500" aria-label="required">*</span>
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
            className={`mt-2 w-full rounded-xl border px-3 py-2 text-sm transition-colors ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-black/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10"
            } bg-white dark:bg-black`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email <span className="text-red-500" aria-label="required">*</span>
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
            className={`mt-2 w-full rounded-xl border px-3 py-2 text-sm transition-colors ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-black/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10"
            } bg-white dark:bg-black`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message{" "}
            <span className="text-red-500" aria-label="required">*</span>
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
            className={`mt-2 w-full rounded-xl border px-3 py-2 text-sm transition-colors ${
              errors.message
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-black/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10"
            } bg-white dark:bg-black`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#383838] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-[#e6e6e6]"
            data-event="form_submit"
            data-payload='{"form":"contact"}'
          >
            {status === "submitting" ? "Sending..." : "Send Project Brief"}
          </button>
        </div>
      </form>
    </section>
  );
}


