"use client";

import React, { useState, useEffect, useRef } from "react";

const VideoGallery = ({
  isLoading = true,
  showVideos = false,
  className = "",
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer for lazy rendering
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("video-gallery");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Simple Loading Component
  const SimpleLoader = () => {
    return (
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-200 border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-purple-300 rounded-full animate-spin animate-reverse"></div>
        </div>

        {/* Loading text with dots animation */}
        <div className="text-white text-xl font-medium">
          Loading videos
          <span className="inline-flex ml-1">
            <span className="animate-bounce delay-0">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-64 rounded-full h-2 overflow-hidden">
          <div className="bg-gradient-to-r from-white to-purple-200 h-full rounded-full animate-[loadingBar_3s_ease-out_forwards]"></div>
        </div>
      </div>
    );
  };

  // Video component with scroll-triggered autoplay
  const AutoplayVideo = ({ src, index }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        },
        { threshold: 0.3 },
      );

      observer.observe(video);

      return () => {
        observer.unobserve(video);
      };
    }, []);

    return (
      <div
        className={`
          relative w-full h-screen flex items-center justify-center px-4 transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"}
        `}
        style={{
          transitionDelay: `${index * 100}ms`,
        }}
      >
        <video
          ref={videoRef}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl pointer-events-none" />

        {/* Video counter */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {index + 1} / 7
        </div>
      </div>
    );
  };

  if (!shouldRender && !isLoading) return null;

  return (
    <>
      {/* CSS-in-JS for keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-reverse {
          animation-direction: reverse;
        }

        .scroll-container {
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
        }

        .scroll-container::-webkit-scrollbar {
          width: 8px;
        }

        .scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .scroll-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .video-section {
          scroll-snap-align: start;
        }
      `}</style>

      <div
        id="video-gallery"
        ref={containerRef}
        className={`
          min-h-screen
          ${showVideos ? "scroll-container overflow-y-auto" : "flex justify-center items-center"}
          ${className}
        `}
      >
        {/* Simple Loader Component */}
        {isLoading && <SimpleLoader />}

        {/* Video Gallery with Scroll Effects */}
        {showVideos && (
          <div className="relative">
            {/* Header Section */}
            <div className="h-screen flex flex-col items-center justify-center text-center px-4 video-section">
              <div className="animate-[fadeInUp_1s_ease-out]">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Video Gallery
                </h1>
                <p className="text-purple-200 text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                  Scroll down to explore our collection of videos with smooth
                  animations
                </p>
                <div className="animate-bounce">
                  <svg
                    className="w-8 h-8 text-white mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Sections */}
            {[1, 2, 4, 5, 6, 7, 8].map((videoNumber, index) => (
              <div key={videoNumber} className="video-section">
                <AutoplayVideo
                  src={`/video/${videoNumber}.mp4`}
                  index={index}
                />
              </div>
            ))}

            {/* Footer Section */}
            <div className="h-screen flex items-center justify-center video-section">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Thank You for Watching
                </h2>
                <p className="text-purple-200 text-lg mb-8">
                  End of gallery • Scroll back to top
                </p>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Progress indicator */}
        {showVideos && (
          <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
            <div className="flex flex-col space-y-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="w-1 h-8 bg-white/20 rounded-full overflow-hidden"
                >
                  <div className="w-full bg-white transition-all duration-300 rounded-full opacity-30 h-full"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// Main Page Component
const ThreeDPage = () => {
  const [loading, setLoading] = useState(true);
  const [showVideos, setShowVideos] = useState(false);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowVideos(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <VideoGallery isLoading={loading} showVideos={showVideos} />;
};

export default ThreeDPage;
