"use client";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Link from 'next/link'; // Import the Link component for navigation

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A showcase of my work in UI/UX design and development
          </p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto md:grid-cols-3">
          {projects.map((item, i) => {
            const isLink = !!item.href;
            const Component = isLink ? Link : 'div';

            return (
              <Component href={item.href || ''} key={i}>
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={
                    // This logic restores your original 2x2 grid item placement
                    (i === 0 || i === 5 ? "md:col-span-2 md:row-span-2 " : "") +
                    (isLink ? "cursor-pointer hover:border-purple-400/50 transition-colors duration-300" : "")
                  }
                />
              </Component>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProjectSkeleton = ({ gradient }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${gradient}`}></div>
);

const Icon = ({ name }) => (
  <div className="w-4 h-4 bg-white/20 rounded border border-white/30 flex items-center justify-center">
    <span className="text-xs text-white">{name.charAt(0)}</span>
  </div>
);

// This is the restored, full list of projects in the correct order
const projects = [
  { 
    title: "Munshot",
    description: "An AI-Powered Financial Intelligence Platform for Hedge Funds.",
    header: <ProjectSkeleton gradient="bg-gradient-to-br from-purple-500/20 to-blue-500/20" />,
    icon: <Icon name="M" />,
    href: "/projects/munshot", // Link to the project page
  },
  { 
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking with biometric authentication.",
    header: <ProjectSkeleton gradient="bg-gradient-to-br from-green-500/20 to-teal-500/20" />,
    icon: <Icon name="M" />,
  },
  { 
    title: "Learning Management System",
    description: "An educational platform with interactive courses and progress tracking.",
    header: <ProjectSkeleton gradient="bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />,
    icon: <Icon name="L" />,
  },
  {
    title: "Social Media Platform",
    description: "Focusing on meaningful connections and user privacy.",
    header: <ProjectSkeleton gradient="bg-gradient-to-br from-pink-500/20 to-purple-500/20" />,
    icon: <Icon name="S" />,
  },
  {
    title: "Portfolio Website",
    description: "This very site, built with Next.js, WebGL, and GSAP.",
    header: <ProjectSkeleton gradient="bg-gradient-to-br from-yellow-500/20 to-orange-500/20" />,
    icon: <Icon name="P" />,
  },
  {
    title: "Task Management Tool",
    description: "A collaborative tool for teams to manage projects and track progress effectively.",
    header: <ProjectSkeleton gradient="bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />,
    icon: <Icon name="T" />,
  },
];
