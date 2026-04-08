import { PROJECTS } from "../../constants/data";
import { SectionHeading } from "../atoms/SectionHeading";
import { ProjectCard } from "../molecules/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section-padding border-t border-border">
      <div className="container-max">
        <SectionHeading
          label="02 — PROYECTOS"
          title="TRABAJO"
          outline="SELECCIONADO"
        />

        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
