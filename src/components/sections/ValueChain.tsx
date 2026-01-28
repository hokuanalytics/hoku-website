"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { valueChain } from "@/data/content";

const icons = {
  solar: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  factory: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  storage: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  industry: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export default function ValueChain() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      console.log("Video autoplay blocked");
    });
  }, []);

  return (
    <section className="section relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
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
            isVideoLoaded ? "opacity-40" : "opacity-0"
          }`}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-cool-graphite/60" />
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-30 pointer-events-none z-[1]">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-energetic-blue/20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Our Approach"
          title="The Carbon Neutral Value Chain"
          description="Our competitive advantage lies in our fully carbon neutral end to end supply chain, combined with the strategic final use of our green fuels."
          dark
        />

        {/* Value Chain Steps */}
        <div className="mt-20 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-energetic-blue/20 via-energetic-blue to-energetic-blue/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueChain.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-energetic-blue text-white text-sm font-bold flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 pt-10 shadow-lg shadow-cool-graphite/10 group-hover:shadow-2xl group-hover:shadow-energetic-blue/20 transition-all duration-300 h-full border border-white/50 group-hover:border-energetic-blue/30">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-airy-white to-airy-grey flex items-center justify-center text-cool-graphite mb-6 group-hover:from-energetic-blue/10 group-hover:to-navy/10 transition-colors">
                    {icons[step.icon as keyof typeof icons]}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-cool-graphite mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-energetic-blue font-semibold uppercase tracking-wider mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-cool-graphite/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < valueChain.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-energetic-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/80 mb-6">
            We develop renewable energy projects in resource-rich countries and control demand downstream
          </p>
          <motion.a
            href="/solutions"
            className="inline-flex items-center gap-2 text-energetic-blue font-semibold hover:gap-4 transition-all"
            whileHover={{ x: 5 }}
          >
            Learn more about our solutions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
