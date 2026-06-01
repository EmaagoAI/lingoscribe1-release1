
"use client";

import Link from "next/link";
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
      "Link Analysis",
      "Speech Recognition API",
    ],
  
    Company: [
      "About Us",
      "How it works",
      "Contact Us",
      "Request a Demo",
      "Partnerships",
    ],
  };
  const getTargetId = (section, link) => {
    if (section === "Features") return "features";
    if (section === "Resources") return "how it works";
    if (section === "Company") {
      if (link === "About Us") return "about";
      if (link === "How it works") return "how it works";
      return "contact"; // Contact Us, Request a Demo, Partnerships
    }
    return null;
  };

  const scrollToId = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socialIcons = [
    // { icon: <FaTwitter />, link: "#" },
    // { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/lingoscribe" },
    // { icon: <FaYoutube />, link: "#" },
    // { icon: <FaMedium />, link: "#" },
  ];
  return (
    <footer className="bg-[#0B0B0C]   text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 mb-12 border-b border-gray-600 pb-10">

        <div className="md:max-w-sm">
          <h2 className="text-2xl font-bold mb-4">
            Lingoscribe<span className="text-purple-400">.</span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            AI transcription for the world’s most underserved languages. We focus on cultural inclusion, indigenous dialects, and accurate multilingual speech processing.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16">
          {Object.entries(footerLinks).map(([section, links], idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold uppercase mb-4 text-purple-400">
                {section.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <ul className="space-y-2 text-sm">
                {links.map((link, i) => {
                  const targetId = getTargetId(section, link);
                  return (
                    <li key={i}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (targetId) scrollToId(targetId);
                        }}
                        className="text-gray-300 hover:text-purple-400 transition"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-400">
        <p>© 2026 Lingoscribe. All Rights Reserved.</p>
        <div className="flex items-center   gap-6">
          <Link
            href="/privacy-policy"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            Privacy Policy
          </Link>
          <div className="flex gap-4 text-white text-lg">
            {socialIcons.map((s, idx) => (
              <a key={idx} href={s.link} className="hover:text-purple-400 transition">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
