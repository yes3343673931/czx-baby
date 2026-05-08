import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Download, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["ALL", "CONCERT", "DAILY", "MAGAZINE"];

const PHOTOS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800",
    location: "Sydney Opera House",
    downloads: 2100,
    saves: 890,
    category: "CONCERT",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
    location: "Yosemite Valley",
    downloads: 980,
    saves: 210,
    category: "DAILY",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800",
    location: "Shanghai Tower",
    downloads: 3400,
    saves: 1200,
    category: "MAGAZINE",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
    location: "Paris, France",
    downloads: 4200,
    saves: 1500,
    category: "MAGAZINE",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    location: "Tokyo, Japan",
    downloads: 3100,
    saves: 950,
    category: "DAILY",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800",
    location: "Venice, Italy",
    downloads: 2800,
    saves: 820,
    category: "CONCERT",
  }
];

export function PhotosSection() {
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
    <section className="relative w-full min-h-screen bg-white py-24 px-8 md:px-24 overflow-hidden flex flex-col justify-center">
      
      {/* Right side rotated text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] origin-center -rotate-90 pointer-events-none opacity-20">
        <h2 className="text-8xl md:text-[150px] font-bold text-transparent tracking-widest" style={{ WebkitTextStroke: "2px #336799" }}>
          SINGER
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
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
                            <Heart className="h-4" style={{ backgroundColor: "#ffffff", width: "16px" }} fill={isSaved ? "currentColor" : "none"} />
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
    </section>
  );
}
