import React from 'react';

const placeholderImg = 'https://randomuser.me/api/portraits/men/32.jpg';

function PlayerModal({ player, onClose }) {
  if (!player) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-[#16213e] rounded-2xl shadow-2xl p-8 w-full max-w-2xl relative border border-[#223056]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/3">
            <img src={placeholderImg} alt={player.name} className="w-32 h-32 rounded-full object-cover border-4 border-[#223056] mb-4 shadow" />
            <h2 className="text-2xl font-bold mb-1 text-white text-center">{player.name}</h2>
            <div className="text-sm text-gray-400 mb-2 text-center">{player.position} | Age: {player.age}</div>
            <div className="flex gap-4 text-xs mb-3 text-gray-400">
              <span>Height: <span className="text-white font-semibold">{player.height}cm</span></span>
              <span>Weight: <span className="text-white font-semibold">{player.weight}kg</span></span>
            </div>
            <div className="mb-3">
              <span className="inline-block bg-green-500 text-[#16213e] font-bold rounded-full px-4 py-1 text-sm shadow">AI {player.potential}/100</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <div className="text-white font-semibold mb-2">Stats</div>
              <div className="flex gap-6 text-sm text-gray-300">
                <span>Goals: <span className="font-bold text-white">{player.goals}</span></span>
                <span>Assists: <span className="font-bold text-white">{player.assists}</span></span>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-2">Mocked Radar Chart</div>
              <div className="flex justify-center">
                {/* Mocked radar chart SVG */}
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <polygon points="70,20 120,60 100,120 40,120 20,60" fill="#22d3ee33" stroke="#22d3ee" strokeWidth="2" />
                  <polygon points="70,40 110,65 90,110 50,110 30,65" fill="#22d3ee77" stroke="#22d3ee" strokeWidth="1" />
                  <circle cx="70" cy="70" r="60" fill="none" stroke="#334155" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-2">Highlights</div>
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow">
                <iframe
                  src={player.youtube.replace('watch?v=', 'embed/')}
                  title="Player Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerModal; 