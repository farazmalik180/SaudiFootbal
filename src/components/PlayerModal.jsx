import React from 'react';

// 5-point radar chart attributes (change to 6-point for your use case)
const radarLabels = ['Pace', 'Passing', 'Shooting', 'Stamina', 'Defense'];
const radarValues = [80, 75, 70, 85, 65]; // Mocked values for demo

function getRadarPoints(values, radius = 30, centerX = 80, centerY = 80) {
  const angleStep = (2 * Math.PI) / values.length;
  return values.map((v, i) => {
    const angle = -Math.PI / 2 + i * angleStep;
    const r = radius * (v / 100);
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');
}

function getLabelPositions(labels, radius = 60, centerX = 80, centerY = 80) {
  const angleStep = (2 * Math.PI) / labels.length;
  return labels.map((label, i) => {
    const angle = -Math.PI / 2 + i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle) + 3;
    let anchor = 'middle';
    if (angle > -Math.PI / 2 && angle < Math.PI / 2) anchor = 'start';
    if (angle > Math.PI / 2 || angle < -Math.PI / 2) anchor = 'end';
    return { label, x, y, anchor };
  });
}

const mainHeatmapUrl = "Screenshot (1219).png";
const smallHeatmapUrl = "https://www.nicepng.com/png/full/274-2746589_kyle-korvers-shooting-heat-map-is-outrageous-atlanta.png";

function PlayerModal({ player, onClose }) {
  if (!player) return null;
  const labelPositions = getLabelPositions(radarLabels);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-[#101926] rounded-2xl shadow-2xl p-4 w-full max-w-3xl relative border border-[#22304a] flex gap-4">
        <button onClick={onClose} className="absolute top-2 right-4 text-[#f7e7c1] hover:text-white text-2xl font-bold">&times;</button>
        {/* Sidebar Card */}
        <div className="flex flex-col items-center w-64 bg-[#142136] rounded-2xl p-4 border border-[#22304a] justify-between" style={{ minHeight: 420 }}>
          <div>
            <div className="w-24 h-24 rounded-full border-4 border-[#3de6c1] overflow-hidden mb-4 mx-auto">
              <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-2xl font-extrabold text-[#f7e7c1] mb-4 text-center tracking-widest">{player.name.toUpperCase()}</div>
            <div className="flex flex-col items-center gap-1 mb-6">
              <div className="text-[#f7e7c1] text-lg font-bold text-center">
                {player.age} <span className="text-xs font-normal ml-1">AGE</span>
              </div>
              <div className="text-[#f7e7c1] text-lg font-bold text-center">
                {player.club}
              </div>
              <div className="text-[#f7e7c1] text-lg font-bold text-center">
                {player.position}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-2 w-full">
            <div className="text-[#f7e7c1] text-lg font-bold">
              {player.height}cm <span className="text-xs font-normal ml-1">HEIGHT</span>
            </div>
            <div className="text-[#f7e7c1] text-lg font-bold">
              {player.weight}kg <span className="text-xs font-normal ml-1">WEIGHT</span>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 min-w-0">
          {/* Radar Chart */}
          <div className="bg-[#142136] rounded-2xl p-4 border border-[#22304a] flex flex-col items-center row-span-1">
            <svg width="160" height="160" viewBox="0 0 160 160">
              {/* Outer polygon */}
              <polygon points="80,30 140,60 120,130 40,130 20,60" fill="#3de6c133" stroke="#3de6c1" strokeWidth="2" />
              {/* Inner polygon */}
              <polygon points="80,50 120,70 110,120 50,120 40,70" fill="#3de6c177" stroke="#3de6c1" strokeWidth="1" />
              {/* Radar values */}
              <polygon points={getRadarPoints(radarValues)} fill="#3de6c1" fillOpacity="0.5" stroke="#3de6c1" strokeWidth="2" />
              {/* Labels */}
              {labelPositions.map(({ label, x, y, anchor }, i) => (
                <text key={label} x={x} y={y} textAnchor={anchor} fill="#ffe066" fontSize="10" fontWeight="bold">{label}</text>
              ))}
            </svg>
          </div>
          {/* Main Heatmap */}
          <div className="bg-[#142136] rounded-2xl border border-[#22304a] flex flex-col items-center row-span-2 h-72 p-0">
            <img src={mainHeatmapUrl} alt="Main Heatmap" className="w-full h-full object-cover rounded-2xl" />
          </div>
          {/* Video Player (static image with play overlay) */}
          <div className="bg-[#142136] rounded-2xl p-4 border border-[#22304a] flex flex-col items-center row-span-1">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
              <img src={player.image} alt="Video preview" className="w-full h-full object-cover" />
              <button className="absolute inset-0 flex items-center justify-center z-20">
                <span className="bg-[#3de6c1] text-[#142136] rounded-full p-3 shadow-lg hover:scale-110 transition">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </button>
              <div className="absolute bottom-2 left-2 flex items-center gap-2 z-20">
                <span className="w-20 h-1.5 bg-[#3de6c1] rounded-full block" />
                <svg width="16" height="16" fill="none" stroke="#f7e7c1" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 5h2v14h-2z"/><path d="M5 9v6h2V9z"/><path d="M17 9v6h2V9z"/></svg>
              </div>
            </div>
          </div>
          {/* Small Heatmaps */}
          <div className="bg-[#142136] rounded-2xl p-4 border border-[#22304a] flex flex-col items-center row-span-1">
            <img src={smallHeatmapUrl} alt="Small Heatmap Left" className="w-full h-12 object-contain" />
          </div>
          <div className="bg-[#142136] rounded-2xl p-4 border border-[#22304a] flex flex-col items-center row-span-1">
            <img src={smallHeatmapUrl} alt="Small Heatmap Right" className="w-full h-12 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerModal; 