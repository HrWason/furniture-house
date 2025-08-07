// src/components/SofaLoader.jsx
import React from "react";

const SofaLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#f8f1e4] relative overflow-hidden">
      {/* Sawdust Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`dust-${i}`}
          className="sawdust absolute w-1 h-1 rounded-full bg-yellow-700 opacity-70"
          style={{
            top: `${Math.random() * 60 + 40}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Nail Sparks */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`spark-${i}`}
          className="spark absolute w-1 h-1 bg-orange-500 rounded-full"
          style={{
            top: "130px",
            left: `${160 + i * 4}px`,
            animationDelay: `${0.2 * i}s`,
          }}
        />
      ))}

      {/* SVG Sofa */}
      <svg
        className="w-64 h-64 mb-6"
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back cushions */}
        <rect className="plank back1" x="30" y="50" width="50" height="40" rx="8" fill="#d7a07b" />
        <rect className="plank back2" x="95" y="50" width="50" height="40" rx="8" fill="#d7a07b" />
        <rect className="plank back3" x="160" y="50" width="50" height="40" rx="8" fill="#d7a07b" />

        {/* Seat cushions */}
        <rect className="plank seat1" x="30" y="90" width="50" height="35" rx="6" fill="#b97c59" />
        <rect className="plank seat2" x="95" y="90" width="50" height="35" rx="6" fill="#b97c59" />
        <rect className="plank seat3" x="160" y="90" width="50" height="35" rx="6" fill="#b97c59" />

        {/* Armrests */}
        <rect className="plank arm-left" x="15" y="80" width="15" height="60" rx="6" fill="#a46e4a" />
        <rect className="plank arm-right" x="210" y="80" width="15" height="60" rx="6" fill="#a46e4a" />

        {/* Base support */}
        <rect className="plank base" x="30" y="125" width="180" height="20" rx="4" fill="#8a5d3d" />

        {/* Legs */}
        <rect className="plank leg1" x="40" y="145" width="8" height="20" rx="2" fill="#5c3a21" />
        <rect className="plank leg2" x="100" y="145" width="8" height="20" rx="2" fill="#5c3a21" />
        <rect className="plank leg3" x="160" y="145" width="8" height="20" rx="2" fill="#5c3a21" />
        <rect className="plank leg4" x="200" y="145" width="8" height="20" rx="2" fill="#5c3a21" />

        {/* Hammer */}
        <rect
          className="hammer-handle"
          x="180"
          y="20"
          width="8"
          height="50"
          fill="#6B4F4F"
          rx="2"
          transform-origin="184 70"
        />
        <rect
          className="hammer-head"
          x="170"
          y="10"
          width="28"
          height="12"
          fill="#555"
          rx="3"
          transform-origin="184 70"
        />
      </svg>

      <p className="text-xl font-medium text-amber-900">Building your sofa...</p>

      <style jsx>{`
        .plank {
          opacity: 0;
          transform: translateY(30px);
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }

        .back1 { animation: plankIn 0.5s forwards; animation-delay: 0.1s; }
        .back2 { animation: plankIn 0.5s forwards; animation-delay: 0.25s; }
        .back3 { animation: plankIn 0.5s forwards; animation-delay: 0.4s; }
        .seat1 { animation: plankIn 0.5s forwards; animation-delay: 0.6s; }
        .seat2 { animation: plankIn 0.5s forwards; animation-delay: 0.75s; }
        .seat3 { animation: plankIn 0.5s forwards; animation-delay: 0.9s; }
        .arm-left { animation: plankIn 0.5s forwards; animation-delay: 1.1s; }
        .arm-right { animation: plankIn 0.5s forwards; animation-delay: 1.25s; }
        .base { animation: plankIn 0.5s forwards; animation-delay: 1.4s; }
        .leg1 { animation: plankIn 0.5s forwards; animation-delay: 1.6s; }
        .leg2 { animation: plankIn 0.5s forwards; animation-delay: 1.7s; }
        .leg3 { animation: plankIn 0.5s forwards; animation-delay: 1.8s; }
        .leg4 { animation: plankIn 0.5s forwards; animation-delay: 1.9s; }

        @keyframes plankIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hammer-handle,
        .hammer-head {
          animation: hammerSwing 1s infinite ease-in-out;
        }

        @keyframes hammerSwing {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-10deg); }
          100% { transform: rotate(0deg); }
        }

        .sawdust {
          animation: dustFall 2.5s linear infinite;
        }

        @keyframes dustFall {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(100px) scale(0.5);
            opacity: 0;
          }
        }

        .spark {
          animation: sparkFlash 0.6s ease-out infinite;
        }

        @keyframes sparkFlash {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SofaLoader;