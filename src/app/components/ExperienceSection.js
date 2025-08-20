"use client";
import React from "react";
import { CometCard } from "./ui/comet-card";

// Data remains the same
const experiences = [
  {
    company: "Inditech Health Solutions",
    role: "Product Operation & Management Intern",
    duration: "Feb 2025 - Present",
    summary: [
      "Analyzed campaign performance for 30,000+ doctors using SQL, Power BI, and Google Analytics.",
      "Designed user-centric interfaces in Figma, enhancing products for 20,000+ doctors and 100,000+ patients.",
      "Researched and Redefined the user path, experience and Product functionalities to exceed the reach and engagement by 30%."
    ]
  },
  {
    company: "Munshot",
    role: "Product & UI/UX Designer Intern",
    duration: "Oct 2024 - Feb 2025",
    summary: [
      "Led UI/UX design for an AI web platform, boosting user satisfaction by 25% for over 5,000 users.",
      "Conducted competitive research and partnered with engineering teams to accelerate time-to-market by 30%.",
      "Built a reusable React/TailwindCSS component library, reducing navigation time by 25%."
    ]
  },
  {
    company: "Natura Ayur Science Pvt Ltd",
    role: "Product Management Intern",
    duration: "Jul 2024 - Oct 2024",
    summary: [
      "Deployed a new CRM system, achieving 90% integration success and 40% faster inquiry responses.",
      "Executed campaigns engaging over 5,000 customers and trained 20+ team members on the new system.",
      "Grew social media followers by 20% and strengthened engagement by 50% through content management."
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A timeline of my professional journey and key contributions.
          </p>
        </div>
        
        {/* The change is here: "items-center" is now "items-stretch" */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <CometCard key={index}>
              <div className="w-full max-w-sm cursor-pointer flex-col items-stretch rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                  <p className="text-md font-semibold text-purple-300 mb-2">{exp.role}</p>
                  <p className="text-xs text-white/50 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-white/80 flex-grow">
                    {exp.summary.map((point, i) => (
                      <li key={i}>{point}</li>
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
