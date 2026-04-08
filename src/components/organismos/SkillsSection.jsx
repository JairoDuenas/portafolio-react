import { motion } from "framer-motion";
import { SKILLS } from "../../constants/data";
import { SectionHeading } from "../atoms/SectionHeading";

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="section-padding border-t border-border"
    >
      <div className="container-max">
        <SectionHeading
          label="03 — HABILIDADES"
          title="STACK"
          outline="TÉCNICO"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] bg-border border border-border">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-bg p-7 transition-colors duration-300 hover:bg-[#0e0e0e] md:p-9"
            >
              <h4 className="text-[11px] tracking-[4px] text-dim mb-4 pb-3 border-b border-border uppercase md:mb-6 md:pb-4">
                {group.category}
              </h4>
              <ul className="flex flex-col gap-2 md:gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[12px] flex items-center gap-2.5 transition-all duration-200 hover:gap-3.5 hover:text-fg group md:text-[13px]"
                    data-hover
                  >
                    <span className="w-[3px] h-[3px] rounded-full bg-dim flex-shrink-0 group-hover:bg-fg" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
