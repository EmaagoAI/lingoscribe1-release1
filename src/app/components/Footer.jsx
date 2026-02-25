
"use client";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";
export default function Footer() {
  const footerLinks = {
    Features: [
      "Transcribe",
      "Translate",
      "Speaker Recognition",
      "Sentiment Analysis",
      "AI Audio Summary",
    ],
    Resources: [
      "Language Detection",
      "Speaker Profiling",
      "NER (Name Entity Recognition)",
      "Link Analysis Module",
      "Speech Recognition API",
    ],
    UseCases: [
      "Oral History Projects",
      "Multilingual Curriculum",
      "Public Health Outreach",
      "Academic Research",
      "NGO / Community Projects",
    ],
    Company: [
      "About Us",
      "Careers",
      "Contact Us",
      "Request a Demo",
      "Partnerships",
    ],
  };
  const socialIcons = [
    // { icon: <FaTwitter />, link: "#" },
    // { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/lingoscribe" },
    // { icon: <FaYoutube />, link: "#" },
    // { icon: <FaMedium />, link: "#" },
  ];
  return (
    <footer className="bg-[#0B0B0C] text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10 mb-12 border-b border-gray-600 pb-10">

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            Lingoscribe<span className="text-purple-400">.</span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            AI transcription for the world’s most underserved languages. We focus on cultural inclusion, indigenous dialects, and accurate multilingual speech processing.
          </p>
        </div>
        {Object.entries(footerLinks).map(([section, links], idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold uppercase mb-4 text-purple-400">
              {section.replace(/([A-Z])/g, " $1").trim()}
            </h3>
            <ul className="space-y-2 text-sm">
              {links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-400">
        <p>© 2026 Lingoscribe. All Rights Reserved.</p>
        <div className="flex gap-4 text-white text-lg">
          {socialIcons.map((s, idx) => (
            <a key={idx} href={s.link} className="hover:text-purple-400 transition">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
