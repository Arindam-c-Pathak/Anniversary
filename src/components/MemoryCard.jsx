export default function MemoryCard({ memory, index, total }) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const isCentered = isFirst || isLast;
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full mb-32 flex flex-col items-center justify-center">
      
      {/* Date for BOTTOM card (Now shows ABOVE the last card) */}
      {isLast && (
        <span className="mb-4 text-rose-400 font-bold uppercase tracking-widest text-xl animate-pulse">
          {memory.date}
        </span>
      )}

      <div className={`flex w-full items-center ${isCentered ? 'justify-center' : isEven ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* The Memory Box */}
        <div className={`${isCentered ? 'w-full max-w-lg' : 'w-5/12'} z-40 text-center`}>
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-rose-100 transition-transform hover:scale-105">
            <img src={memory.image} className="w-full h-64 object-cover rounded-2xl mb-4 mx-auto" alt="" />
            <h3 className="text-2xl font-serif text-gray-800">{memory.title}</h3>
            <p className="text-gray-600 mt-3 text-sm italic">"{memory.description}"</p>
          </div>
        </div>

        {/* The Date for MIDDLE cards (Opposite side) */}
        {!isCentered && (
          <div className="w-5/12 flex justify-center px-8">
            <span className="text-rose-400 font-bold uppercase tracking-widest text-lg opacity-60">
              {memory.date}
            </span>
          </div>
        )}

        {/* Timeline Dot (Only for middle items) */}
        {!isCentered && (
          <div className="absolute left-1/2 -translate-x-1/2 z-40 w-12 h-12 bg-rose-500 rounded-full border-6 border-red-600 shadow-lg"></div>
        )}
      </div>

      {/* Date for TOP card (Now shows BELOW the first card) */}
      {isFirst && (
        <span className="mt-4 text-rose-400 font-bold uppercase tracking-widest text-lg ">
          {memory.date}
        </span>
      )}
    </div>
  );
}