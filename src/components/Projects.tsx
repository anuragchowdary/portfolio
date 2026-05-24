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
        className="max-w-5xl mx-auto relative z-10"
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white/90">
          Featured Project
        </h3>

        <div className="rounded-[24px] bg-[#101217]/80 backdrop-blur-md border border-white/5 p-8 md:p-12 shadow-2xl w-full">
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <h4 className="text-3xl font-bold text-white">
              AI Resume Analyzer
            </h4>
            <span className="px-4 py-1 rounded-full bg-[#0a2e21] text-[#2dd4bf] text-sm font-medium w-max">
              Java • Spring Boot
            </span>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-8 text-[1.05rem]">
            An AI-driven resume matching system that analyzes resumes against job descriptions, generating match scores, skill alignment, and improvement suggestions. Built with a robust MVC architecture and fallback heuristics.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="text-[#3b82f6] mr-4 mt-1.5 text-xs">▶</span>
              <span className="text-gray-400">Integrated <strong className="text-gray-300 font-semibold">OpenAI API</strong> and <strong className="text-gray-300 font-semibold">Apache Tika</strong> to automate semantic analysis and multi-format file parsing (PDF/DOC/TXT).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#3b82f6] mr-4 mt-1.5 text-xs">▶</span>
              <span className="text-gray-400">Designed a modern UI with visual scoring, matched skill indicators, and fallback heuristic logic for offline or no-quota scenarios.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#3b82f6] mr-4 mt-1.5 text-xs">▶</span>
              <span className="text-gray-400">Implemented modular MVC architecture with clean separation between parsing, AI processing, and UI layers for scalability.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#3b82f6] mr-4 mt-1.5 text-xs">▶</span>
              <span className="text-gray-400">Ensured robust error handling with automated API failover, allowing uninterrupted usage even during connectivity drops.</span>
            </li>
          </ul>
          
        </div>
      </motion.div>
    </section>
  );
}
