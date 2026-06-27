import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProfessionalTraining from "@/components/ProfessionalTraining";
import Projects from "@/components/Projects";
import GitHubProjects from "@/components/GitHubProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import HireMe from "@/components/HireMe";
import ATSResume from "@/components/ATSResume";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <main className="scroll-smooth">

      {/* 1. Hero (First impression) */}
      <Hero />

      {/* 2. About (Who you are) */}
      <About />

      {/* 3. Skills (Tech stack credibility) */}
      <Skills />

      {/* 4. Experience (Real work proof) */}
      <Experience />
      {/* 5. Professional Training (IsDB-BISEW strong point) */}
      <ProfessionalTraining />

      {/* 6. Education (Academic background) */}
      <Education />

      {/* 7. Projects (Proof of work) */}
      <Projects />
      {/* <GitHubProjects /> */}

      {/* 8. Services (What you offer) */}
      <Services />

      {/* 9. Testimonials (Trust builder) */}
      <Testimonials />

      {/* 10. CTA Sections */}
      <HireMe />
      {/* <ATSResume /> */}

      {/* 11. Contact (Final conversion point) */}
      <Contact />

      {/* 12. AI Assistant (Optional engagement tool) */}
      <AIChat />

    </main>
  );
}