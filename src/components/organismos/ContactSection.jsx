import styled, { css } from "styled-components";
import { useInView } from "../../hooks/useInView";
import { ContactForm } from "../../form/ContactForm";

export function ContactSection() {
  const [ref, inView] = useInView();

  return (
    <Section id="contacto" ref={ref}>
      <Header $visible={inView}>
        <Label>04 — CONTACTO</Label>
        <Title>
          HABLEMOS
          <br />
          <Outline>¿TIENES UN PROYECTO?</Outline>
        </Title>
      </Header>

      <Grid>
        <Info $visible={inView}>
          <Blurb>
            Disponible para proyectos freelance y posiciones full-time.
            <br />
            Respondo en menos de 24 horas.
          </Blurb>
          <ContactLinks>
            <ContactLink href="mailto:jairo_251180@hotmail.com" data-hover>
              jairo_251180@hotmail.com
            </ContactLink>
            <ContactLink
              href="https://github.com/jairoDuenas"
              target="_blank"
              rel="noreferrer"
              data-hover
            >
              github.com/jairodv
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/jairodue%C3%B1as/"
              target="_blank"
              rel="noreferrer"
              data-hover
            >
              linkedin.com/in/jairodv
            </ContactLink>
          </ContactLinks>
        </Info>

        <FormWrap $visible={inView}>
          <ContactForm />
        </FormWrap>
      </Grid>
    </Section>
  );
}

/* ── styled ── */
const Section = styled.section`
  padding: 120px 60px;
  border-top: 1px solid var(--border);
  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

const Header = styled.div`
  margin-bottom: 80px;
  & > * {
    opacity: 0;
    transform: translateY(16px);
    transition:
      opacity 0.5s,
      transform 0.5s;
  }
  ${({ $visible }) =>
    $visible &&
    css`
      & > * {
        opacity: 1;
        transform: translateY(0);
      }
      & > *:nth-child(2) {
        transition-delay: 0.1s;
      }
    `}
  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

const Label = styled.span`
  display: block;
  font-size: 9px;
  letter-spacing: 4px;
  color: var(--dim);
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 84px);
  line-height: 0.95;
`;

const Outline = styled.span`
  -webkit-text-stroke: 1px var(--fg);
  color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Info = styled.div`
  opacity: 0;
  transform: translateX(-16px);
  transition:
    opacity 0.6s,
    transform 0.6s;
  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

const Blurb = styled.p`
  font-size: 14px;
  line-height: 1.9;
  color: #666;
  margin-bottom: 48px;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactLink = styled.a`
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--dim);
  display: flex;
  align-items: center;
  gap: 10px;
  transition:
    color 0.2s,
    gap 0.2s;
  &::before {
    content: "→";
    font-size: 11px;
    transition: transform 0.2s;
  }
  &:hover {
    color: var(--fg);
    gap: 14px;
  }
  &:hover::before {
    transform: translateX(4px);
  }
`;

const FormWrap = styled.div`
  opacity: 0;
  transform: translateX(16px);
  transition:
    opacity 0.6s 0.2s,
    transform 0.6s 0.2s;
  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;
