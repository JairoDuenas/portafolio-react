export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-max px-6 py-10 flex flex-col items-start gap-8 text-[11px] tracking-[3px] text-[#555] md:px-16 md:py-12 md:flex-row md:items-center md:justify-between md:gap-0 uppercase">
        <div className="flex flex-col gap-2">
          <span className="text-fg font-medium">JAIRO DUEÑAS</span>
          <span>
            © {new Date().getFullYear()} — TODOS LOS DERECHOS RESERVADOS
          </span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-dim/60 mb-1">TECNOLOGÍAS</span>
            <span>REACT + VITE + TAILWIND</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-dim/60 mb-1">UBICACIÓN</span>
            <span className="text-fg/40">BOGOTÁ, COLOMBIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
