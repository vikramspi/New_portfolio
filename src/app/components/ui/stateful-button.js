"use client";
import { cn } from "../../lib/utils"; // Assuming utils.js is in the same directory
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <motion.svg
      initial={{ scale: 0, width: 0 }}
      animate={{
        rotate: [0, 360],
        scale: 1,
        width: "20px",
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        ease: "linear",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="M12 3a9 9 0 1 0 9 9" />
    </motion.svg>
  );
};

const CheckIcon = () => {
  return (
    <motion.svg
      initial={{ scale: 0, width: 0 }}
      animate={{ scale: 1, width: "20px" }}
      exit={{ scale: 0, width: 0 }}
      transition={{ duration: 0.2 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </motion.svg>
  );
};

export const Button = ({ className, children, onClick }) => {
  const [state, setState] = useState("idle"); // 'idle', 'loading', 'success'

  const handleClick = async (event) => {
    if (state !== "idle") return;

    setState("loading");
    try {
      await onClick?.(event); // Call the original onClick from props
      setState("success");
    } catch (error) {
      console.error("Form submission failed:", error);
      setState("idle"); // Reset on error
    }

    // Reset button to idle state after a delay
    setTimeout(() => {
      setState("idle");
    }, 2500);
  };

  return (
    <motion.button
      layout
      onClick={handleClick}
      className={cn(
        "flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 font-semibold text-white transition-all duration-300",
        // Replace the border classes with these outline classes
        "outline-2 outline-transparent hover:outline-purple-400 outline-offset-2",
        {
          "bg-green-500 hover:bg-green-600": state === "success",
        },
        className,
      )}
      disabled={state !== "idle"}
    >
      {/* ... (AnimatePresence and motion.span remain the same) ... */}
      <AnimatePresence mode="wait">
        {state === "loading" && (
          <motion.div key="loader">
            <Loader />
          </motion.div>
        )}
        {state === "success" && (
          <motion.div key="check">
            <CheckIcon />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.span layout key="text">
        {state === "success" ? "Message Sent!" : children}
      </motion.span>
    </motion.button>
  );
};
