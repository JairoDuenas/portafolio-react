import { motion } from "framer-motion";
import { SectionHeading } from "../atoms/SectionHeading";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-padding border-t border-border">
      <div className="container-max">
        <SectionHeading label="01 — SOBRE MÍ" title="MI" outline="ENFOQUE" />

        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-[1.2fr_1fr] md:gap-20">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base leading-[1.8] text-[#888] md:text-lg"
          >
            Soy un desarrollador apasionado por crear soluciones digitales que
            no solo funcionen, sino que cautiven. Con más de 4 años de
            experiencia, me especializo en el ecosistema de JavaScript,
            construyendo aplicaciones robustas desde el diseño hasta el
            despliegue.
            <br />
            <br />
            Mi enfoque se centra en la{" "}
            <strong className="text-fg font-medium">performance</strong>, la{" "}
            <strong className="text-fg font-medium">escalabilidad</strong> y la{" "}
            <strong className="text-fg font-medium">
              experiencia del usuario
            </strong>
            . Creo firmemente que el código debe ser tan limpio como la interfaz
            que lo representa.
          </motion.p>

          <div className="flex flex-col gap-6">
            {[
              { title: "CALIDAD", desc: "Código mantenible y testeado." },
              { title: "VELOCIDAD", desc: "Optimización al milisegundo." },
              { title: "DISEÑO", desc: "Estética funcional y minimalista." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="p-6 border border-border bg-[#0a0a0a] transition-all duration-300 ease-custom hover:border-dim hover:translate-x-2"
              >
                <h4 className="font-display text-2xl tracking-[2px] mb-2">
                  {v.title}
                </h4>
                <p className="text-[13px] text-[#555] tracking-[1px]">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
