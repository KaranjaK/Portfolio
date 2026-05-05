import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 items-center">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-cyan-400 text-white font-bold"
          >
            KK
          </span>
          <div>
            <p className="font-bold">{profile.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {profile.title}
            </p>
          </div>
        </div>
        <div className="sm:text-right text-sm text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {profile.name}. Crafted with React,
            TypeScript & Tailwind.
          </p>
          <p className="mt-1">
            {profile.location} · Open to remote & hybrid roles
          </p>
        </div>
      </div>
    </footer>
  );
}

export function ScrollTop() {
  return (
    <a
      href="#home"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-linear-to-br from-brand-600 to-brand-500 text-white shadow-xl shadow-brand-600/40 hover:-translate-y-1 transition opacity-80 hover:opacity-100"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </a>
  );
}
