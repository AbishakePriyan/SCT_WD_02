import React, { useState, useRef, useEffect } from 'react';
import './index.css';

import ClockFace from './components/ClockFace';
import TimeDisplay from './components/TimeDisplay';
import Controls from './components/Controls';
import LapList from './components/LapList';
import SettingsPanel from './components/SettingsPanel';
import AnimatedButton from './styles/button2';

import { formatTime } from './utils/formatTime';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { playSound } from './utils/soundManager'; // ✅ Howler-based sound

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [showLaps, setShowLaps] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [settings, setSettings] = useState({
    tickSound: true,
    startStopSound: true,
    lapSound: true,
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        const updated = Date.now() - startTime;
        setTime(updated);

        if (updated % 1000 < 15 && settings.tickSound && audioEnabled) {
          playSound('tick');
        }
      }, 10);

      if (settings.startStopSound && audioEnabled) {
        playSound('start');
      }
    } else {
      clearInterval(intervalRef.current);

      if (settings.startStopSound && audioEnabled) {
        playSound('stop');
      }
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartPause = () => {
    setAudioEnabled(true);
    setIsRunning(prev => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (settings.lapSound && audioEnabled) {
      playSound('lap');
    }
    setLaps(prev => [...prev, time]);
  };

  const handleExport = () => {
    const data = laps.map((lap, i) => ({
      Lap: i + 1,
      Time: formatTime(lap),
    }));
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'lap_times.csv');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white font-mono px-4 py-6 sm:px-8 md:px-12 lg:px-20">
      <ClockFace time={time} />
      <TimeDisplay time={time} />

      <Controls
        isRunning={isRunning}
        onStartPause={handleStartPause}
        onReset={handleReset}
        onLap={handleLap}
      />

      <div className="flex flex-wrap justify-center gap-4 mt-6 w-full sm:w-auto">
        <AnimatedButton label="Show Laps" onClick={() => setShowLaps(true)} variant="showlap" />
        <AnimatedButton label="Export CSV" onClick={handleExport} variant="export" />
        <AnimatedButton label="Settings" onClick={() => setShowSettings(true)} variant="settings" />
      </div>

      {showLaps && (
        <LapList
          laps={laps}
          onClose={() => setShowLaps(false)}
        />
      )}

      {showSettings && (
        <SettingsPanel
          settings={settings}
          updateSettings={setSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
      <footer className="w-full mt-10 py-4 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Abishake Priyan. All rights reserved.
      </footer>

    </div>
  );
};

export default App;
