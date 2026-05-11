import { motion } from "motion/react";
import { ALBUMS } from "../data/albums";
import { ChevronRight, Play } from "lucide-react";
import { IridescentBg } from "./IridescentBg";
import kk from "../assets/images/kk.jpg";
import biue from "../assets/images/biue.jpg";
import llk from "../assets/images/llk.jpg";

export function WorksSection() {
  // Get the three specific albums requested
  const featuredAlbums = [
    ALBUMS.find(a => a.id === "a7"), // 转身走向你
    ALBUMS.find(a => a.id === "a8"), // 深海之息(Mareasía)
    ALBUMS.find(a => a.id === "a18"), // 不降落飞行指南
  ].filter(Boolean);

  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 relative">
      <IridescentBg />
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-[#336799] uppercase mb-4">
              Featured Discography
            </h2>
            <h3 className="text-[48px] font-light text-neutral-900 tracking-tight">
              专辑
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-[#336799] font-medium link-hover cursor-pointer"
            onClick={() => {
              const el = document.getElementById('albums');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>查看完整单曲列表</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuredAlbums.map((album, index) => (
            album && (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer flex flex-col items-center text-center ${index === 1 ? 'md:mt-32 lg:mt-48' : index === 2 ? 'md:mt-64 lg:mt-96' : ''}`}
              >
                <div className="relative w-full max-w-[200px] md:max-w-[240px] lg:max-w-[300px] aspect-square mb-6">
                  {/* Vinyl Record */}
                  <div className="absolute top-0 right-0 w-full h-full rounded-full bg-[#111] shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-x-1/2 z-0 border border-neutral-800">
                    {/* Vinyl grooves */}
                    <div className="absolute inset-[4px] rounded-full border border-neutral-700/30" />
                    <div className="absolute inset-[12px] rounded-full border border-neutral-700/20" />
                    <div className="absolute inset-[24px] rounded-full border border-neutral-700/40" />
                    <div className="absolute inset-[36px] rounded-full border border-neutral-700/20" />
                    {/* Center Label */}
                    <div className="w-1/3 h-1/3 rounded-full overflow-hidden relative border-2 border-neutral-800 flex items-center justify-center">
                      <img 
                        src={album.coverImage} 
                        alt="label"
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute w-[15%] h-[15%] bg-white rounded-full shadow-inner border border-neutral-300 z-10" />
                    </div>
                  </div>

                  {/* Album Cover Sleeve */}
                  <div className="relative w-full h-full bg-white shadow-lg overflow-hidden border border-neutral-200 z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                    {/* Sleeve Spine/Shadow effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent z-20 pointer-events-none" />
                    
                    <img 
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                      <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform duration-500">
                        <Play className="w-5 h-5 text-white fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[300px]">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#336799] px-2 py-0.5 bg-[#336799]/10 rounded-full uppercase">
                      Album
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {album.releaseYear}
                    </span>
                  </div>
                  <h4 className="text-base md:text-lg font-medium text-neutral-900 tracking-wide mb-1.5 group-hover:text-[#336799] transition-colors">
                    {album.title}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 italic font-light">
                    {album.description || "Chen Zhuoxuan's release."}
                  </p>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
