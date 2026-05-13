import React, { useEffect } from "react";
import { motion } from "motion/react";
import { LuMousePointer2 } from "react-icons/lu";

export const DolphinLoader: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#021035] overflow-hidden"
    >
      {/* Sound waves (52 Hertz) pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-sky-400/20"
            initial={{ width: 100, height: 100, opacity: 0 }}
            animate={{ width: i * 300, height: i * 300, opacity: [0, 0.4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Center animated element (no dolphin) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.1, 0.8],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="relative z-10 w-32 h-32 flex items-center justify-center shadow-[0_0_50px_rgba(125,211,252,0.4)] rounded-full border border-sky-400/30 bg-sky-900/20"
      >
        <div className="w-8 h-8 rounded-full bg-sky-200 animate-ping"></div>
      </motion.div>

      {/* Subtitles: 52Hz text fading in and out */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute bottom-1/3 flex flex-col items-center gap-2"
      >
        <span className="text-sky-200/60 font-serif tracking-[0.5em] text-2xl font-light">
          52 Hz
        </span>
        <span className="text-sky-200/40 text-sm tracking-widest font-light">
          正在接收信号...
        </span>
      </motion.div>

      {/* Mouse cursor moving onto screen and 'clicking' */}
      <motion.div
        initial={{ x: "80vw", y: "80vh", opacity: 0 }}
        animate={{ x: "50vw", y: "50vh", opacity: [0, 1, 0] }}
        transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
        className="absolute z-20 pointer-events-none"
      >
        <LuMousePointer2 className="w-12 h-12 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] fill-white/20" />
      </motion.div>
    </motion.div>
  );
};
