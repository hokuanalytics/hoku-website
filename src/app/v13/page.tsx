"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V13GradientMesh() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30" />
        <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="gradient1" cx="20%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gradient2" cx="80%" cy="70%" r="50%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gradient3" cx="50%" cy="90%" r="40%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#gradient1)" />
          <rect width="100%" height="100%" fill="url(#gradient2)" />
          <rect width="100%" height="100%" fill="url(#gradient3)" />
        </svg>
        {/* Animated mesh lines */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Video Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/movie-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-white/60 hover:text-white text-sm transition-colors"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Floating Navigation */}
      <nav className="fixed top-6 right-6 z-40">
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
          {["Home", "About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-5 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-sm font-medium mb-8 border border-white/10">
              ✦ The Carbon Free Future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Tomorrow&apos;s
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Power
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/50 mt-8 max-w-2xl mx-auto"
          >
            Clean energy meets intelligent infrastructure. We design systems 
            that integrate renewable energy and hydrogen technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-medium overflow-hidden">
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            <button className="px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Floating gradient orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]"
        />
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "6", label: "Global Offices", gradient: "from-purple-400 to-pink-400" },
              { value: "5+", label: "Active Projects", gradient: "from-pink-400 to-rose-400" },
              { value: "24/7", label: "Carbon Free", gradient: "from-cyan-400 to-blue-400" },
              { value: "2050", label: "Net-Zero", gradient: "from-green-400 to-cyan-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
              >
                <div className={`text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Renewable Energy", desc: "Solar & wind power generation at scale", gradient: "from-orange-500/20 via-pink-500/20 to-purple-500/20" },
              { title: "Green Hydrogen", desc: "Clean hydrogen through electrolysis", gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20" },
              { title: "AI Datacenters", desc: "Carbon-free computing infrastructure", gradient: "from-purple-500/20 via-pink-500/20 to-red-500/20" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all cursor-pointer`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-[40px] p-16 border border-white/10"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to transform energy?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10">
              Connect with us to explore opportunities in advancing clean energy solutions.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-10 py-5 rounded-full font-semibold hover:scale-105 transition-transform">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white/60 border border-white/10">
        V13 - Gradient Mesh
      </div>
    </div>
  );
}
