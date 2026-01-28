"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { solutions } from "@/data/content";

const HydrogenMolecule = dynamic(
  () => import("@/components/3d/HydrogenMolecule"),
  { ssr: false }
);

const icons = {
  energy: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  hydrogen: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  grid: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  transform: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cool-graphite via-navy to-cool-graphite" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
          <HydrogenMolecule />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-energetic-blue" />
            <span className="text-energetic-blue text-sm font-semibold uppercase tracking-widest">
              Our Solutions
            </span>
            <div className="w-12 h-[2px] bg-energetic-blue" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6"
          >
            Solving the Key Challenges
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-energetic-blue to-airy-white">
              for a Sustainable Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Innovative solutions that bridge the gap between renewable energy
            generation and end-user demand, enabling a fully carbon-neutral
            supply chain.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pure-white to-transparent" />
      </section>

      {/* Solutions Detail */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`section ${index % 2 === 1 ? "section-light" : ""} scroll-mt-24`}
        >
          <div className="container-custom">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-energetic-blue to-navy flex items-center justify-center text-white">
                    {icons[solution.icon as keyof typeof icons]}
                  </div>
                  <span className="text-energetic-blue text-sm font-semibold uppercase tracking-widest">
                    Solution {index + 1}
                  </span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-cool-graphite mb-6">
                  {solution.title}
                </h2>

                <p className="text-cool-graphite/70 leading-relaxed mb-6">
                  {solution.fullDescription}
                </p>

                <div className="space-y-4 mb-8">
                  {solution.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-energetic-blue/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-energetic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-cool-graphite">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <Button href="/contact" variant="primary">
                  Discuss This Solution
                </Button>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="aspect-square max-w-lg mx-auto relative">
                  {/* Background Circle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-airy-white to-airy-grey" />

                  {/* Animated Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border-2 border-dashed border-cool-graphite/10"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-12 rounded-full border border-energetic-blue/30"
                  />

                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-energetic-blue to-navy flex items-center justify-center text-white shadow-2xl shadow-energetic-blue/30">
                      {icons[solution.icon as keyof typeof icons]}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-10 right-10 bg-white rounded-xl p-4 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-energetic-blue">24/7</div>
                    <div className="text-xs text-cool-graphite/60">Clean Energy</div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-10 left-10 bg-cool-graphite rounded-xl p-4 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-white">0</div>
                    <div className="text-xs text-white/60">Carbon Emissions</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section section-dark">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-6"
          >
            Ready to Implement{" "}
            <span className="text-energetic-blue">Clean Energy</span> Solutions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
          >
            Connect with our team to explore how our solutions can help your
            organization achieve its sustainability goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
