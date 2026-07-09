import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { CheckerStrip } from "./components/decor";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        // Single continuous page background — must not restart per section
        background: "linear-gradient(192.4deg, #191D1A 22.22%, #01160C 68.35%, #1D5535 126.75%)",
      }}
    >
      <Hero />
      <main>
        <Experience />
        <section className="mx-auto grid w-full max-w-7xl gap-20 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-14">
          <Projects />
          <Skills />
        </section>
      </main>
      <CheckerStrip />
    </div>
  );
}
