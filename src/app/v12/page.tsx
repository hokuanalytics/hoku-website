"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V12Brutalist() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-black hover:text-[#35AAF9] text-sm transition-colors font-mono"
      >
        [← BACK]
      </Link>

      {/* Brutalist Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b-4 border-black bg-white">
        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-3xl font-black tracking-tighter">HOKU</span>
          <div className="hidden md:flex items-center">
            {["ABOUT", "SOLUTIONS", "PROJECTS", "CONTACT"].map((item, i) => (
              <a 
                key={item} 
                href="#" 
                className="px-6 py-4 text-sm font-bold border-l-4 border-black hover:bg-black hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-black text-white px-6 py-3 font-bold text-sm hover:bg-[#35AAF9] transition-colors">
            GET STARTED →
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-24 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/movie-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Giant Typography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-20"
          >
            <h1 className="text-[15vw] font-black leading-[0.85] tracking-tighter">
              TOMORROW&apos;S
              <br />
              <span className="text-stroke text-transparent" style={{ WebkitTextStroke: '3px black' }}>
                POWER
              </span>
            </h1>
          </motion.div>

          {/* Offset text block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-md border-l-8 border-black pl-6"
          >
            <p className="text-xl font-medium leading-relaxed">
              HOKU designs clean infrastructure systems. Renewable energy. 
              Hydrogen technologies. Advanced data compute.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex gap-4"
          >
            <button className="bg-black text-white px-10 py-5 font-black text-lg hover:bg-[#35AAF9] transition-colors">
              EXPLORE ↗
            </button>
            <button className="border-4 border-black px-10 py-5 font-black text-lg hover:bg-black hover:text-white transition-colors">
              LEARN MORE
            </button>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-12 right-12 grid grid-cols-2 gap-4"
        >
          {[
            { value: "6", label: "OFFICES" },
            { value: "5+", label: "PROJECTS" },
          ].map((stat) => (
            <div key={stat.label} className="bg-black text-white p-6">
              <div className="text-4xl font-black">{stat.value}</div>
              <div className="text-xs font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section - Grid */}
      <section className="border-t-8 border-black">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "6", label: "GLOBAL OFFICES" },
            { value: "5+", label: "ACTIVE PROJECTS" },
            { value: "24/7", label: "CARBON FREE" },
            { value: "2050", label: "NET-ZERO TARGET" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 border-r-4 border-b-4 border-black ${i % 2 === 0 ? 'bg-white' : 'bg-black text-white'}`}
            >
              <div className="text-6xl font-black mb-2">{stat.value}</div>
              <div className="text-sm font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-8xl font-black mb-16"
          >
            SOLUTIONS
          </motion.h2>

          <div className="space-y-4">
            {[
              { num: "01", title: "RENEWABLE ENERGY", desc: "Solar & wind power generation" },
              { num: "02", title: "GREEN HYDROGEN", desc: "Clean hydrogen production" },
              { num: "03", title: "AI DATACENTERS", desc: "Carbon-free computing" },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-4 border-black p-8 flex justify-between items-center hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="text-4xl font-mono">{item.num}</span>
                  <div>
                    <h3 className="text-3xl font-black">{item.title}</h3>
                    <p className="font-mono text-sm mt-1 opacity-60">{item.desc}</p>
                  </div>
                </div>
                <svg className="w-12 h-12 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black mb-8"
          >
            LET&apos;S BUILD
            <br />
            THE FUTURE
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-white text-black px-16 py-6 font-black text-xl hover:bg-[#35AAF9] hover:text-white transition-colors"
          >
            CONTACT US →
          </motion.button>
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-4 py-2 font-mono text-sm">
        V12 - BRUTALIST
      </div>
    </div>
  );
}
