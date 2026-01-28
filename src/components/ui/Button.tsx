"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  icon,
  iconPosition = "right",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-energetic-blue to-navy text-white hover:shadow-lg hover:shadow-energetic-blue/30",
    secondary:
      "bg-cool-graphite text-white hover:bg-navy",
    outline:
      "border-2 border-cool-graphite text-cool-graphite hover:bg-cool-graphite hover:text-white",
    ghost:
      "text-cool-graphite hover:bg-airy-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const buttonContent = (
    <>
      {/* Shine effect for primary */}
      {variant === "primary" && (
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-[100%]" />
      )}
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
      {!icon && variant === "primary" && (
        <svg
          className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform"
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
      )}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={combinedClassName}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
}
