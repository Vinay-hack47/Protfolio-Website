import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";
import ExtracurricularSection from "./components/ExtracurricularSection";
import CertificationSection from "./components/CertificationSection";
import ContactSection from "./components/ContactSection";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ExperienceSection></ExperienceSection>
        <ProjectSection></ProjectSection>
        <SkillsSection></SkillsSection>
        <ExtracurricularSection></ExtracurricularSection>
        <CertificationSection></CertificationSection>
        <ContactSection></ContactSection>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Vinay Rajput. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;