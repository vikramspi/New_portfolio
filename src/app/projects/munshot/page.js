"use client";
import React, { useState, useEffect, useRef } from "react";
import { ThreeDMarquee } from "../../components/three-d-marquee";

const generateImagePaths = (folder, filenames) => {
  return filenames.map((name) => `/Munshot/${folder}/${name}`);
};

// Sidebar Navigation Component
const ProjectNav = ({ navItems, activeSection }) => {
  return (
    <aside className="hidden lg:block lg:col-span-1">
      <div className="sticky top-32">
        <h3 className="text-sm font-semibold uppercase text-white/50 mb-4">On this page</h3>
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block pl-3 text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-purple-300 font-semibold border-l-2 border-purple-300"
                    : "text-white/60 hover:text-white border-l-2 border-transparent hover:border-white/50"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};


export default function MunshotProjectPage() {
  const [activeSection, setActiveSection] = useState("");

  const agentImages = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "13.png", "14.png", "16.png", "17.png", "20.png" ];
  const heroImages = [ "16.png", "15.png", "14.png", "13.png", "1.png", "22.png", "11.png", "1.png", "12.png", "2.png", "3.png", "5.png", "2.png", "6.png", "9.png", "8.png", "9.png", "6.png", "6.png", "10.png", "12.png", "20.png", "25.png", "9.png", "9.png", "9.png", "9.png", "9.png", "9.png", "9.png", "9.png" ];
  const chatImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  const screeningImages = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "13.png", "14.png", "15.png", "17.png", "20.png", "24.png", "25.png", "27.png", "28.png" ];
  const gridImages = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png" ];
  
  const allImages = generateImagePaths("Hero", heroImages);

  const navItems = [
    { id: "overview", title: "Project Overview" },
    { id: "problem", title: "The Problem" },
    { id: "solution", title: "The Solution" },
    { id: "feature-chat", title: "Feature: Intelligent Chat" },
    { id: "feature-agents", title: "Feature: AI Agents" },
    { id: "feature-sheets", title: "Feature: AI Sheets" },
    { id: "feature-screening", title: "Feature: Advanced Screening" },
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


  return (
    <div className="w-full min-h-screen text-white">
      {/* --- Marquee Hero Section --- */}
      <div className="pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
          <ThreeDMarquee images={allImages} />
        </div>
      </div>

      {/* --- Project Title --- */}
      <div className="text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-bold">Munshot AI</h1>
        <p className="text-xl md:text-2xl text-white/70 mt-4">
          An AI-Powered Financial Intelligence Platform for Hedge Funds
        </p>
      </div>

      {/* --- Main Content Layout (Sidebar + Content) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 px-4">
        
        <ProjectNav navItems={navItems} activeSection={activeSection} />

        <main className="lg:col-span-4">
          
          <section id="overview" className="max-w-4xl mx-auto pb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 transition-colors duration-300 hover:text-purple-400">Project Overview</h2>
            <p className="text-lg leading-relaxed text-white/80 mb-8 transition-colors duration-300 hover:text-purple-400">
              Munshot is a sophisticated, all-in-one financial analysis platform
              designed to empower hedge fund analysts and portfolio managers. By
              integrating proprietary AI models, Munshot transforms overwhelming
              volumes of financial data into actionable intelligence. It streamlines
              research, automates complex analysis, and accelerates decision-making
              through four core modules: an intelligent Chat interface, automated AI
              Agents, dynamic AI Sheets, and an advanced Screening engine.
            </p>
          </section>

          <section id="problem" className="max-w-4xl mx-auto pb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 transition-colors duration-300 hover:text-purple-400">The Problem</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-400">1. Information Overload</h3>
                <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">Analysts are inundated with a constant stream of data from countless sources—SEC filings, earnings reports, news articles, research papers, and internal documents. Manually sifting through this unstructured data is inefficient, prone to human error, and makes it easy to miss critical insights.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-400">2. Repetitive & Time-Consuming Analysis</h3>
                <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">Performing routine tasks like sentiment analysis, risk assessment, or peer comparison for a portfolio of stocks is a manual, repetitive process. This leaves less time for high-level strategic thinking and identifying new opportunities.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-purple-400">3. Siloed & Inflexible Tools</h3>
                <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">Traditional financial tools are often rigid and disconnected. An analyst might use one platform for data visualization, another for screening, and a third for document analysis. This lack of integration creates friction, slows down workflows, and prevents a holistic view of the market.</p>
              </div>
            </div>
          </section>

          <section id="solution" className="max-w-4xl mx-auto pb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 transition-colors duration-300 hover:text-purple-400">The Solution</h2>
            <p className="text-lg leading-relaxed text-white/80 transition-colors duration-300 hover:text-purple-400">Munshot is an integrated AI ecosystem designed to be the central nervous system for financial analysis. It addresses the core problems by providing a unified, intelligent, and automated platform. Munshot consolidates the entire research and analysis workflow, allowing users to move seamlessly from querying raw documents to running automated analyses and screening for new opportunities. By leveraging generative AI, we empower analysts to work at the speed of thought, asking complex questions and receiving comprehensive, data-backed answers in seconds, not hours.</p>
          </section>

          <section className="max-w-4xl mx-auto pb-12">
            <h2 className="text-3xl font-bold mb-6 transition-colors duration-300 hover:text-purple-400">Core Features & Functionality</h2>
            <p className="text-lg leading-relaxed text-white/80 mb-8 transition-colors duration-300 hover:text-purple-400">Below is a breakdown of the four main modules of Munshot.</p>

            {/* --- Feature 1 - Chat --- */}
            <div id="feature-chat" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">1. Intelligent Chat: Conversational Research Engine</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6 transition-colors duration-300 hover:text-purple-400">The Chat module acts as a centralized research assistant. Instead of juggling dozens of PDFs and browser tabs, analysts can converse directly with their documents in a single, unified interface.</p>
              <div className="space-y-4 mb-6">
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Multi-Document Conversation:</strong><span className="text-white/80"> Users can upload and organize unlimited documents into sections...</span></div>
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Portfolio-Centric Context:</strong><span className="text-white/80"> A unique feature allowing users to create a stock portfolio and chat within its context...</span></div>
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">AI-Enhanced Interaction:</strong><span className="text-white/80"> Features like <strong>DeepSearch</strong> for granular data extraction...</span></div>
              </div>
              <div className="space-y-8 my-8">
                {chatImages.map((imageName) => (
                  <img key={imageName} src={`/Munshot/Chat/${imageName}`} alt={`Chat interface screenshot - ${imageName}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>
                ))}
              </div>
            </div>

            {/* --- Feature 2 - AI Agents --- */}
            <div id="feature-agents" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">2. AI Agents: Your Automated Analyst Team</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6 transition-colors duration-300 hover:text-purple-400">AI Agents automate complex, repetitive analytical tasks. This frees up analysts to focus on strategy rather than process.</p>
              <div className="space-y-4 mb-6">
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Pre-built & Custom Agents:</strong><span className="text-white/80"> Users can deploy a library of pre-built agents (e.g., "Sentiment Analysis," "SWOT Analysis," "Risk Assessment")...</span></div>
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Deep Customization & Scheduling:</strong><span className="text-white/80"> Each agent's analysis can be customized with specific lookback periods...</span></div>
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Versatile Reporting:</strong><span className="text-white/80"> Individual agent reports can be downloaded as polished PDFs...</span></div>
              </div>
              <div className="space-y-8 my-8">
                {agentImages.map((imageName) => (
                  <img key={imageName} src={`/Munshot/Agent/${imageName}`} alt={`AI Agent screenshot - ${imageName}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>
                ))}
              </div>
            </div>

            {/* --- Feature 3 - AI Sheets --- */}
            <div id="feature-sheets" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">3. AI Sheets: The Dynamic Spreadsheet</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6 transition-colors duration-300 hover:text-purple-400">AI Sheets reimagines the financial spreadsheet as an interactive, AI-driven canvas for data exploration and visualization.</p>
              <div className="space-y-4 mb-6">
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Dynamic Data Generation:</strong><span className="text-white/80"> Users can set any parameters for the X and Y axes to generate data tables...</span></div>
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Chat with Your Data:</strong><span className="text-white/80"> After a sheet is generated, users can chat directly with the output...</span></div>
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Templating and Automation:</strong><span className="text-white/80"> Users can leverage pre-built templates for common analyses or create and save their own...</span></div>
              </div>
              <div className="space-y-8 my-8">
                {gridImages.map((imageName) => (
                  <img key={imageName} src={`/Munshot/Grid/${imageName}`} alt={`AI Sheets screenshot - ${imageName}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>
                ))}
              </div>
            </div>

            {/* --- Feature 4 - Screening --- */}
            <div id="feature-screening" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 hover:text-purple-400">4. Advanced Screening: Discover Your Next Opportunity</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6 transition-colors duration-300 hover:text-purple-400">The Screening module allows analysts to filter through thousands of companies to find ones that match their specific investment criteria with unprecedented precision.</p>
              <div className="space-y-4 mb-6">
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">AI-Powered Step Generation:</strong><span className="text-white/80"> Users can simply describe the type of company they're looking for...</span></div>
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Granular Step Control:</strong><span className="text-white/80"> Each step in the screening process is customizable...</span></div>
                <div className="transition-colors duration-300 hover:text-purple-400"><strong className="text-white">Detailed Analysis & Scheduling:</strong><span className="text-white/80"> The output is not just a list of companies but a detailed analysis of each one...</span></div>
              </div>
              <div className="space-y-8 my-8">
                {screeningImages.map((imageName) => (
                  <img key={imageName} src={`/Munshot/Screening/${imageName}`} alt={`Screening UI screenshot - ${imageName}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>
                ))}
              </div>
            </div>

          </section>
        </main>
      </div>
    </div>
  );
}