import { useState } from "react";
import { projects } from "../data/portfolio";

const filters = ["All", "React", "Django", "TypeScript", "REST API"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = projects.filter(
    (p) => filter === "All" || p.tech.includes(filter)
  );

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 scroll-mt-20 bg-slate-50 dark:bg-slate-950/40"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
              Selected Work
            </p>
            <h2 id="projects-heading" className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Projects that <span className="text-gradient">deliver impact</span>.
            </h2>
          </div>
          <div role="group" aria-label="Filter projects by technology" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  filter === f
                    ? "border-brand-500 bg-brand-500 text-white shadow-md shadow-brand-500/30"
                    : "border-slate-300 dark:border-slate-700 hover:border-brand-500"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10"
            >
              <div className={`relative h-44 bg-linear-to-br ${p.accent}`}>
                <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
                <span aria-hidden className="absolute inset-0 grid place-items-center text-7xl drop-shadow-md transition-transform duration-500 group-hover:scale-110">
                  {p.emoji}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} (new tab)`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-500 hover:text-white transition"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-brand-50 dark:bg-brand-900/30 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-slate-500">No projects match this filter yet.</p>
        )}
      </div>
    </section>
  );
}
