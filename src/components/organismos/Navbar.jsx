import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "INICIO", href: "#inicio" },
  { label: "SOBRE MÍ", href: "#sobre-mi" },
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
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center transition-all duration-700 ease-custom ${
          scrolled
            ? "py-4 px-6 bg-black/60 border-b border-white/5 backdrop-blur-2xl md:px-16 md:py-4"
            : "py-8 px-6 bg-transparent border-b border-transparent md:px-16 md:py-10"
        }`}
      >
        <a
          href="#inicio"
          className="font-display text-[34px] tracking-[4px] flex items-center gap-3 text-fg transition-all duration-500 hover:tracking-[6px] group"
          data-hover
        >
          <img
            src="/favicon.png"
            alt="Logo Jairodv"
            className="w-9 h-9 object-contain transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          JAIRODV
          <span className="text-dim transition-colors duration-500 group-hover:text-fg">
            .
          </span>
        </a>

        <ul className="hidden md:flex gap-14">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[12px] tracking-[4px] text-dim relative transition-all duration-500 hover:text-fg group flex items-center gap-2"
                data-hover
              >
                <span className="w-0 h-[1px] bg-fg transition-all duration-500 group-hover:w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="flex md:hidden flex-col justify-center gap-1.5 w-9 h-9 z-[300]"
          aria-label="Menú"
          data-hover
        >
          <span
            className={`block h-[1.5px] bg-fg w-full transition-all duration-300 ease-custom ${open ? "translate-y-[7.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] bg-fg w-full transition-all duration-300 ease-custom ${open ? "opacity-0 translate-x-2.5" : ""}`}
          />
          <span
            className={`block h-[1.5px] bg-fg w-full transition-all duration-300 ease-custom ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-[240] backdrop-blur-lg"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 w-[min(450px,100vw)] h-[100dvh] bg-[#0d0d0d] border-l border-white/5 z-[250] flex flex-col p-12 md:p-8"
            >
              <div className="mb-16 pb-10 border-b border-white/5 flex justify-between items-center">
                <a
                  href="#inicio"
                  onClick={() => setOpen(false)}
                  className="font-display text-[32px] tracking-[4px] flex items-center gap-3 text-fg"
                >
                  <img
                    src="/favicon.png"
                    alt="Logo Jairodv"
                    className="w-9 h-9 object-contain"
                  />
                  JAIRODV<span className="text-dim">.</span>
                </a>
              </div>

              <ul className="flex flex-col gap-4 flex-1">
                {NAV_ITEMS.map(({ label, href }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="font-display text-6xl tracking-[2px] text-dim block py-4 transition-all duration-500 ease-custom hover:text-fg hover:pl-4 md:text-5xl"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-10 border-t border-white/5 flex flex-col gap-6">
                <div className="flex gap-6">
                  <a
                    href="https://github.com/jairoDuenas"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dim hover:text-fg transition-colors"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jairodue%C3%B1as/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dim hover:text-fg transition-colors"
                  >
                    LINKEDIN
                  </a>
                </div>
                <p className="text-[11px] tracking-[4px] text-[#444] uppercase">
                  © {new Date().getFullYear()} JAIRO DUEÑAS
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
