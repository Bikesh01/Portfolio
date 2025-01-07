// LoadingScreen.jsx
import React, { useEffect, useState } from "react";
import "../LoadingScreen.css";

const LoadingScreen = () => {
  const [fishDots, setFishDots] = useState([]);

  // Generate random positions for dots (fish)
  useEffect(() => {
    const dots = Array(20)
      .fill()
      .map(() => ({
        left: Math.random() * 100 + "vw",
        top: Math.random() * 100 + "vh",
        delay: Math.random() * 5 + "s",
      }));
    setFishDots(dots);
  }, []);

  return (
    <div className="loading-screen">
      {/* Animated Name */}
      <div className="name-animation">
        {["B", "I", "K", "E", "S", "H", " ", "K", "C"].map((letter, index) => (
          <span key={index} className="name-letter" style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </div>

      {/* Dotted Fish Animation */}
      <div className="dotted-fish">
        {fishDots.map((dot, index) => (
          <span
            key={index}
            className="dot"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
            }}
          ></span>
        ))}
      </div>

      {/* Curve Line Animation */}
      <div className="curve-lines">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="curve" style={{ animationDelay: `${index * 1.5}s` }}></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
