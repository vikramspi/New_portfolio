"use client";
import React from 'react';
import { ThreeDMarquee } from "../../components/three-d-marquee";

const generateImagePaths = (folder, filenames) => {
  return filenames.map(name => `/Munshot/${folder}/${name}`);
};

export default function MunshotProjectPage() {
  const heroImages = [ '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png' ];
  const chatImages = [ 'chat1.png', 'chat2.png', 'chat3.png' ];
  const screeningImages = [ 'screen1.png', 'screen2.png' ];

  const allImages = [
    ...generateImagePaths('Hero', heroImages),
    ...generateImagePaths('Chat', chatImages),
    ...generateImagePaths('Screening', screeningImages)
  ];

  return (
    <div className="w-full min-h-screen text-white">
      {/* --- Marquee Hero Section with its own background --- */}
      <div className="pt-24 md:pt-32">
        {/* This wrapper gives the marquee its distinct background */}
        <div className="mx-auto max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
          <ThreeDMarquee images={allImages} />
        </div>
      </div>

      {/* --- Project Title (sits on the galaxy background) --- */}
      <div className="text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-bold">
          Munshot AI
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mt-4">
          An AI-Powered Financial Intelligence Platform for Hedge Funds
        </p>
      </div>

      {/* --- Project Details (sits on the galaxy background) --- */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold mb-6">About The Project</h2>
        <p className="text-lg leading-relaxed text-white/80">
          Here you can write a detailed description of the Munshot project, 
          covering the challenges, your process, the technologies used, and the final outcomes. 
          This section can be expanded with more content, images, or case study details.
        </p>
      </div>
    </div>
  );
}
