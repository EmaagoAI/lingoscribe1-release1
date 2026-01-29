"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Podcast, Users, Accessibility, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    icon: <Podcast className="w-8 h-8 text-[#7EC8F5]" />,
    title: "Podcasters & Creators",
    desc: "Auto-generate show notes, captions, and transcripts in real-time.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#B4A9F8]" />,
    title: "Business Meetings",
    desc: "Capture meetings, generate minutes, and share transcripts with your team.",
  },
  {
    icon: <Accessibility className="w-8 h-8 text-[#D08CF8]" />,
    title: "Accessibility",
    desc: "Empowering hearing-impaired users with real-time voice-to-text support.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#F88CF8]" />,
    title: "Journalists & Researchers",
    desc: "Interview to document—convert voice data into accurate text summaries.",
  },
];

export default function UseCases() {
  useEffect(() => {
    requestAnimationFrame(() => {
      gsap.from(".usecase-card", {
        scrollTrigger: {
          trigger: ".usecases-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      });

      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section className="usecases-section relative z-10 bg-black py-28 px-6">
   
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#7EC8F5] via-[#A05CEB] to-[#F88CF8] blur-[150px] opacity-10 pointer-events-none z-0 animate-pulse-glow" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7EC8F5] via-[#B4A9F8] to-[#A05CEB] bg-clip-text text-transparent">
          Who Is It For?
        </h2>
        <p className="text-[#CCCCCC] mt-4 text-lg max-w-2xl mx-auto">
          LingoScribe serves creators, professionals, and pioneers who rely on clarity and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {useCases.map((item, index) => (
          <article
            key={index}
            className="usecase-card opacity-0 translate-y-10 relative bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 group overflow-hidden"
            aria-label={item.title}
          >
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#A05CEB]/30 transition-all duration-500 pointer-events-none"></div>

            <div className="mb-6">{item.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-[#B0B0B0] text-sm">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
