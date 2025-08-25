"use client";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import { useState } from "react";

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A showcase of my work in UI/UX design and development
          </p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto md:grid-cols-3 md:auto-rows-[320px] gap-4">
          {projects.map((item, i) => {
            let extra = "";
            if (i === 0) extra = "md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2";
            if (i === 1) extra = "md:col-start-3 md:row-start-1";
            if (i === 2) extra = "md:col-start-3 md:row-start-2";
            if (i === 3) extra = "md:col-start-1 md:row-start-3";
            if (i === 4) extra = "md:col-start-1 md:row-start-4";
            if (i === 5) extra = "md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2";
            const hasLink = item.href;

            return (
              <motion.div
                key={i}
                className={`relative ${extra} md:min-h-[320px]`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.7 : 1,
                  scale: hoveredIndex === i ? 1.05 : 1,
                  zIndex: hoveredIndex === i ? 10 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                />
                {hasLink && (
                  <a
                    href={item.href}
                    className="absolute inset-0 z-20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
                    aria-label={`Open ${item.title} project`}
                  />
                )}
              </motion.div>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProjectSkeleton = ({ gradient }) => <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${gradient}`}></div>;

const projects = [
  { title: "Munshot", description: "An AI-Powered Financial Intelligence Platform for Hedge Funds.", header: <img src="munshot.jpeg" alt="Munshot Project Screenshot" />, href: "/projects/munshot" },
  { title: "Graphic Design Work", description: "A collection of creative designs for various projects.", header: <img src="graphic-work.png" alt="Graphic Design Work Screenshot" />, href: "/projects/graphics" },
  { title: "re-call", description: "An educational platform with interactive courses and progress tracking.", header: <img src="recCallfront.png" alt="re-call Project Screenshot" />, href: "/projects/re-call" },
  { 
    title: "2D Animation", 
    description: "A collection of my work in 2D animation.", 
    // --- UPDATED to display your image ---
    header: <img src="/videoGalleryFront.png" alt="2D Animation Project Preview" className="rounded-xl object-cover w-full h-full" />, 
    href: "/projects/three-d" 
  },
  { title: "E-coin", description: "A conceptual cryptocurrency platform focusing on user privacy.", header: <img src="eCoinfront.png" alt="E-coin Project Screenshot" />, href: "/projects/e-coin" },
  { title: "Stylist", description: "A modern website for a hair stylist, built with Next.js.", header: <img src="bhadwa.png" alt="Stylist Project Screenshot" />, href: "/projects/barber" },
];