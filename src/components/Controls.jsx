import React from "react";
import AnimatedButton from "../styles/button2";

const Controls = ({ isRunning, onStartPause, onReset, onLap }) => (
  <div className="flex flex-wrap justify-center gap-4 mt-6 w-full sm:w-auto">
  <AnimatedButton
    label="Reset"
    onClick={onReset}
    variant="reset"
  />
  <AnimatedButton
    label={isRunning ? "Pause" : "Start"}
    onClick={onStartPause}
    variant={isRunning ? "pause" : "start"}
  />
  <AnimatedButton
    label="Lap"
    onClick={onLap}
    variant="lap"
  />


  </div>
);

export default Controls;
