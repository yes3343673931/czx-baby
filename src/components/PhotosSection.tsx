import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Download, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Lightstick } from "./Lightstick";

import image1 from "../assets/images/xxx.jpg.jpg";
import image2 from "../assets/images/4g.jpg";
import image3 from "../assets/images/5g.jpg";
import image4 from "../assets/images/6g.jpg";
import image5 from "../assets/images/10g.jpg";
import image6 from "../assets/images/8.jpg";

const CATEGORIES = ["ALL", "CONCERT", "DAILY", "MAGAZINE"];

const PHOTOS = [
  {
    id: 1,
    url: image1,
    location: "Visual Record",
    downloads: 2100,
    saves: 890,
    category: "MAGAZINE",
  },
  {
    id: 2,
    url: image2,
    location: "On Stage",
    downloads: 980,
    saves: 210,
    category: "CONCERT",
  },
  {
    id: 3,
    url: image3,
    location: "Daily Moments",
    downloads: 3400,
    saves: 1200,
    category: "DAILY",
  },
  {
    id: 4,
    url: image4,
    location: "Studio Shoot",
    downloads: 4200,
    saves: 1500,
    category: "MAGAZINE",
  },
  {
    id: 5,
    url: image5,
    location: "Performance",
    downloads: 3100,
    saves: 950,
    category: "CONCERT",
  },
  {
    id: 6,
    url: image6,
    location: "Casual Look",
    downloads: 2800,
    saves: 820,
    category: "DAILY",
  }
];

export function PhotosSection() {
  const [showGallery, setShowGallery] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [page, setPage] = useState(0);
  const [savedPhotos, setSavedPhotos] = useState<number[]>([]);

  const filteredPhotos = PHOTOS.filter(
    (photo) => activeCategory === "ALL" || photo.category === activeCategory
  );

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  
  const currentPhotos = filteredPhotos.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleSave = (id: number) => {
    setSavedPhotos(prev => 
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const handleDownload = (photo: typeof PHOTOS[0]) => {
    // Mock download action
    const link = document.createElement('a');
    link.href = photo.url;
    link.download = `chenzhuoxuan-${photo.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {!showGallery ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-between"
          >
            {/* Background Gradients */}
            <div className="absolute -inset-x-0 -top-0 -bottom-[40vh] bg-gradient-to-b from-[#021035] via-[#1150bd] to-transparent z-0" />
            
            {/* Particle Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none mix-blend-screen opacity-50 z-0 w-full h-full">
               {[1, 2, 3, 4, 5, 6].map((i) => (
                 <motion.div
                   key={i}
                   initial={{ rotate: 0 }}
                   animate={{ rotate: 360 }}
                   transition={{ duration: 30 + i * 20, repeat: Infinity, ease: "linear" }}
                   className="absolute border-white/30 rounded-full"
                   style={{
                     width: `${i * 140}px`,
                     height: `${i * 140}px`,
                     borderStyle: 'dashed',
                     borderWidth: '1.5px',
                   }}
                 />
               ))}
               
               {/* Decorative dots trailing on rings */}
               {[1, 2, 3, 4, 5].map((i) => (
                 <motion.div
                   key={`dot-${i}`}
                   initial={{ rotate: -90 }}
                   animate={{ rotate: 270 }}
                   transition={{ duration: 25 + i * 15, repeat: Infinity, ease: "linear" }}
                   className="absolute rounded-full"
                   style={{
                     width: `${(i + 1) * 140}px`,
                     height: `${(i + 1) * 140}px`,
                   }}
                 >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
                 </motion.div>
               ))}

               {/* Random Floating Icons to match reference */}
               <svg x="100" y="-150" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeDasharray="2 3" opacity="0.4" className="absolute top-1/4 left-1/4 animate-pulse">
                  <path d="M12 2 L22 12 L12 22 L2 12 Z" />
               </svg>
               <svg x="-150" y="50" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeDasharray="3 3" opacity="0.3" className="absolute bottom-1/3 left-1/3">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
               </svg>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeDasharray="2 2" opacity="0.5" className="absolute right-1/4 top-1/3">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
               </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 pt-24 h-full pb-16 w-full max-w-4xl">
              
              {/* Flexible container to push Lightstick to center */}
              <div className="flex-1 w-full flex flex-col items-center justify-start">
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mb-8 relative z-20"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <motion.svg 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} 
                      transition={{ duration: 2, repeat: Infinity }}
                      width="24" height="24" viewBox="0 0 24 24" fill="white" className="mt-6 hidden md:block"
                    >
                      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
                    </motion.svg>
                    
                    <h2 className="text-5xl md:text-[85px] text-white tracking-[0.1em] leading-tight" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)', fontFamily: '"Songti SC", "Noto Serif SC", STSong, serif', fontWeight: 400 }}>
                      碎片收集计划
                    </h2>
                    
                    <motion.svg 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }} 
                      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                      width="32" height="32" viewBox="0 0 24 24" fill="white" className="-mt-10 hidden md:block"
                    >
                      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
                    </motion.svg>
                  </div>
                  <p className="mt-2 text-white/90 text-sm md:text-lg tracking-[0.15em] font-light md:ml-6 drop-shadow-md">
                    适合与粉丝共同完善的图鉴式相册
                  </p>
                </motion.div>

                {/* Central Lightstick */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.4, type: "spring", damping: 15 }}
                  className="cursor-pointer transition-all active:scale-95 flex-1 flex items-center justify-center mt-[-40px]"
                  onClick={() => setShowGallery(true)}
                >
                  <Lightstick className="scale-[0.85] md:scale-[1.1]" />
                </motion.div>
              </div>

              {/* Click Button at the bottom */}
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                onClick={() => setShowGallery(true)}
                className="relative z-30 group flex items-center justify-center gap-3 bg-[#e4f74d] hover:bg-[#d4e73c] text-[#111] px-10 py-[10px] rounded-full font-bold shadow-[0_0_40px_rgba(228,247,77,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                <span className="tracking-widest text-lg font-medium">点击</span>
                <span className="flex items-center justify-center w-6 h-6 border border-[#111] rounded-full transition-transform group-hover:translate-x-1">
                  <ChevronRight size={14} strokeWidth={3} />
                </span>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full py-24 px-8 md:px-24 bg-white"
          >
            {/* Go Back Button */}
            <button 
              onClick={() => setShowGallery(false)}
              className="absolute top-8 left-8 z-30 flex items-center gap-2 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="text-xs tracking-widest">返回</span>
            </button>

            {/* Background Gradient Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,#dbedff_0%,#ffffff_70%)] opacity-60" />
              <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#9fcfff]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#c6e3ff]/30 to-transparent" />
            </div>

            {/* Hero Lightstick in the center background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="opacity-10 md:opacity-15 translate-y-20"
              >
                <Lightstick className="scale-[4] md:scale-[6]" />
              </motion.div>
            </div>

            <div className="max-w-7xl mx-auto w-full z-10 relative">
              {/* Header */}
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-[#336799] uppercase mb-4">
                    Visual Moments
                  </h2>
                  <h3 className="text-[48px] font-light text-neutral-900 tracking-tight mb-12">
                    个人图片
                  </h3>
                </motion.div>
                
                <div className="flex items-center gap-6 md:gap-12 text-sm">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setPage(0);
                      }}
                      className={`relative px-1 py-2 text-xs md:text-sm tracking-wider transition-colors uppercase ${
                        activeCategory === cat ? "text-neutral-900 font-medium" : "text-neutral-400 hover:text-neutral-600"
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && (
                        <motion.div 
                          layoutId="activeCategory"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#336799]"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo Grid */}
              <div className="min-h-[450px]">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`${activeCategory}-${page}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {currentPhotos.map((photo) => {
                      const isSaved = savedPhotos.includes(photo.id);
                      return (
                        <div key={photo.id} className="group flex flex-col bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                          <div className="relative aspect-square overflow-hidden bg-neutral-100">
                            <img 
                              src={photo.url} 
                              alt={photo.location} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          
                          <div className="p-5 flex flex-col gap-4">
                            {/* Top Row: Location & Actions */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-neutral-600">
                                <MapPin className="w-4 h-4 text-[#336799]" />
                                <span className="text-sm font-medium tracking-wide">{photo.location}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <button 
                                  onClick={() => handleDownload(photo)}
                                  className="text-neutral-400 hover:text-[#336799] transition-colors"
                                  title="下载"
                                >
                                  <Download className="w-4 h-4" />
                                </button>
                                <button 
                                  onClick={() => handleSave(photo.id)}
                                  className={`${isSaved ? 'text-[#336799]' : 'text-neutral-400 hover:text-[#336799]'} transition-colors`}
                                  title="收藏"
                                >
                                  <Heart className="h-4 w-4" fill={isSaved ? "currentColor" : "none"} />
                                </button>
                              </div>
                            </div>

                            {/* Bottom Row: Stats */}
                            <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium tracking-wider">
                              <div className="flex items-center gap-1.5">
                                <Download className="w-3.5 h-3.5 text-[#336799]" />
                                <span>{photo.downloads.toLocaleString()} 下载量</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Heart className="w-3.5 h-3.5 text-[#336799]" />
                                <span>{(photo.saves + (isSaved ? 1 : 0)).toLocaleString()} 收藏量</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-4 mt-12">
                <button 
                  onClick={handlePrev}
                  disabled={page === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                    page === 0 
                      ? 'border-neutral-200 text-neutral-300' 
                      : 'border-neutral-300 text-neutral-600 hover:border-[#336799] hover:text-[#336799]'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNext}
                  disabled={page >= totalPages - 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    page >= totalPages - 1
                      ? 'bg-neutral-100 text-neutral-400 border border-neutral-200'
                      : 'bg-[#336799] text-white hover:bg-ocean-800 shadow-md'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
