"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import WorldMap from "@/components/WorldMap";
import { projects } from "@/data/content";

const FloatingOrbs = dynamic(() => import("@/components/3d/FloatingOrbs"), {
  ssr: false,
});

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const filters = [
    { id: "all", label: "All Regions" },
    { id: "Active", label: "Active" },
    { id: "Development", label: "In Development" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cool-graphite via-navy to-cool-graphite" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <FloatingOrbs />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-energetic-blue" />
            <span className="text-energetic-blue text-sm font-semibold uppercase tracking-widest">
              Our Projects
            </span>
            <div className="w-12 h-[2px] bg-energetic-blue" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6"
          >
            Global Projects
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-energetic-blue to-airy-white">
              Driving the Energy Transition
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Strategic projects across multiple continents, partnering with
            industry leaders to build the hydrogen economy.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pure-white to-transparent" />
      </section>

      {/* World Map Section */}
      <section className="section">
        <div className="container-custom">
          {/* Interactive Map */}
          <div className="relative bg-gradient-to-br from-cool-graphite to-navy rounded-3xl p-8 lg:p-12 overflow-hidden mb-16">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                                  linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Simplified World Map with Points */}
            <div className="relative z-10 aspect-[2/1] min-h-[400px]">
              {/* World Map Background */}
              <div className="absolute inset-0 text-white/20">
                <WorldMap />
              </div>
              
              {/* Location Points */}
              {projects.map((project, index) => {
                const positions: Record<string, { top: string; left: string }> = {
                  japan: { top: "30%", left: "82%" },
                  taiwan: { top: "40%", left: "78%" },
                  singapore: { top: "55%", left: "72%" },
                  india: { top: "42%", left: "62%" },
                  usa: { top: "35%", left: "18%" },
                };

                const pos = positions[project.id] || { top: "50%", left: "50%" };

                return (
                  <motion.button
                    key={project.id}
                    id={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group scroll-mt-32 ${
                      selectedProject.id === project.id ? "z-20" : "z-10"
                    }`}
                    style={{ top: pos.top, left: pos.left }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {/* Pulse Effect */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full ${
                        selectedProject.id === project.id
                          ? "bg-energetic-blue"
                          : "bg-white/50"
                      }`}
                    />
                    {/* Point */}
                    <div
                      className={`relative w-4 h-4 rounded-full ${
                        selectedProject.id === project.id
                          ? "bg-energetic-blue shadow-lg shadow-energetic-blue/50"
                          : "bg-white"
                      } transition-colors`}
                    />
                    {/* Label */}
                    <div
                      className={`absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                        selectedProject.id === project.id
                          ? "bg-energetic-blue text-white"
                          : "bg-white/10 text-white opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {project.country}
                    </div>
                  </motion.button>
                );
              })}

              {/* UK HQ Point */}
              <motion.div
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: "25%", left: "45%" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-white"
                  />
                  <div className="relative w-3 h-3 rounded-full bg-white" />
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-1 rounded text-xs bg-white/10 text-white">
                    UK (HQ)
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Selected Project Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{selectedProject.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {selectedProject.country}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                          selectedProject.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/80 leading-relaxed mb-4">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.highlights.slice(0, 3).map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-energetic-blue text-white"
                    : "bg-airy-white text-cool-graphite hover:bg-airy-grey"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-cool-graphite to-navy p-6 relative overflow-hidden">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-energetic-blue/10 blur-2xl" />
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-4xl">{project.flag}</span>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {project.country}
                            </h3>
                            <span
                              className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                                project.status === "Active"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-cool-graphite/70 text-sm leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <svg className="w-4 h-4 text-energetic-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-cool-graphite/70">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <Button href="/contact" variant="secondary" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Partnership"
            title="Interested in Collaborating?"
            description="We're always looking for strategic partners to expand our global presence and drive the energy transition forward."
            dark
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Button href="/contact" variant="primary" size="lg">
              Become a Partner
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
