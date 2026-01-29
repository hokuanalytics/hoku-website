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
  {
    id: "v6",
    title: "Video Background",
    description: "Referans site tarzı, video arka plan, hamburger menü",
    gradient: "from-[#0a0a0a] to-[#1a1a1a]",
    textColor: "text-white",
  },
  {
    id: "v7",
    title: "Bento Grid",
    description: "Modern kart düzeni, interaktif grid",
    gradient: "from-[#0a0a0a] to-[#1a1a2e]",
    textColor: "text-white",
  },
  {
    id: "v8",
    title: "Split Screen",
    description: "İkiye bölünmüş ekran, paralaks efekt",
    gradient: "from-white to-[#04223F]",
    textColor: "text-black",
  },
  {
    id: "v9",
    title: "Apple Style",
    description: "Minimalist, büyük tipografi, scroll animasyonları",
    gradient: "from-white to-gray-100",
    textColor: "text-black",
  },
  {
    id: "v10",
    title: "Glassmorphism",
    description: "Cam efekti, gradient blob'lar, modern UI",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f0f23]",
    textColor: "text-white",
  },
  {
    id: "v11",
    title: "Horizontal Scroll",
    description: "Yatay kaydırma efekti, video arka plan",
    gradient: "from-[#0a0a0a] to-[#04223F]",
    textColor: "text-white",
  },
  {
    id: "v12",
    title: "Brutalist",
    description: "Cesur tipografi, siyah-beyaz kontrast, keskin hatlar",
    gradient: "from-white to-black",
    textColor: "text-black",
  },
  {
    id: "v13",
    title: "Gradient Mesh",
    description: "Mesh gradient arka plan, mor-mavi tonlar",
    gradient: "from-purple-900 via-[#16213e] to-cyan-900",
    textColor: "text-white",
  },
  {
    id: "v14",
    title: "Card Stack",
    description: "Scroll ile üst üste binen kartlar, 3D efekt",
    gradient: "from-[#04223F] to-[#35AAF9]",
    textColor: "text-white",
  },
  {
    id: "v15",
    title: "Immersive Video",
    description: "Tam ekran video deneyimi, ses kontrolü, shrink efekt",
    gradient: "from-black to-[#04223F]",
    textColor: "text-white",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04223F] via-[#183A6B] to-[#04223F]">
      {/* Hero */}
      <div className="container mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#35AAF9] text-sm font-medium uppercase tracking-widest">
            Hoku Energy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4">
            Homepage Tasarım
            <span className="text-[#35AAF9]"> Versiyonları</span>
          </h1>
          <p className="text-lg text-white/70 mb-6">
            15 farklı homepage tasarımı. Beğendiğiniz versiyonu seçin.
          </p>
        </motion.div>

        {/* Version Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {versions.map((version, index) => (
            <motion.div
              key={version.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <Link href={`/${version.id}`}>
                <div className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl">
                  {/* Preview Background */}
                  <div
                    className={`h-32 bg-gradient-to-br ${version.gradient} flex items-center justify-center relative`}
                  >
                    <div className={`text-center ${version.textColor}`}>
                      <div className="text-3xl font-bold opacity-40 group-hover:opacity-60 transition-opacity">
                        {version.id.toUpperCase()}
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#35AAF9]/0 group-hover:bg-[#35AAF9]/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                        Görüntüle
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="bg-white/10 backdrop-blur-sm p-3">
                    <h3 className="text-sm font-semibold text-white mb-0.5">
                      {version.title}
                    </h3>
                    <p className="text-white/50 text-xs line-clamp-1">
                      {version.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Original Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 space-y-3"
        >
          <Link
            href="/original"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full text-white transition-colors"
          >
            <span>Orijinal Tam Tasarımı Gör</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <p className="text-white/40 text-sm">
            Orijinal tasarım tüm sayfaları içerir (About, Solutions, Projects, vb.)
          </p>
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="fixed bottom-4 left-4 text-white/30 text-xs">
        15 Homepage Versions + 1 Original Full Site
      </div>
    </div>
  );
}
