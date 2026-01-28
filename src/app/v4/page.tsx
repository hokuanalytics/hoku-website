"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V4Corporate() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation hint */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm text-slate-300 transition-colors border border-slate-700"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Hero Section - Split layout */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left - Image/Visual */}
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center order-2 lg:order-1">
          <div className="absolute inset-0 opacity-20">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 relative">
              {/* Hexagon shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-[#35AAF9]/20 to-[#04223F]/20 rotate-45 transform" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#35AAF9]/30 to-[#183A6B]/30 rotate-45 transform" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#35AAF9] rotate-45 transform flex items-center justify-center">
                  <span className="text-white text-3xl font-bold -rotate-45">H₂</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right - Content */}
        <div className="flex items-center order-1 lg:order-2">
          <div className="p-12 lg:p-20 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#35AAF9] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
                Hoku Energy
              </span>
              <div className="w-12 h-1 bg-[#35AAF9] mb-8" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6"
            >
              Tomorrow&apos;s Power,
              <br />
              Today&apos;s Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-10"
            >
              Hoku is a trailblazer in the energy sector, with an unwavering
              commitment to leverage clean technologies and fuels for carbon free
              energy and infrastructure solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-[#35AAF9] text-white px-8 py-4 font-semibold hover:bg-[#2890d8] transition-colors">
                EXPLORE SOLUTIONS
              </button>
              <button className="border border-slate-600 text-slate-300 px-8 py-4 font-semibold hover:border-[#35AAF9] hover:text-[#35AAF9] transition-colors">
                LEARN MORE
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#35AAF9] py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
              >
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#35AAF9] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
                Our Approach
              </span>
              <h2 className="text-4xl font-semibold text-white mb-4">
                The Carbon Neutral Value Chain
              </h2>
              <p className="text-slate-400">
                Our integrated approach to clean energy production creates a sustainable
                ecosystem for the future of global energy needs.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-slate-700">
            {[
              {
                num: "01",
                title: "Renewable Energy",
                desc: "Solar and wind power generation for sustainable electricity production at scale.",
              },
              {
                num: "02",
                title: "Green Hydrogen",
                desc: "Clean hydrogen production through advanced electrolysis technology.",
              },
              {
                num: "03",
                title: "AI Datacenters",
                desc: "Carbon-free computing infrastructure powering the digital future.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 p-10 group hover:bg-slate-750 transition-colors"
              >
                <span className="text-[#35AAF9] text-4xl font-light mb-6 block">
                  {item.num}
                </span>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <span className="text-[#35AAF9] text-sm font-medium cursor-pointer hover:underline">
                    Learn More →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 bg-slate-800 border border-slate-700 px-4 py-2 text-sm text-slate-400">
        V4 - Kurumsal
      </div>
    </div>
  );
}
