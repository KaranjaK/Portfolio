import { useState } from "react";
import { experience } from "../data/portfolio";

export function Experience() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
            Career Journey
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            6+ years of{" "}
            <span className="text-gradient">building & teaching</span>.
          </h2>
        </div>

        <ol className="reveal relative mt-14 ml-3 sm:ml-6 border-l-2 border-dashed border-slate-300 dark:border-slate-700 space-y-6">
          {experience.map((exp, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="relative pl-6 sm:pl-10">
                <span
                  aria-hidden
                  className={`absolute -left-2.75 sm:-left-3.25 top-4 grid h-5 w-5 sm:h-6 sm:w-6 place-items-center rounded-full ring-4 ring-white dark:ring-slate-950 transition ${
                    exp.current
                      ? "bg-linear-to-br from-emerald-400 to-cyan-400 animate-pulse"
                      : "bg-linear-to-br from-brand-500 to-cyan-400"
                  }`}
                >
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white" />
                </span>

                <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`exp-panel-${i}`}
                    className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-lg sm:text-xl">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                        {exp.company} ·{" "}
                        <span className="text-slate-500 dark:text-slate-400">
                          {exp.location}
                        </span>
                      </p>
                      <p className="mt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                        {exp.period}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className={`shrink-0 grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-slate-800 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`exp-panel-${i}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                          {exp.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="flex gap-2 text-sm sm:text-[0.95rem] leading-relaxed"
                            >
                              <span
                                aria-hidden
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
