import { useState } from "react";
import styled, { css } from "styled-components";
import { useInView } from "../../hooks/useInView";
import githubIcon from "../../assets/icons/github-logo.svg";
import vercelIcon from "../../assets/icons/vercel-logo.svg";

const PROJECTS = [
  {
    id: "01",
    title: "Control de Gastos",
    tags: ["React + Vite", "Supabase", "Chart.JS"],
    desc: "Aplicación web para gestión de finanzas, gráficos en tiempo real de los ingresos y gastos de cada mes.",
    year: "2026",

    links: [
      {
        href: "https://github.com/JairoDuenas/control_gastos-React-Vite",
        icon: githubIcon,
        title: "Ver código en GitHub",
      },
      {
        href: "https://jairo-control-gastos.vercel.app/",
        icon: vercelIcon,
        title: "Ver proyecto en Vercel",
      },
    ],
  },
  {
    id: "02",
    title: "Task Management App",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    desc: "App de gestión de tareas con colaboración en tiempo real, notificaciones push y soporte offline.",
    year: "2024",
    links: [],
  },
  {
    id: "03",
    title: "API REST Microservices",
    tags: ["Python", "FastAPI", "Docker"],
    desc: "Arquitectura de microservicios para sistema bancario con autenticación JWT y monitoreo centralizado.",
    year: "2023",
    links: [],
  },
  {
    id: "04",
    title: "Data Dashboard",
    tags: ["Next.js", "D3.js", "Prisma"],
    desc: "Dashboard analítico con visualizaciones interactivas, exportación de reportes y acceso por roles.",
    year: "2023",
    links: [],
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <Section id="proyectos" ref={ref}>
      <Header $visible={inView}>
        <Label>02 — PROYECTOS</Label>
        <Title>
          TRABAJO
          <br />
          <Outline>SELECCIONADO</Outline>
        </Title>
      </Header>

      <List>
        {PROJECTS.map((p, i) => (
          <Item
            key={p.id}
            $visible={inView}
            $hovered={hovered === i}
            $delay={i * 0.08}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            data-hover
          >
            <Num $hovered={hovered === i}>{p.id}</Num>
            <Main>
              <ProjectTitle $hovered={hovered === i}>{p.title}</ProjectTitle>
              <ProjectDesc>{p.desc}</ProjectDesc>
              <Tags>
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </Tags>
            </Main>
            <Meta>
              <Year>{p.year}</Year>
              <Links>
                {p.links.map((link, j) => (
                  <IconLink
                    key={j}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    title={link.title}
                  >
                    <img src={link.icon} alt={link.title} />
                  </IconLink>
                ))}
              </Links>
            </Meta>
          </Item>
        ))}
      </List>
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
  font-size: 14px;
  letter-spacing: 4px;
  color: var(--dim);
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(48px, 7vw, 92px);
  line-height: 0.95;
`;

const Outline = styled.span`
  -webkit-text-stroke: 1px var(--fg);
  color: transparent;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr auto;
  align-items: start;
  gap: 28px;
  padding: 36px 20px;
  border-bottom: 1px solid var(--border);
  margin: 0 -20px;
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.5s ${({ $delay }) => $delay}s,
    transform 0.5s ${({ $delay }) => $delay}s,
    background 0.2s;

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  ${({ $hovered }) =>
    $hovered &&
    css`
      background: #111;
    `}

  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr;
    gap: 16px;
  }
`;

const Num = styled.span`
  font-family: var(--font-display);
  font-size: 36px;
  line-height: 1;
  color: ${({ $hovered }) => ($hovered ? "var(--dim)" : "var(--border)")};
  transition: color 0.2s;
`;

const Main = styled.div``;

const ProjectTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 28px;
  letter-spacing: ${({ $hovered }) => ($hovered ? "3px" : "1px")};
  margin-bottom: 10px;
  transition: letter-spacing 0.3s;
`;

const ProjectDesc = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  max-width: 550px;
  margin-bottom: 14px;
`;

const Tags = styled.div`
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  padding: 4px 10px;
  border: 1px solid var(--border);
  color: var(--dim);
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  padding-top: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Year = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  color: var(--dim);
`;

const Arrow = styled.svg`
  width: 20px;
  height: 20px;
  color: var(--dim);
  transform: ${({ $hovered }) => ($hovered ? "translate(2px, -2px)" : "none")};
  transition:
    transform 0.2s,
    color 0.2s;
  ${({ $hovered }) =>
    $hovered &&
    css`
      color: var(--fg);
    `}
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  transition:
    transform 0.2s,
    opacity 0.2s;
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    //background: #777;
    border-radius: 50%;
  }

  &:hover {
    transform: translate(1px, -1px);
    opacity: 1;
  }
`;
