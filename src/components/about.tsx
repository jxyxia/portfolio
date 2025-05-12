"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "/images/profile.jpg";

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Java",
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 flex items-center">
            <span className="text-[hsl(var(--accent))] mr-2">/</span> about me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <p className="text-lg mb-6">
              I am currently a{" "}
              <span className="text-[hsl(var(--accent))]">Computer Science student</span> at{" "}
              <span className="text-[hsl(var(--accent))]">MGM College of Engineering</span>, aspiring to become a skilled{" "}
              <span className="text-[hsl(var(--accent))]">AI/ML Engineer</span> and{" "}
              <span className="text-[hsl(var(--accent))]">Full-Stack Developer</span>. I’ve contributed to{" "}
              <span className="text-[hsl(var(--accent))]">GDSC MGM</span> as a core team member, leading technical initiatives like the{" "}
              <span className="text-[hsl(var(--accent))]">Language Fusion Challenge</span>. My work focuses on building smart, scalable, and real-world software solutions that make a difference.
            </p>

            <p className="text-muted-foreground mb-8">
              My approach combines technical expertise with an eye for design, allowing me to build solutions that are not only functional but also aesthetically pleasing and user-friendly.
            </p>

            <h4 className="text-xl font-medium mb-4">
              Technologies I've been working with:
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="text-[hsl(var(--accent))] mr-2">▹</span>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground">
              Outside of academics, I enjoy{" "}
              <span className="text-[hsl(var(--accent))]">writing songs</span>, exploring{" "}
              <span className="text-[hsl(var(--accent))]">creative ideas</span>, and expressing them through{" "}
              <span className="text-[hsl(var(--accent))]">code and music</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg border-2 border-accent/20 hover:border-accent/50 transition-all duration-300">
              {/* Updated to use local image */}
              <Image
                src={profileImg}  // Update this to match your local image path
                alt="Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="absolute -inset-2 border-2 border-accent/20 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
