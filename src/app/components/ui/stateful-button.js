"use client";
import { cn } from "../../lib/utils";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => (
  <motion.svg initial={{ scale: 0, width: 0 }} animate={{ rotate: [0, 360], scale: 1, width: "20px" }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M12 3a9 9 0 1 0 9 9" />
  </motion.svg>
);

const CheckIcon = () => (
  <motion.svg initial={{ scale: 0, width: 0 }} animate={{ scale: 1, width: "20px" }} exit={{ scale: 0, width: 0 }} transition={{ duration: 0.2 }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 12l2 2l4 -4" />
  </motion.svg>
);

export const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  // Note: This button is now simpler. It doesn't manage its own async state.
  // The loading/success state will be controlled by the form.
  return (
    <motion.button
      {...props}
      ref={ref}
      layout
      className={cn(
        "flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 font-semibold text-white transition-all duration-300",
        "outline-2 outline-transparent hover:outline-purple-400 outline-offset-2",
        className,
      )}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";