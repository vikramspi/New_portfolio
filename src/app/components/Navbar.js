"use client";
import { useState } from 'react';
import Link from 'next/link';
import GlassSurface from './GlassSurface';
import './Navbar.css';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('');

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-border-container">
        {/* Only top and bottom star border animation elements */}
        <div className="border-gradient-bottom"></div>
        <div className="border-gradient-top"></div>
        
        <GlassSurface
          width="auto"
          height={60}
          borderRadius={30}
          brightness={activeItem ? 30 : 50}
          opacity={activeItem ? 0.95 : 0.85}
          backgroundOpacity={activeItem ? 0.3 : 0.2}
          blur={20}
          className="navbar-glass"
        >
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${activeItem === item.name ? 'active' : ''}`}
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem('')}
                onClick={() => setActiveItem(item.name)}
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
