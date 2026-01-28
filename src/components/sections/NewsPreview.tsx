"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { news } from "@/data/content";

export default function NewsPreview() {
  const featuredNews = news.slice(0, 3);

  return (
    <section className="section section-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-t from-energetic-blue/20 to-transparent blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <SectionHeading
            eyebrow="Latest Updates"
            title="News & Announcements"
            description="Stay informed about our latest partnerships, projects, and industry developments."
            align="left"
            className="lg:max-w-xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
            <Button href="/news" variant="secondary">
              View All News
            </Button>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/news/${item.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-cool-graphite/5 hover:shadow-2xl hover:shadow-energetic-blue/10 transition-all duration-300 h-full flex flex-col">
                  {/* Image Placeholder / Category Banner */}
                  <div className="relative h-48 bg-gradient-to-br from-cool-graphite to-navy overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/10">H2</div>
                    </div>
                    {/* Animated Circles */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-energetic-blue/30"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-2 border-white/20"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-energetic-blue text-white text-xs font-semibold rounded-full">
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
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
