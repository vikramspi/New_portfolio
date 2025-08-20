"use client";

import SplitText from "./components/SplitText";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section
        id="hero"
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "0 2rem",
        }}
      >
        <SplitText
          text="Hello"
          className="text-[clamp(3rem,10vw,8rem)] font-extrabold leading-none mb-6"
          delay={120}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 60, scale: 0.8 }}
          to={{ opacity: 1, y: 0, scale: 1 }}
        />
        <SplitText
          text="I'm Vikram Kanaujiya, a product-focused UI/UX designer who builds intuitive digital experiences from concept to code."
          className="max-w-3xl text-[clamp(0.9rem,2.5vw,1.5rem)] font-semibold"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
        />
      </section>

      {/* The main sections of your portfolio are rendered here in order. */}
      {/* Each component now handles its own spacing internally. */}
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
