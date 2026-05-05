const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  return (
    <>
      <ul className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              data-nav={l.id}
              className="relative px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors data-[active=true]:text-brand-600 dark:data-[active=true]:text-brand-400 group"
            >
              {l.label}
              <span
                aria-hidden
                className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100 group-data-[active=true]:scale-x-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
