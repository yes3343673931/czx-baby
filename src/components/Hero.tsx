import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import eeImage from "../assets/images/EE.jpg";
import ooImage from "../assets/images/OO.jpg";
import yyImage from "../assets/images/YY.jpg";

const CAROUSEL_ITEMS = [
  {
    id: 1,
    src: eeImage,
  },
  {
    id: 2,
    src: ooImage,
  },
  {
    id: 3,
    src: yyImage,
  }
];

interface HeroProps {
  onOpenProfile?: () => void;
}

export function Hero({ onOpenProfile }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // 每5秒随机显示一张图片
      setCurrentIndex(Math.floor(Math.random() * CAROUSEL_ITEMS.length));
    }, 5000); // 5秒更换一次
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-ocean-900">
      
      {/* Main Image Slider Container */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={CAROUSEL_ITEMS[currentIndex].src}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Chen Zhuoxuan Background"
          />
        </AnimatePresence>
      </div>

      {/* Dim overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none"></div>

      {/* Center Text Layout like reference */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="text-center text-white transform translate-y-32">
          <h2 className="text-base md:text-lg lg:text-xl font-light tracking-[0.2em] uppercase mb-0 drop-shadow-md">
            CHEN ZHUOXUAN
          </h2>
          <div className="text-2xl md:text-3xl font-light tracking-[0.4em] mb-0.5 drop-shadow-md">
            陈卓璇
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-2 md:mb-3 drop-shadow-xl uppercase">
            中国内地女歌手、演员
          </h1>
          <div className="flex justify-center pointer-events-auto mt-12 md:mt-16">
            <button 
              onClick={() => {
                if (onOpenProfile) {
                  onOpenProfile();
                } else {
                  const el = document.getElementById('photos');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white px-8 py-2.5 rounded-full text-[16px] font-bold tracking-widest bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all shadow-xl active:scale-95"
            >
              点击了解
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Carousel Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 z-30 bg-gradient-to-t from-black/80 to-transparent">
        <div className="relative w-full h-full flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`carousel-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center gap-3 md:gap-6"
            >
              {CAROUSEL_ITEMS.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  className={`flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    currentIndex === item.id - 1 
                      ? "w-8 h-8 md:w-12 md:h-12 ring-2 ring-white shadow-lg" 
                      : "w-5 h-5 md:w-8 md:h-8 opacity-60 hover:opacity-80"
                  }`}
                  onClick={() => setCurrentIndex(item.id - 1)}
                >
                  <img 
                    src={item.src}
                    alt={`carousel-${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

