import React from "react";

const SettingsPanel = ({ settings, updateSettings, onClose }) => {
  const toggle = (key) => updateSettings({ ...settings, [key]: !settings[key] });

  return (
    <div className="fixed top-6 right-6 w-[90vw] sm:w-72 max-h-[90vh] overflow-y-auto bg-gray-900 text-white rounded-xl p-5 border border-gray-600 shadow-xl z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Settings</h2>
        <button onClick={onClose} className="text-red-400 hover:text-red-600 text-lg">✖</button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Tick Sound</span>
          <input type="checkbox" checked={settings.tickSound} onChange={() => toggle('tickSound')} />
        </div>
        <div className="flex justify-between items-center">
          <span>Start/Stop Sound</span>
          <input type="checkbox" checked={settings.startStopSound} onChange={() => toggle('startStopSound')} />
        </div>
        <div className="flex justify-between items-center">
          <span>Lap Sound</span>
          <input type="checkbox" checked={settings.lapSound} onChange={() => toggle('lapSound')} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
