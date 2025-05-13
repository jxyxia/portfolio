"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Pehenawa - Dress Rental Platform",
    description:
      "A stylish and scalable dress rental web app for fashion lovers, built with a visually appealing frontend and efficient backend.",
    link: "https://your-pehenawa-link.com",
  },
  {
    title: "Food Waste Analytics & Prediction System",
    description:
      "A data-driven system that analyzes and predicts food wastage patterns using machine learning and visual insights.",
    link: "https://your-food-waste-project-link.com",
  },
  {
    title: "My Portfolio",
    description:
      "A personal portfolio showcasing my skills, projects, and journey as a fullstack developer with a focus on clean UI and performance.",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "SplitEase",
    description:
      "A smart expense and budget sharing app that helps groups manage shared expenses transparently and efficiently.",
    link: "https://your-splitease-link.com",
  },
  {
    title: "C.A.R.E (Crisis Assistance and Response Engine)",
    description:
      "A platform designed to offer assistance and coordination during crises using AI-driven decision support and fast response systems.",
    link: "https://your-care-project-link.com",
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
            A selection of my favorite companies and their innovations across
            tech and business domains.
          </p>
        </motion.div>

        {/* HoverEffect component integration */}
        <div className="w-full">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
