import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const NAV_ITEMS = [
  { label: "INICIO", href: "#inicio" },
  { label: "PROYECTOS", href: "#proyectos" },
  { label: "HABILIDADES", href: "#habilidades" },
  { label: "CONTACTO", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Logo href="#inicio">
          <LogoImg src="/favicon.png" alt="Logo Jairodv" />
          JAIRODV<LogoDot>.</LogoDot>
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

        <Hamburger
          onClick={() => setOpen(!open)}
          $open={open}
          aria-label="Menú"
        >
          <HamLine $open={open} $pos="top" />
          <HamLine $open={open} $pos="mid" />
          <HamLine $open={open} $pos="bot" />
        </Hamburger>
      </Nav>

      <Drawer $open={open}>
        <DrawerLogo>
          <LogoImg src="/favicon.png" alt="Logo Jairodv" />
          JAIRODV<LogoDot>.</LogoDot>
        </DrawerLogo>
        <DrawerLinks>
          {NAV_ITEMS.map(({ label, href }, i) => (
            <DrawerItem key={label} $i={i} $open={open}>
              <DrawerLink href={href} onClick={close}>
                {label}
              </DrawerLink>
            </DrawerItem>
          ))}
        </DrawerLinks>
        <DrawerFooter>© {new Date().getFullYear()} JAIRO DUEÑAS</DrawerFooter>
      </Drawer>

      <Backdrop $open={open} onClick={close} />
    </>
  );
}

/* ── animations ── */
const slideIn = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`;
const slideOut = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(100%); }
`;
const itemFade = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`;

/* ── styled ── */
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ $scrolled }) => ($scrolled ? "14px 60px" : "24px 60px")};
  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(8,8,8,0.95)" : "transparent"};
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
  font-size: 32px;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--fg);
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.75;
  }
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
`;

const LogoDot = styled.span`
  color: var(--dim);
`;

const Links = styled.ul`
  display: flex;
  gap: 44px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 15px;
  letter-spacing: 2px;
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
  }
  &:hover::after {
    width: 100%;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  padding: 4px;
  z-index: 300;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamLine = styled.span`
  display: block;
  height: 1.5px;
  background: var(--fg);
  border-radius: 2px;
  width: 100%;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease,
    width 0.3s ease;

  ${({ $pos, $open }) =>
    $pos === "top" &&
    $open &&
    css`
      transform: translateY(6.5px) rotate(45deg);
    `}
  ${({ $pos, $open }) =>
    $pos === "mid" &&
    css`
      width: ${$open ? "0" : "100%"};
      opacity: ${$open ? 0 : 1};
    `}
  ${({ $pos, $open }) =>
    $pos === "bot" &&
    $open &&
    css`
      transform: translateY(-6.5px) rotate(-45deg);
    `}
`;

const Drawer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: min(340px, 85vw);
  height: 100dvh;
  background: #0d0d0d;
  border-left: 1px solid var(--border);
  z-index: 250;
  flex-direction: column;
  padding: 32px 40px;
  transform: translateX(100%);
  ${({ $open }) =>
    $open
      ? css`
          animation: ${slideIn} 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        `
      : css`
          animation: ${slideOut} 0.3s ease forwards;
        `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const DrawerLogo = styled.div`
  font-family: var(--font-display);
  font-size: 28px;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 56px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--border);
`;

const DrawerLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const DrawerItem = styled.li`
  opacity: 0;
  ${({ $open, $i }) =>
    $open &&
    css`
      animation: ${itemFade} 0.4s ${0.1 + $i * 0.07}s
        cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}
`;

const DrawerLink = styled.a`
  font-family: var(--font-display);
  font-size: 35px;
  letter-spacing: 2px;
  color: var(--dim);
  display: block;
  padding: 10px 0;
  transition:
    color 0.2s,
    letter-spacing 0.2s;

  &:hover {
    color: var(--fg);
    letter-spacing: 4px;
  }
`;

const DrawerFooter = styled.p`
  font-size: 13px;
  letter-spacing: 3px;
  color: #777;
`;

const Backdrop = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 240;
  backdrop-filter: blur(4px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 0.3s;
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};

  @media (max-width: 768px) {
    display: block;
  }
`;
