"use client";

import { motion } from "framer-motion";
import FlowTypingText from "./FlowTypingText";

export default function LingoScribeVideoSection() {
    return (
        <section className="h-full  overflow-hidden w-full relative bg-transparent">
            <div className="absolute xl:flex hidden right-0 top-1/2 transform -translate-y-1/2  -z-10 w-[800px]">
                <FlowTypingText />
            </div>
     <section className="z-20 ">
          <div className=" xl:block hidden">
                    <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full z-20 h-[80vh] "
                >
                    <source src="/videos/animation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
      </div>
       <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="backdrop-blur-md rounded-xl max-w-lg 2xl:max-w-xl  ml-20 shadow-xl"
  >
    <div className="text-white w-full space-y-7 z-10">
      <h2 className=" text-3xl  2xl:text-4xl md:text-4xl font-bold leading-tight">
            <span className=" bg-gradient-to-r from-[#7EC8F5] via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent">
             From Voice To Visibility
            </span>
          </h2>
      <p className="text-lg w-full">
        LingoScribe transforms voice into accurate, structured text with a focus on underrepresented languages, dialects, and indigenous communities. Our real-time speech-to-text engine supports multilingual output and is built to scale where no other tools reach.
      </p>
      <div className="relative group w-fit">
        <div className="absolute inset-0 rounded-md border border-transparent group-hover:border-green-400 transition duration-300" />
        <div className="absolute -inset-1.5 bg-green-400 blur-xl opacity-20 group-hover:opacity-40 rounded-md transition duration-500 animate-glow-slow" />
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="relative z-10 px-6 py-3 bg-black border border-green-500 text-white rounded-md text-sm font-semibold transition duration-300 hover:bg-neutral-900"
        >
          Explore Our Technology
        </button>
      </div>
    </div>
  </motion.div>
</div>
  </section>
</section>
    );
}
