import { useState } from "react";
import styled, { css } from "styled-components";
import { useInView } from "../../hooks/useInView";

export function ContactSection() {
  const [ref, inView] = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

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
            <ContactLink href="mailto:alex@ramirez.dev" data-hover>
              alex@ramirez.dev
            </ContactLink>
            <ContactLink
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              data-hover
            >
              github.com/alexramirez
            </ContactLink>
            <ContactLink
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              data-hover
            >
              linkedin.com/in/alexramirez
            </ContactLink>
          </ContactLinks>
        </Info>

        <FormWrap $visible={inView}>
          {sent ? (
            <Success>
              <SuccessIcon>✓</SuccessIcon>
              <p>¡Mensaje enviado! Te respondo pronto.</p>
            </Success>
          ) : (
            <Form onSubmit={submit}>
              <FormGroup>
                <Input
                  required
                  name="name"
                  placeholder="TU NOMBRE"
                  value={form.name}
                  onChange={handle}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="TU EMAIL"
                  value={form.email}
                  onChange={handle}
                />
              </FormGroup>
              <FormGroup>
                <Textarea
                  required
                  name="message"
                  placeholder="CUÉNTAME TU PROYECTO..."
                  rows={5}
                  value={form.message}
                  onChange={handle}
                />
              </FormGroup>
              <SubmitBtn type="submit" data-hover>
                ENVIAR MENSAJE
              </SubmitBtn>
            </Form>
          )}
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FormGroup = styled.div``;

const inputStyles = css`
  width: 100%;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 2px;
  padding: 14px 18px;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: var(--dim);
  }
  &:focus {
    border-color: var(--fg);
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Textarea = styled.textarea`
  ${inputStyles}
  resize: none;
  min-height: 110px;
`;

const SubmitBtn = styled.button`
  display: inline-block;
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 3px;
  padding: 14px 32px;
  background: var(--fg);
  color: var(--bg);
  border: 1px solid var(--fg);
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.15s;
  align-self: flex-start;

  &:hover {
    background: transparent;
    color: var(--fg);
  }
  &:active {
    transform: scale(0.97);
  }
`;

const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 72px 40px;
  border: 1px solid var(--border);
  text-align: center;
  color: #555;
  letter-spacing: 2px;
  font-size: 11px;
`;

const SuccessIcon = styled.span`
  font-family: var(--font-display);
  font-size: 52px;
  color: var(--fg);
`;
