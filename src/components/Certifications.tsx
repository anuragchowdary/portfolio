"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: "☁️",
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Talentio",
      icon: "🧩",
      color: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Programming using Java",
      issuer: "Infosys SpringBoard",
      icon: "☕",
      color: "from-amber-500/20 to-orange-500/10",
      borderColor: "border-amber-500/30",
    }
  ];

  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-20 border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white/90">
          Certifications & Awards
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border ${cert.borderColor} bg-gradient-to-br ${cert.color} backdrop-blur-md overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="text-4xl mb-6">{cert.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2 leading-snug">{cert.title}</h4>
              <p className="text-gray-400 text-sm font-medium">Certified by {cert.issuer}</p>
              
              {/* Decorative corner glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
