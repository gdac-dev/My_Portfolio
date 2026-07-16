import React, { useEffect, useState } from "react";

interface ParallaxItemProps {
  children: React.ReactNode;
  speed?: number; // Maximum translation offset in pixels
  className?: string;
  reverse?: boolean; // If true, move in the opposite direction
}

const ParallaxItem: React.FC<ParallaxItemProps> = ({
  children,
  speed = 12,
  className = "",
  reverse = false,
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isEligible, setIsEligible] = useState(false);

  useEffect(() => {
    const checkEligibility = () => {
      const finePointer = window.matchMedia("(pointer: fine)").matches;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      setIsEligible(finePointer && !prefersReducedMotion);
    };

    checkEligibility();
    window.addEventListener("resize", checkEligibility);

    return () => {
      window.removeEventListener("resize", checkEligibility);
    };
  }, []);

  useEffect(() => {
    if (!isEligible) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalize cursor coordinate to range [-0.5, 0.5]
      const normX = clientX / innerWidth - 0.5;
      const normY = clientY / innerHeight - 0.5;

      const directionMultiplier = reverse ? -1 : 1;
      setOffset({
        x: normX * speed * directionMultiplier,
        y: normY * speed * directionMultiplier,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isEligible, speed, reverse]);

  if (!isEligible) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxItem;
