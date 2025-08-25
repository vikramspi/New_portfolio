"use client";
import React, { useState, useEffect, useRef } from "react";
import { ThreeDMarquee } from "../../components/three-d-marquee";
import { motion } from "framer-motion";

// --- Full-screen Marquee Hero Component ---
const MunshotHero = ({ images }) => {
  const title = "Munshot AI";
  const titleVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
  const letterVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } } };

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute inset-0">
        <ThreeDMarquee images={images} />
      </div>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <motion.h1 variants={titleVariants} initial="hidden" animate="visible" className="relative z-20 text-7xl md:text-9xl text-white font-bold text-center">
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

// --- Sidebar Navigation Component (no changes) ---
const ProjectNav = ({ navItems, activeSection }) => {
  return (
    <aside className="hidden lg:block lg:col-span-1">
      <div className="sticky top-32">
        <h3 className="text-sm font-semibold uppercase text-white/50 mb-4">On this page</h3>
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id}><a href={`#${item.id}`} className={`block pl-3 text-sm transition-all duration-200 ${ activeSection === item.id ? "text-purple-300 font-semibold border-l-2 border-purple-300" : "text-white/60 hover:text-white border-l-2 border-transparent hover:border-white/50" }`}>{item.title}</a></li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const generateImagePaths = (folder, filenames) => {
  return filenames.map((name) => `/Munshot/${folder}/${name}`);
};

const navItems = [
  { id: "overview", title: "Project Overview" },
  { id: "problem", title: "The Problem" },
  { id: "solution", title: "The Solution" },
  { id: "feature-chat", title: "Feature: Intelligent Chat" },
  { id: "feature-agents", title: "Feature: AI Agents" },
  { id: "feature-sheets", title: "Feature: AI Sheets" },
  { id: "feature-screening", title: "Feature: Advanced Screening" },
];


export default function MunshotProjectPage() {
  const [activeSection, setActiveSection] = useState("");

  const heroImages = [ "16.png", "15.png", "14.png", "13.png", "1.png", "22.png", "11.png", "1.png", "12.png", "2.png", "3.png", "5.png", "2.png", "6.png", "9.png", "8.png", "9.png", "6.png", "6.png", "10.png", "12.png", "20.png", "25.png", "9.png", "9.png", "9.png", "9.png", "9.png", "9.png", "9.png", "9.png" ];
  const chatImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  const agentImages = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "13.png", "14.png", "16.png", "17.png", "20.png" ];
  const screeningImages = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "13.png", "14.png", "15.png", "17.png", "20.png", "24.png", "25.png", "27.png", "28.png" ];
  const gridImages = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png" ];
  
  const allHeroImages = generateImagePaths("Hero", heroImages);

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
      <MunshotHero images={allHeroImages} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 px-4">
        <ProjectNav navItems={navItems} activeSection={activeSection} />

        <main className="lg:col-span-4">
          <div className="text-center py-16 md:py-24">
            <h1 className="text-5xl md:text-7xl font-bold">Munshot AI</h1>
            <p className="text-xl md:text-2xl text-white/70 mt-4">
              An AI-Powered Financial Intelligence Platform for Hedge Funds
            </p>
          </div>
          
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
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Information Overload</h3>
                <p className="text-lg leading-relaxed text-white/80">Analysts are inundated with a constant stream of data from countless sources—SEC filings, earnings reports, news articles, research papers, and internal documents. Manually sifting through this unstructured data is inefficient, prone to human error, and makes it easy to miss critical insights.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Repetitive & Time-Consuming Analysis</h3>
                <p className="text-lg leading-relaxed text-white/80">Performing routine tasks like sentiment analysis, risk assessment, or peer comparison for a portfolio of stocks is a manual, repetitive process. This leaves less time for high-level strategic thinking and identifying new opportunities.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Siloed & Inflexible Tools</h3>
                <p className="text-lg leading-relaxed text-white/80">Traditional financial tools are often rigid and disconnected. An analyst might use one platform for data visualization, another for screening, and a third for document analysis. This lack of integration creates friction, slows down workflows, and prevents a holistic view of the market.</p>
              </div>
            </div>
          </section>

          <section id="solution" className="max-w-4xl mx-auto pb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg leading-relaxed text-white/80">Munshot is an integrated AI ecosystem designed to be the central nervous system for financial analysis. It addresses the core problems by providing a unified, intelligent, and automated platform. Munshot consolidates the entire research and analysis workflow, allowing users to move seamlessly from querying raw documents to running automated analyses and screening for new opportunities. By leveraging generative AI, we empower analysts to work at the speed of thought, asking complex questions and receiving comprehensive, data-backed answers in seconds, not hours.</p>
          </section>

          <section className="max-w-4xl mx-auto pb-12">
            <h2 className="text-3xl font-bold mb-6">Core Features & Functionality</h2>
            <p className="text-lg leading-relaxed text-white/80 mb-8">Below is a breakdown of the four main modules of Munshot.</p>

            <div id="feature-chat" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4">1. Intelligent Chat: Conversational Research Engine</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6">The Chat module acts as a centralized research assistant. Instead of juggling dozens of PDFs and browser tabs, analysts can converse directly with their documents in a single, unified interface.</p>
              <div className="space-y-4 mb-6">
                <div><strong className="text-white">Multi-Document Conversation:</strong><span className="text-white/80"> Users can upload and organize unlimited documents into sections, allowing them to ask questions and receive synthesized answers from their entire knowledge base at once.</span></div>
                <div><strong className="text-white">Portfolio-Centric Context:</strong><span className="text-white/80"> A unique feature allowing users to create a stock portfolio and chat within its context, enabling queries like 'Summarize recent news for all my holdings.'</span></div>
                <div><strong className="text-white">AI-Enhanced Interaction:</strong><span className="text-white/80"> Features like <strong>DeepSearch</strong> for granular data extraction, which finds specific data points, and <strong>Auto-Suggest</strong>, which provides relevant follow-up questions to guide the research process.</span></div>
              </div>
              <div className="space-y-8 my-8">
                {chatImages.map((imageName) => (<img key={imageName} src={`/Munshot/Chat/${imageName}`} alt={`Chat interface screenshot - ${imageName}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>))}
              </div>
            </div>

            <div id="feature-agents" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4">2. AI Agents: Your Automated Analyst Team</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6">AI Agents automate complex, repetitive analytical tasks. This frees up analysts to focus on strategy rather than process.</p>
              <div className="space-y-4 mb-6">
                <div><strong className="text-white">Pre-built & Custom Agents:</strong><span className="text-white/80"> Users can deploy a library of pre-built agents like "Sentiment Analysis" or "SWOT Analysis," or build their own custom agents to perform unique, proprietary analyses across any number of stocks.</span></div>
                <div><strong className="text-white">Deep Customization & Scheduling:</strong><span className="text-white/80"> Each agent's analysis can be customized with specific lookback periods, data sources, and output formats, and can be scheduled to run automatically to ensure analysis is always up-to-date.</span></div>
                <div><strong className="text-white">Versatile Reporting:</strong><span className="text-white/80"> Individual agent reports can be downloaded as polished PDFs, while a master report aggregates the findings from all agents for a comprehensive portfolio overview.</span></div>
              </div>
              <div className="space-y-8 my-8">
                {agentImages.map((imageName) => (<img key={imageName} src={`/Munshot/Agent/${imageName}`} alt={`AI Agent screenshot - ${imageName}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>))}
              </div>
            </div>

            <div id="feature-sheets" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4">3. AI Sheets: The Dynamic Spreadsheet</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6">AI Sheets reimagines the financial spreadsheet as an interactive, AI-driven canvas for data exploration and visualization.</p>
              <div className="space-y-4 mb-6">
                <div><strong className="text-white">Dynamic Data Generation:</strong><span className="text-white/80"> Users can set any parameters for the X and Y axes to generate data tables on the fly, comparing metrics like P/E ratios and revenue growth across a list of custom tickers.</span></div>
                <div><strong className="text-white">Chat with Your Data:</strong><span className="text-white/80"> After a sheet is generated, users can chat directly with the output, asking questions like 'Which company has the highest margin?' to turn static tables into interactive analytical tools.</span></div>
                <div><strong className="text-white">Templating and Automation:</strong><span className="text-white/80"> Users can leverage pre-built templates for common analyses or create and save their own custom sheets, allowing for one-click regeneration of complex reports with the latest market data.</span></div>
              </div>
              <div className="space-y-8 my-8">
                {gridImages.map((imageName) => (<img key={imageName} src={`/Munshot/Grid/${imageName}`} alt={`AI Sheets screenshot - ${imageName}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>))}
              </div>
            </div>

            <div id="feature-screening" className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold mb-4">4. Advanced Screening: Discover Your Next Opportunity</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6">The Screening module allows analysts to filter through thousands of companies to find ones that match their specific investment criteria with unprecedented precision.</p>
              <div className="space-y-4 mb-6">
                <div><strong className="text-white">AI-Powered Step Generation:</strong><span className="text-white/80"> Users can simply describe the type of company they're looking for in natural language, and the AI will generate a multi-step screening process to find matching results.</span></div>
                <div><strong className="text-white">Granular Step Control:</strong><span className="text-white/80"> Each step in the screening process is customizable, allowing analysts to fine-tune every parameter, add proprietary metrics, and reorder the filtering logic to match their exact workflow.</span></div>
                <div><strong className="text-white">Detailed Analysis & Scheduling:</strong><span className="text-white/80"> The output is not just a list of companies but a detailed analysis of each one, including the key data points that caused it to pass the screen. Screeners can be saved and scheduled to run periodically, alerting the user to new companies that meet their criteria.</span></div>
              </div>
              <div className="space-y-8 my-8">
                {screeningImages.map((imageName) => (<img key={imageName} src={`/Munshot/Screening/${imageName}`} alt={`Screening UI screenshot - ${imageName}`} className="w-full rounded-lg border border-white/20 shadow-lg"/>))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}