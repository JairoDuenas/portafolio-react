import styled, { css } from "styled-components";
import { useInView } from "../../hooks/useInView";

const SKILLS = [
  {
    category: "FRONTEND",
    items: ["React", "Vue.js", "Next.js", "TypeScript", "CSS / Tailwind"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Python", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    category: "BASE DE DATOS",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Firebase"],
  },
  {
    category: "DEVOPS & TOOLS",
    items: ["Docker", "Git", "CI/CD", "Linux", "AWS / GCP"],
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView();

  return (
    <Section id="habilidades" ref={ref}>
      <Header $visible={inView}>
        <Label>03 — HABILIDADES</Label>
        <Title>
          STACK
          <br />
          <Outline>TÉCNICO</Outline>
        </Title>
      </Header>

      <Grid>
        {SKILLS.map((group, i) => (
          <Card key={group.category} $visible={inView} $delay={i * 0.08}>
            <Category>{group.category}</Category>
            <ItemList>
              {group.items.map((item) => (
                <SkillItem key={item} data-hover>
                  <Dot />
                  {item}
                </SkillItem>
              ))}
            </ItemList>
          </Card>
        ))}
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
  font-size: clamp(48px, 7vw, 92px);
  line-height: 0.95;
`;

const Outline = styled.span`
  -webkit-text-stroke: 1px var(--fg);
  color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
`;

const Card = styled.div`
  background: var(--bg);
  padding: 36px 28px;
  opacity: 0;
  transform: translateY(20px);
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

  &:hover {
    background: #0e0e0e;
  }
`;

const Category = styled.h4`
  font-size: 9px;
  letter-spacing: 4px;
  color: var(--dim);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SkillItem = styled.li`
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition:
    gap 0.2s,
    color 0.2s;

  &:hover {
    gap: 14px;
  }
`;

const Dot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--dim);
  flex-shrink: 0;
`;
