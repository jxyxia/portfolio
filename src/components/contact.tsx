"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { RippleButton } from "@/components/magicui/ripple-button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out through the form below or connect with me on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-secondary/20 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-secondary/20 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-secondary/20 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-secondary/20 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <RippleButton type="submit" className="w-full">
                Send Message
              </RippleButton>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any of the platforms below.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-muted-foreground" size={20} />
                  <a
                    href="mailto:jayesh.workarchive@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    jayesh.workarchive@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="text-muted-foreground" size={20} />
                  <a
                    href="https://linkedin.com/in/jayesh0735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    linkedin.com/in/jayesh0735
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="text-muted-foreground" size={20} />
                  <a
                    href="https://github.com/jxyxia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    github.com/jxyxia
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Twitter className="text-muted-foreground" size={20} />
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    twitter.com/
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/50">
              <h4 className="text-lg font-medium mb-4">Let's Connect</h4>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/jxyxia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 hover:bg-secondary p-3 rounded-full transition-colors"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://linkedin.com/in/jayesh0735"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 hover:bg-secondary p-3 rounded-full transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/50 hover:bg-secondary p-3 rounded-full transition-colors"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="mailto:jayesh.workarchive@gmail.com"
                  className="bg-secondary/50 hover:bg-secondary p-3 rounded-full transition-colors"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
