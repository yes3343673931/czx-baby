import { motion } from "motion/react";

export function WhaleIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      initial={{ y: 0, opacity: 0.6 }}
      animate={{ y: [-5, 5, -5], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M 20 60 Q 30 40 50 40 Q 70 40 85 55 Q 85 45 95 35 Q 90 55 85 55 Q 80 70 50 70 Q 20 70 10 50 C 10 65 20 60 20 60 Z" />
      <circle cx="28" cy="52" r="2" fill="white" />
      {/* Water spout */}
      <path d="M 50 35 C 50 25 45 20 40 15 M 50 35 C 50 25 55 20 60 15 M 50 35 L 50 15" stroke="currentColor" strokeWidth="2" fill="none" />
    </motion.svg>
  );
}
