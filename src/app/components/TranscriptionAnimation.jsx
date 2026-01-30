"use client";

import { useEffect } from "react";

export default function TranscriptionSection() {
  useEffect(() => {
    const svgObject = document.getElementById("animatesvg-transcription");

    function transcriptionSvgLoaded() {
      const svgDoc = svgObject?.contentDocument;
      if (!svgDoc) return;

      const elements = svgDoc.querySelectorAll(".animate line, .animate path");
      const targets = Array.from(elements);

      targets.forEach((el) => {
        const length = el.getTotalLength();
        el.style.strokeDasharray = length;
        el.style.strokeDashoffset = length;
      });

      import("animejs").then((anime) => {
        const animeInstance = anime.default || anime;
        animeInstance({
          targets,
          strokeDashoffset: 0,
          easing: "easeInOutSine",
          duration: 300,
          delay: function (el, i) {
            return i * 20;
          },
          direction: "alternate",
          endDelay: 200,
          loop: true,
        });
      });
    }

    if (svgObject) {
      svgObject.addEventListener("load", transcriptionSvgLoaded);
    }

    return () => {
      if (svgObject) {
        svgObject.removeEventListener("load", transcriptionSvgLoaded);
      }
    };
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* SVG Animation on Left */}
        <div className="w-full lg:w-1/2">
          <object
            id="animatesvg-transcription"
            type="image/svg+xml"
            data="https://www.sonix.ai/packs/media/images/corp/illustrations/homepage/sonix-svganimate-transcription-b0f3275b2faa5186917d9671c8020ddc.svg"
            aria-label="Animated Sonix transcription SVG"
            className="w-full h-auto"
          />
        </div>

        {/* Text on Right */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h3 className="text-3xl font-semibold">Automated transcription</h3>
          <p>
           Accurate transcription in <strong>50+ global and indigenous languages</strong>. Lingoscribe’s powerful web editor lets you search, edit, organize, and share transcripts seamlessly anytime, anywhere. Ideal for interviews, oral histories, academic research, community recordings, and more.
          </p>
          <p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-bold text-blue-400 hover:underline inline-flex items-center gap-2 cursor-pointer"
            >
              Cutting-edge automated transcription
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 5l7 7-7 7M5 12h14"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
