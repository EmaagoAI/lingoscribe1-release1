"use client";

import { useState, useEffect, useRef } from "react";
import { Download, Mic, AudioLines, Play, Pause } from "lucide-react";
import WaveSurfer from "wavesurfer.js";

// --- Configuration: List your exact folder names here ---
const LANGUAGES = [
  { id: "afridi", label: "Afridi" },
  { id: "bittani", label: "Bittani" },
  { id: "brahui", label: "Brahui" },
  { id: "bugti", label: "Bugti" },
  { id: "makrani", label: "Makrani" },
  { id: "marri", label: "Marri" },
  { id: "mehsud", label: "Mehsud" },
  { id: "pesh", label: "Peshawari" },
  { id: "waziri", label: "Waziri" },
];

function Waveform({ audioUrl }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (waveformRef.current && audioUrl) {
      // Destroy previous instance to prevent duplicates
      if (wavesurfer.current) {
        
        wavesurfer.current.destroy();
      }

      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#4B5563",
        progressColor: "#00FFD1",
        height: 60,
        barWidth: 2,
        responsive: true,
        cursorWidth: 0,
        normalize: true,
        backend: "MediaElement",
      });

      wavesurfer.current.load(audioUrl);

      wavesurfer.current.on("ready", () => setIsReady(true));
      wavesurfer.current.on("finish", () => setIsPlaying(false));
      wavesurfer.current.on("error", (e) => console.error("WaveSurfer Error:", e));
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (wavesurfer.current && isReady) {
      wavesurfer.current.playPause();
      setIsPlaying(wavesurfer.current.isPlaying());
    }
  };

  return (
    <div className="flex items-center gap-4 w-full">
      <button
        onClick={togglePlay}
        disabled={!isReady}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition ${
          isReady 
            ? "bg-white/10 hover:bg-white/20 cursor-pointer" 
            : "bg-white/5 cursor-not-allowed opacity-50"
        }`}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
      <div ref={waveformRef} className="w-full rounded-lg overflow-hidden" />
    </div>
  );
}

function GlowButton({ label, icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-6 py-3 text-sm rounded-lg transition-all overflow-hidden ${
        active
          ? "bg-white/5"
          : "bg-transparent hover:bg-white/5 border-white/20 border"
      }`}
    >
      <Icon size={18} />
      {label}
      {active && (
        <span className="absolute inset-0 rounded-lg border-[2px] border-transparent pointer-events-none">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#9B5CF6] via-[#6F4BD8] to-[#9B5CF6] animate-border" />
        </span>
      )}
      <style jsx>{`
        .animate-border {
          background-size: 300% 300%;
          animation: gradientShift 4s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
          padding: 2px;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </button>
  );
}

export default function AudioApiComponent() {
  const [selectedLangId, setSelectedLangId] = useState(LANGUAGES[0].id);
  const [transcription, setTranscription] = useState("Loading...");
  const [translation, setTranslation] = useState("Loading...");
  const [activeButton, setActiveButton] = useState("Speech to Text");

  // Get current language label
  const currentLang = LANGUAGES.find(l => l.id === selectedLangId) || LANGUAGES[0];

  // Dynamic paths based on folder structure
  const audioPath = `/data/${selectedLangId}/audio1.mp3`;
  const textPath = `/data/${selectedLangId}/transcription.txt`;

  // Fetch text when selection changes
  useEffect(() => {
    setTranscription("Loading transcription...");
    setTranslation("Loading translation...");
    
    fetch(textPath)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => {
        const lines = text.split('\n');
        const nonEmptyLines = lines.filter(line => line.trim() !== '');
        setTranscription(nonEmptyLines[0]?.trim() || "No transcription available");
        setTranslation(nonEmptyLines[1]?.trim() || "No translation available");
      })
      .catch((err) => {
        console.error(err);
        setTranscription("Transcription file not found. Please ensure 'transcription.txt' exists in the folder.");
        setTranslation("Translation file not found.");
      });
  }, [selectedLangId, textPath]);

  return (
    <div className="   text-white px-4 sm:px-6 lg:px-16 py-12 flex flex-col justify-center items-center w-full">
      <style jsx global>{`
        .scrollbar-dark::-webkit-scrollbar {
          width: 8px;
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
      `}</style>
     

      <div className="bg-[#1A1A1A] w-[1350px]  rounded-xl p-4 sm:p-6 max-w-6xl mx-auto flex flex-col  gap-6 items-start">
                <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
            <h2 className="text-base sm:text-lg font-semibold">Select Language</h2>
            <select
              className="px-4 py-2 text-sm rounded-lg bg-[#141414] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#6F4BD8]"
              value={selectedLangId}
              onChange={(e) => setSelectedLangId(e.target.value)}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col gap-3 p-4 rounded-lg bg-[#2A2A2A] border border-white/20 transition-all">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-sm font-medium">{currentLang.label} Audio Sample</p>
              </div>             
              <Waveform audioUrl={audioPath} />              
              <p className="text-xs text-gray-500 text-right">
                Original Source
              </p>
            </div>
          </div>

         
        </div>

        {/* RIGHT SIDE: TRANSCRIPTION */}
        <div className="bg-[#141414] rounded-lg p-4 border w-full border-white/10 h-full min-h-[400px] sm:min-h-[500px] flex flex-col">
          <h3 className="text-base font-semibold mb-3">
            Transcription and Translation| Powered by Lingoscribe
          </h3>
          {/* //kk */}
          <div className="space-y-4 text-sm text-gray-300 overflow-y-auto max-h-[400px] sm:max-h-[460px] pr-2 scrollbar-dark">
            {/* Transcription Section */}
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                Transcription
              </div>
              <p className="leading-7 whitespace-pre-wrap bg-[#1A1A1A] p-3 rounded-lg">
                {transcription}
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">
                Translation
              </div>
              <p className="leading-7 whitespace-pre-wrap bg-[#1A1A1A] p-3 rounded-lg">
                {translation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}