import { motion } from "framer-motion";
import { ContactForm } from "../../form/ContactForm";
import { SectionHeading } from "../atoms/SectionHeading";

export function ContactSection() {
  return (
    <section id="contacto" className="section-padding border-t border-border">
      <div className="container-max">
        <SectionHeading
          label="04 — CONTACTO"
          title="HABLEMOS"
          outline="¿TIENES UN PROYECTO?"
        />

        <div className="grid grid-cols-1 gap-12 items-start md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base leading-[1.9] text-[#777] mb-12 max-w-[400px]">
              Disponible para proyectos freelance y posiciones full-time.
              Respondo en menos de 24 horas.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:jairo_251180@hotmail.com"
                data-hover
                className="text-sm tracking-[1px] text-dim flex items-center gap-2.5 transition-all duration-300 ease-custom hover:text-fg hover:gap-3.5 before:content-['→'] before:text-[11px] before:transition-transform before:duration-300 before:ease-custom hover:before:translate-x-1"
              >
                jairo_251180@hotmail.com
              </a>
              <a
                href="https://github.com/jairoDuenas"
                target="_blank"
                rel="noreferrer"
                data-hover
                className="text-sm tracking-[1px] text-dim flex items-center gap-2.5 transition-all duration-300 ease-custom hover:text-fg hover:gap-3.5 before:content-['→'] before:text-[11px] before:transition-transform before:duration-300 before:ease-custom hover:before:translate-x-1"
              >
                github.com/jairodv
              </a>
              <a
                href="https://www.linkedin.com/in/jairodue%C3%B1as/"
                target="_blank"
                rel="noreferrer"
                data-hover
                className="text-sm tracking-[1px] text-dim flex items-center gap-2.5 transition-all duration-300 ease-custom hover:text-fg hover:gap-3.5 before:content-['→'] before:text-[11px] before:transition-transform before:duration-300 before:ease-custom hover:before:translate-x-1"
              >
                linkedin.com/in/jairodv
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
