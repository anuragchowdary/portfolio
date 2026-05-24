"use client";

import React from 'react';
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function About() {
  return (
    <section className="relative z-20 w-full py-32 px-6 md:px-20 border-t border-white/10 overflow-hidden">
      
      {/* Floating abstract accents */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full border-dashed opacity-50 hidden md:block" 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Left Column: Bio & Contact */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            About Me
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
            Hi, I&apos;m <span className="text-emerald-400 font-semibold drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">CH Anurag Chowdary</span>, a Computer Science Engineering graduate passionate about building practical and user-focused software applications. I specialize in Java development, Data Structures & Algorithms, and SQL, with hands-on experience in creating responsive web applications and academic software projects.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light">
            I enjoy solving problems, learning new technologies, and developing clean, scalable applications. My recent work includes an AI Resume Analyzer built using Java, Spring Boot, and the OpenAI API. I&apos;m currently looking for opportunities to grow as a Software Engineer and contribute to innovative development teams.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <MagneticButton>
              <a 
                href="mailto:chintamanenianuragchowdary@gmail.com"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer block"
              >
                Email Me
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a 
                href="https://www.linkedin.com/in/anuarg-chowdary-3bb52728b"
                target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer block"
              >
                LinkedIn
              </a>
            </MagneticButton>

            <MagneticButton>
              <a 
                href="https://github.com/anuragchowdary"
                target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-full bg-gray-800/50 border border-gray-600/30 text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer block"
              >
                GitHub
              </a>
            </MagneticButton>

            <MagneticButton>
              <a 
                href="/resume.pdf"
                target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 cursor-pointer block"
              >
                Download Resume
              </a>
            </MagneticButton>
          </div>
          
          <div className="flex items-center gap-3 text-gray-400 bg-black/20 w-max px-4 py-2 rounded-full border border-white/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium">Tirupati, Andhra Pradesh</span>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="relative mt-12 lg:mt-0">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Education
          </h3>
          
          {/* Glowing vertical line */}
          <div className="absolute left-[19px] top-[80px] bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent opacity-50" />
          
          <div className="space-y-10">
            
            {/* BTech */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="relative flex items-start group cursor-default"
            >
              <div className="absolute left-0 mt-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform z-10">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-16 p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md group-hover:border-emerald-500/30 transition-colors w-full shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">B.Tech in Computer Science</div>
                  <time className="text-sm font-medium text-emerald-400/80 bg-emerald-500/10 px-3 py-1 rounded-full w-max mt-2 sm:mt-0">2022 - 2026</time>
                </div>
                <div className="text-gray-400 font-medium">Mohan Babu University</div>
                <div className="text-gray-300 mt-4 text-sm bg-white/5 inline-block px-3 py-1 rounded-md border border-white/5">CGPA: <span className="text-white font-bold">8.84</span></div>
              </div>
            </motion.div>

            {/* 12th */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="relative flex items-start group cursor-default"
            >
              <div className="absolute left-0 mt-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform z-10">
                <div className="w-2.5 h-2.5 bg-blue-400 rounded-full"></div>
              </div>
              <div className="ml-16 p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md group-hover:border-blue-500/30 transition-colors w-full shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">12th Class (MPC)</div>
                  <time className="text-sm font-medium text-blue-400/80 bg-blue-500/10 px-3 py-1 rounded-full w-max mt-2 sm:mt-0">2022</time>
                </div>
                <div className="text-gray-400 font-medium">Sri Chaitanya Junior College</div>
                <div className="text-gray-500 text-sm mt-1">Board of Intermediate Education AP</div>
                <div className="text-gray-300 mt-4 text-sm bg-white/5 inline-block px-3 py-1 rounded-md border border-white/5">Percentage: <span className="text-white font-bold">54.2%</span></div>
              </div>
            </motion.div>

            {/* 10th */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="relative flex items-start group cursor-default"
            >
              <div className="absolute left-0 mt-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-gray-600 group-hover:border-gray-400 group-hover:scale-110 transition-all z-10">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
              <div className="ml-16 p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md group-hover:border-gray-500/30 transition-colors w-full shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">10th Class (CBSE)</div>
                  <time className="text-sm font-medium text-gray-400/80 bg-gray-500/10 px-3 py-1 rounded-full w-max mt-2 sm:mt-0">2020</time>
                </div>
                <div className="text-gray-400 font-medium">Sree Vidyanikethan International School</div>
                <div className="text-gray-300 mt-4 text-sm bg-white/5 inline-block px-3 py-1 rounded-md border border-white/5">Percentage: <span className="text-white font-bold">60.1%</span></div>
              </div>
            </motion.div>

          </div>
        </div>

        </div>
      </motion.div>
    </section>
  );
}
