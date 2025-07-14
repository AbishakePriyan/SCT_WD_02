import React from "react";
import { formatTime } from "../utils/formatTime";

const LapList = ({ laps, onClose }) => {
  const fastest = Math.min(...laps);
  const slowest = Math.max(...laps);
  const totalTimes = laps.reduce((acc, lap) => {
    acc.push((acc[acc.length - 1] || 0) + lap);
    return acc;
  }, []);

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:bottom-8 bg-gray-900 border border-purple-600 p-4 rounded-lg shadow-xl w-[90vw] sm:w-80 max-h-[80vh] overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Lap Times</h2>
        <button onClick={onClose} className="text-red-400 hover:text-red-600 text-lg">✖</button>
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {laps.map((lap, index) => {
          const diff = index === 0 ? null : lap - laps[index - 1];
          return (
            <div key={index} className={`rounded-lg p-3 border flex justify-between items-center ${
              lap === fastest ? "bg-green-800" : lap === slowest ? "bg-red-800" : "bg-gray-800"
            }`}>
              <div>
                <div className="text-lg font-mono">Lap {index + 1}: {formatTime(lap)}</div>
                <div className="text-sm text-gray-400">Total: {formatTime(totalTimes[index])}</div>
              </div>
              {diff !== null && (
                <div className="text-sm text-yellow-300">
                  {diff > 0 ? "+" : ""}{formatTime(Math.abs(diff))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LapList;
