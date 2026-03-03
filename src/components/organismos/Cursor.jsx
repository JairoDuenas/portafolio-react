import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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

  return <Container style={{ left: pos.x, top: pos.y }} $hovered={hovered} />;
}

const Container = styled.div`
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition:
    width 0.2s ease,
    height 0.2s ease,
    background 0.2s ease,
    border 0.2s ease;
  mix-blend-mode: difference;
  width: ${({ $hovered }) => ($hovered ? "44px" : "10px")};
  height: ${({ $hovered }) => ($hovered ? "44px" : "10px")};
  background: ${({ $hovered }) => ($hovered ? "transparent" : "var(--fg)")};
  border: ${({ $hovered }) => ($hovered ? "1.5px solid var(--fg)" : "none")};
`;
