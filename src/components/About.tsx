import { profile, education } from "../data/portfolio";

const values = [
  {
    icon: "♿",
    title: "Accessibility First",
    text: "I build inclusive interfaces by default — keyboard navigable, screen-reader friendly and WCAG-aligned.",
  },
  {
    icon: "📐",
    title: "Scalable Architecture",
    text: "From RESTful APIs to component design systems, I focus on maintainability and developer experience.",
  },
  {
    icon: "🎯",
    title: "Outcome Driven",
    text: "Measurable results — improved comprehension by 87%, code quality at 92.57%, learner literacy +30%.",
  },
  {
    icon: "🤝",
    title: "Mentor & Collaborator",
    text: "Years of mentoring bootcamp learners and reviewing peer code with a 97% phase transition rate.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
            About Me
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Crafting software with{" "}
            <span className="text-gradient">purpose</span>.
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {profile.summary}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, idx) => (
            <article
              key={v.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-500 transition-all duration-300"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-linear-to-br from-brand-500/0 to-cyan-400/0 group-hover:from-brand-500/10 group-hover:to-cyan-400/10 transition"
              />
              <div className="text-3xl" aria-hidden>
                {v.icon}
              </div>
              <h3 className="mt-3 font-bold text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {v.text}
              </p>
            </article>
          ))}
        </div>

        {/* Education */}
        <div className="reveal mt-16">
          <h3 className="text-xl font-bold flex items-center gap-3">
            <span aria-hidden className="text-2xl">
              🎓
            </span>{" "}
            Education
          </h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {education.map((e) => (
              <li
                key={e.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 hover:border-brand-500 transition"
              >
                <p className="text-xs font-mono text-brand-600 dark:text-brand-400">
                  {e.period}
                </p>
                <p className="mt-2 font-semibold leading-snug">{e.title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {e.org}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
