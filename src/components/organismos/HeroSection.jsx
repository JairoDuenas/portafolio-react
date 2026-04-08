import { motion } from "framer-motion";
import { Noise } from "../organismos/Noise";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col section-padding relative overflow-hidden pt-40 pb-20 md:pt-64 md:pb-32"
    >
      <Noise opacity={0.035} />

      <div className="container-max relative z-[2] mt-12 md:mt-auto md:mb-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-20 h-20 mb-8 md:w-24 md:h-24 md:mb-10"
        >
          <img
            src="/foto.png"
            alt="Jairo Dueñas"
            className="w-full h-full rounded-full object-cover object-top relative z-[1] grayscale-[20%] bg-border p-1"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1.5 rounded-full border border-transparent border-t-fg/40 border-r-dim/20"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] tracking-[4px] text-dim mb-6 uppercase md:text-[13px] md:tracking-[6px] md:mb-8"
        >
          Desarrollador Full-Stack
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(56px,14vw,180px)] leading-[0.85] tracking-[-2px] flex flex-col mb-10 gap-1 md:mb-12 md:gap-2"
        >
          <span className="block opacity-80">CREANDO</span>
          <span className="block outline-text">SISTEMAS</span>
          <span className="block text-gradient">DIGITALES.</span>
        </motion.h1>

        <div className="flex flex-col gap-10 items-start md:grid md:grid-cols-[1fr_auto] md:gap-12 md:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base text-dim max-w-lg leading-relaxed md:text-lg md:leading-relaxed"
          >
            Especializado en el ecosistema JavaScript. Construyo aplicaciones
            web modernas, rápidas y escalables con un enfoque obsesivo en el
            detalle y la performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 w-full md:flex-row md:gap-5 md:w-auto"
          >
            <a
              href="#proyectos"
              data-hover
              className="inline-block font-body text-[11px] tracking-[4px] py-4 px-8 bg-fg text-bg border border-fg transition-all duration-500 ease-custom hover:bg-transparent hover:text-fg active:scale-[0.97] text-center md:px-10 md:py-4 md:text-[12px] md:text-left"
            >
              PROYECTOS
            </a>
            <a
              href="#contacto"
              data-hover
              className="inline-block font-body text-[11px] tracking-[4px] py-4 px-8 bg-transparent text-fg border border-border transition-all duration-500 ease-custom hover:border-fg active:scale-[0.97] text-center md:px-10 md:py-4 md:text-[12px] md:text-left"
            >
              CONTACTO
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container-max grid grid-cols-3 gap-6 mt-16 pt-8 border-t-0 bg-white/[0.02] p-6 rounded-xl md:flex md:items-center md:gap-16 md:mt-24 md:pt-12 md:border-t md:border-border/50 md:bg-transparent md:p-0 md:rounded-none"
      >
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="font-display text-4xl leading-none md:text-5xl">
            4+
          </span>
          <span className="text-[9px] tracking-[2px] text-dim uppercase md:text-[11px] md:tracking-[3px]">
            Años Exp.
          </span>
        </div>
        <div className="hidden md:block w-[1px] h-10 bg-border" />
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="font-display text-4xl leading-none md:text-5xl">
            30+
          </span>
          <span className="text-[9px] tracking-[2px] text-dim uppercase md:text-[11px] md:tracking-[3px]">
            Proyectos
          </span>
        </div>
        <div className="hidden md:block w-[1px] h-10 bg-border" />
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="font-display text-4xl leading-none md:text-5xl">
            15+
          </span>
          <span className="text-[9px] tracking-[2px] text-dim uppercase md:text-[11px] md:tracking-[3px]">
            Clientes
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] tracking-[3px] text-[#777] md:bottom-10 md:right-15 md:left-auto md:translate-x-0 md:text-[12px] md:gap-3"
      >
        <span className="opacity-60">SCROLL</span>
        <motion.div
          animate={{ scaleY: [1, 0.2, 1], opacity: [1, 0.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-dim to-transparent origin-top md:h-14"
        />
      </motion.div>
    </section>
  );
}
