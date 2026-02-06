import { useState, useEffect } from 'react';

const Counter = ({ startDate }) => {
  const [timeDiff, setTimeDiff] = useState({
    days: 0, hours: 0, mins: 0, secs: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const start = new Date(startDate);
      const now = new Date();
      const diff = now - start;

      setTimeDiff({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / 1000 / 60) % 60),
        secs: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
  <div className="text-center">
    <p className="text-xs text-rose-300 mb-4 uppercase tracking-widest">
      Time elapsed since we started dating.
    </p>
    <div className="flex gap-4 justify-center text-rose-600 font-mono">
      {/* ... your existing Days/Hours/Mins blocks ... */}
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{timeDiff.days}</span>
        <span className="text-sm uppercase">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{timeDiff.hours}</span>
        <span className="text-sm uppercase">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{timeDiff.mins}</span>
        <span className="text-sm uppercase">Mins</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold">{timeDiff.secs}</span>
        <span className="text-sm uppercase">Secs</span>
      </div>

    </div>
    
  </div>
);
};

export default Counter;