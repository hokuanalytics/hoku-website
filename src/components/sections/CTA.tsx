"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

const HydrogenMolecule = dynamic(
  () => import("@/components/3d/HydrogenMolecule"),
  { ssr: false }
);

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cool-graphite via-navy to-cool-graphite" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <HydrogenMolecule />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-energetic-blue/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-navy/30 blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-energetic-blue" />
            <span className="text-energetic-blue text-sm font-semibold uppercase tracking-widest">
              Let&apos;s Connect
            </span>
            <div className="w-8 h-[2px] bg-energetic-blue" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Shape the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-energetic-blue to-airy-white">
              Future of Energy?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We welcome strategic partners and innovative collaborators to join us
            in shaping a sustainable future. Connect with us to explore
            opportunities in advancing energy and environmental solutions
            worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cool-graphite"
            >
              Learn About Us
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <a
                href="mailto:info@hokuenergy.com"
                className="flex items-center gap-3 text-white/70 hover:text-energetic-blue transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-energetic-blue/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>info@hokuenergy.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>6 Global Offices</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pure-white to-transparent" />
    </section>
  );
}
