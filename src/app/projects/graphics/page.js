"use client";

import React, { useEffect, useRef, useState } from "react";

const ImageGallery = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    // Initialize Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setLoadedImages((prev) => new Set([...prev, index]));
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before the image comes into view
        threshold: 0.1,
      },
    );

    // Observe all image elements
    const imageElements = document.querySelectorAll(".img");
    imageElements.forEach((img) => {
      observerRef.current?.observe(img);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Preload critical images (first few visible ones)
  useEffect(() => {
    const preloadImages = imageData.slice(0, 6); // Preload first 6 images
    preloadImages.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, index]));
      };
      img.src = src;
    });
  }, []);

  const imageData = [
    "/Gaphic/43_halloween.png",
    "/Gaphic/44_prom_night.png",
    "/Gaphic/45_bucket_list.png",
    "/Gaphic/46_asthetic.png",
    "/Gaphic/50_merry_christmas.png",
    "/Gaphic/9_retrowave.png",
    "/Gaphic/11_nrityakala.png",
    "/Gaphic/35_sponsor.png",
    "/Gaphic/38_junk_art.png",
    "/Gaphic/1_Wildfire.png",
    "/Gaphic/2_tell_a_tale.png",
    "/Gaphic/4_spent.png",
    "/Gaphic/6_sketch_it.png",
    "/Gaphic/7_Short_film_making.png",
    "/Gaphic/8_sargam.png",
    "/Gaphic/12_national_level_debate.png",
    "/Gaphic/5_soapaholic.png",
    "/Gaphic/10_motion_tales.png",
    "/Gaphic/13_mixology.png",
    "/Gaphic/14_navyata.png",
    "/Gaphic/15_panache.png",
    "/Gaphic/16_peek_a_who.png",
    "/Gaphic/17_poetry_slam.png",
    "/Gaphic/18_rangoli.png",
    "/Gaphic/19_jumble_the_good_word.png",
    "/Gaphic/20_lakeside_dreams.png",
    "/Gaphic/21_hilarity_ensues.png",
    "/Gaphic/22_lights_camera_sf.png",
    "/Gaphic/23_i_me_myself.png",
    "/Gaphic/24_impromptu.png",
    "/Gaphic/25_dumbstruct.png",
    "/Gaphic/26_mr._ms._spring_fest.png",
    "/Gaphic/27_cinemania.png",
    "/Gaphic/28_face_canvas.png",
    "/Gaphic/29_fest_focus.png",
    "/Gaphic/30_centrifuge.png",
    "/Gaphic/31_a_picture_tale.png",
    "/Gaphic/32_beat_it.png",
    "/Gaphic/33_biz_tech.png",
    "/Gaphic/34_chefs_corner.png",
    "/Gaphic/36_the_note_less_travelled.png",
    "/Gaphic/37_rangmanch.png",
    "/Gaphic/39_india_calling.png",
    "/Gaphic/40_two_for_a_tango.png",
    "/Gaphic/41_notes_less_travelled.png",
    "/Gaphic/42_top_it_two_win_it.png",
    "/Gaphic/47_panal.png",
    "/Gaphic/48_sf_talkies.png",
    "/Gaphic/49_silent_dj.png",
    "/Gaphic/50_salim_sulayawan.png",
    "/Gaphic/3_stash_and_show.png",
  ];

  return (
    <>
      <style jsx>{`
        html,
        body {
          width: 100%;
          min-height: 100%;
          margin: 0;
          padding: 0;
        }

        body::-webkit-scrollbar {
          display: none;
        }

        .section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin: 0 auto;
        }

        .img {
          width: 100%;
          height: 700px;
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .img.loaded {
          opacity: 1;
        }

        .img.loading {
          background-color: #f0f0f0;
          background-image: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200px 100%;
          animation: loading 1.5s infinite;
        }

        @keyframes loading {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(100% + 200px) 0;
          }
        }

        .img::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          border-right: 1px solid black;
        }
      `}</style>

      <section className="section">
        {imageData.map((imageSrc, index) => {
          const isLoaded = loadedImages.has(index);
          return (
            <div
              key={index}
              className={`img ${isLoaded ? "loaded" : "loading"}`}
              data-index={index}
              style={{
                backgroundImage: isLoaded ? `url('${imageSrc}')` : "none",
              }}
            ></div>
          );
        })}
      </section>
    </>
  );
};

export default ImageGallery;
