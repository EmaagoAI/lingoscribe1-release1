"use client";

import { motion } from "framer-motion";
import { Languages, AudioLines, ShieldCheck, Globe, BookOpen, CloudUpload } from "lucide-react";

export default function LingoscribeFeatures() {
  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold h-46 md:h-30 bg-gradient-to-r from-[#7EC8F5] via-[#B4A9F8] to-[#A05CEB] bg-clip-text text-transparent"
        >
          Transcribe the World’s Voices. <br /> From Anywhere. For Everyone.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          We enable transcription, analysis, and documentation in the world’s least digitized linguistic communities, preserving voices and accelerating access.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flip-card h-[220px] group cursor-pointer"
            >
              <div className="flip-card-inner">
                <div className="flip-card-front shadow-lg">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white mb-4 transition-transform duration-500 group-hover:scale-110">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center">
                    {feature.title}
                  </h3>
                </div>

                {/* Back: Description only */}
                <div className="flip-card-back shadow-2xl p-6">
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-14"
        >
          <a
            href="#try"
            className="inline-block bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 font-medium py-2.5 px-5 text-base shadow-sm ease-in-out"
          >
            Try Lingoscribe Now
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}

const features = [
  {
    title: "Indigenous Language Transcription",
    description: "Enabling accurate audio transcription in the world’s least digitized languages using AI.",
    icon: Languages,
  },
  {
    title: "Multilingual Translation",
    description: "Translate transcribed text across multiple global and regional languages seamlessly.",
    icon: BookOpen,
  },
  {
    title: "Speaker Recognition",
    description: "Automatically identify and label individual speakers within multi-voice recordings.",
    icon: AudioLines,
  },
  {
    title: "Sentiment Analysis",
    description: "Analyze emotional tone and sentiment across audio content for deeper insight.",
    icon: ShieldCheck,
  },
  {
    title: "AI-Powered Audio Summarization",
    description: "Generate intelligent summaries from long-form audio files in seconds.",
    icon: Globe,
  },
  {
    title: "Call Analytics & Insights",
    description: "Extracts Named Entity Recognition, provides Language Detection, Speaker Profiling, and Link Analysis.",
    icon: CloudUpload,
  },
];
