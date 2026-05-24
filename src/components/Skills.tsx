"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function Skills() {
  const languages = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" }
  ];

  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
    { name: "Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00" }
  ];

  const capabilities = [
    "Object-Oriented Programming (OOP) ⚡",
    "Data Structures & Algorithms 🧠",
    "Database Management 🗄️",
    "Responsive Web Design 📱",
    "Problem Solving & Logical Thinking 💡",
    "Debugging & Error Handling 🐛",
    "Team Collaboration 🤝",
    "Agile Development Basics 🔄",
    "UI/UX Focus 🎨",
    "AI-Based Application Development 🤖",
    "Self-Learning & Adaptability 📈"
  ];

  // Duplicate for seamless infinite marquee scroll
  const duplicatedCapabilities = [...capabilities, ...capabilities];

  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-20 border-t border-white/10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center">
          Technical Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Languages */}
          <div className="p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h4 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">⌨️</span>
              Languages
            </h4>
            <div className="flex flex-wrap gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="flex flex-col items-center gap-3 group cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-y-2 group-hover:bg-white/10 group-hover:border-blue-500/50 group-hover:shadow-[0_10px_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={lang.icon} alt={lang.name} className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-blue-400 transition-colors">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h4 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">🛠️</span>
              Developer Tools
            </h4>
            <div className="flex flex-wrap gap-6">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-3 group cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-y-2 group-hover:bg-white/10 group-hover:border-emerald-500/50 group-hover:shadow-[0_10px_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tool.icon} alt={tool.name} className={`w-8 h-8 object-contain ${tool.invert ? 'invert' : ''}`} />
                  </div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-emerald-400 transition-colors">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee for Capabilities */}
        <div className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
          <h4 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">⚡</span>
            Core Capabilities
          </h4>
          
          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex whitespace-nowrap gap-4 shrink-0"
            >
              {duplicatedCapabilities.map((cap, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/10 text-gray-200 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-colors text-lg font-medium cursor-default"
                >
                  {cap}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
