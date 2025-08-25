"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import GlassSurface from "./GlassSurface";
import "./Navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "About Me", href: "/#about", id: "about" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Check against the middle of the screen

      let currentSectionId = "";
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          currentSectionId = section.id;
        }
      }
      
      // If no section is found (e.g., at the very top), clear the active state
      if (window.scrollY < 200) {
        setActiveSection("");
      } else {
        setActiveSection(currentSectionId);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-border-container">
        <div className="border-gradient-bottom" />
        <div className="border-gradient-top" />
        <GlassSurface
          width="auto"
          height={60}
          borderRadius={30}
          brightness={50}
          opacity={0.85}
          backgroundOpacity={0.2}
          blur={20}
          className="navbar-glass"
        >
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // The 'active' class is now applied based on the activeSection state
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </GlassSurface>
      </div>
    </nav>
  );
}