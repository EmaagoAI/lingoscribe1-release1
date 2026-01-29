"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { motion } from "framer-motion";
import { Play, Pause, Upload } from "lucide-react";

const dummyAudio = {
  url: "/sample-audio.mp3",
  transcript: [
    { time: 0, text: "Welcome to the transcription tool." },
    { time: 5, text: "This audio is being analyzed dynamically." },
    { time: 10, text: "Waveform rendering is fully synced." },
  ],
};

export default function AudioTranscriber() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeTab, setActiveTab] = useState("Transcript");

  useEffect(() => {
    if (waveformRef.current && !wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#555",
        progressColor: "#fff",
        height: 60,
        barWidth: 2,
        responsive: true,
      });
      wavesurfer.current.load(dummyAudio.url);

      wavesurfer.current.on("audioprocess", () => {
        setCurrentTime(wavesurfer.current.getCurrentTime());
      });

      wavesurfer.current.on("finish", () => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div className="bg-[#0d0d0e]/90 text-white w-full max-w-5xl mx-auto rounded-3xl border border-white/10 shadow-2xl p-8 space-y-6">
      {/* Tab Bar */}
      <div className="flex justify-between border border-white/10 rounded-full p-1 bg-[#1a1a1d]/70">
        {['Transcript', 'Audio Files', 'Summary'].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 px-6 py-2 rounded-full text-sm transition-all duration-300 ${
              activeTab === tab ? "text-white" : "text-white/50"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="pill-tab"
                className="absolute inset-0 bg-purple-600/30 rounded-full border border-purple-500 -z-10"
              />
            )}
          </motion.button>
        ))}
      </div>
      <div className="rounded-2xl border border-white/10 bg-[#1c1c20]/80 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="bg-white/10 p-2 rounded-full hover:bg-white/20"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <div ref={waveformRef} className="w-[500px]" />
          </div>
          <button className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
            <Upload size={16} /> Select Audio File
          </button>
        </div>
      </div>
      {activeTab === "Transcript" && (
        <div className="rounded-2xl border border-white/10 bg-[#1c1c20]/80 p-6 max-h-60 overflow-y-auto space-y-3">
          {dummyAudio.transcript.map((line, idx) => (
            <p
              key={idx}
              className={`text-sm transition-all duration-300 ${
                currentTime >= line.time ? "text-white" : "text-white/40"
              }`}
            >
              {line.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
