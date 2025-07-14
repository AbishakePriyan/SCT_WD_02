import React from "react";
import { formatTime } from "../utils/formatTime";

const TimeDisplay = ({ time }) => (
  <div className="text-3xl sm:text-4xl md:text-5xl font-bold my-4 tracking-wider">
    {formatTime(time)}
  </div>
);

export default TimeDisplay;
