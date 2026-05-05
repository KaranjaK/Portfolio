import { Navbar } from "./components/Navbar";
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
      <Navbar />
    </>
  );
}
