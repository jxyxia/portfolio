import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 md:px-8 border-t border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="text-sm text-muted-foreground text-center">
          © {currentYear} Jayesh Wakode. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
