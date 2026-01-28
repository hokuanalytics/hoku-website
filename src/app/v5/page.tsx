"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V5Futuristic() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navigation hint */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 bg-cyan-500/10 hover:bg-cyan-500/20 px-4 py-2 rounded text-sm text-cyan-400 transition-colors border border-cyan-500/30"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        {/* Perspective grid */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: 'linear-gradient(to top, rgba(34,211,238,0.05), transparent)',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom'
          }}
        />
        {/* Scanlines */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)',
            backgroundSize: '100% 4px'
          }}
        />
      </div>

      {/* Animated neon particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee'
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
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
                className="flex items-center gap-4 mb-8"
              >
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-2 h-2 bg-cyan-400"
                    />
                  ))}
                </div>
                <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">
                  // THE CARBON FREE FUTURE
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
              >
                <span className="text-white">Tomorrow&apos;s</span>
                <br />
                <span 
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #22d3ee, #06b6d4, #0891b2)',
                    textShadow: '0 0 40px rgba(34,211,238,0.5)'
                  }}
                >
                  Power
                </span>
                <br />
                <span className="text-white/60">Today&apos;s Reality</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/50 font-mono max-w-lg leading-relaxed mb-10 border-l-2 border-cyan-500/50 pl-4"
              >
                Hoku is a trailblazer in the energy sector, leveraging clean 
                technologies for carbon free energy solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 font-mono uppercase tracking-wider overflow-hidden hover:text-black transition-colors">
                  <span className="relative z-10">[EXPLORE_SOLUTIONS]</span>
                  <motion.div 
                    className="absolute inset-0 bg-cyan-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
                <button className="border border-white/20 text-white/60 px-8 py-4 font-mono uppercase tracking-wider hover:border-cyan-500/50 hover:text-cyan-400 transition-colors">
                  [LEARN_MORE]
                </button>
              </motion.div>
            </div>

            {/* Right Visual - Holographic H2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-96 h-96">
                {/* Outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
                  style={{ boxShadow: '0 0 30px rgba(34,211,238,0.2), inset 0 0 30px rgba(34,211,238,0.1)' }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full" style={{ boxShadow: '0 0 10px #22d3ee' }} />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full" style={{ boxShadow: '0 0 10px #22d3ee' }} />
                </motion.div>
                
                {/* Inner elements */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 border border-cyan-500/20 rounded-full"
                />
                
                {/* Hexagon center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative"
                  >
                    <div 
                      className="w-48 h-48 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(6,182,212,0.05))',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        boxShadow: '0 0 60px rgba(34,211,238,0.3)'
                      }}
                    >
                      <span 
                        className="text-6xl font-bold text-cyan-400 font-mono"
                        style={{ textShadow: '0 0 30px rgba(34,211,238,0.8)' }}
                      >
                        H₂
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Data lines */}
                <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-cyan-500/50 font-mono text-xs space-y-1">
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
                    ENERGY_OUTPUT: 24/7
                  </motion.div>
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
                    CARBON_LEVEL: 0.00
                  </motion.div>
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
                    STATUS: ONLINE
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "6", label: "GLOBAL_OFFICES" },
              { value: "5+", label: "ACTIVE_PROJECTS" },
              { value: "24/7", label: "CARBON_FREE" },
              { value: "2050", label: "NET_ZERO_TARGET" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div 
                  className="p-8 border border-cyan-500/20 bg-cyan-500/5 relative overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-5 h-5 border-r border-t border-cyan-500/50" />
                  
                  <div 
                    className="text-5xl font-bold text-cyan-400 font-mono mb-2"
                    style={{ textShadow: '0 0 20px rgba(34,211,238,0.5)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-cyan-500/50 text-xs font-mono tracking-wider">
                    {stat.label}
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors" />
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
            className="text-center mb-16"
          >
            <span className="text-cyan-500/50 font-mono text-sm tracking-widest">
              // SYSTEM_OVERVIEW
            </span>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-white mt-4"
              style={{ textShadow: '0 0 40px rgba(34,211,238,0.3)' }}
            >
              CARBON_NEUTRAL_<span className="text-cyan-400">VALUE_CHAIN</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: "001",
                title: "RENEWABLE_ENERGY",
                desc: "Solar & wind power generation systems",
                status: "ACTIVE",
              },
              {
                id: "002",
                title: "GREEN_HYDROGEN",
                desc: "Clean hydrogen production units",
                status: "ACTIVE",
              },
              {
                id: "003",
                title: "AI_DATACENTERS",
                desc: "Carbon-free computing clusters",
                status: "ACTIVE",
              },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="border border-cyan-500/20 bg-black p-8 relative overflow-hidden hover:border-cyan-500/50 transition-colors">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-cyan-500/30 font-mono text-sm">
                      [{item.id}]
                    </span>
                    <motion.span 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-green-400 text-xs font-mono flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {item.status}
                    </motion.span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-cyan-400 font-mono mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/40 font-mono text-sm">{item.desc}</p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Label */}
      <div 
        className="fixed bottom-6 right-6 bg-black border border-cyan-500/30 px-4 py-2 font-mono text-sm text-cyan-400"
        style={{ boxShadow: '0 0 20px rgba(34,211,238,0.2)' }}
      >
        V5 - Fütüristik
      </div>
    </div>
  );
}
