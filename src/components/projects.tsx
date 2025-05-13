"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and AI.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, licenses, and supports software, electronics, and services.",
    link: "https://microsoft.com",
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
