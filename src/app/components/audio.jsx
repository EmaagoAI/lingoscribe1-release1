"use client";

import { useState, useRef, useEffect } from "react";
import { Howl } from "howler";
import { Volume2, Mic, Brain, Download } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const audioSamples = [
  {
    id: 1,
    title: "Call Center Nike Support: Customer Service",
    duration: "02:09",
    audioSrc: "/audio/nike-support.mp3",
    waveform: [1, 3, 5, 3, 2, 1, 4, 6, 3, 2],
    transcription: [
      {
        speaker: "Speaker 0",
        text: "Hi. Thank you so much for calling Nike. This is Allison. How can I help you today?",
        timestamp: "1.83 - 6.33",
      },
      {
        speaker: "Speaker 1",
        text: "Hey. I was supposed to receive a shoe order last Tuesday, and it's now Wednesday, a week later. So, like, what's going on?",
        timestamp: "7.25 - 22.16",
      },
      {
        speaker: "Speaker 0",
        text: "Oh, okay. I see. Could I have your order number, please?",
        timestamp: "22.16 - 26.93",
      },
      {
        speaker: "Speaker 1",
        text: "Yeah. It's 905933 679.",
        timestamp: "27.55 - 28.77",
      },
      {
        speaker: "Speaker 0",
        text: "Okay. Thank you so much for that. Okay. I apologize.",
        timestamp: "32.46 - 41.89",
      },
    ],
  },
];

export default function AudioTranscriptionPage() {
  const [selectedAudio, setSelectedAudio] = useState(audioSamples[0]);
  const [activeButton, setActiveButton] = useState("stt");
  const soundRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      once: true,
      onEnter: () => {
        gsap.to(cardRefs.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.3,
          ease: "power3.out",
          duration: 0.8,
        });
      },
    });
    gsap.set(cardRefs.current, { opacity: 0, y: 60, scale: 0.95 });
  }, []);

  const playAudio = (src) => {
    if (soundRef.current) soundRef.current.stop();
    const sound = new Howl({ src: [src] });
    soundRef.current = sound;
    sound.play();
  };

  const buttons = [
    { id: "tts", label: "Text to Speech", icon: <Volume2 className="w-6 h-6 text-[#7EC8F5]" /> },
    { id: "stt", label: "Speech to Text", icon: <Mic className="w-6 h-6 text-[#B4A9F8]" /> },
    { id: "ai", label: "Audio Intelligence", icon: <Brain className="w-6 h-6 text-[#D08CF8]" /> },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen py-28 bg-gradient-to-br  relative z-10 overflow-hidden px-4"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-40 w-[60%]  rounded-full opacity-40 pointer-events-none" />

      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7EC8F5] via-[#B4A9F8] to-[#A05CEB] bg-clip-text text-transparent"
        >
          Audio Models
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#CCCCCC] mt-5 text-lg max-w-2xl mx-auto"
        >
          Transcribe, synthesize, and analyze audio with our latest AI models.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        
        {buttons.map((btn, index) => (
          <Tilt
            key={btn.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.1}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => setActiveButton(btn.id)}
              className={`cursor-pointer p-6 rounded-3xl transition-all duration-500 border border-white/10 backdrop-blur-md ${
                activeButton === btn.id
                  ? "bg-gradient-to-r from-[#7EC8F5]/20 to-[#A05CEB]/20 scale-[1.03] border-[#A05CEB]/40"
                  : "bg-white/5 hover:scale-[1.02]"
              }`}
            >
              <div className="mb-4">{btn.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-1">{btn.label}</h3>
              <p className="text-[#B0B0B0] text-sm">Explore {btn.label.toLowerCase()} features.</p>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur">
          <h2 className="text-xl font-bold mb-4 text-white">Audio Samples</h2>
          {audioSamples.map((audio) => (
            <div
              key={audio.id}
              onClick={() => setSelectedAudio(audio)}
              className={`cursor-pointer p-4 rounded-xl mb-3 transition ${
                selectedAudio.id === audio.id
                  ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-400"
                  : "bg-[#1E1E1E] hover:bg-[#2A2A2A]"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-lg text-white">{audio.title}</span>
                <span className="text-sm text-gray-400">{audio.duration}</span>
              </div>
              <div className="flex gap-1 items-end h-8">
                {audio.waveform.map((v, i) => (
                  <div
                    key={i}
                    className="w-1 rounded bg-cyan-400"
                    style={{ height: `${v * 6}px` }}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="mt-4 space-y-2">
            <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">
              <Download className="w-4 h-4" /> Download JSON
            </a>
            <a href="#" className="text-blue-400 hover:underline block">Try Your Audio Files →</a>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur max-h-[600px] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Transcription</h2>
            <span className="text-sm text-gray-400">Model: Nova-2</span>
          </div>

          <button
            onClick={() => playAudio(selectedAudio.audioSrc)}
            className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            ▶ Play Audio
          </button>

          {selectedAudio.transcription.map((line, i) => (
            <div key={i} className="mb-4">
              <p>
                <span className="text-cyan-300 font-semibold">[{line.speaker}]:</span>{" "}
                <span className="text-white">{line.text}</span>
              </p>
              <p className="text-sm text-gray-400">Timestamp: {line.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
