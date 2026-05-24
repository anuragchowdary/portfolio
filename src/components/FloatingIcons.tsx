"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const baseIcons = [
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" }
];

type IconData = {
  url: string;
  invert?: boolean;
  top: string;
  left: string;
  duration: number;
  delay: number;
  scale: number;
  xOffset: number;
  yOffset: number;
};

// Decentralized logic: Each icon handles its own independent random twinkle timer!
function IconParticle({ icon }: { icon: IconData }) {
  const [isTwinkling, setIsTwinkling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const triggerTwinkle = () => {
      setIsTwinkling(true);
      
      // The animation takes exactly 2.0s, so we hold the state for 2.0s
      setTimeout(() => {
        setIsTwinkling(false);
        // Schedule the next twinkle completely randomly between 10s and 40s later
        timeoutId = setTimeout(triggerTwinkle, Math.random() * 30000 + 10000);
      }, 2000);
    };

    // Initial random delay before first twinkle (0 to 30 seconds)
    // Because all 40 icons have independent random timers, it creates a perfectly 
    // organic "firefly" effect where mathematically only 1-3 will twinkle at any time.
    timeoutId = setTimeout(triggerTwinkle, Math.random() * 30000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      className="absolute"
      style={{ top: icon.top, left: icon.left }}
      animate={{
        y: [0, icon.yOffset, 0],
        x: [0, icon.xOffset, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: icon.duration,
        delay: icon.delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <motion.img 
        src={icon.url} 
        alt="floating-icon" 
        animate={isTwinkling ? {
          scale: [icon.scale, icon.scale * 1.8, icon.scale],
          opacity: [0.3, 1, 0.3],
          filter: [
            'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))',
            'brightness(1.8) drop-shadow(0 0 15px rgba(255,255,255,0.9))',
            'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))'
          ]
        } : {
          scale: icon.scale,
          opacity: 0.3,
          filter: 'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))'
        }}
        transition={{ duration: 2.0, ease: "easeInOut" }}
        className={`w-6 h-6 md:w-8 md:h-8 object-contain ${icon.invert ? 'invert' : ''}`} 
      />
    </motion.div>
  );
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<IconData[]>([]);

  useEffect(() => {
    // Generate 40 small floating icons randomly across the screen
    const generatedIcons = Array.from({ length: 40 }).map((_, i) => {
      const base = baseIcons[i % baseIcons.length];
      return {
        ...base,
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
        duration: 20 + Math.floor(Math.random() * 30),
        delay: Math.floor(Math.random() * -30),
        scale: 0.5 + Math.random() * 0.5, 
        xOffset: Math.floor(Math.random() * 100) - 50,
        yOffset: -100 - Math.floor(Math.random() * 150),
      };
    });
    setIcons(generatedIcons);
  }, []);

  if (icons.length === 0) return null;

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => (
        <IconParticle key={index} icon={icon} />
      ))}
    </div>
  );
}
