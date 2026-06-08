"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Mic,
  StepForward,
  Download,
  Play,
  Pause,
  ChevronDown,
  Check,
  Target,
  Brain,
  Sparkles,
  Users
} from "lucide-react";
import WaveSurfer from "wavesurfer.js";
gsap.registerPlugin(ScrollTrigger);


const steps = [
  {
    icon: <Mic className="w-8 h-8 text-[#7EC8F5]" />,
    title: "Step 1: Speak or Upload",
    desc: "Speak directly or upload voice. No complex setup.",
  },
  {
    icon: <StepForward className="w-8 h-8 text-[#B4A9F8]" />,
    title: "Step 2: AI Transcribes",
    desc: "Advanced AI listens, transcribes, and formats audio.",
  },
  {
    icon: <Download className="w-8 h-8 text-[#D08CF8]" />,
    title: "Step 3: Export or Share",
    desc: "Instantly export or share your polished transcript.",
  },
];

const extraFeatures = [
  {
    icon: <Target className="w-5 h-5 text-[#7EC8F5]" />,
    title: "Name Entity Recognition",
    color: "from-[#7EC8F5]/20 to-transparent",
    border: "border-[#7EC8F5]/20"
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#D08CF8]" />,
    title: "AI Summarization",
    color: "from-[#D08CF8]/20 to-transparent",
    border: "border-[#D08CF8]/20"
  },
  {
    icon: <Users className="w-5 h-5 text-[#7EC8F5]" />,
    title: "Speaker Diarization",
    color: "from-[#7EC8F5]/20 to-transparent",
    border: "border-[#7EC8F5]/20"
  },
   {
    icon: <Brain className="w-5 h-5 text-[#B4A9F8]" />,
    title: "Keyword Spotting",
    color: "from-[#B4A9F8]/20 to-transparent",
    border: "border-[#B4A9F8]/20"
  },
];

const LANGUAGES = [
  { id: "pesh", label: "Pashto Peshawari" },
  { id: "afridi", label: "Pashto Afridi" },
  { id: "bittani", label: "Pashto Bittani"},
  { id: "mehsud", label: "Pashto Mehsud" },
  { id: "waziri", label: " Pashto Waziri" },
  { id: "bugti", label: "Balochi" },
  { id: "makrani", label: "Balochi Makrani" },
  { id: "brahui", label: "Brahui" },
];

const formatTime = (seconds) => {
  if (!seconds) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

function CustomDropdown({ options, selectedId, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedOption = options.find(opt => opt.id === selectedId);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-56 z-[100]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-[#141414] border border-white/10 rounded-lg text-white hover:border-[#6F4BD8]/50 transition-all duration-300 group shadow-sm"
      >
        <span className="font-medium text-xs sm:text-sm">{selectedOption?.label}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:text-[#6F4BD8]`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full mt-1 bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="max-h-[280px] overflow-y-auto scrollbar-thin p-1">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    onChange(option.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm rounded-lg transition-colors duration-200 ${selectedId === option.id
                    ? "bg-[#6F4BD8]/20 text-[#B4A9F8]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {option.label}
                  {selectedId === option.id && <Check className="w-3 h-3" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Component to handle word-by-word highlighting
function HighlightedText({ text, currentTime, duration, colorClass = "text-[#7EC8F5]", isRtl = false }) {
  const words = useMemo(() => {
    return text ? text.split(" ") : [];
  }, [text]);

  const progress = duration > 0 ? currentTime / duration : 0;
  const activeIndex = Math.floor(progress * words.length);

  if (!text || text === "Loading...") return <span className="text-gray-500">{text}</span>;

  return (
    <p
      dir={isRtl ? "rtl" : "ltr"}
      className={`leading-6 whitespace-pre-wrap bg-[#1A1A1A] p-3 rounded-lg border border-white/5 ${isRtl ? "text-right" : "text-left"}`}
    >
      {words.map((word, index) => {
        const isVisible = index <= activeIndex;

        return (
          <span
            key={index}
            className={`transition-all duration-200 ${isVisible ? `${colorClass} font-semibold` : "opacity-0"
              }`}
          >
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
}

function Waveform({ audioUrl, onTimeUpdate, onDurationChange }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Local state for display, though parent manages logic source
  const [localDuration, setLocalDuration] = useState(0);
  const [localCurrent, setLocalCurrent] = useState(0);

  useEffect(() => {
    if (waveformRef.current && audioUrl) {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }

      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#4B5563",
        progressColor: "#00FFD1",
        height: 40,
        barWidth: 2,
        barGap: 2,
        responsive: true,
        cursorWidth: 1,
        normalize: true,
        backend: "MediaElement",
      });

      wavesurfer.current.load(audioUrl);

      wavesurfer.current.on("ready", (dur) => {
        setIsReady(true);
        setLocalDuration(dur);
        if (onDurationChange) onDurationChange(dur);
      });

      wavesurfer.current.on("audioprocess", (time) => {
        setLocalCurrent(time);
        if (onTimeUpdate) onTimeUpdate(time);
      });

      wavesurfer.current.on("seek", (progress) => {
        const time = progress * wavesurfer.current.getDuration();
        setLocalCurrent(time);
        if (onTimeUpdate) onTimeUpdate(time);
      });

      wavesurfer.current.on("finish", () => {
        setIsPlaying(false);
        setLocalCurrent(0);
        if (onTimeUpdate) onTimeUpdate(0);
      });

      wavesurfer.current.on("error", (e) => console.error("WaveSurfer Error:", e));
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [audioUrl, onTimeUpdate, onDurationChange]);

  const togglePlay = () => {
    if (wavesurfer.current && isReady) {
      wavesurfer.current.playPause();
      setIsPlaying(wavesurfer.current.isPlaying());
    }
  };

  return (
    <div className="flex flex-row items-center gap-3 w-full">
      {/* Play Button */}
      <button
        onClick={togglePlay}
        disabled={!isReady}
        className={`flex items-center justify-center w-9 h-9 shrink-0 rounded-full transition ${isReady
          ? "bg-white/10 hover:bg-white/20 cursor-pointer"
          : "bg-white/5 cursor-not-allowed opacity-50"
          }`}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>

      {/* Waveform Container */}
      <div ref={waveformRef} className="flex-grow h-[40px] rounded-lg overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-opacity" />

      {/* Time Display */}
      <div className="shrink-0 text-[11px] font-mono text-gray-400 bg-black/20 px-2 py-1 rounded border border-white/5">
        <span className="text-white">{formatTime(localCurrent)}</span>
        <span className="opacity-50 mx-1">/</span>
        <span>{formatTime(localDuration)}</span>
      </div>
    </div>
  );
}

function AudioApiComponent() {
  const [selectedLangId, setSelectedLangId] = useState(LANGUAGES[0].id);
  const [transcription, setTranscription] = useState("Loading...");
  const [translation, setTranslation] = useState("Loading...");

  // State lifted up to handle syncing
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentLang = LANGUAGES.find((l) => l.id === selectedLangId) || LANGUAGES[0];
  const audioPath = `/data/${selectedLangId}/audio1.mp3`;
  const textPath = `/data/${selectedLangId}/transcription.txt`;

  useEffect(() => {
    // Reset times on language change
    setCurrentTime(0);
    setDuration(0);
    setTranscription("Loading...");
    setTranslation("Loading...");

    fetch(textPath)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => {
        const lines = text.split("\n");
        const nonEmptyLines = lines.filter((line) => line.trim() !== "");
        setTranscription(nonEmptyLines[0]?.trim() || "No transcription available");
        setTranslation(nonEmptyLines[1]?.trim() || "No translation available");
      })
      .catch((err) => {
        console.error(err);
        setTranscription("Transcription file not found.");
        setTranslation("Translation file not found.");
      });
  }, [selectedLangId, textPath]);

  return (
    <div className="text-white w-full h-full flex flex-col">
      <style jsx global>{`
        .scrollbar-dark::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-dark::-webkit-scrollbar-track {
          background: #0a0a0a;
          border-radius: 4px;
        }
        .scrollbar-dark::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 4px;
        }
        .scrollbar-dark::-webkit-scrollbar-thumb:hover {
          background: #2a2a2a;
        }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
      `}</style>

      {/* Main Card Wrapper */}
      <div className="bg-[#1A1A1A] w-full h-full rounded-xl p-2 md:p-6 flex flex-col gap-4 border border-white/10 shadow-xl relative overflow-visible">

        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#6F4BD8]/5 blur-[80px] pointer-events-none" />

        {/* Header & Controls */}
        <div className="flex flex-col w-full shrink-0 relative z-[110]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
            <div>
              <h2 className="text-base md:mt-0 mt-2 md:text-left text-center font-bold text-white">Transcription and Translation <span className="lg:inline hidden md:text-normal text-[11px]">|</span> Powered by Lingoscribe</h2>
              <p className="text-[12px] md:text-left text-center text-gray-500 mt-0.5">Select a language to see real-time processing</p>
            </div>

            <CustomDropdown
              options={LANGUAGES}
              selectedId={selectedLangId}
              onChange={setSelectedLangId}
            />
          </div>

          <div className="space-y-2">
            <div className="flex flex-col gap-3 p-2 md:p-4 rounded-xl bg-[#222222] border border-white/10 shadow-inner">
              <div className="flex justify-between items-center  flex-wrap gap-2">
                <p className="text-xs font-semibold text-gray-300">{currentLang.label} Audio Sample</p>
              </div>
              <Waveform
                audioUrl={audioPath}
                onTimeUpdate={setCurrentTime}
                onDurationChange={setDuration}
              />
            </div>
          </div>
        </div>

        {/* Text Section - Flex grow to fill remaining height */}
        <div className="bg-[#141414] rounded-xl p-2 mt-4 md:mt-0 md:p-5 border w-full border-white/10 flex flex-col flex-grow min-h-0 relative z-10 shadow-inner">
          <div className="flex items-center justify-between mb-3 shrink-0">
            <h3 className="text-[12px]  md:text-sm font-semibold text-white">
              Live Analysis Results
            </h3>
            <span className="text-[10px] bg-[#6F4BD8]/20 text-[#B4A9F8] px-2 py-0.5 rounded border border-[#6F4BD8]/30">Powered by Lingoscribe</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-gray-300 overflow-y-auto pr-2 scrollbar-dark flex-grow">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7EC8F5]"></div>
                <span className="text-[10px] font-bold text-[#7EC8F5] uppercase tracking-wider">Transcription</span>
              </div>
              {/* Highlighted Text Component */}
              <HighlightedText
                text={transcription}
                currentTime={currentTime}
                duration={duration}
                colorClass="text-[#7EC8F5]"
                isRtl
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FFD1]"></div>
                <span className="text-[10px] font-bold text-[#00FFD1] uppercase tracking-wider">Translation</span>
              </div>
              {/* Highlighted Text Component for Translation too (Optional - synced same way) */}
              <HighlightedText
                text={translation}
                currentTime={currentTime}
                duration={duration}
                colorClass="text-[#00FFD1]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN PARENT COMPONENT
// ==========================================

export default function HowItWorks() {
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
          stagger: 0.2,
          ease: "power3.out",
          duration: 0.8,
        });
      },
    });

    gsap.set(cardRefs.current, {
      opacity: 0,
      y: 60,
      scale: 0.95,
    });
  }, []);

  return (
    <div id="how it works" className="w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#7EC8F5] via-[#B4A9F8] to-[#A05CEB] bg-clip-text text-transparent"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#CCCCCC] mt-4 text-base max-w-lg mx-auto"
        >
          Just three seamless steps from audio to perfectly polished text.
        </motion.p>
      </div>

      {/* Main Grid Layout: Left (25%) - Center (55%) - Right (20%) */}
      <div
        ref={sectionRef}
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch"
      >

        {/* Left Column: 3 Cards (Span 3 of 12 = 25%) */}
        <div className="lg:col-span-3 flex flex-col gap-4 justify-between h-full">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-40 w-[20%] bg-[#A05CEB]/20 blur-3xl rounded-full opacity-30 pointer-events-none" />

          {steps.map((step, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.1}
              transitionSpeed={2500}
              gyroscope={true}
              className="flex-1"
            >
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="glassmorphic h-full relative rounded-2xl p-5 shadow-lg group transition-transform duration-300 border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/[0.07] flex flex-col justify-center"
              >
                <div className="mb-3 bg-white/5 w-fit p-2.5 rounded-xl border border-white/5">{step.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed text-[11px] sm:text-xs">
                  {step.desc}
                </p>

                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#A05CEB]/30 transition-all duration-700 pointer-events-none"></div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Center Column: Audio API Component (Span 7 of 12 = 58%) */}
        <div className="lg:col-span-7 h-full w-full min-h-[450px]">
          <AudioApiComponent />
        </div>

        {/* Right Column: 4 Small Boxes (Span 2 of 12 = 17%) */}
        <div className="lg:col-span-2 flex flex-col gap-2 justify-between h-full">
          {extraFeatures.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[steps.length + index] = el)}
              className="flex-1 glassmorphic relative rounded-xl p-3 border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/[0.08] transition-all duration-300 flex flex-col items-center justify-center gap-1.5 group overflow-hidden"
            >
              {/* Animated background glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`shrink-0 w-8 h-8 rounded-lg bg-black/40 border ${feature.border} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <div className="relative z-10 text-center">
                <h4 className="text-[11px] font-bold text-gray-300 group-hover:text-white transition-colors leading-tight">
                  {feature.title}
                </h4>
              </div>

              {/* Decorative bottom accent line */}
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${feature.border.replace('border-', 'bg-')} opacity-0 group-hover:opacity-40 transition-opacity`} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
