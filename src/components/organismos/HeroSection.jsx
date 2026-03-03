import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { Noise } from "../organismos/Noise";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <Section id="inicio">
      <Noise opacity={0.035} />
      <Content $visible={loaded}>
        <AvatarWrap>
          <Avatar src="/foto.png" alt="Jairo Dueñas" />
          <AvatarRing />
        </AvatarWrap>
        <Eyebrow>DESARROLLADOR DE SOFTWARE</Eyebrow>
        <Title>
          <TitleLine>HOLA,</TitleLine>
          <TitleLine $outline>SOY Jairo</TitleLine>
          <TitleLine>Dueñas.</TitleLine>
        </Title>
        <Description>
          Construyo productos digitales que resuelven problemas reales.
          <br />
          Full-stack con foco en experiencias rápidas, escalables y precisas.
        </Description>
        <Actions>
          <BtnPrimary href="#proyectos" data-hover>
            VER PROYECTOS
          </BtnPrimary>
          <BtnGhost href="#contacto" data-hover>
            CONTACTO
          </BtnGhost>
        </Actions>
      </Content>

      <Stats $visible={loaded}>
        <Stat>
          <StatNum>4+</StatNum>
          <StatLabel>AÑOS EXP.</StatLabel>
        </Stat>
        <StatDivider />
        <Stat>
          <StatNum>30+</StatNum>
          <StatLabel>PROYECTOS</StatLabel>
        </Stat>
        <StatDivider />
        <Stat>
          <StatNum>15+</StatNum>
          <StatLabel>CLIENTES</StatLabel>
        </Stat>
      </Stats>

      <ScrollHint>
        <span>SCROLL</span>
        <ScrollLine />
      </ScrollHint>
    </Section>
  );
}

/* ── animations ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scrollAnim = keyframes`
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50%       { opacity: 0.2; }
`;

const ringAnim = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

/* ── styled ── */
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px 60px 80px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 120px 24px 60px;
  }
`;

const Content = styled.div`
  max-width: 920px;
  opacity: 0;
  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${fadeUp} 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}
`;

const AvatarWrap = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  display: block;
  position: relative;
  z-index: 1;
  filter: grayscale(20%);
`;

const AvatarRing = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  border-top-color: var(--fg);
  border-right-color: var(--dim);
  animation: ${ringAnim} 6s linear infinite;
`;

const Eyebrow = styled.p`
  font-size: 15px;
  letter-spacing: 5px;
  color: var(--dim);
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(72px, 12vw, 156px);
  line-height: 0.91;
  letter-spacing: -1px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 10px;
`;

const TitleLine = styled.span`
  display: block;
  ${({ $outline }) =>
    $outline &&
    css`
      -webkit-text-stroke: 1.5px var(--fg);
      color: transparent;
    `}
`;

const Description = styled.p`
  font-size: 17px;
  color: #777;
  max-width: 460px;
  line-height: 1.9;
  margin-bottom: 48px;
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const BtnBase = styled.a`
  display: inline-block;
  font-family: var(--font-body);
  font-size: 13px;
  letter-spacing: 3px;
  padding: 14px 32px;
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.15s;
  &:active {
    transform: scale(0.97);
  }
`;

const BtnPrimary = styled(BtnBase)`
  background: var(--fg);
  color: var(--bg);
  border: 1px solid var(--fg);
  &:hover {
    background: transparent;
    color: var(--fg);
  }
`;

const BtnGhost = styled(BtnBase)`
  background: transparent;
  color: var(--fg);
  border: 1px solid var(--border);
  &:hover {
    border-color: var(--fg);
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
  opacity: 0;
  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${fadeUp} 0.8s 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `}

  @media (max-width: 768px) {
    gap: 24px;
    margin-top: 48px;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatNum = styled.span`
  font-family: var(--font-display);
  font-size: 58px;
  line-height: 1;
`;
const StatLabel = styled.span`
  font-size: 13px;
  letter-spacing: 3px;
  color: var(--dim);
`;

const StatDivider = styled.div`
  width: 1px;
  height: 44px;
  background: var(--border);
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 40px;
  right: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  letter-spacing: 3px;
  color: #777;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 56px;
  background: linear-gradient(to bottom, var(--dim), transparent);
  transform-origin: top;
  animation: ${scrollAnim} 2.2s ease-in-out infinite;
`;
