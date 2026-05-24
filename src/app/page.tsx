import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Aurora from "@/components/Aurora";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black w-full">
      <Aurora />
      {/* 500vh container for the scroll sequence */}
      <div className="relative h-[500vh] w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      {/* Dynamic Content Sections */}
      <About />
      <Skills />
      <Projects />
      <Certifications />
      
      {/* Simple Footer */}
      <footer className="w-full bg-black py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} CH Anurag Chowdary. Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
