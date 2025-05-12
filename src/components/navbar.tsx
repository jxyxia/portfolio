"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-8 md:px-16 py-4 flex justify-between items-center bg-[#0a192f]">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Jay
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="mailto:jayesh.workarchive@gmail.com"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Mail size={18} />
          </motion.div>
        </Link>
        <Link
          href="https://github.com/jxyxia"
          target="_blank"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Github size={18} />
          </motion.div>
        </Link>
        <Link
          href="https://linkedin.com/jayesh0735"
          target="_blank"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Linkedin size={18} />
          </motion.div>
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 left-0 right-0 bg-[#0a192f] border-b border-border py-4 px-8 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            <NavLinks mobile setIsOpen={setIsOpen} />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false, setIsOpen = () => {} }) => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => mobile && setIsOpen(false)}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
