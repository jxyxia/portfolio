import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothCursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
