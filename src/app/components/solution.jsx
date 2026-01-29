"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "../components/ui/cards";
import { 
  ChevronRight, 
  Globe, 
  Cpu, 
  AudioLines, 
  Fingerprint, 
  ScanSearch, 
  Sparkles 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// 1. Defined Icon Mapping for a cleaner, more professional look
const services = [
  { 
    title: "Multilingual Translations", 
    desc: "Speak once. Deliver in 50+ languages. Real-time AI translation.", 
    icon: Globe,
    color: "from-blue-500 to-cyan-400"
  },
  { 
    title: "Voice-to-Text API", 
    desc: "Integrate advanced speech recognition into your own applications.", 
    icon: Cpu,
    color: "from-violet-500 to-purple-400"
  },
  { 
    title: "Audio Descriptions", 
    desc: "Generate descriptive audio for media, accessible to all users.", 
    icon: AudioLines,
    color: "from-emerald-500 to-teal-400"
  },
  { 
    title: "Speaker Recognition", 
    desc: "Identify and label individual speakers in audio recordings uniquely.", 
    icon: Fingerprint,
    color: "from-rose-500 to-pink-400"
  },
  { 
    title: "Language Detection", 
    desc: "Identify the spoken language instantly from any audio stream.", 
    icon: ScanSearch,
    color: "from-amber-500 to-orange-400"
  },
  { 
    title: "AI Summarization", 
    desc: "Summarize complex conversations into key points in seconds.", 
    icon: Sparkles,
    color: "from-indigo-500 to-blue-400"
  },
];

export default function SpeechSolutions() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    // GSAP MatchMedia for Responsive Animation
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Logic for Desktop: Horizontal Scroll
      const cards = horizontalRef.current;
      const totalWidth = cards.scrollWidth;
      const windowWidth = window.innerWidth;

      gsap.to(cards, {
        x: () => `-${totalWidth - windowWidth + 100}px`, // +100 for padding buffer
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert(); // Cleanup on unmount/resize
  }, []);

  return (
    <section id="solutions" className="relative w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div ref={triggerRef} className="relative z-10 py-20 lg:py-0 lg:h-screen lg:flex lg:items-center">
        <div ref={sectionRef} className="w-full">
          
          {/* Header Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[#7EC8F5] via-[#B4A9F8] to-[#A05CEB] bg-clip-text text-transparent">
                AI-Powered Speech Solutions
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Transform the way you capture, transcribe, and understand conversations with enterprise-grade AI voice technology.
            </p>
          </div>

          {/* 
            Container: 
            - On Mobile (default): Grid layout
            - On Desktop (lg): Flex layout for horizontal scroll
          */}
          <div 
            ref={horizontalRef}
            className="px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 lg:flex lg:flex-nowrap lg:w-max"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card
                  key={index}
                  className="
                    relative group overflow-hidden border border-white/10 bg-[#121212] rounded-3xl p-8 
                    transition-all duration-500 hover:border-white/20
                    w-full h-auto min-h-[400px] lg:w-[400px] lg:h-[500px] lg:flex-shrink-0
                  "
                >
                  {/* Card Content Wrapper */}
                  <CardContent className="p-0 h-full flex flex-col justify-between relative z-10">
                    <div>
                      {/* Professional Icon Container */}
                      <div className={`
                        w-16 h-16 rounded-2xl mb-8 flex items-center justify-center
                        bg-gradient-to-br ${service.color} bg-opacity-10
                        shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]
                        group-hover:scale-110 transition-transform duration-500 ease-out
                      `}>
                         <div className="absolute inset-0 rounded-2xl bg-black/40" /> {/* Darkener for contrast */}
                         <IconComponent className="w-8 h-8 text-white relative z-10" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#B4A9F8] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                        {service.desc}
                      </p>
                    </div>

                 
                  </CardContent>

                  {/* Hover Gradient Overlay */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-10 
                    bg-gradient-to-br ${service.color} 
                    transition-opacity duration-500 pointer-events-none blur-xl
                  `} />
                  
                  {/* Glass Reflection Effect */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}