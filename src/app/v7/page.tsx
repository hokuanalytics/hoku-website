"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V7BentoGrid() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
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
          <div className="text-xl font-bold">HOKU</div>
          <div className="hidden md:flex items-center gap-1">
            {["About", "Solutions", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                {item}
              </a>
            ))}
            <button className="ml-4 px-5 py-2 bg-[#35AAF9] rounded-full text-sm font-medium hover:bg-[#35AAF9]/80 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Bento Hero Grid */}
      <section className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[100px] md:auto-rows-[120px]">
          
          {/* Main Hero Card - spans 4 cols, 3 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 row-span-3 bg-gradient-to-br from-[#35AAF9]/20 to-[#04223F]/40 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#35AAF9]/10 rounded-full blur-3xl" />
            <div>
              <span className="text-[#35AAF9] text-sm font-medium uppercase tracking-wider">
                The Carbon Free Future
              </span>
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Tomorrow&apos;s Power,
                <br />
                <span className="text-[#35AAF9]">Today&apos;s Reality</span>
              </h1>
              <p className="text-white/60 max-w-md">
                Clean energy meets intelligent infrastructure
              </p>
            </div>
          </motion.div>

          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-2 row-span-2 bg-white/5 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors group cursor-pointer"
          >
            <span className="text-5xl font-bold text-[#35AAF9]">6</span>
            <span className="text-white/50 text-sm uppercase tracking-wider group-hover:text-white/80 transition-colors">
              Global Offices
            </span>
          </motion.div>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-2 md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-4 left-4 text-sm font-medium">Watch Video</div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 row-span-1 bg-[#35AAF9] rounded-3xl p-6 flex items-center justify-between cursor-pointer hover:bg-[#35AAF9]/80 transition-colors group"
          >
            <span className="font-semibold">Explore Solutions</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-2 row-span-1 bg-white/5 rounded-3xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
          >
            <div>
              <span className="text-3xl font-bold">5+</span>
              <span className="text-white/50 text-sm ml-2">Projects</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400 text-lg">●</span>
            </div>
          </motion.div>

          {/* H2 Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 row-span-2 bg-gradient-to-br from-[#04223F] to-[#183A6B] rounded-3xl flex items-center justify-center relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-white/10 rounded-full"
            />
            <span className="text-6xl font-bold text-[#35AAF9]">H₂</span>
          </motion.div>

          {/* Features Grid */}
          {[
            { title: "24/7", desc: "Carbon Free" },
            { title: "2050", desc: "Net-Zero" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.05 }}
              className="col-span-2 row-span-1 bg-white/5 rounded-3xl p-6 flex flex-col justify-center hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="text-2xl font-bold">{item.title}</span>
              <span className="text-white/50 text-sm">{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Chain Bento */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            The Carbon Neutral <span className="text-[#35AAF9]">Value Chain</span>
          </h2>
          <p className="text-white/50">Our integrated approach to clean energy</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Renewable Energy", desc: "Solar & wind power generation at scale", icon: "☀️", color: "from-yellow-500/20 to-orange-500/20" },
            { title: "Green Hydrogen", desc: "Clean hydrogen through electrolysis", icon: "⚡", color: "from-cyan-500/20 to-blue-500/20" },
            { title: "AI Datacenters", desc: "Carbon-free computing infrastructure", icon: "🖥️", color: "from-purple-500/20 to-pink-500/20" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 hover:scale-[1.02] transition-transform cursor-pointer group`}
            >
              <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white/60">
        V7 - Bento Grid
      </div>
    </div>
  );
}
