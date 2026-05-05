import { useState } from "react";
import { profile } from "../data/portfolio";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const errs: Record<string, string> = {};
    if (name.length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email.";
    if (message.length < 10)
      errs.message = "Message should be at least 10 characters.";
    return { errs, name, email, message };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { errs, name, email, message } = validate(e.currentTarget);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    // Simulated send + open mail client as a fallback so the form is functional.
    await new Promise((r) => setTimeout(r, 900));
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    window.location.href = mailto;
    setStatus("sent");
    e.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  const channels = [
    {
      icon: "📧",
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: "📞",
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "karanja-kelvin",
      href: profile.linkedin,
    },
    { icon: "🐙", label: "GitHub", value: "KaranjaK", href: profile.github },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
            Let's Talk
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Have a project in <span className="text-gradient">mind?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Open to remote and hybrid roles. I'd love to hear about what you're
            building.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          {/* Channels */}
          <div className="space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 hover:border-brand-500 hover:-translate-y-0.5 transition"
              >
                <span
                  aria-hidden
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-cyan-400 text-2xl"
                >
                  {c.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {c.label}
                  </p>
                  <p className="font-medium truncate group-hover:text-brand-600 dark:group-hover:text-brand-400">
                    {c.value}
                  </p>
                </div>
                <svg
                  className="ml-auto h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-sm"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Your name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Field>
              <Field id="email" label="Email address" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field id="subject" label="Subject (optional)">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="input"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field
                id="message"
                label="Tell me about your project"
                error={errors.message}
              >
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="input resize-y"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-7 py-3 font-semibold text-white shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {status === "sending" ? (
                <>
                  <span
                    className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin"
                    aria-hidden
                  />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </>
              )}
            </button>

            <div role="status" aria-live="polite" className="mt-3 text-sm">
              {status === "sent" && (
                <p className="text-emerald-600 dark:text-emerald-400">
                  ✅ Thanks! Your email client should have opened — I'll reply
                  within 24 hours.
                </p>
              )}
            </div>

            <style>{`
              .input {
                width: 100%;
                border-radius: 0.75rem;
                border: 1px solid rgb(203 213 225);
                background: white;
                padding: 0.75rem 1rem;
                font-size: 0.95rem;
                transition: border-color .2s, box-shadow .2s;
              }
              .dark .input {
                background: rgba(15, 23, 42, 0.6);
                border-color: rgb(51 65 85);
                color: rgb(226 232 240);
              }
              .input:focus {
                outline: none;
                border-color: var(--color-brand-500);
                box-shadow: 0 0 0 4px rgba(59,123,255,0.15);
              }
            `}</style>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
