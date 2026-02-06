import { useState, useRef } from 'react';
import Counter from './components/Counter';
import MemoryCard from './components/MemoryCard';
import { memories } from './data/memories';
import Footer from './components/Footer';
export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef(null);
  const datingStartDate = "2025-02-14T02:32:00+05:30"; // IST Offset

  const handleStart = () => {
    setIsStarted(true);
    if (audioRef.current) audioRef.current.play();
  };

  return (
    <div className="relative min-h-screen bg-rose-50 overflow-x-hidden">
      {/* 1. Orientation Warning (Visible only on mobile portrait) */}
      <div className="fixed inset-0 z-[200] bg-rose-600 flex flex-col items-center justify-center text-white lg:hidden portrait:flex landscape:hidden">
        <div className="animate-spin-slow text-6xl">🔄</div>
        <h2 className="text-xl font-serif mt-4 px-8 text-center">
          Hello there, a small request...Please rotate your phone to landscape mode.
        </h2>
      </div>
      <audio ref={audioRef} src="/music/song.mp3" loop />
      <div className="page-border"></div>
      {/* 1. Cover Overlay */}
      {!isStarted && (
        <div 
          onClick={handleStart}
          className="fixed inset-0 z-[100] bg-rose-500 flex flex-col items-center justify-center text-white cursor-pointer"
        >
          <div className="text-8xl animate-pulse">✉️</div>
          <h1 className="text-4xl font-serif mt-6">A Letter for You</h1>
          <p className="mt-2 opacity-90 uppercase tracking-widest text-lg">Put your earphones on</p>
          <p className="mt-2 opacity-90 uppercase tracking-widest text-lg">View in Landscape mode 😉</p>
          <p className="mt-2 opacity-90 uppercase tracking-widest text-lg">Click to open</p>
        </div>
      )}

      {/* 2. Foggy Spotlight Overlay */}
      <div className="fog-overlay"></div>

      {/* 3. Main Content */}
      <div className={`transition-opacity duration-1000 ${isStarted ? 'opacity-100' : 'opacity-0'}`}>
        <section className="h-screen flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-5xl md:text-7xl font-serif text-rose-500 mb-8">Our Journey</h2>
          <Counter startDate={datingStartDate} />
          <div className="mt-12 animate-bounce text-rose-300">Scroll Down ↓</div>
        </section>

        <div className="max-w-6xl mx-auto relative px-4 pb-32">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-rose-200 h-full z-0"></div>

          {memories.map((m, index) => (
            <MemoryCard key={m.id} memory={m} index={index} total={memories.length} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}