"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { news } from "@/data/content";

const categories = ["All", "Partnership", "Announcement"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = news.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cool-graphite to-navy" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-energetic-blue" />
              <span className="text-energetic-blue text-sm font-semibold uppercase tracking-widest">
                Latest Updates
              </span>
              <div className="w-12 h-[2px] bg-energetic-blue" />
            </div>

            <h1 className="text-white mb-6">
              News &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-energetic-blue to-airy-white">
                Announcements
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Stay informed about our latest partnerships, projects, and
              industry developments shaping the future of clean energy.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pure-white to-transparent" />
      </section>

      {/* Filters & Search */}
      <section className="py-8 sticky top-20 bg-pure-white/95 backdrop-blur-sm z-30 border-b border-airy-grey">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-energetic-blue text-white"
                      : "bg-airy-white text-cool-graphite hover:bg-airy-grey"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 pl-10 rounded-full bg-airy-white border border-transparent focus:border-energetic-blue focus:outline-none transition-colors"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cool-graphite/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section">
        <div className="container-custom">
          {filteredNews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-airy-white flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-cool-graphite/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-cool-graphite mb-2">
                No results found
              </h3>
              <p className="text-cool-graphite/60">
                Try adjusting your search or filter to find what you&apos;re looking
                for.
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredNews.map((item, index) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link href={`/news/${item.id}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-energetic-blue/10 transition-all duration-300 h-full flex flex-col">
                        {/* Image Placeholder */}
                        <div className="relative h-48 bg-gradient-to-br from-cool-graphite to-navy overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl font-bold text-white/10">H₂</div>
                          </div>
                          {/* Animated Elements */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-energetic-blue/30"
                          />
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${
                                item.category === "Partnership"
                                  ? "bg-energetic-blue"
                                  : "bg-navy"
                              }`}
                            >
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <time className="text-sm text-cool-graphite/50 mb-3">
                            {item.date}
                          </time>
                          <h3 className="text-lg font-bold text-cool-graphite mb-3 group-hover:text-energetic-blue transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-cool-graphite/70 text-sm leading-relaxed line-clamp-3 flex-1">
                            {item.excerpt}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-energetic-blue font-medium text-sm group-hover:gap-3 transition-all">
                            Read Full Story
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Load More */}
          {filteredNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-cool-graphite/60 mb-4">
                Showing {filteredNews.length} of {news.length} articles
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section section-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                eyebrow="Stay Updated"
                title="Subscribe to Our Newsletter"
                description="Get the latest news and updates about clean energy and hydrogen technology delivered to your inbox."
                dark
              />

              <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-energetic-blue transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-energetic-blue text-white font-semibold rounded-full hover:bg-white hover:text-cool-graphite transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
