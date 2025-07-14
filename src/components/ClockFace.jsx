import React from "react";

const ClockFace = ({ time }) => {
  const center = 200;
  const radius = 180;

  const secAngle = ((time / 1000) % 60) * 6; // 360 / 60


  return (
    <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-[10px] border-gray-700 flex items-center justify-center shadow-2xl relative">
    <div className="w-[400px] h-[400px]">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Outer Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="#111"
          stroke="#333"
          strokeWidth="4"
        />

        {/* Tick Marks */}
        {[...Array(60)].map((_, i) => {
          const angle = (i * 6) * (Math.PI / 180);
          const isMajor = i % 5 === 0;
          const length = isMajor ? 15 : 7;
          const r1 = radius - length;
          const r2 = radius;
          const x1 = center + r1 * Math.cos(angle);
          const y1 = center + r1 * Math.sin(angle);
          const x2 = center + r2 * Math.cos(angle);
          const y2 = center + r2 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#fff"
              strokeWidth={isMajor ? 2 : 1}
            />
          );
        })}

        {/* Numbers (05 to 60) */}
        {[...Array(12)].map((_, i) => {
          const angle = ((i * 30) - 90) * (Math.PI / 180); // rotate to align nicely
          const x = center + (radius - 30) * Math.cos(angle);
          const y = center + (radius - 30) * Math.sin(angle);
          const label = (i * 5 === 0 ? 60 : i * 5).toString().padStart(2, '0');
          return (
            <text
              key={i}
              x={x}
              y={y}
              fill="#fff"
              fontSize="16"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="monospace"
            >
              {label}
            </text>
          );
        })}

        {/* Second Hand */}
        <line
          x1={center}
          y1={center}
          x2={center + 140 * Math.cos((secAngle - 90) * (Math.PI / 180))}
          y2={center + 140 * Math.sin((secAngle - 90) * (Math.PI / 180))}
          stroke="#3b82f6"
          strokeWidth="3"
        />

        {/* Center Dot */}
        <circle cx={center} cy={center} r="6" fill="#999" />

        {/* Optional: Sub-dial placeholder */}
        <circle
          cx={center}
          cy={center + 80}
          r="30"
          fill="none"
          stroke="#555"
          strokeWidth="1"
        />
      </svg>
    </div>
  </div>
  );
};

export default ClockFace;
