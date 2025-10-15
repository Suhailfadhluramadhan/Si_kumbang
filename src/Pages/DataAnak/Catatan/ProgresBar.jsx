import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";

import animationData1 from "../../../assets/Baby.json";

const CircularProgressBaby = ({
  percentage = 100,
  size = 120,
  color = "#3b82f6",
}) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [iconPos, setIconPos] = useState({ x: 0, y: 0 });
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(
        (percentage / 100) * length
      );
      setIconPos({ x: point.x, y: point.y });
    }
  }, [percentage]);

  // Create arc path
  const describeArc = () => {
    const cx = size / 2;
    const cy = size / 2;
    return `
      M ${cx}, ${cy - radius}
      a ${radius},${radius} 0 1,1 0,${2 * radius}
      a ${radius},${radius} 0 1,1 0,-${2 * radius}
    `;
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background */}
        <path
          d={describeArc()}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />

        {/* Progress */}
        <path
          ref={pathRef}
          d={describeArc()}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percentage / 100) * circumference}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-gray-700">{percentage}%</span>
      </div>

      {/* Lottie Animation at the end of progress */}
      <div
        className="absolute"
        style={{
          top: iconPos.y - 16, // adjust center
          left: iconPos.x - 16,
          transition: "top 0.5s ease, left 0.5s ease",
        }}
      >
        <div className="w-8 h-8">
          <Lottie
          animationData={animationData1}
          loop
          style={{ width: 50, height: 50 }}
        />
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBaby;

// CircularProgressBaby
