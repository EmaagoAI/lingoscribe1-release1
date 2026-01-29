"use client";

import { motion } from "framer-motion";
import { FaMicrophoneAlt, FaLanguage, FaGlobeAfrica, FaRegCommentDots } from "react-icons/fa";
import { MdHealthAndSafety, MdTranslate } from "react-icons/md";
import { GiSpeaker, GiArtificialIntelligence } from "react-icons/gi";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-[#0E0F12] to-[#121418] text-white px-6 md:px-12 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Empowering Voices in Every Language
        </h2>
        <p className="text-lg text-gray-400">
          Lingoscribe is a mission-driven voice technology startup building foundational Voice AI models for underserved languages, starting with the major regional languages of Pakistan (mainly Urdu, Pashto, Punjabi, Sindhi, and Balochi).
        </p>
      </motion.div>


      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
          <p className="text-gray-400 leading-relaxed">
            Lingoscribe voice models for low-resource languages can balance accuracy while accounting for dialects and regional variations. Our mission is to preserve linguistic diversity, expand access to technology, and ensure that AI works for people in their own voices, not just the world’s dominant languages.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Core Focus</h3>
          <p className="text-gray-400 leading-relaxed">
            The company’s core focus is to bridge the digital divide by enabling natural, voice-first access to digital services; including banking, education, healthcare, and government sector.</p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl font-bold text-white text-center mb-10">Core Capabilities</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            // { icon: <FaMicrophoneAlt />, label: "Transcribe" },
            // { icon: <MdTranslate />, label: "Translate" },
            { icon: <GiSpeaker />, label: "Speaker Recognition" },
            { icon: <GiArtificialIntelligence />, label: "AI Summary" },
            { icon: <FaRegCommentDots />, label: "Sentiment Analysis" },
            // { icon: <FaLanguage />, label: "Language Detection" },
            { icon: <FaGlobeAfrica />, label: "Speaker Profiling" },
            { icon: <MdHealthAndSafety />, label: "Entity Recognition" },
            { icon: <GiArtificialIntelligence />, label: "Link Analysis Module" },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 transition-all duration-200 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="text-xl text-[#9B5CF6]">{f.icon}</div>
              <span className="text-white font-medium">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
