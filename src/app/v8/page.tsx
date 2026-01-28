"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function V8SplitScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-white">
      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-black/60 hover:text-black text-sm transition-colors mix-blend-difference"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <span className="text-white text-xl font-bold tracking-wider">HOKU</span>
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Solutions", "Projects", "Contact"].map((item) => (
              <a key={item} href="#" className="text-white text-sm hover:opacity-70 transition-opacity">
                {item}
              </a>
            ))}
          </nav>
          <button className="text-white text-sm border border-white/50 px-4 py-2 hover:bg-white hover:text-black transition-all">
            Get in Touch
          </button>
        </div>
      </header>

      {/* Hero Section - Split */}
      <section className="h-screen flex sticky top-0">
        {/* Left Side - Dark */}
        <motion.div 
          style={{ y: y1 }}
          className="w-1/2 bg-[#04223F] flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 p-12 max-w-lg">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#35AAF9] text-sm uppercase tracking-[0.3em] block mb-6"
            >
              The Carbon Free Future
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl lg:text-6xl font-light leading-tight"
            >
              Tomorrow&apos;s
              <br />
              <span className="font-bold">Power</span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Right Side - Light */}
        <motion.div 
          style={{ y: y2 }}
          className="w-1/2 bg-white flex items-center justify-center"
        >
          <div className="p-12 max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#04223F] text-5xl lg:text-6xl font-light leading-tight mb-8"
            >
              Today&apos;s
              <br />
              <span className="font-bold text-[#35AAF9]">Reality</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Hoku designs clean infrastructure systems that integrate 
              renewable energy, hydrogen technologies, and advanced data compute.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <button className="bg-[#04223F] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#35AAF9] transition-colors">
                Explore
              </button>
              <button className="border-2 border-[#04223F] text-[#04223F] px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#04223F] hover:text-white transition-all">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Horizontal Split */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200">
            {[
              { value: "6", label: "Global Offices", bg: "bg-white" },
              { value: "5+", label: "Active Projects", bg: "bg-[#04223F]", text: "text-white" },
              { value: "24/7", label: "Carbon Free Energy", bg: "bg-white" },
              { value: "2050", label: "Net-Zero Target", bg: "bg-[#35AAF9]", text: "text-white" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${stat.bg} ${stat.text || 'text-[#04223F]'} p-12 flex flex-col justify-center aspect-square`}
              >
                <span className="text-6xl font-bold mb-2">{stat.value}</span>
                <span className={`text-sm uppercase tracking-wider ${stat.text ? 'opacity-70' : 'text-gray-500'}`}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Chain - Alternating Split */}
      <section className="min-h-screen">
        {[
          { 
            title: "Renewable Energy", 
            desc: "Solar and wind power generation for sustainable electricity production at scale.",
            align: "left",
            bg: "bg-[#04223F]",
            textColor: "text-white"
          },
          { 
            title: "Green Hydrogen", 
            desc: "Clean hydrogen production through advanced electrolysis technology.",
            align: "right",
            bg: "bg-[#35AAF9]",
            textColor: "text-white"
          },
          { 
            title: "AI Datacenters", 
            desc: "Carbon-free computing infrastructure powering the digital future.",
            align: "left",
            bg: "bg-white",
            textColor: "text-[#04223F]"
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            className={`min-h-[50vh] flex ${item.align === 'right' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-1/2 ${item.bg} ${item.textColor} flex items-center justify-center p-12`}>
              <div className="max-w-md">
                <span className="text-6xl font-bold opacity-20 block mb-4">0{index + 1}</span>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className={`text-lg leading-relaxed ${item.textColor === 'text-white' ? 'opacity-80' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
              </div>
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} flex items-center justify-center`}>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30 + index * 10, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 border-2 border-[#35AAF9]/30 rounded-full flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-[#35AAF9]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#35AAF9] text-2xl font-bold">H₂</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-4 py-2 text-sm">
        V8 - Split Screen
      </div>
    </div>
  );
}
