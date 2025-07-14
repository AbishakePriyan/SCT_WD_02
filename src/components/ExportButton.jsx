import React from "react";

const ExportButton = ({ onExport }) => (
  <button onClick={onExport} className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg shadow transition duration-200">
    Export CSV
  </button>
);

export default ExportButton;
