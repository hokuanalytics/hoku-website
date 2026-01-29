"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function V14CardStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-[500vh] bg-[#0a0a0a]">
      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-white/60 hover:text-white text-sm transition-colors"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-white text-xl font-bold">HOKU</span>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Solutions", "Projects", "Contact"].map((item) => (
              <a key={item} href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Card - Fixed */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.8]),
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
          }}
          className="w-[90vw] max-w-6xl h-[80vh] bg-gradient-to-br from-[#04223F] to-[#183A6B] rounded-[40px] p-16 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="/movie-video.mp4" type="video/mp4" />
          </video>
          
          <div className="relative z-10">
            <span className="text-[#35AAF9] text-sm uppercase tracking-widest">The Carbon Free Future</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mt-6 leading-tight">
              Tomorrow&apos;s
              <br />
              <span className="text-[#35AAF9]">Power</span>
            </h1>
            <p className="text-xl text-white/60 mt-8 max-w-xl">
              Clean energy meets intelligent infrastructure
            </p>
            <div className="mt-12 flex gap-4">
              <button className="bg-white text-[#04223F] px-8 py-4 rounded-full font-semibold">
                Explore
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Card 1 - Stats */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.15, 0.35, 0.4], [0.9, 1, 0.8]),
            opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.4], [0, 1, 0]),
            y: useTransform(scrollYProgress, [0.15, 0.25], [100, 0])
          }}
          className="w-[90vw] max-w-6xl h-[80vh] bg-white rounded-[40px] p-16 flex items-center"
        >
          <div className="w-full">
            <h2 className="text-5xl font-bold text-[#04223F] mb-16">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "6", label: "Global Offices" },
                { value: "5+", label: "Active Projects" },
                { value: "24/7", label: "Carbon Free" },
                { value: "2050", label: "Net-Zero Target" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-8 bg-gray-50 rounded-3xl">
                  <div className="text-6xl font-bold text-[#35AAF9] mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Card 2 - Solutions */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.35, 0.55, 0.6], [0.9, 1, 0.8]),
            opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0, 1, 0]),
            y: useTransform(scrollYProgress, [0.35, 0.45], [100, 0])
          }}
          className="w-[90vw] max-w-6xl h-[80vh] bg-[#35AAF9] rounded-[40px] p-16 flex items-center"
        >
          <div className="w-full">
            <h2 className="text-5xl font-bold text-white mb-16">Our Solutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Renewable Energy", desc: "Solar & wind power generation", icon: "☀️" },
                { title: "Green Hydrogen", desc: "Clean hydrogen production", icon: "⚡" },
                { title: "AI Datacenters", desc: "Carbon-free computing", icon: "🖥️" },
              ].map((item) => (
                <div key={item.title} className="bg-white/20 backdrop-blur-sm rounded-3xl p-8">
                  <span className="text-5xl mb-4 block">{item.icon}</span>
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Card 3 - Vision */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.55, 0.75, 0.8], [0.9, 1, 0.8]),
            opacity: useTransform(scrollYProgress, [0.55, 0.65, 0.8], [0, 1, 0]),
            y: useTransform(scrollYProgress, [0.55, 0.65], [100, 0])
          }}
          className="w-[90vw] max-w-6xl h-[80vh] bg-gradient-to-br from-purple-600 to-pink-600 rounded-[40px] p-16 flex items-center justify-center text-center"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Accelerating
              <br />
              <span className="text-white/80">the transition to</span>
              <br />
              low-carbon future
            </h2>
            <p className="text-xl text-white/70 mt-8 max-w-2xl mx-auto">
              Energy efficiency, localized generation, and intelligent compute solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Card 4 - CTA */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.75, 0.95], [0.9, 1]),
            opacity: useTransform(scrollYProgress, [0.75, 0.85], [0, 1]),
            y: useTransform(scrollYProgress, [0.75, 0.85], [100, 0])
          }}
          className="w-[90vw] max-w-6xl h-[80vh] bg-[#04223F] rounded-[40px] p-16 flex items-center justify-center text-center"
        >
          <div>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-white/60 max-w-xl mx-auto mb-12">
              Join us in shaping a sustainable future with clean energy solutions.
            </p>
            <button className="bg-[#35AAF9] text-white px-12 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </section>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            style={{
              backgroundColor: useTransform(
                scrollYProgress,
                [i * 0.2, i * 0.2 + 0.1, (i + 1) * 0.2],
                ["rgba(255,255,255,0.2)", "#35AAF9", "rgba(255,255,255,0.2)"]
              )
            }}
            className="w-2 h-2 rounded-full"
          />
        ))}
      </div>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 text-white/40 text-sm">
        V14 - Card Stack
      </div>
    </div>
  );
}
