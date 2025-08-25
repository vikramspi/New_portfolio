"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Polyhedron } from "@react-three/drei";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

// --- Interactive 3D Shape Component ---
const AnimatedShape = () => {
  const meshRef = useRef();

  const vertices = [
    1, 1, 1,   -1, -1, 1,   -1, 1, -1,   1, -1, -1,
    -1, 1, 1,   1, -1, 1,   1, 1, -1,   -1, -1, -1
  ];
  const indices = [
    0, 1, 4,  1, 2, 4,  2, 3, 4,  3, 0, 4,
    0, 5, 1,  1, 6, 2,  2, 7, 3,  3, 5, 0,
    4, 5, 2,  5, 6, 0,  6, 7, 1,  7, 5, 3
  ];

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
    
    const { pointer } = state;
    if (meshRef.current) {
        meshRef.current.rotation.y += (pointer.x * 0.5 - meshRef.current.rotation.y) * 0.1;
        meshRef.current.rotation.x += (-pointer.y * 0.5 - meshRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <Polyhedron ref={meshRef} position={[0, 0, 0]} args={[vertices, indices, 2.5, 0]}>
      <meshStandardMaterial 
        wireframe 
        color="#c084fc" 
        emissive="#c084fc" 
        emissiveIntensity={1.5}
      />
    </Polyhedron>
  );
};

const HeroShape = () => {
  return (
    <div className="w-full h-80 md:h-96">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedShape />
        </Suspense>
      </Canvas>
    </div>
  );
};


export default function Home() {
  const name = "Vikram Kanaujiya";
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            {/* --- UPDATED: Name font size changed from lg:text-7xl to lg:text-6xl --- */}
            <motion.h1
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold !leading-tight text-white mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent"
            >
              {name.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants} 
                  className="inline-block"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.4, ease: "easeInOut" }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* --- UPDATED: Tagline font size reduced for better hierarchy --- */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              className="text-xl lg:text-2xl font-semibold text-white/80 mb-6"
            >
              A Product-Focused Designer Who Brings Ideas to Life
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
              className="text-lg text-white/70 mb-8 max-w-lg mx-auto md:mx-0"
            >
              I build intuitive digital experiences from concept to code, blending a product mindset with hands-on UI/UX design.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full transition-all duration-300 ease-in-out outline-2 outline-transparent hover:outline-purple-400 outline-offset-2"
              >
                View My Work
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white/80 text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <div>
            <HeroShape />
          </div>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}