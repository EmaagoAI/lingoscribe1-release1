"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Cha haal aahe?",
  "Insha shemaat?",
  "Zahulé shikher iné?",
  "Allinllachu kashanki?",
  "Zahulé shikher iné?",
  "Sta sa haal de?",
  "Chon hastay?",
  "Chomok shemaat?",
];

const getNonOverlappingTops = (count) => {
  const step = 90 / count;
  return Array.from({ length: count }, (_, i) => 5 + i * step);
};

const generateWordStream = (total = 50) => {
  const tops = getNonOverlappingTops(10);
  const stream = [];

  for (let i = 0; i < total; i++) {
    const word = words[i % words.length];
    const size = Math.random() * 6 + 22; 
    const top = tops[i % tops.length];
    const delay = i * 2.8; 
    const speed = Math.random() * 4 + 20; 

    stream.push({
      id: `${i}-${Date.now()}`,
      text: word,
      size,
      top,
      delay,
      speed,
    });
  }

  return stream;
};

export default function FlowTypingText() {
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    const generate = () => setWordList(generateWordStream(60));
    generate();
    const interval = setInterval(generate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] overflow-hidden ">
      {wordList.map((word) => (
        <motion.div
          key={word.id}
          initial={{ x: "-200px" }}
          animate={{ x: "100vw" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: word.speed,
            delay: word.delay,
          }}
          style={{
            position: "absolute",
            top: `${word.top}%`,
            whiteSpace: "nowrap",
            fontSize: `${word.size}px`,
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
            color: "#ACACAC",
            textShadow: "0 0 10px rgba(0, 255, 255, 0.6)",
            letterSpacing: "0.5px",
            pointerEvents: "none",
          }}
        >
          {word.text}
        </motion.div>
      ))}
    </div>
  );
}
