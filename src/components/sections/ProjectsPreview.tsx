"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { projects } from "@/data/content";

export default function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pure-white via-airy-white to-pure-white" />

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Global Presence"
          title="Our Projects Worldwide"
          description="We are engaged with all activities throughout the green H2 and ammonia value chains across multiple regions."
        />

        <div className="mt-16">
          {/* World Map Visual Representation */}
          <div className="relative bg-gradient-to-br from-cool-graphite to-navy rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative Grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                                  linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Decorative Circles for Locations */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Japan */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="absolute top-[25%] right-[20%] w-4 h-4 rounded-full bg-energetic-blue"
              />
              {/* Taiwan */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="absolute top-[35%] right-[25%] w-3 h-3 rounded-full bg-energetic-blue"
              />
              {/* Singapore */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="absolute top-[50%] right-[30%] w-3 h-3 rounded-full bg-energetic-blue"
              />
              {/* India */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                className="absolute top-[40%] right-[40%] w-3 h-3 rounded-full bg-energetic-blue"
              />
              {/* USA */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                className="absolute top-[30%] left-[15%] w-3 h-3 rounded-full bg-energetic-blue"
              />
              {/* UK */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute top-[20%] left-[45%] w-3 h-3 rounded-full bg-energetic-blue"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              {/* Project Selector */}
              <div className="space-y-4">
                <h3 className="text-white text-xl font-semibold mb-6">
                  Select Region
                </h3>
                {projects.map((project) => (
                  <motion.button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                      activeProject.id === project.id
                        ? "bg-energetic-blue text-white"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-2xl">{project.flag}</span>
                    <span className="font-medium">{project.country}</span>
                    <span
                      className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Active Project Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{activeProject.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {activeProject.country}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                          activeProject.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {activeProject.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">
                    {activeProject.description}
                  </p>

                  <h4 className="text-white font-semibold mb-4">Key Highlights</h4>
                  <ul className="space-y-2 mb-6">
                    {activeProject.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-white/70"
                      >
                        <svg className="w-5 h-5 text-energetic-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    href={`/projects#${activeProject.id}`}
                    variant="primary"
                    size="sm"
                  >
                    View Project Details
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
