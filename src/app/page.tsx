"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const versions = [
  {
    id: "v1",
    title: "Minimal",
    description: "Temiz, beyaz ağırlıklı, az animasyon",
    gradient: "from-gray-100 to-white",
    textColor: "text-gray-800",
  },
  {
    id: "v2",
    title: "Dark Mode",
    description: "Koyu tema, glow efektler, glassmorphism",
    gradient: "from-[#04223F] to-[#183A6B]",
    textColor: "text-white",
  },
  {
    id: "v3",
    title: "Renkli",
    description: "Canlı gradientler, animasyonlu şekiller",
    gradient: "from-[#35AAF9] to-[#183A6B]",
    textColor: "text-white",
  },
  {
    id: "v4",
    title: "Kurumsal",
    description: "Profesyonel, ciddi, grid-based",
    gradient: "from-slate-800 to-slate-900",
    textColor: "text-white",
  },
  {
    id: "v5",
    title: "Fütüristik",
    description: "Neon efektler, cyber tarzı, partiküller",
    gradient: "from-black via-[#04223F] to-black",
    textColor: "text-cyan-400",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04223F] via-[#183A6B] to-[#04223F]">
      {/* Hero */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Homepage Tasarım
            <span className="text-[#35AAF9]"> Versiyonları</span>
          </h1>
          <p className="text-xl text-white/70 mb-12">
            Hoku Energy için 5 farklı homepage tasarımı. 
            Beğendiğiniz versiyonu seçin.
          </p>
        </motion.div>

        {/* Version Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {versions.map((version, index) => (
            <motion.div
              key={version.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/${version.id}`}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Preview Background */}
                  <div
                    className={`h-64 bg-gradient-to-br ${version.gradient} flex items-center justify-center`}
                  >
                    <div className={`text-center ${version.textColor}`}>
                      <div className="text-6xl font-bold mb-2 opacity-20 group-hover:opacity-40 transition-opacity">
                        {version.id.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {version.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {version.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-[#35AAF9]/0 group-hover:bg-[#35AAF9]/10 transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Original Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/original"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span>Orijinal Tasarımı Gör</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
