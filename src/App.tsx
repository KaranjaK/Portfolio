import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer, ScrollTop } from "./components/Footer";
import { useReveal, useScrollSpy } from "./hooks/useReveal";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

export default function App() {
  useReveal();
  useScrollSpy(SECTION_IDS);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      < ScrollTop />
    </>
  );
}
