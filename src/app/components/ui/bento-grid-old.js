import { cn } from "./utils"; 
import { GlowingEffect } from "./glowing-effect";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
  className={cn(
    // add overflow-visible to prevent clipping
    "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white/10 backdrop-blur-md p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black/20 dark:shadow-none relative overflow-visible",
    className,
  )}
>
  <GlowingEffect
    spread={40}
    glow={true}
    disabled={false}
    proximity={64}
    inactiveZone={0.01}
    // optional: slightly thicker ring so bottom edge is more apparent
    borderWidth={1.5}
  />

  {header}
  <div className="transition duration-200 group-hover/bento:translate-x-2 relative z-10">
    {icon}
    <div className="mt-2 mb-2 font-sans font-bold text-white dark:text-neutral-200">
      {title}
    </div>
    <div className="font-sans text-xs font-normal text-white/80 dark:text-neutral-300 pb-4">
      {description}
    </div>
  </div>
</div>
  );
};
