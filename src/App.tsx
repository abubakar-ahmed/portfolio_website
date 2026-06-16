import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="border-t border-white/5">
        <Experience />
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto grid max-w-none gap-0 md:grid-cols-2">
          <Projects />
          <Skills />
        </div>
      </div>

      <Footer />
    </div>
  );
}
