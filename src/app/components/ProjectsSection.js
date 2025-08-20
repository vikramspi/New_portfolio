"use client";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

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

        {/* Taller rows: 340px each at md+ */}
        <BentoGrid className="max-w-6xl mx-auto md:grid-cols-3 md:auto-rows-[340px] gap-4">
          {projects.map((item, i) => {
            let extra = "";

            // Row 1: big (2x2) on the left
            if (i === 0)
              extra =
                "md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2";

            // Row 1 right column: Mobile Banking (top), LMS (bottom)
            if (i === 1) extra = "md:col-start-3 md:row-start-1";
            if (i === 2) extra = "md:col-start-3 md:row-start-2";

            // Row 2 left column: Social Media (top), Portfolio (below it)
            if (i === 3) extra = "md:col-start-1 md:row-start-3";
            if (i === 4) extra = "md:col-start-1 md:row-start-4";

            // Row 2 right side: Task Management big (2x2) starting at col 2, row 3
            if (i === 5)
              extra =
                "md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-2";

            const hasLink = item.href; // Check if project has a link

            return (
              <div key={i} className={`relative ${extra} md:min-h-[340px]`}>
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className="h-full"
                />
                {hasLink && (
                  <a
                    href={item.href}
                    className="absolute inset-0 z-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer hover:bg-white/5 transition-colors"
                    aria-label={`Open ${item.title} project`}
                  />
                )}
              </div>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}

/* Utility components */
const ProjectSkeleton = ({ gradient }) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${gradient}`}
  ></div>
);

const Icon = ({ name }) => (
  <div className="w-4 h-4 bg-white/20 rounded border border-white/30 flex items-center justify-center">
    <span className="text-xs text-white">{name.charAt(0)}</span>
  </div>
);

/* Projects (order matters for the explicit placement above) */
const projects = [
  {
    title: "Munshot",
    description:
      "An AI-Powered Financial Intelligence Platform for Hedge Funds.",
    header: <img src="munshot.jpeg" />,
    icon: <Icon name="M" />,
    href: "/projects/munshot", // Add href to Munshot
  },
  {
    title: "Graphic Design Work",
    description: "A collection of creative designs for various projects.",
    header: <img src="graphic-work.png" />,
    icon: <Icon name="G" />,
    href: "/projects/graphics", // This will now work
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking with biometric authentication.",
    header: (
      <ProjectSkeleton gradient="bg-gradient-to-br from-green-500/20 to-teal-500/20" />
    ),
    icon: <Icon name="M" />,
    // No href - not clickable
  },
  {
    title: "Learning Management System",
    description:
      "An educational platform with interactive courses and progress tracking.",
    header: (
      <ProjectSkeleton gradient="bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
    ),
    icon: <Icon name="L" />,
    // No href - not clickable
  },
  {
    title: "Social Media Platform",
    description: "Focusing on meaningful connections and user privacy.",
    header: (
      <ProjectSkeleton gradient="bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
    ),
    icon: <Icon name="S" />,
    // No href - not clickable
  },
  {
    title: "Portfolio Website",
    description: "This very site, built with Next.js, WebGL, and GSAP.",
    header: (
      <ProjectSkeleton gradient="bg-gradient-to-br from-yellow-500/20 to-orange-500/20" />
    ),
    icon: <Icon name="P" />,
    // No href - not clickable
  },
];
