"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function V9AppleStyle() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div className="bg-white">
      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-black/40 hover:text-black text-sm transition-colors"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="flex justify-center items-center h-12 gap-8">
          {["Overview", "Solutions", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-black/60 hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section - Apple Style */}
      <section ref={heroRef} className="min-h-[200vh] relative">
        <motion.div 
          style={{ opacity, scale, y }}
          className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-semibold text-black tracking-tight"
          >
            HOKU
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-black/60 mt-6 font-light"
          >
            The Carbon Free Future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex gap-6"
          >
            <button className="bg-[#0071e3] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#0077ED] transition-colors">
              Learn more
            </button>
            <button className="text-[#0071e3] px-8 py-4 text-sm font-medium hover:underline">
              Watch the film
              <span className="ml-1">▸</span>
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-black/40 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Big Statement Section */}
      <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight"
          >
            Clean energy meets
            <br />
            <span className="text-[#35AAF9]">intelligent infrastructure.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/60 mt-8 max-w-2xl mx-auto"
          >
            We design and develop systems that integrate renewable energy, 
            hydrogen technologies, and advanced data compute.
          </motion.p>
        </div>
      </section>

      {/* Stats - Minimal */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "6", label: "Global Offices" },
              { value: "5+", label: "Active Projects" },
              { value: "24/7", label: "Carbon Free" },
              { value: "2050", label: "Net Zero" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-semibold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-black/40 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Card Style */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-semibold text-black mb-4">Our Solutions</h2>
            <p className="text-xl text-black/50">Leading to a sustainable future</p>
          </motion.div>

          <div className="space-y-8">
            {[
              { 
                title: "Renewable Energy", 
                desc: "Solar and wind power generation for sustainable electricity production.",
                gradient: "from-orange-400 to-pink-500"
              },
              { 
                title: "Green Hydrogen", 
                desc: "Clean hydrogen production through advanced electrolysis.",
                gradient: "from-cyan-400 to-blue-500"
              },
              { 
                title: "AI Datacenters", 
                desc: "Carbon-free computing infrastructure for the future.",
                gradient: "from-purple-400 to-indigo-500"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${item.gradient} rounded-3xl p-12 md:p-16 text-white`}
              >
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">{item.title}</h3>
                <p className="text-xl text-white/80 max-w-xl">{item.desc}</p>
                <button className="mt-8 text-sm font-medium hover:underline">
                  Learn more →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Tomorrow&apos;s Power.
            <br />
            Today&apos;s Reality.
          </h2>
          <button className="mt-8 bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] py-12 text-center">
        <p className="text-sm text-black/40">
          © 2024 Hoku Energy. All rights reserved.
        </p>
      </footer>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 bg-white shadow-lg px-4 py-2 rounded-full text-sm text-black/60">
        V9 - Apple Style
      </div>
    </div>
  );
}
