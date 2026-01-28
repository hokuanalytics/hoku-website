"use client";

import { motion } from "framer-motion";

export default function WorldMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 500"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified World Map Paths */}
      <g opacity="0.3" stroke="currentColor" strokeWidth="0.5" fill="none">
        {/* North America */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M150 120 L180 100 L220 95 L260 100 L280 120 L290 150 L280 180 L260 200 L240 220 L220 230 L200 225 L180 210 L160 190 L150 160 Z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.1 }}
          d="M200 230 L220 250 L240 280 L250 300 L240 320 L220 330 L200 320 L190 300 L195 270 Z"
        />
        
        {/* South America */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          d="M280 320 L300 300 L320 310 L330 340 L325 380 L310 420 L290 440 L270 430 L260 400 L265 360 Z"
        />
        
        {/* Europe */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          d="M450 100 L480 90 L520 95 L550 110 L560 130 L550 150 L520 160 L490 155 L460 140 L450 120 Z"
        />
        
        {/* Africa */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          d="M480 180 L520 170 L560 180 L580 220 L575 270 L560 320 L530 360 L500 370 L470 350 L460 300 L465 250 L470 210 Z"
        />
        
        {/* Asia */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          d="M560 100 L620 80 L700 85 L780 100 L840 130 L860 170 L850 210 L820 240 L780 260 L720 270 L660 260 L620 240 L590 200 L570 160 L560 130 Z"
        />
        
        {/* India */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          d="M640 220 L670 210 L700 220 L710 260 L700 300 L670 320 L640 300 L635 260 Z"
        />
        
        {/* Southeast Asia */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
          d="M720 270 L760 260 L800 280 L810 320 L790 360 L750 370 L720 350 L710 310 Z"
        />
        
        {/* Japan */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          d="M860 140 L875 130 L890 140 L895 170 L885 200 L870 210 L855 195 L850 165 Z"
        />
        
        {/* Taiwan */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.85 }}
          d="M830 220 L840 215 L845 230 L840 245 L830 240 Z"
        />
        
        {/* Australia */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
          d="M780 380 L840 370 L900 385 L920 420 L910 460 L870 475 L820 470 L780 450 L770 410 Z"
        />
        
        {/* UK */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.95 }}
          d="M460 95 L475 90 L480 105 L470 115 L458 108 Z"
        />
      </g>
      
      {/* Grid Lines */}
      <g opacity="0.1" stroke="currentColor" strokeWidth="0.3">
        {/* Latitude lines */}
        {[100, 150, 200, 250, 300, 350, 400].map((y) => (
          <line key={`lat-${y}`} x1="50" y1={y} x2="950" y2={y} />
        ))}
        {/* Longitude lines */}
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
          <line key={`lng-${x}`} x1={x} y1="50" x2={x} y2="450" />
        ))}
      </g>
    </svg>
  );
}
