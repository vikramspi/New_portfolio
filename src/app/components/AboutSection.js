"use client";
import React from "react";
import ScrollReveal from "./ScrollReveal";
import { BrainCircuit, Code, Palette, Download } from "lucide-react";
import { CometCard } from "./ui/comet-card"; // 1. Import the CometCard component

// Cards for your expertise areas
const expertiseAreas = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-purple-400" />,
    title: "Product Management",
    description:
      "Guiding products from ideation to launch by blending user-centric research, strategic planning, and cross-functional team collaboration.",
  },
  {
    icon: <Palette className="w-10 h-10 mb-4 text-purple-400" />,
    title: "UI/UX Design",
    description:
      "Crafting intuitive, high-impact user interfaces in Figma, focusing on wireframing, prototyping, and creating seamless user flows.",
  },
  {
    icon: <Code className="w-10 h-10 mb-4 text-purple-400" />,
    title: "Web Development",
    description:
      "Building full-stack applications with modern frameworks like Next.js and React, bringing designs to life with clean, functional code.",
  },
];

// Your summarized core skills:
const skills = {
  Languages:
    "C/C++, JavaScript, Python, HTML/CSS, TypeScript, SQL (PostgreSQL)",
  "Frameworks & Libraries":
    "React.js, Next.js, Express.js, Tailwind CSS, Shadcn, Prisma, WebRTC",
  "Tools & Platforms":
    "Figma, Power BI, Jira, Google Analytics, Git & GitHub, Notion, Microsoft Excel",
};

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* --- Intro Paragraph --- */}
        <div className="leading-relaxed text-2xl pb-25 text-white max-w-4xl">
          As a UI/UX designer and product enthusiast, I transform complex
          problems into intuitive digital solutions. My process blends a
          product-management mindset with hands-on design, guiding products from
          research and wireframing through to high-impact visual interfaces.
        </div>
        
        {/* --- Areas of Expertise --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mb-20">
          {expertiseAreas.map((area, idx) => (
            // 2. Wrap each card with the CometCard component
            <CometCard key={idx} className="h-full">
              <div
                className="flex flex-col items-center text-center p-6 border border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm h-full"
              >
                {area.icon}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-md text-white/70">{area.description}</p>
              </div>
            </CometCard>
          ))}
        </div>

        {/* --- Technical Skills --- */}
        <div className="w-full max-w-6xl text-center mb-20">
          <h3 className="text-3xl font-bold text-white mb-8">
            Technical Skills
          </h3>
          <div className="flex flex-col gap-6">
            {Object.entries(skills).map(([category, detail]) => (
              <div
                key={category}
                className="flex flex-col md:flex-row items-center justify-center gap-4"
              >
                <h4 className="w-full md:w-1/4 text-lg font-semibold text-purple-300 text-right">
                  {category}
                </h4>
                <p className="w-full md:w-3/4 text-md text-white/80 text-left bg-white/5 p-3 rounded-lg">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Resume Download Button --- */}
        <a
          href="/Vikram-Kanaujiya-Resume.pdf"
          download="Vikram-Kanaujiya-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 bg-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-purple-700"
        >
          <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
          <span>Download Resume</span>
          <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-white/10"></div>
        </a>
      </div>
    </section>
  );
}