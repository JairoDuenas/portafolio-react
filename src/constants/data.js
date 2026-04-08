import githubIcon from "../assets/icons/github-logo.svg";
import vercelIcon from "../assets/icons/vercel-logo.svg";

export const PROJECTS = [
  {
    id: "01",
    title: "Control de Gastos",
    tags: ["React + Vite", "Supabase", "Chart.JS"],
    desc: "Aplicación web para gestión de finanzas, gráficos en tiempo real de los ingresos y gastos de cada mes.",
    year: "2026",
    links: [
      {
        href: "#inicio",
        icon: githubIcon,
        title: "Ver código en GitHub",
      },
      {
        href: "https://control-gastos-react-vite-one.vercel.app/login",
        icon: vercelIcon,
        title: "Ver proyecto en Vercel",
      },
    ],
  },
  {
    id: "02",
    title: "Pokédex personal",
    tags: ["React", "Vite", "Styled-component"],
    desc: "App de cards de pókemon, explora y filtra tus favoritos de la primera generación.",
    year: "2025",
    links: [
      {
        href: "#inicio",
        icon: githubIcon,
        title: "Ver código en GitHub",
      },
      {
        href: "https://react-pokemons-gamma.vercel.app/home",
        icon: vercelIcon,
        title: "Ver proyecto en Vercel",
      },
    ],
  },
  {
    id: "03",
    title: " Crear tareas App",
    tags: ["React", "Vite", "Styled-component"],
    desc: "App de gestión de tareas con colaboración en tiempo real.",
    year: "2025",
    links: [
      {
        href: "https://github.com/JairoDuenas/React-crear-tareas",
        icon: githubIcon,
        title: "Ver código en GitHub",
      },
      {
        href: "https://react-crear-tareas.vercel.app/",
        icon: vercelIcon,
        title: "Ver proyecto en Vercel",
      },
    ],
  },
  {
    id: "04",
    title: "PLANTPEDIA",
    tags: ["Next.JS", "Tailwind", "Vercel"],
    desc: "Enciclopedia de las plantas, descripción de las mejores plantas para el día de San Valentín.",
    year: "2024",
    links: [
      {
        href: "https://github.com/JairoDuenas/Next-optimizacion",
        icon: githubIcon,
        title: "Ver código en GitHub",
      },
      {
        href: "https://next-optimizacion.vercel.app/",
        icon: vercelIcon,
        title: "Ver proyecto en Vercel",
      },
    ],
  },
  {
    id: "05",
    title: "RECETAS MODERNAS",
    tags: ["React", "API MealDB", "Vite"],
    desc: "Encuentra las mejores recetas para deleitarse con nuevos sabores",
    year: "2023",
    links: [
      {
        href: "https://github.com/JairoDuenas/PWA-React-recetas",
        icon: githubIcon,
        title: "Ver código en GitHub",
      },
      {
        href: "https://react-recetas.vercel.app/",
        icon: vercelIcon,
        title: "Ver proyecto en Vercel",
      },
    ],
  },
];

export const SKILLS = [
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
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Supabase"],
  },
  {
    category: "DEVOPS & TOOLS",
    items: ["Docker", "Git", "CI/CD", "Linux", "AWS / GCP"],
  },
];
