"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A minimalist portfolio website built with Next.js and Tailwind CSS, featuring a dark theme and Apple-inspired design language.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/username/portfolio",
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with a sleek user interface, product filtering, and secure checkout process.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["React", "Node.js", "Stripe"],
    github: "https://github.com/username/ecommerce",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and deadlines with a clean, intuitive interface.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/username/task-manager",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 flex items-center">
            <span className="text-[hsl(var(--accent))] mr-2">/</span> projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work, showcasing my skills in design and
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-card rounded-lg overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
    >
      <div className="p-1 bg-secondary/30">
        <div className="flex justify-between items-center px-4 py-3">
          <Folder className="text-accent" size={24} />
          <div className="flex gap-4">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
