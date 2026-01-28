"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { solutions } from "@/data/content";

const FloatingOrbs = dynamic(() => import("@/components/3d/FloatingOrbs"), {
  ssr: false,
});

const icons = {
  energy: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  hydrogen: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  grid: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  transform: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutions[activeIndex];

  return (
    <section className="section section-dark relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <FloatingOrbs />
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-energetic-blue/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-navy/30 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Leading to a More Sustainable Future"
          description="Solving the key challenges in the transition to clean energy through innovative solutions and strategic partnerships."
          dark
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Solution Tabs */}
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.button
                key={solution.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                  activeIndex === index
                    ? "bg-white/10 border border-energetic-blue/50"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                      activeIndex === index
                        ? "bg-energetic-blue text-white"
                        : "bg-white/10 text-white/70 group-hover:bg-white/20"
                    }`}
                  >
                    {icons[solution.icon as keyof typeof icons]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {solution.shortTitle}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-1">
                      {solution.description}
                    </p>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      activeIndex === index
                        ? "text-energetic-blue rotate-90"
                        : "text-white/30"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Solution Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-energetic-blue flex items-center justify-center text-white mb-6">
                {icons[activeSolution.icon as keyof typeof icons]}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {activeSolution.title}
              </h3>

              <p className="text-white/80 leading-relaxed mb-6">
                {activeSolution.fullDescription}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {activeSolution.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-energetic-blue" />
                    <span className="text-white/70">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Button href={`/solutions#${activeSolution.id}`} variant="primary">
                Learn More
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
