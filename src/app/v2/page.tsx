"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V2DarkMode() {
  return (
    <div className="min-h-screen bg-[#04223F]">
      {/* Navigation hint */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-md hover:bg-white/20 px-4 py-2 rounded-full text-sm text-white/80 transition-colors border border-white/10"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Ambient glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#35AAF9]/10 rounded-full blur-[200px]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#183A6B]/30 rounded-full blur-[200px]" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#35AAF9] to-transparent" />
              <span className="text-[#35AAF9] text-sm font-medium tracking-widest uppercase">
                The Carbon Free Future
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl lg:text-8xl font-bold text-white leading-none mb-8"
            >
              Tomorrow&apos;s
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35AAF9] to-[#7BC8FF]">
                Power, Today
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/60 max-w-xl leading-relaxed mb-12"
            >
              Hoku is a trailblazer in the energy sector, with an unwavering
              commitment to leverage clean technologies and fuels for carbon free
              energy and infrastructure solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group relative bg-[#35AAF9] text-white px-8 py-4 rounded-xl font-medium overflow-hidden">
                <span className="relative z-10">Explore Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#35AAF9] to-[#7BC8FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating H2 element */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-[#35AAF9]/5 backdrop-blur-sm border border-[#35AAF9]/20 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-[#35AAF9]/10 border border-[#35AAF9]/20 flex items-center justify-center">
                <span className="text-[#35AAF9] text-6xl font-bold">H₂</span>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 bg-[#35AAF9]/20 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
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
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-bold text-[#35AAF9] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              The Carbon Neutral{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35AAF9] to-[#7BC8FF]">
                Value Chain
              </span>
            </h2>
            <p className="text-white/50">
              Our integrated approach to clean energy production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Renewable Energy",
                desc: "Solar & wind power generation for sustainable electricity",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: "Green Hydrogen",
                desc: "Clean hydrogen production through electrolysis",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "AI Datacenters",
                desc: "Carbon-free computing infrastructure for the future",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#35AAF9]/30 transition-all"
              >
                <div className="text-[#35AAF9] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm text-white/70">
        V2 - Dark Mode
      </div>
    </div>
  );
}
