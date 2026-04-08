import { motion } from "framer-motion";

export function SectionHeading({ label, title, outline }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24 md:mb-16"
    >
      <span className="block text-[13px] tracking-[6px] text-dim mb-6 uppercase">
        {label}
      </span>
      <h2 className="font-display text-[clamp(56px,8vw,110px)] leading-[0.9] tracking-[-1px]">
        {title}
        <br />
        <span className="outline-text opacity-60">{outline}</span>
      </h2>
    </motion.div>
  );
}
