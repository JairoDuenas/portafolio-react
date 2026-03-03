import { useEffect, useState } from "react";
import styled from "styled-components";

const NAV_ITEMS = [
  { label: "INICIO", href: "#inicio" },
  { label: "PROYECTOS", href: "#proyectos" },
  { label: "HABILIDADES", href: "#habilidades" },
  { label: "CONTACTO", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <Logo href="#inicio">
        Jairodv<LogoDot>.</LogoDot>
      </Logo>
      <Links>
        {NAV_ITEMS.map(({ label, href }) => (
          <li key={label}>
            <NavLink href={href} data-hover>
              {label}
            </NavLink>
          </li>
        ))}
      </Links>
    </Nav>
  );
}
const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ $scrolled }) => ($scrolled ? "14px 60px" : "24px 60px")};
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(8,8,8,0.92)" : "transparent"};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? "1px solid var(--border)" : "none"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(16px)" : "none")};
  transition:
    padding 0.3s,
    background 0.3s,
    border-bottom 0.3s;

  @media (max-width: 768px) {
    padding: ${({ $scrolled }) => ($scrolled ? "14px 24px" : "20px 24px")};
  }
`;

const Logo = styled.a`
  font-family: var(--font-display);
  font-size: 26px;
  letter-spacing: 2px;
`;
const LogoDot = styled.span`
  color: var(--dim);
`;

const Links = styled.ul`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const NavLink = styled.a`
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--dim);
  position: relative;
  transition: color 0.2s;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--fg);
    transition: width 0.3s;
  }

  &:hover {
    color: var(--fg);
    &::after {
      width: 100%;
    }
  }
`;
