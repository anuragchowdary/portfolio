"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 0%: center text
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // 30%: left text
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // 60%: right text
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [50, -50]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section 1: Center */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center flex flex-col items-center justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
            CH Anurag Chowdary
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mt-4 tracking-wide font-light">
            Software Engineer
          </p>
        </motion.div>

        {/* Section 2: Left */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-10 md:left-32 max-w-lg"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-xl">
            Specializing in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Java & Frontend.</span>
          </h2>
        </motion.div>

        {/* Section 3: Right */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-10 md:right-32 max-w-lg text-right"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-xl">
            Building scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI-driven solutions.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
