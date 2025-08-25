"use client";
import React from "react";
import { CometCard } from "./ui/comet-card";

const experiences = [
  {
    company: "Inditech Health Solutions",
    role: "Product Operation & Management Intern",
    duration: "Feb 2025 - Present",
    summary: [
      "Analyzed campaign performance for 30,000+ doctors using SQL, Power BI, and Google Analytics.",
      "Designed user-centric interfaces in Figma, enhancing products for 20,000+ doctors and 100,000+ patients.",
      "Researched and Redefined the user path, experience and Product functionalities to exceed the reach and engagement by 30%.",
    ],
  },
  {
    company: "Munshot",
    role: "Product & UI/UX Designer Intern",
    duration: "Oct 2024 - Feb 2025",
    summary: [
      "Led UI/UX design for an AI web platform, boosting user satisfaction by 25% for over 5,000 users.",
      "Conducted competitive research and partnered with engineering teams to accelerate time-to-market by 30%.",
      "Built a reusable React/TailwindCSS component library, reducing navigation time by 25%.",
    ],
  },
  {
    company: "Natura Ayur Science Pvt Ltd",
    role: "Product Management Intern",
    duration: "Jul 2024 - Oct 2024",
    summary: [
      "Deployed a new CRM system, achieving 90% integration success and 40% faster inquiry responses.",
      "Executed campaigns engaging over 5,000 customers and trained 20+ team members on the new system.",
      "Grew social media followers by 20% and strengthened engagement by 50% through content management.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Experience
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional journey and key contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {experiences.map((exp, index) => (
            <CometCard key={index} className="h-full">
              <div className="w-full cursor-pointer flex flex-col rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm p-8 h-full hover:bg-black/40 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-semibold text-purple-300 mb-3 leading-snug">
                    {exp.role}
                  </p>
                  <p className="text-sm text-white/60 mb-6 font-medium">
                    {exp.duration}
                  </p>
                  <ul className="space-y-4 text-base text-white/80 flex-grow leading-relaxed">
                    {exp.summary.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}