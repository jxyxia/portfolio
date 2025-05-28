"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks = [
  {
    name: "Email",
    href: "mailto:jayesh.workarchive@gmail.com",
    icon: Mail,
    ariaLabel: "Send email to Jayesh",
    isExternal: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jayesh0735",
    icon: Linkedin,
    ariaLabel: "Visit Jayesh LinkedIn profile",
    isExternal: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/jxyxia",
    icon: Github,
    ariaLabel: "Visit Jayesh GitHub profile",
    isExternal: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/jxycli", // Replace with your actual Twitter handle
    icon: Twitter,
    ariaLabel: "Visit Jayesh Twitter profile",
    isExternal: true,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("green");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage("❌ Please fill in all required fields.");
      setMessageColor("red");
      setIsSubmitting(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setResponseMessage("❌ Please enter a valid email address.");
      setMessageColor("red");
      setIsSubmitting(false);
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("subject", formData.subject);
      formPayload.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/xeognenj", {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setResponseMessage("✅ Your message has been sent!");
        setMessageColor("green");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setResponseMessage(
          data?.errors?.[0]?.message || "❌ Submission failed."
        );
        setMessageColor("red");
      }
    } catch (error) {
      setResponseMessage("❌ Network error. Try again later.");
      setMessageColor("red");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Contact Form Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>

            {responseMessage && (
              <div
                className={`mb-4 p-3 rounded-md ${
                  messageColor === "green"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {responseMessage}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="bg-secondary/20 border-border/50 focus:border-primary"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-secondary/20 border-border/50 focus:border-primary"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="bg-secondary/20 border-border/50 focus:border-primary"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-secondary/20 border-border/50 focus:border-primary resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <AnimatedSubscribeButton
                type="submit"
                className="w-full"
                data-state={isSubmitting ? "loading" : "idle"}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <span>Sent</span>
              </AnimatedSubscribeButton>
            </form>
          </motion.div>

          {/* Social Connect Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the platforms below.
            </p>

            <div className="space-y-6 mb-12">
              {socialLinks.map(
                ({ name, href, icon: Icon, ariaLabel, isExternal }) => (
                  <div key={name} className="flex items-center gap-4">
                    <Icon className="text-muted-foreground" size={24} />
                    <a
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-foreground transition-colors break-all"
                      aria-label={ariaLabel}
                    >
                      {name === "Email"
                        ? "jayesh.workarchive@gmail.com"
                        : href.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )
              )}
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Let's Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map(
                  ({ name, href, icon: Icon, ariaLabel, isExternal }) => (
                    <Link
                      key={name}
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="bg-secondary/50 hover:bg-secondary p-3 rounded-full transition-colors"
                      aria-label={ariaLabel}
                    >
                      <Icon size={20} />
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
