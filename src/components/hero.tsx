"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FlipWords } from "./ui/flip-words"; 

const Hero = () => {
  const words = ["fullstack", "efficient", "scalable", "beautiful"]; 

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

        
        <div className="text-xl mt-7 text-neutral-600 dark:text-neutral-400">
          Learning and building <FlipWords words={words} /> projects every day.
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
