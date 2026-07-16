import React, { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi2";

function BacToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollUp}
      className={`fixed bottom-8 right-8 p-3 rounded-full z-[99999] transition-all duration-300 shadow-lg ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        background: "var(--accent-green)",
        color: "#000",
        boxShadow: "0 4px 20px rgba(85, 230, 165, 0.4)",
      }}
      aria-label="Back to top"
    >
      <HiChevronUp className="w-6 h-6" />
    </button>
  );
}

export default BacToTopButton;
