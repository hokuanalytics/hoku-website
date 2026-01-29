"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function V11HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="h-[400vh] bg-[#0a0a0a]">
      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-white/60 hover:text-white text-sm transition-colors"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-white text-xl font-bold">HOKU</span>
          <div className="hidden md:flex items-center gap-6">
            {["About", "Solutions", "Projects", "Contact"].map((item) => (
              <a key={item} href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-[#35AAF9] text-white px-5 py-2 rounded-full text-sm font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Horizontal Scroll Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 pl-[10vw]">
          
          {/* Panel 1 - Hero */}
          <div className="w-screen h-screen flex-shrink-0 flex items-center relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
              <source src="/movie-video.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 max-w-3xl pl-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#35AAF9] text-sm uppercase tracking-[0.3em] block mb-6"
              >
                The Carbon Free Future
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8"
              >
                Tomorrow&apos;s
                <br />
                <span className="text-[#35AAF9]">Power</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 max-w-lg"
              >
                Clean energy meets intelligent infrastructure
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center gap-4 text-white/40"
              >
                <span className="text-sm">Scroll to explore</span>
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Panel 2 - Stats */}
          <div className="w-screen h-screen flex-shrink-0 flex items-center bg-gradient-to-r from-[#0a0a0a] to-[#04223F]">
            <div className="w-full px-24">
              <h2 className="text-5xl font-bold text-white mb-16">By the Numbers</h2>
              <div className="grid grid-cols-4 gap-12">
                {[
                  { value: "6", label: "Global Offices", desc: "Worldwide presence" },
                  { value: "5+", label: "Active Projects", desc: "Currently developing" },
                  { value: "24/7", label: "Carbon Free", desc: "Clean energy supply" },
                  { value: "2050", label: "Net-Zero", desc: "Target year" },
                ].map((stat, index) => (
                  <div key={stat.label} className="border-l border-white/20 pl-6">
                    <div className="text-6xl font-bold text-[#35AAF9] mb-2">{stat.value}</div>
                    <div className="text-white font-medium mb-1">{stat.label}</div>
                    <div className="text-white/40 text-sm">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 3 - Solutions */}
          <div className="w-screen h-screen flex-shrink-0 flex items-center bg-[#04223F]">
            <div className="w-full px-24">
              <h2 className="text-5xl font-bold text-white mb-16">Our Solutions</h2>
              <div className="flex gap-8">
                {[
                  { title: "Renewable Energy", icon: "☀️", desc: "Solar & wind power at scale" },
                  { title: "Green Hydrogen", icon: "⚡", desc: "Clean hydrogen production" },
                  { title: "AI Datacenters", icon: "🖥️", desc: "Carbon-free computing" },
                ].map((item) => (
                  <div 
                    key={item.title}
                    className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors group cursor-pointer"
                  >
                    <span className="text-6xl mb-6 block group-hover:scale-110 transition-transform">{item.icon}</span>
                    <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-white/50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 4 - CTA */}
          <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[#04223F] to-[#35AAF9]">
            <div className="text-center">
              <h2 className="text-6xl font-bold text-white mb-8">
                Ready to Connect?
              </h2>
              <p className="text-xl text-white/80 max-w-lg mx-auto mb-12">
                Join us in shaping a sustainable future with clean energy solutions.
              </p>
              <button className="bg-white text-[#04223F] px-12 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                Get in Touch
              </button>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-1">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="w-48 h-1 bg-[#35AAF9] rounded-full origin-left"
          />
        </div>
      </div>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 text-white/40 text-sm">
        V11 - Horizontal Scroll
      </div>
    </div>
  );
}
