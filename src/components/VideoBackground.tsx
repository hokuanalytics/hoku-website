"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Fade out video as user scrolls (after 2 viewport heights)
  const opacity = useTransform(scrollY, [0, 800, 1600], [0.6, 0.4, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().catch(() => {
        console.log("Autoplay blocked");
      });
    };

    attemptPlay();
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity }}
    >
      {/* Fallback gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cool-graphite via-navy to-cool-graphite" />
      
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        onTimeUpdate={() => !isVideoLoaded && setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-cool-graphite/40" />
      
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </motion.div>
  );
}
