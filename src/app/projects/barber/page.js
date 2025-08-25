"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Hero Component ---
const StylistHero = () => {
  const allImages = [ "/Stylist/Hero/Homepage-min.png", "/Stylist/Hero/ecommerce landing page-min.png", "/Stylist/Hero/Salon listing page-min.png", "/Stylist/Hero/Home salon page.png", "/Stylist/Hero/Wishlist page-min.png", "/Stylist/Hero/Check out-min.png", "/Stylist/Hero/Salon Detail page-min.png", "/Stylist/Hero/product details page-min (1).png", "/Stylist/Hero/product details page-min.png", "/Stylist/Hero/Salon page.png", "/Stylist/Hero/About Us page-min.png" ];
  const column1 = [allImages[0], allImages[6]];
  const column2 = [allImages[1], allImages[4], allImages[7]];
  const column3 = [allImages[2], allImages[5], allImages[8]];
  const column4 = [allImages[3], allImages[9], allImages[10]];

  const columnVariants = (duration) => ({
    animate: (direction) => ({
      y: direction === "up" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: { y: { repeat: Infinity, repeatType: "loop", duration: duration, ease: "linear" } },
    }),
  });

  const title = "Stylist";
  const titleVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  const letterVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } } };

  return (
    <div className="relative h-screen w-full overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 flex justify-center gap-4 md:gap-6 px-2">
        <motion.div className="flex flex-col gap-6" variants={columnVariants(80)} custom="up" animate="animate">{[...column1, ...column1].map((src, index) => (<img key={`col1-${index}`} src={src} alt={`Stylist screenshot ${index + 1}`} className="w-full object-contain rounded-2xl shadow-2xl" />))}</motion.div>
        <motion.div className="flex flex-col gap-6" variants={columnVariants(100)} custom="down" animate="animate">{[...column2, ...column2].map((src, index) => (<img key={`col2-${index}`} src={src} alt={`Stylist screenshot ${index + 1}`} className="w-full object-contain rounded-2xl shadow-2xl" />))}</motion.div>
        <motion.div className="hidden md:flex flex-col gap-6" variants={columnVariants(70)} custom="up" animate="animate">{[...column3, ...column3].map((src, index) => (<img key={`col3-${index}`} src={src} alt={`Stylist screenshot ${index + 1}`} className="w-full object-contain rounded-2xl shadow-2xl" />))}</motion.div>
        <motion.div className="hidden md:flex flex-col gap-6" variants={columnVariants(110)} custom="down" animate="animate">{[...column4, ...column4].map((src, index) => (<img key={`col4-${index}`} src={src} alt={`Stylist screenshot ${index + 1}`} className="w-full object-contain rounded-2xl shadow-2xl" />))}</motion.div>
      </div>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <motion.h1 variants={titleVariants} initial="hidden" animate="visible" className="relative z-20 text-7xl md:text-9xl text-white font-cursive text-center" style={{ fontFamily: 'var(--font-great-vibes)' }}>
        {title.split("").map((char, index) => (<motion.span key={index} variants={letterVariants} className="inline-block">{char}</motion.span>))}
      </motion.h1>
    </div>
  );
};

// --- Sidebar Navigation Component ---
const ProjectNav = ({ navItems, activeSection }) => {
  return (
    <aside className="hidden lg:block lg:col-span-1">
      <div className="sticky top-32">
        <h3 className="text-sm font-semibold uppercase text-white/50 mb-4">On this page</h3>
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={`block pl-3 text-sm transition-all duration-200 ${ activeSection === item.id ? "text-purple-300 font-semibold border-l-2 border-purple-300" : "text-white/60 hover:text-white border-l-2 border-transparent hover:border-white/50" }`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};


export default function StylistProjectPage() {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "overview", title: "Project Overview" },
    { id: "problem", title: "The Problem" },
    { id: "solution", title: "The Solution" },
    { id: "feature-booking", title: "Feature: Salon Booking" },
    { id: "feature-discovery", title: "Feature: Product Discovery" },
    { id: "feature-athome", title: "Feature: At-Home Services" },
    { id: "feature-admin", title: "Feature: Admin Dashboard" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = "";
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSectionId = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSectionId);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const barberImages = Array.from({ length: 11 }, (_, i) => `/Stylist/Barber/${i + 1}.png`);
  const ecommerceImages = Array.from({ length: 6 }, (_, i) => `/Stylist/ecommerce/${i + 1}.png`);
  const atHomeImages = Array.from({ length: 2 }, (_, i) => `/Stylist/AtHome/${i + 1}.png`);
  const adminImages = Array.from({ length: 10 }, (_, i) => `/Stylist/Admin/${i + 1}.png`);

  return (
    <div className="w-full min-h-screen text-white">
      <StylistHero />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 px-4">
        <ProjectNav navItems={navItems} activeSection={activeSection} />
        
        <main className="lg:col-span-4">
          <div className="text-center py-16 md:py-24">
            <h1 className="text-5xl md:text-7xl font-bold">STYLIST</h1>
            <p className="text-xl md:text-2xl text-white/70 mt-4">
              Your Personal Hub for Salon Services & Product Discovery
            </p>
          </div>

          <section id="overview" className="max-w-4xl mx-auto pb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 transition-colors duration-300 hover:text-purple-400">Project Overview</h2>
            <p className="text-lg leading-relaxed text-white/80 mb-8 transition-colors duration-300 hover:text-purple-400">STYLIST is a comprehensive web platform designed to streamline the entire grooming and personal care experience. It serves as a one-stop ecosystem for users to discover and book appointments with local salons and barbers, order at-home salon services, and find the best prices on hair and skin care products. By integrating service booking with a smart product discovery engine, STYLIST bridges the gap between professional advice and personal shopping, all within a clean and intuitive interface. The platform also includes a robust admin dashboard for complete operational control.</p>
          </section>

          <section id="problem" className="max-w-4xl mx-auto pb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 transition-colors duration-300 hover:text-purple-400">The Problem</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-400">1. Inefficient Appointment Booking</h3>
                <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">Finding and booking a salon appointment still relies on phone calls, uncertain availability, and scattered online reviews. There is no single, reliable platform to compare nearby options, view real-time schedules, and book instantly.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-400">2. Difficulty in Finding Trusted Home Services</h3>
                <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">While the demand for at-home services is rising, finding vetted, skilled, and reliable professionals remains a challenge, often depending on inconsistent word-of-mouth recommendations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-400">3. Overwhelming & Dispersed Product Market</h3>
                <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">The beauty market is saturated. Consumers are forced to browse multiple e-commerce websites (like Amazon, Nykaa, Flipkart) to compare prices and find the best deals, a time-consuming and inefficient process.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-400">4. A Disconnected Experience</h3>
                <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">The journey from getting a service (and a product recommendation from a stylist) to actually purchasing that product is broken. Users leave the salon and the purchase intent is often lost.</p>
              </div>
            </div>
          </section>

          <section id="solution" className="max-w-4xl mx-auto pb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 transition-colors duration-300 hover:text-purple-400">The Solution</h2>
            <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">STYLIST is a unified platform that elegantly solves these challenges by creating a seamless, end-to-end grooming ecosystem. It empowers users with the convenience of choice and transparency. Whether they want to visit a top-rated salon, book a trusted professional for a home visit, or intelligently shop for products, STYLIST provides a single point of access. By functioning as a price comparison aggregator rather than a direct seller, it offers unbiased product information, ensuring users always find the best value. The platform is designed to be the ultimate companion for modern personal care.</p>
          </section>

          <section id="features" className="max-w-4xl mx-auto pb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 transition-colors duration-300 hover:text-purple-400">Core Features & Functionality</h2>
            <p className="text-lg leading-relaxed text-white/80 mb-8 transition-colors duration-300 hover:text-purple-400">STYLIST is built around four main components designed to serve both users and administrators.</p>

            <div id="feature-booking" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">1. Seamless Salon & Barber Booking</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6 transition-colors duration-300 hover:text-purple-400">This feature allows users to find and book appointments with local grooming professionals effortlessly.</p>
              <div className="space-y-4 mb-6 transition-colors duration-300 hover:text-purple-400">
                  <p><strong className="text-white">Location-Based Search:</strong> An interactive map and list view helps users discover salons and barbershops in their vicinity.</p>
                  <p><strong className="text-white">Advanced Filtering:</strong> Users can filter results by service type (e.g., haircut, facial, manicure), price range, user ratings, and available amenities.</p>
                  <p><strong className="text-white">Real-Time Availability:</strong> The system shows the real-time open slots for different stylists, eliminating the need for back-and-forth phone calls.</p>
              </div>
              <div className="space-y-8 my-8">
                {barberImages.map((src, index) => (
                  <img key={`barber-${index}`} src={src} alt={`Salon Booking UI ${index + 1}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>
                ))}
              </div>
            </div>

            <div id="feature-discovery" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">2. Smart Product Discovery & Price Comparison</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6 transition-colors duration-300 hover:text-purple-400">Instead of operating as an e-commerce store, STYLIST acts as an intelligent product aggregator, helping users make informed purchasing decisions.</p>
              <div className="space-y-4 mb-6 transition-colors duration-300 hover:text-purple-400">
                <p><strong className="text-white">Curated Product Catalog:</strong> Users can browse a wide range of hair and skin care products, filtered by brand, concern (e.g., hair fall, acne), or ingredients.</p>
                <p><strong className="text-white">Multi-Website Price Aggregation:</strong> For any given product, the platform fetches and displays real-time prices from major retailers like Amazon, Nykaa, and Flipkart.</p>
                <p><strong className="text-white">Direct Purchase Links:</strong> Users can click a link to be taken directly to the product page on their chosen retailer's website to complete the purchase.</p>
              </div>
              <div className="space-y-8 my-8">
                {ecommerceImages.map((src, index) => (
                  <img key={`ecommerce-${index}`} src={src} alt={`Product Discovery UI ${index + 1}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>
                ))}
              </div>
            </div>

            <div id="feature-athome" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">3. At-Home Salon Services On-Demand</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6 transition-colors duration-300 hover:text-purple-400">This module brings the luxury of the salon to the user's doorstep, catering to the growing demand for convenience.</p>
              <div className="space-y-4 mb-6 transition-colors duration-300 hover:text-purple-400">
                <p><strong className="text-white">Vetted Professional Profiles:</strong> Users can browse profiles of verified and background-checked beauty professionals, complete with their skills, user reviews, and ratings.</p>
                <p><strong className="text-white">Flexible & Secure Booking:</strong> Users can select from a menu of services, choose a convenient time slot, and book a home visit securely through the platform.</p>
                <p><strong className="text-white">Transparent Pricing:</strong> All service costs are displayed upfront, ensuring there are no hidden fees or surprises.</p>
              </div>
              <div className="space-y-8 my-8">
                {atHomeImages.map((src, index) => (
                  <img key={`athome-${index}`} src={src} alt={`At-Home Service UI ${index + 1}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>
                ))}
              </div>
            </div>

            <div id="feature-admin" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">4. Comprehensive Admin Dashboard</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6 transition-colors duration-300 hover:text-purple-400">A secure backend portal gives the platform administrators full control over the ecosystem to ensure smooth operations.</p>
              <div className="space-y-4 mb-6 transition-colors duration-300 hover:text-purple-400">
                <p><strong className="text-white">Partner Management:</strong> Admins can onboard, verify, and manage salon partners and individual at-home professionals.</p>
                <p><strong className="text-white">Booking & Service Oversight:</strong> A central dashboard to monitor all upcoming and completed appointments, manage cancellations, and handle customer support inquiries.</p>
                <p><strong className="text-white">Product & Content Management:</strong> Admins can easily add or update product listings in the aggregator and manage content across the website.</p>
              </div>
              <div className="space-y-8 my-8">
                {adminImages.map((src, index) => (
                  <img key={`admin-${index}`} src={src} alt={`Admin Dashboard UI ${index + 1}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}