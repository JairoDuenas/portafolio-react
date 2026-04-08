import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Formulario con https://web3forms.com/
export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", "f459f280-a3ec-471e-8e34-96bcbc444861");
    formData.append(
      "subject",
      `Nuevo mensaje desde el portfolio — ${formData.get("name")}`,
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full min-h-[300px]">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center gap-5 p-15 border border-border bg-[#0a0a0a] text-center text-[#888] tracking-[2px] text-[12px]"
          >
            <span className="font-display text-[64px] text-fg">✓</span>
            <p>¡Mensaje enviado! Te responderé pronto.</p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[10px] tracking-[2px] text-dim underline mt-2.5 hover:text-fg"
            >
              ENVIAR OTRO
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-5 md:gap-4"
          >
            <div>
              <input
                required
                name="name"
                placeholder="TU NOMBRE"
                className="w-full bg-[#0a0a0a] border border-border text-fg font-body text-[13px] tracking-[2px] p-5 outline-none transition-all duration-300 hover:bg-[#111] focus:border-fg focus:bg-[#111] placeholder:text-[#444] md:p-4 md:text-[12px]"
              />
            </div>
            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="TU EMAIL"
                className="w-full bg-[#0a0a0a] border border-border text-fg font-body text-[13px] tracking-[2px] p-5 outline-none transition-all duration-300 hover:bg-[#111] focus:border-fg focus:bg-[#111] placeholder:text-[#444] md:p-4 md:text-[12px]"
              />
            </div>
            <div>
              <textarea
                required
                name="message"
                placeholder="CUÉNTAME TU PROYECTO..."
                rows={5}
                className="w-full bg-[#0a0a0a] border border-border text-fg font-body text-[13px] tracking-[2px] p-5 outline-none transition-all duration-300 hover:bg-[#111] focus:border-fg focus:bg-[#111] placeholder:text-[#444] resize-none min-h-[150px] md:p-4 md:text-[12px] md:min-h-[120px]"
              />
            </div>

            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-[11px] tracking-[1px] text-[#e74c3c] p-4 border border-[#e74c3c33] bg-[#e74c3c0a] overflow-hidden"
                >
                  Error al enviar. Intenta de nuevo o escríbeme directamente.
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === "sending"}
              data-hover
              className="inline-block font-body text-[12px] tracking-[4px] py-5 px-10 bg-fg text-bg border border-fg transition-all duration-500 ease-custom self-start hover:bg-transparent hover:text-fg active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed md:w-full md:py-4 md:text-[11px]"
            >
              {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
