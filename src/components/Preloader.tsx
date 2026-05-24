"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = ""; // restore scroll
          }, 400); // Small pause at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black text-white"
      animate={{ 
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none"
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-sm tracking-[0.5em] text-gray-400 mb-6 uppercase font-light">Loading Experience</div>
      <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
        {progress > 100 ? 100 : progress}%
      </div>
      <div className="w-64 h-[2px] bg-white/10 mt-10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" 
          animate={{ width: `${progress > 100 ? 100 : progress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
}
