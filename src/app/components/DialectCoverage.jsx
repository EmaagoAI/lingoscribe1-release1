'use client';

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { MapPin, Mic, Layers, Globe } from 'lucide-react';

const regions = [
  {
    title: "Baloch & Brahui",
    icon: <MapPin className="w-6 h-6 text-orange-400" />,
    desc: "Covers the rugged terrain of the southwest, capturing distinct tribal linguistic heritage.",
    accentColor: "group-hover:border-orange-500/40",
    glowColor: "bg-orange-500/20",
    dialects: ["Brahui", "Bugti", "Makrani","Marri"],
  },
  {
    title: "Pashto Dialects",
    icon: <Mic className="w-6 h-6 text-cyan-400" />,
    desc: "Trained on intricate tonal variations from the northern and western belts.",
    accentColor: "group-hover:border-cyan-500/40",
    glowColor: "bg-cyan-500/20",
    dialects: ["Peshawari", "Afridi", "Mehsud", "Waziri","Bittani"]
  },
  {
    title: "Punjabi & South Punjabi",
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    desc: "Bridging the gap between the majestic plains and the distinct Saraiki belt.",
    accentColor: "group-hover:border-emerald-500/40",
    glowColor: "bg-emerald-500/20",
    dialects: ["Punjabi", "Saraiki"],
  },
  {
    title: "English & Urdu",
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    desc: "From formal literature to the colloquial streets of Karachi and Lahore.",
    accentColor: "group-hover:border-purple-500/40",
    glowColor: "bg-purple-500/20",
    dialects: ["English, Standard Urdu", "Regional Urdu"],
  }
];

const DialectCoverage = () => {
  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Dataset Coverage
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Linguistic Diversity, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              Captured Perfectly.
            </span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Lingoscribe does not rely on a single "standardized" form. Our models are trained on the real, messy, beautiful dialects of Pakistan.
          </p>
        </div>

        {/* The Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 md:px-0">
          {regions.map((step, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="1.5rem"
              transitionSpeed={2000}
              scale={1.02}
              gyroscope={true}
              className="h-full" // Ensures Tilt takes full height of grid col
            >
              <div
                className="
                  relative h-full flex flex-col justify-between
                  rounded-3xl p-6 xl:p-8 
                  shadow-2xl shadow-black/50 
                  group transition-all duration-300 
                  border border-white/10 
                  backdrop-blur-xl bg-white/[0.03] 
                  hover:bg-white/[0.06]
                "
              >
                {/* Content Container */}
                <div>
                  {/* Header: Icon + Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                      {step.icon}
                    </div>
                    {/* FIXED: Added min-h and flex items-center so single-line titles match the height of multi-line titles, aligning the description text below */}
                    <h3 className="text-xl font-semibold text-white tracking-wide min-h-[3.5rem] flex items-center">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#B0B0B0] text-sm leading-relaxed mb-8">
                    {step.desc}
                  </p>
                </div>

                {/* Dialect Pills (Pushed to bottom via flex-col + justify-between) */}
                <div className="relative z-10">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                    Supported Models
                  </div>
                  {/* FIXED: Added min-h-[60px] to ensure this block always takes up the space of 2 rows, keeping the label aligned */}
                  <div className="flex flex-wrap gap-2 min-h-[60px]">
                    {step.dialects.map((dialect, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 transition-colors h-fit"
                      >
                        {dialect}
                      </span>
                    ))}
                  </div>
                </div>

                {/* --- Decorative Elements from your request --- */}
                
                {/* 1. Border Glow on Hover (Dynamic Color) */}
                <div className={`absolute inset-0 rounded-3xl border border-transparent ${step.accentColor} transition-all duration-700 pointer-events-none`}></div>
                
                {/* 2. Corner Blur Blob (Dynamic Color) */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 ${step.glowColor} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* 3. Subtle inner gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl pointer-events-none" />

              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DialectCoverage;