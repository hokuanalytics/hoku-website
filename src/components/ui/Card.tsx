"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "dark" | "glass" | "gradient";
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  variant = "default",
  className = "",
  hover = true,
  delay = 0,
}: CardProps) {
  const variants = {
    default: "bg-white shadow-lg shadow-cool-graphite/5",
    dark: "bg-gradient-to-br from-cool-graphite to-navy text-white",
    glass: "bg-white/10 backdrop-blur-lg border border-white/20",
    gradient: "bg-gradient-to-br from-energetic-blue/10 to-navy/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`rounded-2xl p-8 ${variants[variant]} ${
        hover ? "transition-shadow duration-300 hover:shadow-2xl hover:shadow-cool-graphite/10" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
