import cn from "classnames";
import { Container } from "../components/ui/Container";
import { useGetProjects } from "../hooks/useGetProjects";
import { useEffect } from "react";
import type { ProjectType } from "../types/Project.types";
import { Separator } from "../components/ui/Separator";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectSkeleton } from "../components/ui/ProjectSkeleton";
import { Title } from "../components/ui/Title";

import { motion } from "framer-motion";

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 60 },
  },
};

interface ProjectsProps {
  className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
  const { getProjects, projects } = useGetProjects();

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className={cn(className, "")} id="projects">
      <Container>
        <div className="mb-20 max-md:mb-10 max-xs:mb-5">
          <Title>Featured Projects</Title>
          <p className="text-[18px] text-color-text-secondary max-md:text-[14px] max-md:mb-5">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
        </div>
        <motion.div
          className="grid gap-[120px] max-md:gap-[60px] max-xs:gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {projects.length === 0 ? (
            <ProjectSkeleton />
          ) : (
            projects.map((project: ProjectType) => {
              const projectInfo = [
                { name: "Year", value: project.year },
                { name: "Role", value: project.role },
                { name: "Stack/Technologies", value: project.technologies },
              ];
              return (
                <motion.div
                  className="flex justify-between items-center gap-[48px] max-md:gap-5 max-md:flex-col"
                  key={project.id}
                  variants={itemVariants}
                >
                  <div className="w-[49%] bg-[--bg-secondary] rounded-[12px] px-5 py-[127px] grid place-content-center max-md:w-full max-md:p-5 overflow-hidden">
                    <img className="rounded-[12px] max-h-[450px]" src={project.image_url} alt={project.title} />
                  </div>
                  <div className="text-left flex-1 max-md:w-full">
                    <h3 className="font-medium text-[32px] mb-4">{project.title}</h3>
                    <p className="font-medium text-[18px] text-color-text-secondary mb-[32px]">{project.description}</p>
                    {projectInfo.map((item, idx) => (
                      <div key={item.name + idx}>
                        <div className="flex justify-between items-center flex-wrap gap-4">
                          <p>{item.name}</p>
                          <p className="text-color-text-secondary">{item.value}</p>
                        </div>
                        <Separator className="my-4" />
                      </div>
                    ))}
                    <div className="flex gap-6">
                      <a
                        href={project.demo_url}
                        target="_blank"
                        className="uppercase flex items-center gap-[7px] text-color-primary"
                        rel="noopener noreferrer"
                      >
                        live demo
                        <ArrowUpRight size={20} color="#D3E97A" />
                      </a>
                      <a
                        href={project.repo_url}
                        target="_blank"
                        className="uppercase flex items-center gap-[7px] text-color-primary"
                        rel="noopener noreferrer"
                      >
                        see on github
                        <Github size={20} color="#D3E97A" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>
      </Container>
    </section>
  );
};
