"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
          <span className="block">Hi,</span>
          <span className="inline-flex">
            <span className="text-[hsl(var(--accent))]">
              <TypeAnimation
                sequence={["Jayesh"]}
                wrapper="span"
                speed={10}
                repeat={0}
                cursor={false}
              />
            </span>
            <span className="px-1">&nbsp;</span>{" "}
            {/* <- real space between words */}
            <span>
              <TypeAnimation
                sequence={[550, "here."]}
                wrapper="span"
                speed={10}
                repeat={0}
                cursor={false}
              />
            </span>
            <span className="inline-block animate-blink">|</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I create elegant, functional digital experiences with a focus on
          minimalist design and seamless user interactions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-medium transition-colors border border-border/50"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="bg-transparent text-foreground hover:bg-secondary/20 px-6 py-3 rounded-md font-medium transition-colors border border-border/50"
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8"
      >
        <Link
          href="#projects"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </Link>
      </motion.div>

      {/* Background gradient - darker navy blue */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/10 opacity-20 blur-[100px]" />
      </div>
    </section>
  );
};

export default Hero;
