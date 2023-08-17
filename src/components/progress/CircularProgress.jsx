import React from "react";

const CircularProgress = ({ progress }) => {
  const radius = 160.5; // Set the radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="timerContainer grid place-items-center bg-gradient-to-tl h-[48rem] w-[48rem]  from-slate-700 to-slate-900 rounded-full 
      shadow-[-5rem_-5rem_10rem_0_#272c5a,5rem_5rem_10rem_0_#121530] mt-32 mb-20"
      //   style={{
      //     boxShadow: "-5rem -5rem 10rem 0 #272c5a, 5rem 5rem 10rem 0 #121530",
      //     /* Other styles */
      //   }}
    >
      <div className="bg-slate-900 h-[42rem] w-[42rem] rounded-full flex flex-col justify-center items-center relative">
        <svg width="100%" height="100%">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="none"
            stroke="#F87070"
            strokeWidth="10"
            strokeDasharray="565.48"
            stroke-dashoffset="141.37"
            strokeLinecap="round"
            transform="rotate(-90deg)"
          ></circle>
        </svg>
        <div>
          <h1>hello World!!</h1>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
