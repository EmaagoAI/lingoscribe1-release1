// pages/index.js
"use client";
import React from 'react';


const IndustryTabs = ({ title }) => {
  return (
    <section className="dark:bg-gray-950 dark:text-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl md:text-5xl text-center font-bold leading-tight">
          <span className="bg-gradient-to-r from-[#7EC8F5] via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </div>
    </section>
  );
};

// --- Combined tabs data (Industry + Translation) ---
// Removed as per request to remove tab box.


// --- Main Page Component ---
export default function HomePage() {
  return (
    <div className="dark:bg-gray-950">
      <IndustryTabs
        title="From Audios to useful Insights"
      />
    </div>
  );
}