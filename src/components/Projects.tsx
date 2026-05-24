"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-20 border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white/90">
          Featured Project
        </h3>
        
        <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors duration-500">
          
          {/* Subtle hover glow effect */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-10">
            
            {/* Project Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h4 className="text-3xl md:text-4xl font-bold text-white">AI Resume Analyzer</h4>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/30">
                  Java • Spring Boot
                </span>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                An AI-driven resume matching system that analyzes resumes against job descriptions, generating match scores, skill alignment, and improvement suggestions. Built with a robust MVC architecture and fallback heuristics.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span className="text-gray-400 leading-relaxed">
                    Integrated <strong>OpenAI API</strong> and <strong>Apache Tika</strong> to automate semantic analysis and multi-format file parsing (PDF/DOC/TXT).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span className="text-gray-400 leading-relaxed">
                    Designed a modern UI with visual scoring, matched skill indicators, and fallback heuristic logic for offline or no-quota scenarios.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span className="text-gray-400 leading-relaxed">
                    Implemented modular MVC architecture with clean separation between parsing, AI processing, and UI layers for scalability.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▹</span>
                  <span className="text-gray-400 leading-relaxed">
                    Ensured robust error handling with automated API failover, allowing uninterrupted usage even during connectivity drops.
                  </span>
                </li>
              </ul>

            </div>

          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
