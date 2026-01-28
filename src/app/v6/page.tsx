"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function V6VideoBackground() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
      </div>

      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-white/60 hover:text-white text-sm transition-colors"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Custom Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-wider"
          >
            HOKU
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {["Industry", "Solutions", "Projects", "News", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#35AAF9] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Hamburger */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ x: menuOpen ? 0 : '100%' }}
        className="fixed inset-y-0 right-0 w-full md:w-80 bg-black/95 backdrop-blur-xl z-30 p-12 pt-24"
      >
        <div className="flex flex-col gap-6">
          {["Industry", "Solutions", "Projects", "News", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-2xl font-light text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Hero Content */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-[#35AAF9] mb-6"
            >
              // The Carbon Free Future
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8"
            >
              Where Clean Energy
              <br />
              <span className="font-semibold">Meets Intelligent</span>
              <br />
              Infrastructure
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {/* Animated border button */}
              <button className="group relative px-8 py-4 overflow-hidden">
                <span className="relative z-10 uppercase tracking-widest text-sm font-medium">
                  Ask Us How
                </span>
                {/* Animated border */}
                <span className="absolute inset-0 border border-white/30 group-hover:border-[#35AAF9] transition-colors" />
                <span className="absolute bottom-0 left-0 w-full h-0 bg-[#35AAF9] group-hover:h-full transition-all duration-300 -z-0" />
              </button>

              {/* Icon button */}
              <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:border-[#35AAF9] hover:bg-[#35AAF9]/10 transition-all group">
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 py-12 border-t border-white/10">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "6", label: "Global Offices" },
              { value: "5+", label: "Active Projects" },
              { value: "24/7", label: "Carbon Free Energy" },
              { value: "2050", label: "Net-Zero Target" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-light text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-[#35AAF9] mb-4"
          >
            // Our Advantages
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { title: "Energy and Compute, Unified", desc: "Connecting renewable energy generation with high-performance computing infrastructure." },
              { title: "Built for Zero Emissions", desc: "Every system prioritizes carbon reduction and local energy resilience." },
              { title: "Systems for a Smarter Grid", desc: "Advanced analytics enable real-time optimization of power flow and compute load." },
              { title: "Ready for What's Next", desc: "Modular architecture allows rapid deployment from microgrids to full-scale data centers." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-white/10 hover:border-[#35AAF9]/50 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#35AAF9] group-hover:h-full transition-all duration-500" />
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 text-white/40 text-sm">
        V6 - Video Background
      </div>
    </div>
  );
}
