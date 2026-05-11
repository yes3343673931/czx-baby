import React from 'react';
import { motion } from 'motion/react';

export const Lightstick: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-[360px] h-[520px] flex items-center justify-center ${className}`}>
      {/* Intense Core Glow matching the photo */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-40 h-40 top-[52%] bg-white rounded-full blur-[40px] z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[380px] h-[380px] top-[35%] bg-[#4ea3fc] rounded-full blur-[80px] z-0 mix-blend-screen"
      />
      
      <svg
        viewBox="0 0 200 400"
        className="w-full h-full relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
      >
        <defs>
          <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="20%" stopColor="#f8fafc" />
            <stop offset="45%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <linearGradient id="collarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="25%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="75%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          
          <linearGradient id="glowBase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="60%" stopColor="#e0f2fe" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.1" />
          </linearGradient>

          <pattern id="glitter" width="3" height="3" patternUnits="userSpaceOnUse">
             <circle cx="1.5" cy="1.5" r="0.7" fill="#ffffff" opacity="0.9"/>
             <circle cx="0.5" cy="0.5" r="0.4" fill="#e0f2fe" opacity="0.8"/>
             <circle cx="2.5" cy="0.5" r="0.4" fill="#bae6fd" opacity="0.7"/>
          </pattern>
          
          <linearGradient id="starOuter" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
             <stop offset="30%" stopColor="#e0f2fe" stopOpacity="0.3" />
             <stop offset="70%" stopColor="#e0f2fe" stopOpacity="0.2" />
             <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="starInner" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
             <stop offset="40%" stopColor="#f0f9ff" stopOpacity="0.95" />
             <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.85" />
          </linearGradient>
          
          <radialGradient id="buttonGlow" cx="50%" cy="50%" r="50%">
             <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
             <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* --- Handle Structure --- */}
        {/* Handle Body with bulbous bottom */}
        {/* Top of handle at y=250, waist around y=330, expands down to y=380 */}
        <path 
          d="M84 250 L116 250 L112 320 C120 340 126 360 114 380 C108 390 92 390 86 380 C74 360 80 340 88 320 Z" 
          fill="url(#handleGrad)" 
        />
        
        {/* Switch panel / control block */}
        <rect x="85" y="265" width="30" height="50" rx="3" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.15))" />
        <rect x="88" y="268" width="24" height="44" rx="2" fill="#f8fafc" />
        
        {/* Fake text / switch details */}
        <rect x="91" y="275" width="18" height="6" rx="1" fill="#94a3b8" opacity="0.8" />
        <text x="100" y="287" textAnchor="middle" fontSize="3.5" fill="#64748b" fontFamily="sans-serif" letterSpacing="0.5">ON/OFF</text>
        
        {/* Main circular button */}
        <circle cx="100" cy="300" r="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.2))" />
        <circle cx="100" cy="300" r="6" fill="#ffffff" />
        <circle cx="100" cy="300" r="12" fill="url(#buttonGlow)" />

        {/* Connection Collar */}
        <path d="M82 250 L118 250 L120 238 L80 238 Z" fill="url(#collarGrad)" />
        <rect x="80" y="238" width="40" height="2" fill="#475569" />
        <path d="M81 238 L119 238 L117 232 L83 232 Z" fill="#94a3b8" />
        
        {/* Glowing Base Block (LED Area) */}
        {/* This block physically connects up into the star base to ensure no visible gap */}
        <path d="M83 232 L117 232 L113 170 L87 170 Z" fill="#ffffff" />
        <path d="M83 232 L117 232 L113 170 L87 170 Z" fill="url(#glowBase)" />

        {/* Intense light bloom around the LED base */}
        <circle cx="100" cy="215" r="35" fill="#ffffff" filter="blur(10px)" opacity="1" />
        <circle cx="100" cy="215" r="20" fill="#ffffff" filter="blur(4px)" opacity="1" />

        {/* --- The Star Assembly --- */}
        
        {/* Outer Clear Plastic Star */}
        {/* We make the bottom notch (100, 155) and surrounding points (45, 185) flow smoothly */}
        <g stroke="rgba(255,255,255,0.95)" strokeWidth="4" fill="url(#starOuter)" strokeLinejoin="round" strokeLinecap="round">
          <path d="M100 20 L125 78 L185 82 L138 126 L154 188 L100 155 L46 188 L62 126 L15 82 L75 78 Z" />
        </g>
        
        {/* Inner Glitters/Frosted Star (Slightly smaller, sits inside the clear shell) */}
        <g fill="url(#starInner)" stroke="rgba(255,255,255,1)" strokeWidth="1.5" strokeLinejoin="round" transform="scale(0.85) translate(18, 18)">
           <path d="M100 20 L125 78 L185 82 L138 126 L154 188 L100 155 L46 188 L62 126 L15 82 L75 78 Z" />
        </g>

        {/* Glitter pattern over the frosted star */}
        <g fill="url(#glitter)" transform="scale(0.85) translate(18, 18)">
           <path d="M100 20 L125 78 L185 82 L138 126 L154 188 L100 155 L46 188 L62 126 L15 82 L75 78 Z" opacity="0.9" />
        </g>

        {/* 3D clear plastic facets (lines connecting inner and outer corners to show thickness) */}
        <path d="M100 20 L100 42" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 82 L38 85.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M185 82 L162 85.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M46 188 L58 165" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M154 188 L142 165" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Internal facets extending to center, adding depth */}
        <path d="M100 42 L100 135" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M38 85.5 L162 85.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M100 135 L58 165" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M100 135 L142 165" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

        {/* Top edge highlight for glass/plastic feel */}
        <path d="M98 24 L120 74 L175 78" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 86 L58 123" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round"/>
        
        {/* Bottom overlapping light bloom to smooth out the transition into the handle */}
        <path d="M84 165 L116 165 L108 200 L92 200 Z" fill="#ffffff" filter="blur(5px)" opacity="0.9"/>

        {/* Typography inside the star */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          fill="#1d4ed8"
          fontSize="24"
          fontWeight="900"
          fontFamily='"Times New Roman", Georgia, serif'
          letterSpacing="0.5"
          className="select-none pointer-events-none"
          style={{ textShadow: "0px 1px 2px rgba(255,255,255,0.9), 0px 0px 8px rgba(255,255,255,0.5)" }}
        >
          mareasia
        </text>
        <g className="opacity-95">
          <text
            x="100"
            y="130"
            textAnchor="middle"
            fill="#1e3a8a"
            fontSize="11"
            fontWeight="bold"
            letterSpacing="2"
            fontFamily='"PingFang SC", "Microsoft YaHei", sans-serif'
            className="select-none pointer-events-none"
          >
            陈卓璇
          </text>
          <text
            x="100"
            y="145"
            textAnchor="middle"
            fill="#1e3a8a"
            fontSize="9"
            letterSpacing="3"
            fontWeight="500"
            fontFamily='"PingFang SC", "Microsoft YaHei", sans-serif'
            className="select-none pointer-events-none"
          >
            生日音乐会
          </text>
        </g>
        
      </svg>
    </div>
  );
};

