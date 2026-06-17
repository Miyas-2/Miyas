import FloatingSocialDock from "./components/FloatingSocialDock";
import ScrollRevealProvider from "./components/ScrollRevealProvider";
import HeroSection from "./components/HeroSection";
import AccoladesSection from "./components/AccoladesSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import LeadershipSection from "./components/LeadershipSection";
import TechStackSection from "./components/TechStackSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main>
      <FloatingSocialDock />
      <ScrollRevealProvider />
      <HeroSection />
      <AccoladesSection />
      <ExperienceSection />
      <ProjectsSection />
      <LeadershipSection />
      <TechStackSection />
      <FooterSection />
    </main>
  );
}
