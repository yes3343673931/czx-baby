import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { Play, Pause, ChevronLeft, Disc3, Music2 } from "lucide-react";
import { Album, Track } from "../data/albums";
import { IridescentBg } from "./IridescentBg";

interface AlbumDetailProps {
  album: Album;
  onClose: () => void;
  onPlayTrack: (track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function AlbumDetail({
  album,
  onClose,
  onPlayTrack,
  currentTrack,
  isPlaying,
  onTogglePlay,
}: AlbumDetailProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lyricsContainerRef = useRef<HTMLDivElement | null>(null);

  // Sync audio playback with the global isPlaying state
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.log("Playback blocked:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Find current line of lyrics
  const currentLyricIndex = useMemo(() => {
    if (!album.lyrics) return -1;
    let index = -1;
    for (let i = 0; i < album.lyrics.length; i++) {
      if (currentTime >= album.lyrics[i].time) {
        index = i;
      } else {
        break;
      }
    }
    return index;
  }, [currentTime, album.lyrics]);

  // Auto-scroll lyrics
  useEffect(() => {
    if (lyricsContainerRef.current && currentLyricIndex !== -1) {
      const activeElement = lyricsContainerRef.current.children[
        currentLyricIndex
      ] as HTMLElement;
      if (activeElement) {
        const containerHeight = lyricsContainerRef.current.offsetHeight;
        const elementOffset = activeElement.offsetTop;
        const elementHeight = activeElement.offsetHeight;

        lyricsContainerRef.current.scrollTo({
          top: elementOffset - containerHeight / 2 + elementHeight / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentLyricIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
    >
      <IridescentBg />

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={
          album.audioUrl && !album.audioUrl.includes("y.qq.com")
            ? album.audioUrl
            : undefined
        }
        onTimeUpdate={handleTimeUpdate}
        onEnded={onTogglePlay} // Simple toggle when ended
      />

      {/* Floating Top Nav */}
      <div className="absolute top-12 left-12 z-[70] flex items-center gap-4">
        <button
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center bg-white/40 hover:bg-white/60 text-ocean-900 rounded-full transition-all border border-white/20 backdrop-blur-3xl shadow-xl group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <div className="text-ocean-900/60 text-sm font-mono tracking-widest uppercase hidden md:block">
          专辑详情 / {album.title}
        </div>
      </div>

      <div className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar">
        <div className="w-full max-w-[1500px] md:ml-[5%] mr-auto p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center md:items-start justify-start gap-12 lg:gap-24">
          {/* Left Column: Vinyl Disc & Lyrics under it */}
          <div className="w-full md:w-[42%] flex flex-col items-center gap-16 h-auto shrink-0">
            <motion.div
              layoutId={`album-cover-${album.id}`}
              className="relative w-full max-w-[380px] lg:max-w-[480px] aspect-square flex items-center justify-center group"
            >
              {/* The Spinning Vinyl Disc */}
              <motion.div
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="relative w-full h-full rounded-full bg-[#050505] shadow-[0_40px_120px_-20px_rgba(51,103,153,0.3)] flex items-center justify-center overflow-hidden border-[12px] border-black/5"
              >
                {/* Record Grooves */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "repeating-radial-gradient(circle, #1a1a1a 0px, #050505 1px, #1a1a1a 2px)",
                    opacity: 0.4,
                  }}
                />

                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none" />

                <div className="relative w-[38%] aspect-square rounded-full overflow-hidden border-4 border-black/80 z-10 shadow-2xl">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 m-auto w-3 h-3 bg-[#0a0a0c] rounded-full border border-white/20 shadow-inner z-20" />
                </div>
              </motion.div>

              {/* Tonearm */}
              <div className="absolute top-0 right-0 w-32 h-64 pointer-events-none z-30">
                <motion.div
                  animate={
                    isPlaying
                      ? { rotate: 5, x: -10, y: 10 }
                      : { rotate: -25, x: 0, y: 0 }
                  }
                  transition={{ duration: 1.2, ease: "circOut" }}
                  className="relative w-full h-full origin-top-right transform -translate-x-12"
                >
                  <div className="absolute top-[-10px] right-2 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full border border-ocean-100 shadow-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-ocean-50 rounded-full border border-ocean-200 flex items-center justify-center">
                      <div className="w-2 h-2 bg-ocean-300 rounded-full" />
                    </div>
                  </div>
                  <div
                    className="absolute top-10 right-8 w-1.5 h-48 bg-neutral-100 rounded-full shadow-lg origin-top"
                    style={{ transform: "rotate(-5deg)" }}
                  />
                  <div
                    className="absolute top-[204px] right-10 w-6 h-10 bg-white border border-ocean-100 rounded shadow-md flex flex-col items-center p-1"
                    style={{ transform: "rotate(-5deg)" }}
                  >
                    <div className="w-full h-1 bg-ocean-100 rounded-full mb-1" />
                    <div className="w-1.5 h-1.5 bg-ocean-900 rounded-full mt-auto mb-1" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Lyrics Module (Pure text, no box) */}
            {album.lyrics && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-[520px] h-[450px] flex flex-col items-center"
              >
                <div
                  ref={lyricsContainerRef}
                  className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth flex flex-col items-center gap-4 py-32"
                >
                  {album.lyrics.map((line, index) => (
                    <p
                      key={index}
                      className={`text-[22px] font-medium tracking-normal transition-all duration-1000 text-center leading-relaxed ${
                        currentLyricIndex === index
                          ? "text-ocean-900 opacity-100 scale-105"
                          : "text-ocean-900/60 scale-95"
                      }`}
                    >
                      {line.text}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Information & Tracks (Unified styling) */}
          <div className="flex-1 w-full max-w-2xl flex flex-col gap-6 py-4 md:py-8 h-fit">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left"
            >
              <h2 className="text-5xl md:text-7xl font-light text-ocean-900 tracking-widest uppercase mb-2 leading-tight">
                {album.title}
              </h2>
              <div className="flex items-center gap-3 text-ocean-900/60 font-mono text-xs tracking-widest">
                <span>{album.releaseYear} 版本</span>
                <span className="w-1 h-1 bg-ocean-900/20 rounded-full" />
                <span>
                  {album.artist} {album.type}记录
                </span>
              </div>
            </motion.div>

            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/40 backdrop-blur-2xl rounded-[32px] border border-white/60 p-7 shadow-xl"
            >
              <h4 className="text-xs font-mono text-ocean-900/60 uppercase tracking-[0.2em] mb-4">
                专辑简介
              </h4>
              <div className="text-sm font-medium text-ocean-900/60 leading-relaxed italic whitespace-pre-line max-h-[160px] overflow-y-auto no-scrollbar">
                {album.description}
              </div>
            </motion.div>

            {/* Info & Play Section (Unified Styling) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/40 backdrop-blur-2xl rounded-[32px] border border-white/60 p-6 flex flex-col md:flex-row items-center gap-8 shadow-xl"
            >
              <button
                onClick={onTogglePlay}
                className="w-full md:w-auto px-10 py-5 bg-white text-ocean-900 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-neutral-50 transition-all shadow-lg active:scale-95 whitespace-nowrap"
              >
                {isPlaying &&
                currentTrack &&
                album.tracks.some((t) => t.id === currentTrack.id) ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" /> 暂停播放
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-1" /> 开始旅程
                  </>
                )}
              </button>

              <div className="flex-1 w-full grid grid-cols-3 gap-4">
                <div className="text-center md:text-left">
                  <p className="text-[11px] font-mono text-ocean-900/60 mb-1 tracking-widest uppercase">
                    歌手
                  </p>
                  <p className="text-base text-ocean-900/60 font-bold">
                    {album.artist}
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[11px] font-mono text-ocean-900/60 mb-1 tracking-widest uppercase">
                    唱片公司
                  </p>
                  <p className="text-base text-ocean-900/60 font-bold">
                    {album.label}
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[11px] font-mono text-ocean-900/60 mb-1 tracking-widest uppercase">
                    语言
                  </p>
                  <p className="text-base text-ocean-900/60 font-bold">
                    {album.language}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tracklist Module (Unified Styling) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/40 backdrop-blur-2xl rounded-[40px] border border-white/60 p-8 shadow-2xl"
            >
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-ocean-900 tracking-tight leading-none mb-2">
                    曲目列表
                  </h3>
                  <p className="text-xs font-mono text-ocean-900/60 uppercase tracking-widest">
                    1 首单曲
                  </p>
                </div>
                <Disc3
                  className={`w-8 h-8 text-ocean-900/60 ${isPlaying ? "animate-spin-slow" : ""}`}
                />
              </div>

              <div className="flex flex-col gap-2">
                {album.tracks.map((track) => {
                  const isCurrent =
                    currentTrack?.id === track.id &&
                    album.tracks.some((t) => t.id === track.id);

                  return (
                    <div
                      key={track.id}
                      onClick={() => onPlayTrack(track)}
                      className={`group flex items-center gap-4 py-8 px-8 rounded-3xl transition-all border ${
                        isCurrent
                          ? "bg-white/80 border-white/90 shadow-inner scale-[1.01]"
                          : "bg-white/30 border-transparent hover:bg-white/400 shadow-sm"
                      } cursor-pointer`}
                    >
                      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                        {isCurrent ? (
                          <div className="flex gap-0.5 items-end h-4">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                animate={
                                  isPlaying
                                    ? { height: [4, 16, 8, 14, 4] }
                                    : { height: 4 }
                                }
                                transition={{
                                  repeat: Infinity,
                                  duration: 0.6,
                                  delay: i * 0.1,
                                }}
                                className="w-[4px] bg-ocean-900 rounded-full"
                              />
                            ))}
                          </div>
                        ) : (
                          <Music2 className="w-6 h-6 text-ocean-900/60 group-hover:text-ocean-900 transition-colors" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-2xl tracking-wide transition-colors ${isCurrent ? "text-ocean-900 font-bold" : "text-ocean-900/60 group-hover:text-ocean-900"}`}
                        >
                          {track.title}
                        </p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-sm font-mono text-ocean-900/60 tracking-widest uppercase">
                          {track.duration}
                        </span>
                        {isCurrent && isPlaying ? (
                          <Pause
                            className="w-5 h-5 text-ocean-900 fill-current"
                            onClick={(e) => {
                              e.stopPropagation();
                              onTogglePlay();
                            }}
                          />
                        ) : (
                          <Play className="w-5 h-5 text-ocean-900 fill-current opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
