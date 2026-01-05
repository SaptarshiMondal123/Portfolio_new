import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Saptarshi Mondal | AI/ML Engineer & Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Portfolio of Saptarshi Mondal - AI/ML Engineer specializing in Applied Deep Learning, Document Intelligence, and Full-Stack Systems. Building intelligent systems from data to deployment." 
        />
        <meta name="keywords" content="AI, ML, Machine Learning, Deep Learning, Full-Stack Developer, Python, React, OCR, NLP" />
        <meta property="og:title" content="Saptarshi Mondal | AI/ML Engineer" />
        <meta property="og:description" content="Building intelligent systems that work in the real world — from data to deployment." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://saptarshi.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background noise-overlay">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
