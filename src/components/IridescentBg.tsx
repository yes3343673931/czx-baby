export function IridescentBg() {
  return (
    <div className="absolute inset-0 bg-gradient-to-tr from-[#eef4f8] via-[#ffffff] to-[#e6f0f5] z-0 overflow-hidden pointer-events-none">
      {/* Soft pastel light leaks for pearlescent effect (五光十色的白) */}
      <div className="absolute top-[0%] left-[-10%] w-[60%] h-[60%] bg-pink-200/40 rounded-full filter blur-[100px] mix-blend-normal animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-100/50 rounded-full filter blur-[120px] mix-blend-normal animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full filter blur-[90px] mix-blend-normal animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-[20%] left-[10%] w-[50%] h-[50%] bg-green-100/40 rounded-full filter blur-[100px] mix-blend-normal animate-pulse" style={{ animationDuration: '9s' }}></div>
      
      {/* Central iridescent white glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-white/70 rounded-full filter blur-[120px] mix-blend-screen"></div>

      {/* Glassmorphism layer to blend all the colors into a soft white with colorful hues */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[60px]"></div>
    </div>
  );
}
