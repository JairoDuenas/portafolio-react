import { useState, useEffect } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      if (e.target.closest("a, button, [data-hover]")) setHovered(true);
    };
    const onOut = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
      }}
      className={`fixed rounded-full pointer-events-none z-[9999] mix-blend-difference transition-[width,height,border-color,background-color] duration-300 ${
        hovered
          ? "w-12 h-12 bg-transparent border-[1.5px] border-fg"
          : "w-2 h-2 bg-fg border-none"
      }`}
    />
  );
}
