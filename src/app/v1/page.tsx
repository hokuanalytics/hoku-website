"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V1Minimal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation hint */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-600 transition-colors"
      >
        ← Tüm Versiyonlar
      </Link>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[#35AAF9] text-sm font-medium tracking-widest uppercase"
              >
                The Carbon Free Future
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl lg:text-7xl font-light text-[#04223F] mt-6 leading-tight"
              >
                Tomorrow&apos;s
                <br />
                <span className="font-bold">Power</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-500 mt-8 max-w-md leading-relaxed"
              >
                Hoku is a trailblazer in the energy sector, with an unwavering
                commitment to leverage clean technologies for carbon free energy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4 mt-10"
              >
                <button className="bg-[#35AAF9] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2890d8] transition-colors">
                  Explore Solutions
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-[#35AAF9] hover:text-[#35AAF9] transition-colors">
                  Learn More
                </button>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square relative">
                {/* Simple geometric shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#35AAF9]/10 to-[#04223F]/10 flex items-center justify-center">
                    <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#35AAF9]/20 to-[#04223F]/20 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-[#35AAF9]/30 flex items-center justify-center">
                        <span className="text-[#04223F] font-bold text-4xl">H₂</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "6", label: "Global Offices" },
              { value: "5+", label: "Active Projects" },
              { value: "24/7", label: "Carbon Free Energy" },
              { value: "2050", label: "Net-Zero Target" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-light text-[#04223F] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-light text-[#04223F] mb-4">
              The Carbon Neutral <span className="font-bold">Value Chain</span>
            </h2>
            <p className="text-gray-500">
              Our integrated approach to clean energy production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Renewable Energy",
                desc: "Solar & wind power generation",
                icon: "☀️",
              },
              {
                title: "Green Hydrogen",
                desc: "Clean hydrogen production",
                icon: "⚡",
              },
              {
                title: "AI Datacenters",
                desc: "Carbon-free computing",
                icon: "🖥️",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-6 block">{item.icon}</span>
                <h3 className="text-xl font-semibold text-[#04223F] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Label */}
      <div className="fixed bottom-6 right-6 bg-white shadow-lg px-4 py-2 rounded-full text-sm text-gray-500">
        V1 - Minimal
      </div>
    </div>
  );
}
