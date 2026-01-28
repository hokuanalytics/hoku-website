"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

const HydrogenMolecule = dynamic(
  () => import("@/components/3d/HydrogenMolecule"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cool-graphite via-navy to-cool-graphite">
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-energetic-blue/30 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-navy/50 blur-3xl"
        />
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      
      {/* 3D Background Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-25 pointer-events-none hidden lg:block">
        <HydrogenMolecule />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-energetic-blue" />
            <span className="text-energetic-blue text-sm font-semibold uppercase tracking-widest">
              The Carbon Free Future
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white leading-tight mb-6"
          >
            Tomorrow&apos;s Power,
            <br />
            <span className="text-gradient bg-gradient-to-r from-energetic-blue to-airy-white bg-clip-text text-transparent">
              Today&apos;s Reality
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            Hoku is a trailblazer in the energy sector, with an unwavering
            commitment to leverage clean technologies and fuels for carbon free
            energy and infrastructure solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/solutions" variant="primary" size="lg">
              Explore Solutions
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cool-graphite"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10"
          >
            {[
              { value: "6", label: "Global Offices" },
              { value: "5+", label: "Active Projects" },
              { value: "24/7", label: "Carbon Free Energy" },
              { value: "2050", label: "Net-Zero Target" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-energetic-blue"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pure-white to-transparent z-10" />
    </section>
  );
}
