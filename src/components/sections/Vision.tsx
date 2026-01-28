"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cool-graphite via-navy to-cool-graphite" />
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div style={{ y, opacity }}>
            <SectionHeading
              eyebrow="Our Vision"
              title="At the Forefront of the Green Hydrogen Revolution"
              align="left"
              dark
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mt-6"
            >
              We envision a world where green hydrogen plays a central role in
              powering transportation, industries, and communities, leading to a
              more sustainable and prosperous future for all.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-lg leading-relaxed mt-4"
            >
              We are engaged with all activities throughout the green H2 and
              ammonia value chains, from renewable energy generation to end-user
              solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-8 mt-12"
            >
              {[
                { value: "100%", label: "Carbon Neutral Supply Chain" },
                { value: "5+", label: "Countries with Active Projects" },
              ].map((stat, index) => (
                <div key={index} className="border-l-2 border-energetic-blue pl-4">
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual Elements */}
          <div className="relative">
            {/* Hydrogen Structure Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-white/20"
              />

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-energetic-blue/40"
              >
                {/* Orbiting Element */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-energetic-blue shadow-lg shadow-energetic-blue/50" />
              </motion.div>

              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-white/30"
              >
                {/* Orbiting Element */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-lg" />
              </motion.div>

              {/* Center */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-energetic-blue to-navy flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">H₂</div>
                  <div className="text-white/60 text-sm mt-1">Green Hydrogen</div>
                </div>
              </div>

              {/* Floating Labels */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
              >
                <span className="text-white text-sm font-medium">Renewable</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
              >
                <span className="text-white text-sm font-medium">Sustainable</span>
              </motion.div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-4 bg-energetic-blue/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-energetic-blue/30"
              >
                <span className="text-white text-sm font-medium">Clean</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
