"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V3Colorful() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04223F] via-[#183A6B] to-[#35AAF9] overflow-hidden">
      {/* Navigation hint */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 bg-white/20 backdrop-blur-md hover:bg-white/30 px-4 py-2 rounded-full text-sm text-white transition-colors"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Animated background shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#35AAF9]/30 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#7BC8FF]/30 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]"
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/20 rounded-full" />
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-[#35AAF9]/40 rounded-full" />
          <div className="absolute left-0 top-1/2 w-2 h-2 bg-white/30 rounded-full" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
              >
                <span className="text-white text-sm font-medium tracking-wider">
                  ✨ The Carbon Free Future
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
              >
                Tomorrow&apos;s{" "}
                <span className="relative">
                  Power
                  <motion.span
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-4 bg-gradient-to-r from-[#35AAF9] to-[#7BC8FF] -z-10 rounded"
                  />
                </span>
                <br />
                Today&apos;s Reality
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 max-w-lg leading-relaxed mb-10"
              >
                Hoku is a trailblazer in the energy sector, with an unwavering
                commitment to leverage clean technologies for carbon free energy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-[#04223F] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-white/20">
                  Explore Solutions →
                </button>
                <button className="bg-gradient-to-r from-[#35AAF9] to-[#7BC8FF] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Learn More
                </button>
              </motion.div>
            </div>

            {/* Right Visual - Animated rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square relative">
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-white/20"
                />
                {/* Middle ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 rounded-full border-2 border-white/30"
                >
                  <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#35AAF9] rounded-full shadow-lg shadow-[#35AAF9]/50" />
                </motion.div>
                {/* Inner ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-24 rounded-full border-2 border-white/40"
                >
                  <div className="absolute -bottom-2 right-1/4 w-3 h-3 bg-white rounded-full" />
                </motion.div>
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-full w-40 h-40 flex items-center justify-center border border-white/30">
                    <span className="text-white text-5xl font-bold">H₂</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "6", label: "Global Offices", color: "from-blue-400 to-cyan-400" },
                { value: "5+", label: "Active Projects", color: "from-cyan-400 to-teal-400" },
                { value: "24/7", label: "Carbon Free Energy", color: "from-teal-400 to-green-400" },
                { value: "2050", label: "Net-Zero Target", color: "from-green-400 to-emerald-400" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
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
              The Carbon Neutral Value Chain
            </h2>
            <p className="text-white/60">
              Our integrated approach to clean energy production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Renewable Energy",
                desc: "Solar & wind power generation",
                gradient: "from-blue-500 to-cyan-500",
                icon: "☀️",
              },
              {
                title: "Green Hydrogen",
                desc: "Clean hydrogen production",
                gradient: "from-cyan-500 to-teal-500",
                icon: "⚡",
              },
              {
                title: "AI Datacenters",
                desc: "Carbon-free computing",
                gradient: "from-teal-500 to-green-500",
                icon: "🖥️",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`} />
                <div className="relative p-10 text-white">
                  <span className="text-5xl mb-6 block filter drop-shadow-lg">{item.icon}</span>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white font-medium">
        V3 - Renkli
      </div>
    </div>
  );
}
