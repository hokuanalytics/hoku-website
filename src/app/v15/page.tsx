"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export default function V15ImmersiveVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.3], [0, 40]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-black">
      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 text-white/60 hover:text-white text-sm transition-colors mix-blend-difference"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Immersive Video Section */}
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Video Container */}
        <motion.div
          style={{
            scale: videoScale,
            borderRadius: videoRadius
          }}
          className="absolute inset-0 overflow-hidden"
        >
          <video
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/movie-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Hero Text - Appears on video */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
          }}
          className="relative z-10 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-7xl md:text-9xl font-bold text-white tracking-tight"
          >
            HOKU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl text-white/70 mt-6 uppercase tracking-[0.3em]"
          >
            The Carbon Free Future
          </motion.p>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-[-120px]"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/50 text-sm"
            >
              Scroll to explore
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Sound toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
        >
          {isMuted ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>

        {/* Content that appears as video shrinks */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center max-w-4xl mx-auto px-6 mt-[50vh]">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Tomorrow&apos;s Power,
              <br />
              <span className="text-[#35AAF9]">Today&apos;s Reality</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Clean energy meets intelligent infrastructure. We design systems 
              that integrate renewable energy and hydrogen technologies.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 bg-black py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
          >
            {[
              { value: "6", label: "Global Offices" },
              { value: "5+", label: "Active Projects" },
              { value: "24/7", label: "Carbon Free" },
              { value: "2050", label: "Net-Zero Target" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-6xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12"
          >
            Our Solutions
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Renewable Energy", desc: "Solar & wind power generation at scale", video: true },
              { title: "Green Hydrogen", desc: "Clean hydrogen through electrolysis" },
              { title: "AI Datacenters", desc: "Carbon-free computing infrastructure" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer"
              >
                {item.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#04223F] to-[#183A6B] group-hover:scale-110 transition-transform duration-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-[#04223F] py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to connect?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join us in shaping a sustainable future with clean energy solutions worldwide.
          </p>
          <button className="bg-[#35AAF9] text-white px-12 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
            Get in Touch
          </button>
        </motion.div>
      </section>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 mix-blend-difference">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-white text-xl font-bold">HOKU</span>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Solutions", "Projects", "Contact"].map((item) => (
              <a key={item} href="#" className="text-white text-sm hover:opacity-70 transition-opacity">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 z-50 text-white/40 text-sm mix-blend-difference">
        V15 - Immersive Video
      </div>
    </div>
  );
}
