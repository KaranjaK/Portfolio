import { useEffect, useState } from "react";
import { profile, stats } from "../data/portfolio";

const ROLES = [
  "Full-Stack Developer",
  "React Specialist",
  "Django Engineer",
  "Accessibility Advocate",
  "Mentor & Teacher",
];

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((p) => p + 1);
      return;
    }
    const t = setTimeout(
      () => {
        setText((curr) =>
          del ? curr.slice(0, -1) : word.slice(0, curr.length + 1),
        );
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl animate-blob" />
        <div className="absolute top-20 right-0 h-112 w-md rounded-full bg-cyan-400/20 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-900/30 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new opportunities
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>

            <p
              className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 min-h-9"
              aria-live="polite"
            >
              <span className="text-brand-600 dark:text-brand-400">{role}</span>
              <span
                aria-hidden
                className="ml-0.5 inline-block w-0.5 h-6 align-middle bg-brand-500 animate-pulse"
              />
            </p>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/30 hover:shadow-brand-600/60 hover:-translate-y-0.5 transition"
              >
                View My Work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur px-6 py-3 font-semibold text-slate-800 dark:text-slate-100 hover:border-brand-500 dark:hover:border-brand-500 hover:-translate-y-0.5 transition"
              >
                Get in touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold hover:border-brand-500 transition"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.5-3.79-1.5-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.58 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.11 1.16a10.78 10.78 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.34-2.64 5.3-5.15 5.58.4.35.76 1.02.76 2.07v3.07c0 .3.21.65.78.54 4.46-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z" />
                </svg>
                GitHub
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur px-4 py-3 text-center hover:border-brand-500 transition"
                >
                  <dt className="text-xs font-medium text-slate-500 dark:text-slate-400 order-2">
                    {s.label}
                  </dt>
                  <dd className="text-2xl font-extrabold text-gradient">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right side — interactive code card */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-br from-brand-500 to-cyan-400 opacity-20 blur-2xl" />
            <div className="rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-2xl overflow-hidden animate-float">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-mono text-slate-500">
                  ~/karanja/profile.ts
                </span>
              </div>
              <pre className="p-5 text-sm leading-relaxed font-mono text-slate-800 dark:text-slate-200 overflow-x-auto">
                <span className="text-purple-500">const</span>{" "}
                <span className="text-brand-600 dark:text-brand-400">
                  developer
                </span>{" "}
                = {"{"}
                {"  "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  name
                </span>
                :{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'Kelvin Karanja'
                </span>
                ,{"  "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  role
                </span>
                :{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'Full-Stack Dev'
                </span>
                ,{"  "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  stack
                </span>
                : [
                <span className="text-amber-600 dark:text-amber-300">
                  'React'
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'Django'
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'Node'
                </span>
                ],
                {"  "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  years
                </span>
                : <span className="text-rose-500">6</span>,{"  "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  focus
                </span>
                :{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'Accessibility-first UX'
                </span>
                ,{"  "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  openTo
                </span>
                :{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'Remote • Hybrid'
                </span>
                ,{"}"};
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
