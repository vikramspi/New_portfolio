"use client";
import React from "react";
import { ThreeDMarquee } from "../../components/three-d-marquee";

const generateImagePaths = (folder, filenames) => {
  return filenames.map((name) => `/Munshot/${folder}/${name}`);
};

export default function MunshotProjectPage() {
  const agentImages = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "20.png",
  ];
  const heroImages = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "20.png",
    "24.png",
    "25.png",
    "27.png",
    "28.png",
  ];
  const chatImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  const screeningImages = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "13.png",
    "14.png",
    "15.png",
    "17.png",
    "20.png",
    "24.png",
    "25.png",
    "27.png",
    "28.png",
  ];

  const allImages = [
    ...generateImagePaths("Agent", agentImages),
    ...generateImagePaths("Hero", heroImages),
    ...generateImagePaths("Chat", chatImages),
    ...generateImagePaths("Screening", screeningImages),
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

      <div className="text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-bold">STYLIST</h1>
        <p className="text-xl md:text-2xl text-white/70 mt-4">
          Your Personal Hub for Salon Services & Product Discovery
        </p>
      </div>

      {/* --- Project Overview Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          STYLIST is a comprehensive web platform designed to streamline the
          entire grooming and personal care experience. It serves as a one-stop
          ecosystem for users to discover and book appointments with local
          salons and barbers, order at-home salon services, and find the best
          prices on hair and skin care products. By integrating service booking
          with a smart product discovery engine, STYLIST bridges the gap between
          professional advice and personal shopping, all within a clean and
          intuitive interface. The platform also includes a robust admin
          dashboard for complete operational control.
        </p>
      </div>

      {/* --- The Problem Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">The Problem</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-6">
          Today's consumers face a fragmented and often frustrating journey when
          managing their personal grooming needs:
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Inefficient Appointment Booking
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Finding and booking a salon appointment still relies on phone
              calls, uncertain availability, and scattered online reviews. There
              is no single, reliable platform to compare nearby options, view
              real-time schedules, and book instantly.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Difficulty in Finding Trusted Home Services
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              While the demand for at-home services is rising, finding vetted,
              skilled, and reliable professionals remains a challenge, often
              depending on inconsistent word-of-mouth recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Overwhelming & Dispersed Product Market
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              The beauty market is saturated. Consumers are forced to browse
              multiple e-commerce websites (like Amazon, Nykaa, Flipkart) to
              compare prices and find the best deals, a time-consuming and
              inefficient process.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. A Disconnected Experience
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              The journey from getting a service (and a product recommendation
              from a stylist) to actually purchasing that product is broken.
              Users leave the salon and the purchase intent is often lost.
            </p>
          </div>
        </div>
      </div>

      {/* --- The Solution Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">The Solution</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-6">
          STYLIST is a unified platform that elegantly solves these challenges
          by creating a seamless, end-to-end grooming ecosystem.
        </p>
        <p className="text-lg leading-relaxed text-white/80">
          It empowers users with the convenience of choice and transparency.
          Whether they want to visit a top-rated salon, book a trusted
          professional for a home visit, or intelligently shop for products,
          STYLIST provides a single point of access. By functioning as a price
          comparison aggregator rather than a direct seller, it offers unbiased
          product information, ensuring users always find the best value. The
          platform is designed to be the ultimate companion for modern personal
          care.
        </p>
      </div>

      {/* --- My Role & Design Process Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">My Role & Design Process</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-6">
          As the lead designer and developer for this project, I was responsible
          for the entire product lifecycle, from initial concept to final UI
          design and functionality mapping.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. User Research & Persona Development
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              I identified key user archetypes: the "Busy Professional" needing
              quick booking, the "Home Comfort Seeker" preferring at-home
              services, and the "Savvy Shopper" focused on finding the best
              product deals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Competitive Analysis
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              I analyzed existing platforms like Urban Company, Booksy, and
              Nykaa to identify market gaps and opportunities for a more
              integrated user experience. The key differentiator became the
              combination of service booking with a product price aggregator.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Information Architecture
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              I designed a clear and logical site structure, separating the
              three core user journeys (Salon Booking, Home Services, Product
              Discovery) while ensuring they felt connected. I also mapped out
              the complete functionality for the administrative backend.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Wireframing & Prototyping (Figma)
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              I created detailed wireframes for all key screens, focusing on an
              intuitive booking flow and an easy-to-navigate product comparison
              interface. These were developed into high-fidelity, interactive
              prototypes in Figma for user flow validation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              5. UI & Visual Design
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              I opted for a clean, modern, and trustworthy aesthetic. The visual
              language uses a calming color palette, high-quality imagery, and
              clear typography to create a premium and accessible user
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* --- Core Features Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">
          Core Features & Functionality
        </h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          STYLIST is built around four main components designed to serve both
          users and administrators.
        </p>

        {/* Feature 1 - Salon Booking */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            1. Seamless Salon & Barber Booking
          </h3>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            This feature allows users to find and book appointments with local
            grooming professionals effortlessly.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <strong className="text-white">Location-Based Search:</strong>
              <span className="text-white/80">
                {" "}
                An interactive map and list view helps users discover salons and
                barbershops in their vicinity.
              </span>
            </div>
            <div>
              <strong className="text-white">Advanced Filtering:</strong>
              <span className="text-white/80">
                {" "}
                Users can filter results by service type (e.g., haircut, facial,
                manicure), price range, user ratings, and available amenities.
              </span>
            </div>
            <div>
              <strong className="text-white">Real-Time Availability:</strong>
              <span className="text-white/80">
                {" "}
                The system shows the real-time open slots for different
                stylists, eliminating the need for back-and-forth phone calls.
                Users can book their preferred slot with instant confirmation.
              </span>
            </div>
          </div>

          {/* Image placeholder for Salon Booking UI - NOW 75% SCREEN WIDTH */}
          <div className="flex justify-center my-8">
            <div className="w-[75vw] bg-white/10 border border-white/20 rounded-lg p-4 text-center">
              <p className="text-white/60 italic">
                [Insert Figma UI Screenshot for the Salon Booking Section -
                Search results page, salon profile, and booking calendar]
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 - Product Discovery */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            2. Smart Product Discovery & Price Comparison
          </h3>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            Instead of operating as an e-commerce store, STYLIST acts as an
            intelligent product aggregator, helping users make informed
            purchasing decisions.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <strong className="text-white">Curated Product Catalog:</strong>
              <span className="text-white/80">
                {" "}
                Users can browse a wide range of hair and skin care products,
                filtered by brand, concern (e.g., hair fall, acne), or
                ingredients.
              </span>
            </div>
            <div>
              <strong className="text-white">
                Multi-Website Price Aggregation:
              </strong>
              <span className="text-white/80">
                {" "}
                For any given product, the platform fetches and displays
                real-time prices from major retailers like Amazon, Nykaa, and
                Flipkart.
              </span>
            </div>
            <div>
              <strong className="text-white">Direct Purchase Links:</strong>
              <span className="text-white/80">
                {" "}
                Users can click a link to be taken directly to the product page
                on their chosen retailer's website to complete the purchase,
                ensuring STYLIST remains an unbiased source of information.
              </span>
            </div>
          </div>

          {/* Image placeholder for Product Discovery UI - NOW 75% SCREEN WIDTH */}
          <div className="flex justify-center my-8">
            <div className="w-[75vw] bg-white/10 border border-white/20 rounded-lg p-4 text-center">
              <p className="text-white/60 italic">
                [Insert Figma UI Screenshot for the Product Discovery Section -
                Product catalog, single product page with price comparisons, and
                filter options]
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 - Home Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            3. At-Home Salon Services On-Demand
          </h3>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            This module brings the luxury of the salon to the user's doorstep,
            catering to the growing demand for convenience.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <strong className="text-white">
                Vetted Professional Profiles:
              </strong>
              <span className="text-white/80">
                {" "}
                Users can browse profiles of verified and background-checked
                beauty professionals, complete with their skills, user reviews,
                and ratings.
              </span>
            </div>
            <div>
              <strong className="text-white">Flexible & Secure Booking:</strong>
              <span className="text-white/80">
                {" "}
                Users can select from a menu of services, choose a convenient
                time slot, and book a home visit securely through the platform.
              </span>
            </div>
            <div>
              <strong className="text-white">Transparent Pricing:</strong>
              <span className="text-white/80">
                {" "}
                All service costs are displayed upfront, ensuring there are no
                hidden fees or surprises.
              </span>
            </div>
          </div>

          {/* Image placeholder for Home Services UI - NOW 75% SCREEN WIDTH */}
          <div className="flex justify-center my-8">
            <div className="w-[75vw] bg-white/10 border border-white/20 rounded-lg p-4 text-center">
              <p className="text-white/60 italic">
                [Insert Figma UI Screenshot for the Home Salon Services Section
                - Service selection screen and professional profiles]
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4 - Admin Dashboard */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            4. Comprehensive Admin Dashboard
          </h3>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            A secure backend portal gives the platform administrators full
            control over the ecosystem to ensure smooth operations.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <strong className="text-white">Partner Management:</strong>
              <span className="text-white/80">
                {" "}
                Admins can onboard, verify, and manage salon partners and
                individual at-home professionals.
              </span>
            </div>
            <div>
              <strong className="text-white">
                Booking & Service Oversight:
              </strong>
              <span className="text-white/80">
                {" "}
                A central dashboard to monitor all upcoming and completed
                appointments, manage cancellations, and handle customer support
                inquiries.
              </span>
            </div>
            <div>
              <strong className="text-white">
                Product & Content Management:
              </strong>
              <span className="text-white/80">
                {" "}
                Admins can easily add or update product listings in the
                aggregator and manage content across the website.
              </span>
            </div>
          </div>

          {/* Image placeholder for Admin Dashboard UI - NOW 75% SCREEN WIDTH */}
          <div className="flex justify-center my-8">
            <div className="w-[75vw] bg-white/10 border border-white/20 rounded-lg p-4 text-center">
              <p className="text-white/60 italic">
                [Insert Figma UI Screenshot for the Admin Dashboard - Overview
                of the dashboard, partner management table, and booking calendar
                view]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
