"use client";

import { useState } from "react";
import { Play, Pause, Download } from "lucide-react";
import clsx from "clsx";

const audioFiles = [
  {
    title: "Call Center Nike Support: Customer Service",
    duration: "02:09",
    current: "01:17",
    file: "/nike-support-call.mp3",
  },
  {
    title: "Medical Pediatric: Healthcare Call",
    duration: "02:33",
    current: "00:00",
    file: "/medical-call.mp3",
  },
];

const tabs = ["Text to Speech", "Speech to Text", "Audio Intelligence"];

export default function AudioDemo() {
  const [selectedAudio, setSelectedAudio] = useState(audioFiles[0]);
  const [activeTab, setActiveTab] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => setIsPlaying(!isPlaying);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Try models + APIs</h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Play around with human-like voice AI or transcribe sample audio files.
          Explore how our audio understanding models work.
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={clsx(
              "px-6 py-3 rounded-md font-medium transition-all",
              activeTab === idx
                ? "bg-white text-black"
                : "bg-[#1a1a1a] text-gray-400 hover:text-white"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-8">
        {/* Audio List Section */}
        <div className="w-1/2 bg-[#1a1a1a] rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Select an audio file</h3>
          <ul className="space-y-4">
            {audioFiles.map((audio, i) => (
              <li
                key={i}
                onClick={() => setSelectedAudio(audio)}
                className={clsx(
                  "cursor-pointer p-4 rounded-lg",
                  selectedAudio.title === audio.title
                    ? "bg-[#2b2b2b] border border-white"
                    : "hover:bg-[#2b2b2b]"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-full">
                      🎧
                    </div>
                    <span>{audio.title}</span>
                  </div>
                  <div className="text-sm text-gray-400">{audio.duration}</div>
                </div>
                <div className="w-full h-1 mt-2 bg-gray-700 rounded-full">
                  <div
                    className="h-1 bg-green-400 rounded-full"
                    style={{ width: "55%" }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="text-blue-400 text-sm mt-4 inline-block hover:underline"
          >
            Download JSON ↴
          </a>

          <div className="mt-4">
            <button className="text-blue-400 text-sm hover:underline">
              Try Your Audio Files →
            </button>
          </div>
        </div>

        {/* Transcript Section */}
        <div className="w-1/2 bg-[#1a1a1a] rounded-lg p-6 overflow-auto max-h-[500px]">
          <h3 className="text-lg font-semibold mb-4">
            Transcription <span className="text-sm text-gray-500">| Model: Nova-2</span>
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <p>
              <span className="text-white font-semibold">[Speaker 0]:</span> Hi.
              Thank you so much for calling Nike. This is Allison. How can I help
              you today?
            </p>
            <p>
              <span className="text-white font-semibold">[Speaker 1]:</span> Hey. I
              was supposed to receive a shoe order last Tuesday, and it's now
              Wednesday, a week later. So, like, what's going on?
            </p>
            <p>
              <span className="text-white font-semibold">[Speaker 0]:</span> Oh,
              okay. I see. Could I have your order number, please?
            </p>
            <p>
              <span className="text-white font-semibold">[Speaker 1]:</span> Yeah.
              It's 905933 679.
            </p>
            <p>
              <span className="text-white font-semibold">[Speaker 0]:</span> Okay.
              Thank you so much for that. Okay. I apologize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
