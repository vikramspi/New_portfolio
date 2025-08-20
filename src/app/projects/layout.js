import React from 'react';

export default function ProjectLayout({ children }) {
  // This layout will wrap all project pages, ensuring they have the galaxy background.
  return (
    <main>
      {/* The GalaxyBackground component from your root layout should apply here */}
      {children}
    </main>
  );
}
