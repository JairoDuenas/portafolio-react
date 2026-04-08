import { motion } from "framer-motion";
import { useState } from "react";

export function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
      className="grid grid-cols-1 items-start gap-6 py-10 border-b border-border transition-all duration-500 ease-custom hover:bg-white/[0.02] md:grid-cols-[80px_1fr_auto] md:gap-12 md:py-12 md:hover:px-6 md:-mx-6"
    >
      <div className="flex justify-between items-center mb-2 md:mb-0">
        <span
          className={`font-display text-4xl leading-none transition-all duration-500 md:text-5xl ${hovered ? "text-fg translate-x-2" : "text-border"}`}
        >
          {project.id}
        </span>
        <span className="block md:hidden text-[11px] tracking-[3px] text-dim font-medium">
          {project.year}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <h3
          className={`font-display text-2xl transition-all duration-500 md:text-[32px] ${hovered ? "tracking-[4px] text-fg" : "tracking-[1px] text-fg/80"}`}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed max-w-xl md:text-[16px]">
          {project.desc}
        </p>
        <div className="flex gap-3 flex-wrap mt-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[9px] tracking-[2px] py-1 px-2.5 border border-border text-dim uppercase bg-white/[0.02] md:text-[11px] md:px-3.5 md:py-1.5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Mobile Links */}
        <div className="flex md:hidden gap-4 mt-4 pt-6 border-t border-border/50">
          {project.links.map((link, j) => (
            <a
              key={j}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[11px] tracking-[2px] text-fg border border-border py-2.5 px-4 rounded-full bg-white/[0.05]"
            >
              <img
                src={link.icon}
                alt=""
                className="w-4 h-4 object-contain invert"
              />
              {link.title.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-col items-end gap-6 pt-2">
        <span className="text-[13px] tracking-[3px] text-dim font-medium">
          {project.year}
        </span>
        <div className="flex gap-5">
          {project.links.map((link, j) => (
            <a
              key={j}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              title={link.title}
              className="group/link relative flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-300 hover:border-fg hover:bg-fg"
            >
              <img
                src={link.icon}
                alt={link.title}
                className="w-5 h-5 object-contain transition-all duration-300 group-hover/link:invert"
              />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
