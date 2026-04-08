import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../organismos/Navbar";
import { Footer } from "../organismos/Footer";
import { Cursor } from "../organismos/Cursor";
import { HeroSection } from "../organismos/HeroSection";
import { AboutSection } from "../organismos/AboutSection";
import { ProjectsSection } from "../organismos/ProjectsSection";
import { SkillsSection } from "../organismos/SkillsSection";
import { ContactSection } from "../organismos/ContactSection";

export function HomeTemplate() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            data-hover
            className="fixed bottom-6 right-6 w-11 h-11 bg-fg text-bg rounded-full flex items-center justify-center text-xl z-[100] shadow-2xl transition-transform duration-300 hover:-translate-y-1 md:bottom-10 md:right-10 md:w-[50px] md:h-[50px]"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
