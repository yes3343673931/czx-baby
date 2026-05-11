import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const CursorRipples: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [whaleAudio, setWhaleAudio] = useState<HTMLAudioElement | null>(null);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  // Initialize audio on first user interaction to satisfy browser policies
  const initAudio = useCallback(() => {
    if (!whaleAudio) {
      // Direct MP3 link from NOAA for the 52Hz whale (high compatibility)
      const audio = new Audio('https://oceanexplorer.noaa.gov/facts/media/52-hertz-whale.mp3');
      audio.preload = 'auto';
      audio.volume = 0.5;
      audio.addEventListener('error', (e) => {
        console.error("Audio Load Error. Attempting fallback...", e);
        // Fallback to a secondary source if needed
        audio.src = 'https://actions.google.com/sounds/v1/water/deep_vibration.ogg';
      });
      setWhaleAudio(audio);
      return audio;
    }
    return whaleAudio;
  }, [whaleAudio]);

  const addRipple = useCallback((x: number, y: number, size: number = 40) => {
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x, y, size }]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);

    // Play whale-like sound on large ripples (clicks)
    if (size > 80 && isSoundEnabled) {
      const audio = initAudio();
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(err => {
          console.error("Whale sound playback failed:", err);
          // Potential reason: interaction requirement not met or invalid source
        });
        
        // Stop sound after 3 seconds as requested
        setTimeout(() => {
          audio.pause();
        }, 3000);
      }
    }
  }, [initAudio, isSoundEnabled]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add a small ripple occasionally while moving
      if (Math.random() > 0.85) {
        addRipple(e.clientX, e.clientY, 30);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY, 120);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [addRipple]);

  return (
    <>
      {/* Sound Toggle Button (Top Right) */}
      <div className="fixed top-6 right-6 z-[10000] pointer-events-auto">
        <button
          onClick={() => setIsSoundEnabled(!isSoundEnabled)}
          className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-ocean-400 hover:bg-white/20 transition-all shadow-lg active:scale-95 group"
          title={isSoundEnabled ? "关闭声音" : "开启声音"}
        >
          {isSoundEnabled ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-400" />
          )}
          
          {/* Tooltip hint */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-ocean-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {isSoundEnabled ? "声音已开启" : "声音已关闭"}
          </span>
        </button>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Wave propagation ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ 
              x: ripple.x, 
              y: ripple.y, 
              scale: 0, 
              opacity: 0.6,
              translateX: '-50%',
              translateY: '-50%'
            }}
            animate={{ 
              scale: ripple.size / 10, 
              opacity: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut" 
            }}
            className="absolute rounded-full border border-ocean-300 pointer-events-none"
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'transparent',
              boxShadow: '0 0 8px rgba(14, 165, 233, 0.2)'
            }}
          >
            {/* Multiple rings for propagation effect */}
            {[0.5, 0.8, 1].map((delay, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: "linear",
                  delay: index * 0.1
                }}
                className="absolute inset-[-2px] rounded-full border border-ocean-200"
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main cursor glow indicator */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          translateX: '-50%',
          translateY: '-50%'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        className="absolute w-4 h-4 bg-ocean-400 rounded-full blur-[2px] opacity-40 mix-blend-screen"
      />
    </div>
    </>
  );
};
