import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { AlbumsSection } from "./components/AlbumsSection";
import { PhotosSection } from "./components/PhotosSection";
import { WorksSection } from "./components/WorksSection";

const tabs = [
  { id: "home", label: "首页" },
  { id: "photos", label: "个人图片" },
  { id: "works", label: "专辑" },
  { id: "albums", label: "单曲" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const defaultOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, defaultOptions);

    tabs.forEach(tab => {
      const element = document.getElementById(tab.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full min-h-screen bg-ocean-50 font-sans bg-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-start justify-between px-8 md:px-16 pt-8 pointer-events-none ${
        activeTab !== 'home' && activeTab !== 'albums' 
          ? 'bg-white/90 backdrop-blur-md shadow-sm h-20 pt-6 opacity-100' 
          : activeTab === 'albums' 
            ? 'opacity-0 h-0 overflow-hidden' 
            : 'h-32 opacity-100'
      }`}>
        <div 
          onClick={() => scrollToSection("home")}
          className={`font-serif tracking-widest cursor-pointer shrink-0 pointer-events-auto transition-all duration-500 text-[43px] ${activeTab !== 'home' && activeTab !== 'albums' ? 'opacity-0 pointer-events-none translate-x-[-20px]' : 'text-white font-bold drop-shadow-md opacity-100'}`}
        >
          CZ<span className="font-sans font-light">X</span>
        </div>
        
        <div className="flex justify-end items-center pointer-events-auto mt-2 overflow-x-auto no-scrollbar relative">
            <div className={`absolute bottom-0 left-0 right-0 h-[1px] ${activeTab !== 'home' && activeTab !== 'albums' ? 'bg-neutral-200' : 'bg-white/30'} z-0`}></div>
            <div className="flex gap-6 md:gap-10 relative z-10 px-4 text-[13px]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`text-[14px] tracking-widest transition-all font-medium whitespace-nowrap pb-3 border-b-[3px] ${
                    activeTab === tab.id
                      ? (activeTab === 'photos' || activeTab === 'works' ? "text-[#336799] border-[#336799] font-bold" : "text-white border-white font-bold")
                      : (activeTab === 'photos' || activeTab === 'works')
                        ? "text-neutral-500 hover:text-[#336799] border-transparent"
                        : "text-white/70 hover:text-white border-transparent drop-shadow-sm hover:border-white/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
        </div>
      </nav>

      {/* Pages Container */}
      <div className="w-full">
        <div id="home" className="w-full min-h-screen">
          <Hero />
        </div>
        <div id="photos" className="w-full min-h-screen bg-white">
          <PhotosSection />
        </div>
        <div id="works" className="w-full">
          <WorksSection />
        </div>
        <div id="albums" className="w-full">
          <AlbumsSection />
        </div>
      </div>
    </main>
  );
}

