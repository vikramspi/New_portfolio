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

      {/* --- Project Title (sits on the galaxy background) --- */}
      <div className="text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-bold">Munshot AI</h1>
        <p className="text-xl md:text-2xl text-white/70 mt-4">
          An AI-Powered Financial Intelligence Platform for Hedge Funds
        </p>
      </div>

      {/* --- Project Overview Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-8">
          Munshot is a sophisticated, all-in-one financial analysis platform
          designed to empower hedge fund analysts and portfolio managers. By
          integrating proprietary AI models, Munshot transforms overwhelming
          volumes of financial data into actionable intelligence. It streamlines
          research, automates complex analysis, and accelerates decision-making
          through four core modules: an intelligent Chat interface, automated AI
          Agents, dynamic AI Sheets, and an advanced Screening engine.
        </p>
      </div>

      {/* --- The Problem Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">The Problem</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-6">
          In the high-stakes world of hedge funds, analysts face three critical
          challenges:
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Information Overload
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Analysts are inundated with a constant stream of data from
              countless sources—SEC filings, earnings reports, news articles,
              research papers, and internal documents. Manually sifting through
              this unstructured data is inefficient, prone to human error, and
              makes it easy to miss critical insights.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Repetitive & Time-Consuming Analysis
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Performing routine tasks like sentiment analysis, risk assessment,
              or peer comparison for a portfolio of stocks is a manual,
              repetitive process. This leaves less time for high-level strategic
              thinking and identifying new opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Siloed & Inflexible Tools
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              Traditional financial tools are often rigid and disconnected. An
              analyst might use one platform for data visualization, another for
              screening, and a third for document analysis. This lack of
              integration creates friction, slows down workflows, and prevents a
              holistic view of the market.
            </p>
          </div>
        </div>
      </div>

      {/* --- The Solution Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">The Solution</h2>
        <p className="text-lg leading-relaxed text-white/80 mb-6">
          Munshot is an integrated AI ecosystem designed to be the central
          nervous system for financial analysis. It addresses the core problems
          by providing a unified, intelligent, and automated platform.
        </p>
        <p className="text-lg leading-relaxed text-white/80">
          Munshot consolidates the entire research and analysis workflow,
          allowing users to move seamlessly from querying raw documents to
          running automated analyses and screening for new opportunities. By
          leveraging generative AI, we empower analysts to work at the speed of
          thought, asking complex questions and receiving comprehensive,
          data-backed answers in seconds, not hours.
        </p>
      </div>

      {/* --- Design & Development Process Section --- */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">
          Design & Development Process
        </h2>
        <p className="text-lg leading-relaxed text-white/80 mb-6">
          My process was centered on understanding the complex workflow of a
          financial analyst and designing a UI that felt powerful yet intuitive.
          The goal was to reduce cognitive load and present complex
          functionalities in a clean, accessible manner.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Research & Discovery
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              I analyzed existing financial terminals and interviewed potential
              users to identify key pain points and workflow inefficiencies. The
              core insight was the need for a <em>conversational</em> and{" "}
              <em>automated</em> approach to data.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Information Architecture
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              I structured the platform into four distinct but interconnected
              pillars (Chat, Agents, AI Sheets, Screening) to create a logical
              user journey. A user could discover an idea in 'Chat', validate it
              with 'Agents', visualize it in 'AI Sheets', and find similar
              opportunities using 'Screening'.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Wireframing & Prototyping (Figma)
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              I developed low-fidelity wireframes to map out core user flows,
              focusing on task completion. This was followed by high-fidelity,
              interactive prototypes in Figma to test the usability of features
              like the custom agent builder and the dynamic AI Sheet generator.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. UI & Visual Design
            </h3>
            <p className="text-lg leading-relaxed text-white/80">
              The UI was designed to be clean, data-dense, and professional. A
              dark-mode interface was chosen to reduce eye strain during long
              hours of use, with clear typography and color-coding to highlight
              key data points and insights.
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
          Below is a breakdown of the four main modules of Munshot.
        </p>

        {/* Feature 1 - Chat */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            1. Intelligent Chat: Conversational Research Engine
          </h3>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            The Chat module acts as a centralized research assistant. Instead of
            juggling dozens of PDFs and browser tabs, analysts can converse
            directly with their documents in a single, unified interface.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <strong className="text-white">
                Multi-Document Conversation:
              </strong>
              <span className="text-white/80">
                {" "}
                Users can upload and organize unlimited documents into sections
                (e.g., "Q3 Earnings Reports," "Tesla Research"). They can then
                select individual files or entire sections to have a focused
                conversation, ensuring contextually relevant answers.
              </span>
            </div>
            <div>
              <strong className="text-white">Portfolio-Centric Context:</strong>
              <span className="text-white/80">
                {" "}
                A unique feature allowing users to create a stock portfolio and
                chat within its context. The AI automatically pulls relevant
                company filings and data for any stock in the portfolio,
                streamlining analysis.
              </span>
            </div>
            <div>
              <strong className="text-white">AI-Enhanced Interaction:</strong>
              <span className="text-white/80">
                {" "}
                Features like <strong>DeepSearch</strong> for granular data
                extraction, <strong>Web Access</strong> for real-time
                information, <strong>AutoPrompt</strong> for refining user
                queries, and <strong>Suggested Questions</strong> guide the
                analyst toward deeper insights.
              </span>
            </div>
          </div>

          {/* Image for Chat UI */}
          <div className="flex justify-center my-8">
            <img
              src="/Munshot/Screening/1.png"
              alt="Munshot AI-powered chat and document analysis interface"
              className="w-full max-w-4xl rounded-lg border border-white/20 shadow-lg"
            />
          </div>
        </div>

        {/* Feature 2 - AI Agents */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            2. AI Agents: Your Automated Analyst Team
          </h3>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            AI Agents automate complex, repetitive analytical tasks. This frees
            up analysts to focus on strategy rather than process.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <strong className="text-white">Pre-built & Custom Agents:</strong>
              <span className="text-white/80">
                {" "}
                Users can deploy a library of pre-built agents (e.g., "Sentiment
                Analysis," "SWOT Analysis," "Risk Assessment") on their
                portfolio or build their own from scratch using a simple
                descriptive prompt.
              </span>
            </div>
            <div>
              <strong className="text-white">
                Deep Customization & Scheduling:
              </strong>
              <span className="text-white/80">
                {" "}
                Each agent's analysis can be customized with specific lookback
                periods or by adding supplementary documents. Crucially, agents
                can be scheduled to run on a recurring basis (daily, weekly),
                with reports automatically emailed to the user.
              </span>
            </div>
            <div>
              <strong className="text-white">Versatile Reporting:</strong>
              <span className="text-white/80">
                {" "}
                Individual agent reports can be downloaded as polished PDFs. For
                portfolio-level overviews, outputs from multiple agents can be
                compiled and downloaded into a single, comprehensive Excel file.
              </span>
            </div>
          </div>

          {/* Images for Agents UI */}
          <div className="flex flex-col md:flex-row justify-center gap-4 my-8">
            <img
              src="/Munshot/Screening/7.png"
              alt="Library of saved analysis agents in Munshot"
              className="w-full md:w-1/2 rounded-lg border border-white/20 shadow-lg"
            />
            <img
              src="/Munshot/Screening/10.png"
              alt="Scheduling an automated agent to run daily"
              className="w-full md:w-1/2 rounded-lg border border-white/20 shadow-lg"
            />
          </div>
        </div>

        {/* Feature 3 - AI Sheets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            3. AI Sheets: The Dynamic Spreadsheet
          </h3>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            AI Sheets reimagines the financial spreadsheet as an interactive,
            AI-driven canvas for data exploration and visualization.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <strong className="text-white">Dynamic Data Generation:</strong>
              <span className="text-white/80">
                {" "}
                Users can set any parameters for the X and Y axes to generate
                data tables. For example, Y-axis with company names and X-axis
                with performance metrics (P/E, EPS, etc.). For single-company
                analysis, the Y-axis could be financial metrics and the X-axis
                could be time periods or regions.
              </span>
            </div>
            <div>
              <strong className="text-white">Chat with Your Data:</strong>
              <span className="text-white/80">
                {" "}
                After a sheet is generated, users can chat directly with the
                output to ask follow-up questions, request summaries, or
                identify outliers, turning a static table into an interactive
                dashboard.
              </span>
            </div>
            <div>
              <strong className="text-white">Templating and Automation:</strong>
              <span className="text-white/80">
                {" "}
                Users can leverage pre-built templates for common analyses or
                create and save their own. Like agents, AI Sheets can be
                scheduled for automatic updates and emailed, ensuring
                stakeholders always have the latest data.
              </span>
            </div>
          </div>

          {/* Image for AI Sheets UI */}
          <div className="flex justify-center my-8">
            <img
              src="/Munshot/Screening/5.png"
              alt="Munshot AI Sheets showing historical price, volatility, and event data"
              className="w-full max-w-4xl rounded-lg border border-white/20 shadow-lg"
            />
          </div>
        </div>

        {/* Feature 4 - Screening */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            4. Advanced Screening: Discover Your Next Opportunity
          </h3>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            The Screening module allows analysts to filter through thousands of
            companies to find ones that match their specific investment criteria
            with unprecedented precision.
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <strong className="text-white">
                AI-Powered Step Generation:
              </strong>
              <span className="text-white/80">
                {" "}
                Users can simply describe the type of company they're looking
                for (e.g., "undervalued tech stocks with high cash flow and low
                debt"), and the AI will generate a multi-step screening process
                to find it. Alternatively, users can build their screener
                manually.
              </span>
            </div>
            <div>
              <strong className="text-white">Granular Step Control:</strong>
              <span className="text-white/80">
                {" "}
                Each step in the screening process is customizable. Users can
                set specific lookback periods or even instruct a step to perform
                its analysis based on a specific set of uploaded documents
                (e.g., "screen for companies mentioned positively in this
                research paper").
              </span>
            </div>
            <div>
              <strong className="text-white">
                Detailed Analysis & Scheduling:
              </strong>
              <span className="text-white/80">
                {" "}
                The output is not just a list of companies but a detailed
                analysis of each one that passed the screen. Screeners can be
                saved and scheduled to run periodically to continuously uncover
                new opportunities that fit the user's criteria.
              </span>
            </div>
          </div>

          {/* Image gallery for Screening UI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <img
              src="/Munshot/Screening/2.png"
              alt="Creating a new company screen in Munshot"
              className="w-full rounded-lg border border-white/20 shadow-lg"
            />
            <img
              src="/Munshot/Screening/3.png"
              alt="AI-generated audit trail for a screening process"
              className="w-full rounded-lg border border-white/20 shadow-lg"
            />
            <img
              src="/Munshot/Screening/4.png"
              alt="Detailed company analysis from a screening result"
              className="w-full rounded-lg border border-white/20 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
