import styled from "styled-components";
import { Navbar } from "../organismos/Navbar";
import { Footer } from "../organismos/Footer";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Cursor } from "../organismos/Cursor";
import { HeroSection } from "../organismos/HeroSection";
import { ProjectsSection } from "../organismos/ProjectsSection";
import { SkillsSection } from "../organismos/SkillsSection";
import { ContactSection } from "../organismos/ContactSection";

export function HomeTemplate() {
  return (
    <>
      <GlobalStyles />
      <Cursor />
      <Navbar />
      <Container>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
`;
