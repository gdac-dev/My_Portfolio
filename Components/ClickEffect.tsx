import React, { useEffect, useState } from "react";

interface Whirlwind {
  id: number;
  x: number;
  y: number;
}

const ClickEffect = () => {
  const [effects, setEffects] = useState<Whirlwind[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkPointer = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };
    checkPointer();
    window.addEventListener("resize", checkPointer);
    return () => window.removeEventListener("resize", checkPointer);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleClick = (e: MouseEvent) => {
      const newEffect: Whirlwind = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setEffects((prev) => [...prev, newEffect]);

      setTimeout(() => {
        setEffects((prev) => prev.filter((eff) => eff.id !== newEffect.id));
      }, 800);
    };

    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="click-effects-container">
      {effects.map((eff) => (
        <div
          key={eff.id}
          className="whirlwind-effect"
          style={{
            left: eff.x,
            top: eff.y,
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            {/* Outer main gold spiral vortex */}
            <path
              d="M50,50 C53,47 57,48 57,53 C57,60 49,63 43,59 C35,53 38,40 48,34 C61,26 73,39 67,54 C58,72 32,77 22,61 C9,41 24,9 50,7"
              stroke="#facc15"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="spiral-path"
            />
            {/* Inner secondary dark-gold spiral vortex */}
            <path
              d="M50,50 C47,53 43,52 43,47 C43,40 51,37 57,41 C65,47 62,60 52,66 C39,74 27,61 33,46 C42,28 68,23 78,39 C91,59 76,91 50,93"
              stroke="#eab308"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="spiral-path-delayed"
            />
          </svg>
        </div>
      ))}
      <style>{`
        .click-effects-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 99999999;
        }
        .whirlwind-effect {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          animation: whirlwind-spin-fade 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
        .spiral-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: spiral-draw 0.8s ease-out forwards;
        }
        .spiral-path-delayed {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: spiral-draw 0.8s ease-out 0.08s forwards;
        }
        @keyframes whirlwind-spin-fade {
          0% {
            transform: translate(-50%, -50%) scale(0.2) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.0) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes spiral-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ClickEffect;
