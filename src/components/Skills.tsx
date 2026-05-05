import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

export function Skills() {
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const group = skills[active];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 scroll-mt-20 bg-slate-50 dark:bg-slate-950/40"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
            Tech Stack
          </p>
          <h2
            id="skills-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Tools I use to <span className="text-gradient">build</span>.
          </h2>
        </div>

        <div
          ref={ref}
          className="reveal mt-12 grid gap-8 lg:grid-cols-[260px,1fr]"
        >
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:m-0 lg:p-0 snap-x"
          >
            {skills.map((g, i) => (
              <button
                key={g.category}
                role="tab"
                id={`skill-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`skill-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowRight")
                    setActive((a) => (a + 1) % skills.length);
                  if (e.key === "ArrowUp" || e.key === "ArrowLeft")
                    setActive((a) => (a - 1 + skills.length) % skills.length);
                }}
                className={`shrink-0 snap-start flex items-center gap-3 rounded-xl border px-4 py-3 text-left font-semibold transition ${
                  active === i
                    ? "border-brand-500 bg-linear-to-r from-brand-500/10 to-cyan-400/10 text-brand-700 dark:text-brand-300"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-brand-400"
                }`}
              >
                <span aria-hidden className="text-xl">
                  {g.icon}
                </span>
                <span className="text-sm whitespace-nowrap">{g.category}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            role="tabpanel"
            id={`skill-panel-${active}`}
            aria-labelledby={`skill-tab-${active}`}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-sm"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {group.items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {item.years}
                    </span>
                  </div>
                  <div
                    className="relative h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden"
                    role="progressbar"
                    aria-valuenow={item.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${item.name} proficiency`}
                  >
                    <div
                      className="h-full rounded-full bg-linear-to-r from-brand-500 via-cyan-400 to-brand-500 transition-[width] duration-1000 ease-out"
                      style={{
                        width: animated ? `${item.level}%` : "0%",
                        backgroundSize: "200% 100%",
                        animation: animated
                          ? "shimmer 2.5s linear infinite"
                          : undefined,
                      }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 text-right">
                    {item.level}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
