"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { brandValues, offices } from "@/data/content";

const FloatingOrbs = dynamic(() => import("@/components/3d/FloatingOrbs"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cool-graphite via-navy to-cool-graphite" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <FloatingOrbs />
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
              About Hoku Energy
            </span>
            <div className="w-12 h-[2px] bg-energetic-blue" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6"
          >
            Hoku Sparks Change
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-energetic-blue to-airy-white">
              with Hydrogen
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            A trailblazer in the renewable energy sector, distinguished by our
            unwavering commitment to leveraging hydrogen technology for
            sustainable energy solutions.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pure-white to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="gradient" className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-energetic-blue flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-cool-graphite">Our Mission</h2>
                </div>
                <p className="text-cool-graphite/70 leading-relaxed">
                  At Hoku, our mission is to lead the transition to a sustainable
                  energy future by harnessing the power of clean fuels. We aim to
                  provide innovative, scalable solutions that reduce carbon
                  emissions, increase energy efficiency, and drive positive
                  environmental impact.
                </p>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="dark" className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-energetic-blue flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Our vision at Hoku is to be at the forefront of the hydrogen
                  revolution, driving adoption of clean energy production and
                  technologies. We envision a world where hydrogen plays a central
                  role in powering transportation, industries, and communities.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section section-light">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            description="The principles that guide every decision we make and every partnership we forge."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {brandValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-energetic-blue/20 to-navy/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-energetic-blue">
                      {value.title[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cool-graphite mb-4">
                    {value.title}
                  </h3>
                  <p className="text-cool-graphite/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice & Tone */}
      <section className="section section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-20 left-20 w-64 h-64 rounded-full bg-energetic-blue/10 blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <SectionHeading
            eyebrow="Brand Voice"
            title="How We Communicate"
            dark
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                title: "Inspirational",
                description: "Urging individuals and communities to embrace clean energy production and technologies.",
              },
              {
                title: "Forward-Thinking",
                description: "Constantly envisioning tomorrow's energy solutions and making them a reality today.",
              },
              {
                title: "Empowering",
                description: "Providing tools and knowledge for harnessing the power of clean fuels and sustainable technologies.",
              },
              {
                title: "Visionary",
                description: "Guided by a bold vision, inspiring others to join us in driving clean energy adoption.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-energetic-blue/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Global Presence"
            title="Our Offices Worldwide"
            description="With offices across multiple continents, we're positioned to serve our partners and drive the energy transition globally."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {offices.map((office, index) => (
              <motion.div
                key={office.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  variant={office.isHQ ? "dark" : "default"}
                  className="h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-lg font-bold ${office.isHQ ? "text-white" : "text-cool-graphite"}`}>
                        {office.country}
                      </h3>
                      <p className={`text-sm ${office.isHQ ? "text-white/60" : "text-cool-graphite/60"}`}>
                        {office.company}
                      </p>
                    </div>
                    {office.isHQ && (
                      <span className="px-3 py-1 bg-energetic-blue text-white text-xs font-semibold rounded-full">
                        HQ
                      </span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${office.isHQ ? "text-white/70" : "text-cool-graphite/70"}`}>
                    {office.address}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
