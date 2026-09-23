import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { CurrentLearning } from "@/components/sections/CurrentLearning";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <CurrentLearning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
