"use client";

import Link from "next/link";

export default function TranscriptionCTA() {
  return (
    <section className="w-full px-4 py-20 bg-gradient-to-br  text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
         
          <div className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6 shadow-lg text-center hover:scale-[1.03] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">Talk to an expert</h3>
            <p className="text-sm text-gray-300">
              US/Canada:{" "}
              <a href="tel:1-888-800-9950" className="text-purple-400 underline">
               +1 (347) 209-7224
              </a>
              <br />
              PK:{" "}
              <a href="tel:+44-808-501-3933" className="text-purple-400 underline">
               +92 333 5207925
              </a>
            </p>
          </div>

          <div className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6 shadow-lg text-center hover:scale-[1.03] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">Support team</h3>
            <p className="text-sm text-gray-300">
              Visit our{" "}
              <Link href="#contact" className="text-purple-400 underline">
                support center
              </Link>
            </p>
          </div>

     
          <div className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6 shadow-lg text-center hover:scale-[1.03] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">Careers</h3>
            <p className="text-sm text-gray-300">
              Visit our{" "}
              <Link href="#contact" className="text-purple-400 underline">
                careers
              </Link>{" "}
              page for openings
            </p>
          </div>
        </div>


        <div className="w-full rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 p-8 text-center shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Ready to get started with transcription & captioning?
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-6">
            Getting high quality transcription & captioning for your media has never been easier – upload or paste links to audio or video files and your results will be available for download within minutes.
          </p>
          <a href="#contact">

          <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 text-sm font-medium">
            Get started
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}
