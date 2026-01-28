"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function V10Glassmorphism() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#35AAF9]/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -50, -100, 0],
            y: [0, 100, 50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px]"
        />
      </div>

      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-white/60 hover:text-white text-sm transition-colors"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Glass Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-2 py-2 flex items-center gap-1"
        >
          {["Home", "Solutions", "Projects", "About", "Contact"].map((item, i) => (
            <button
              key={item}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                activeTab === i 
                  ? 'bg-white text-black' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <span className="bg-gradient-to-r from-[#35AAF9] to-purple-500 bg-clip-text text-transparent text-sm uppercase tracking-[0.3em] font-medium">
              The Carbon Free Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8"
          >
            Tomorrow&apos;s{" "}
            <span className="bg-gradient-to-r from-[#35AAF9] via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Power
            </span>
            <br />
            Today&apos;s Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-12"
          >
            Clean energy meets intelligent infrastructure. We design systems 
            that integrate renewable energy and hydrogen technologies.
          </motion.p>

          {/* Glass Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="group relative bg-gradient-to-r from-[#35AAF9] to-purple-500 px-8 py-4 rounded-2xl font-medium text-white overflow-hidden">
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl font-medium text-white hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Floating Glass Cards */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-48">
            <div className="text-4xl font-bold text-white mb-1">24/7</div>
            <div className="text-white/50 text-sm">Carbon Free Energy</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[10%] hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-48">
            <div className="text-4xl font-bold text-[#35AAF9] mb-1">H₂</div>
            <div className="text-white/50 text-sm">Green Hydrogen</div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "6", label: "Global Offices", color: "from-cyan-400 to-blue-500" },
                { value: "5+", label: "Active Projects", color: "from-purple-400 to-pink-500" },
                { value: "24/7", label: "Carbon Free", color: "from-green-400 to-cyan-500" },
                { value: "2050", label: "Net-Zero", color: "from-orange-400 to-red-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#35AAF9] to-purple-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Integrated approach to clean energy production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Renewable Energy",
                desc: "Solar & wind power generation for sustainable electricity",
                icon: "☀️",
                gradient: "from-yellow-500/20 to-orange-500/20"
              },
              {
                title: "Green Hydrogen",
                desc: "Clean hydrogen production through electrolysis",
                icon: "⚡",
                gradient: "from-cyan-500/20 to-blue-500/20"
              },
              {
                title: "AI Datacenters",
                desc: "Carbon-free computing infrastructure",
                icon: "🖥️",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${item.gradient} backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/30 transition-all hover:scale-[1.02]`}>
                  <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50">
                    {item.desc}
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <span className="text-[#35AAF9] text-sm font-medium cursor-pointer hover:underline">
                      Learn more →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#35AAF9]/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to connect?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10">
              Join us in shaping a sustainable future. Connect to explore opportunities
              in advancing energy solutions worldwide.
            </p>
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-semibold hover:bg-white/90 transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-sm text-white/60">
        V10 - Glassmorphism
      </div>
    </div>
  );
}
