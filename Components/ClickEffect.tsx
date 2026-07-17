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
      const target = e.target as HTMLElement;
      // Capture clicks on buttons, anchors, and elements with pointer cursor styling
      const isInteractive = target.closest(
        "button, a, [role='button'], .cursor-pointer, input[type='submit'], input[type='button']"
      );
      if (!isInteractive) return;

      const newEffect: Whirlwind = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setEffects((prev) => [...prev, newEffect]);

      setTimeout(() => {
        setEffects((prev) => prev.filter((eff) => eff.id !== newEffect.id));
      }, 700);
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
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Whirlwind Spiral 1 */}
            <path
              d="M30,30 C35,20 45,28 30,38 C18,46 22,24 30,30 Z"
              stroke="#facc15"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="spiral-path"
            />
            {/* Whirlwind Spiral 2 */}
            <path
              d="M30,30 C20,38 12,28 30,18 C46,8 38,34 30,30 Z"
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
          width: 60px;
          height: 60px;
          animation: whirlwind-spin-fade 0.7s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
        .spiral-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: spiral-draw 0.7s ease-out forwards;
        }
        .spiral-path-delayed {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: spiral-draw 0.7s ease-out 0.08s forwards;
        }
        @keyframes whirlwind-spin-fade {
          0% {
            transform: translate(-50%, -50%) scale(0.2) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5) rotate(540deg);
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
