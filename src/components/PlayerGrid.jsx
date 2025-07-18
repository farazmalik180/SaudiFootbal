import React from 'react';

function PlayerGrid({ players, onPlayerClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
      {players.map(player => (
        <div
          key={player.name}
          className="bg-white rounded-2xl shadow-lg p-0 flex flex-col border border-gray-100 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
          onClick={() => onPlayerClick && onPlayerClick(player)}
        >
          {/* AI Potential badge */}
          <div className="absolute top-4 right-4 z-10 flex flex-col items-end">
            <span className="flex items-center bg-green-500 text-white font-bold px-4 py-2 rounded-full text-base shadow-lg border-2 border-green-700 mb-1">
              <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" /></svg>
              {player.potential} <span className="ml-1 text-xs font-normal">/100</span>
            </span>
            <span className="text-xs text-green-700 font-semibold">AI Potential</span>
          </div>
          <div className="h-36 w-full rounded-t-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
            <img
              src={player.image}
              alt={player.name}
              className="object-cover w-full h-full"
              onError={e => (e.target.style.display = 'none')}
            />
          </div>
          <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500 font-medium">{player.club}</span>
              <span className={`text-xs px-2 py-1 rounded-full font-bold ${player.potential >= 90 ? 'bg-green-100 text-green-700' : player.potential >= 87 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>{player.potential >= 90 ? 'Elite' : player.potential >= 87 ? 'High' : 'Prospect'}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg font-bold text-gray-900">{player.name}</h2>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-500">{player.age} years</span>
              <span className="text-sm font-semibold text-green-700">{player.position}</span>
            </div>
            <div className="flex gap-4 mb-2">
              <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg py-2">
                <span className="text-lg font-bold text-gray-800">{player.goals}</span>
                <span className="text-xs text-gray-500">Goals</span>
              </div>
              <div className="flex flex-col items-center flex-1 bg-gray-50 rounded-lg py-2">
                <span className="text-lg font-bold text-gray-800">{player.assists}</span>
                <span className="text-xs text-gray-500">Assists</span>
              </div>
            </div>
            <div className="flex gap-4 mb-2 text-xs text-gray-600">
              <span>Height: <span className="font-semibold text-gray-900">{player.height} cm</span></span>
              <span>Weight: <span className="font-semibold text-gray-900">{player.weight} kg</span></span>
            </div>
            <div className="mb-2">
              <span className="text-xs text-gray-500">Key Strengths:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {player.strengths && player.strengths.map((s, i) => (
                  <span key={i} className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">{s}</span>
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-3">Matches Played <span className="font-bold text-gray-900">{player.matches}</span></div>
            <a
              href={player.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 rounded-lg transition-colors text-sm"
              onClick={e => e.stopPropagation()}
            >
              ▶ Watch Highlights
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayerGrid; 