import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProfessionalTraining from "@/components/ProfessionalTraining";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <ProfessionalTraining />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <HireMe />
      <Contact />
      <AIChat />
    </main>
  );
}
