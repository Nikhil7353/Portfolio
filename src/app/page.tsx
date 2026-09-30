import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { AiSection } from "@/components/ai/AiSection";
import { PhilosophySection } from "@/components/philosophy/PhilosophySection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-white selection:bg-sky-400 selection:text-slate-950">
      {/* Persistent floating navigation */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="relative flex flex-col w-full">
        {/* Full-screen Hero Section */}
        <Hero />

        {/* Editorial About Section with animated tech flow line */}
        <About />

        {/* Scroll-driven Featured Projects Section */}
        <ProjectsSection />

        {/* Experience Timeline */}
        <ExperienceSection />

        {/* Interactive Skills Wall */}
        <SkillsSection />

        {/* AI-Assisted Development Section */}
        <AiSection />

        {/* Engineering Philosophy: How I Build */}
        <PhilosophySection />

        {/* Contact Climax Section */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
