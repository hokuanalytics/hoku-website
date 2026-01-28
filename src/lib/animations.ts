// Animation variants for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" }
  },
};

// Hero section specific animations
export const heroTextReveal = {
  initial: { opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  },
};

// Card hover animation
export const cardHover = {
  rest: { 
    scale: 1,
    boxShadow: "0 4px 20px rgba(4, 34, 63, 0.08)",
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(4, 34, 63, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

// Button animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
};

// Floating animation for decorative elements
export const floatAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotate animation for loading/decorative elements
export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Pulse animation
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Slide in from side with stagger
export const slideInStagger = (direction: "left" | "right" = "left") => ({
  initial: { opacity: 0, x: direction === "left" ? -50 : 50 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
});

// Viewport animation trigger settings
export const viewportSettings = {
  once: true,
  margin: "-100px",
};

// Transition presets
export const transitions = {
  spring: { type: "spring", stiffness: 300, damping: 30 },
  smooth: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  bounce: { type: "spring", stiffness: 400, damping: 20 },
  slow: { duration: 0.8, ease: "easeOut" },
};
