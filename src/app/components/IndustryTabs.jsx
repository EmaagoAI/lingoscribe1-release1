// pages/index.js
"use client";
import { useState } from 'react';
import Image from 'next/image';

const IndustryTabs = ({ tabsData, title }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Find the currently active tab object for the mobile header
  const activeTabInfo = tabsData.find((t) => t.id === activeTab);

  return (
    <section className="dark:bg-gray-950 dark:text-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl md:text-5xl text-center font-bold mb-12 md:mb-20 leading-tight">
            <span className="bg-gradient-to-r from-[#7EC8F5] via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent">
              {title}
            </span>
        </h2>
            
        <div className="glassmorphic relative rounded-3xl p-6 md:p-8 shadow-xl group transition-transform duration-300 border border-white/10 backdrop-blur-md bg-white/5 md:hover:scale-[1.03]">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            
            {/* Tabs Navigation Area */}
            <div className="w-full md:w-1/4 flex-shrink-0 relative z-30">
              
              {/* --- MOBILE VIEW ONLY: Custom Glass Dropdown --- */}
              <div className="md:hidden relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-xl text-lg font-bold 
                             bg-purple-600 text-white shadow-lg shadow-purple-900/20 
                             focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                             transition-all duration-300 border border-purple-500/50"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <span className="truncate">{activeTabInfo?.title}</span>
                  {/* Chevron Icon */}
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Options */}
                <div 
                  className={`
                    absolute top-full left-0 right-0 mt-2 
                    bg-[#1a1b26]/95 backdrop-blur-xl border border-white/10 
                    rounded-xl shadow-2xl overflow-hidden origin-top
                    transition-all duration-200 ease-out z-40
                    ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}
                  `}
                >
                  <div className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
                    {tabsData.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`
                          w-full text-left px-6 py-3 text-base font-medium transition-colors duration-200
                          flex items-center justify-between
                          ${activeTab === tab.id 
                            ? 'bg-purple-600/20 text-purple-300' 
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'}
                        `}
                      >
                        {tab.title}
                        {activeTab === tab.id && (
                          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- DESKTOP VIEW ONLY: Vertical List --- */}
              <div 
                className="hidden md:flex md:flex-col gap-3" 
                role="tablist" 
                aria-orientation="vertical"
              >
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    id={`tab-${tab.id}`}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={activeTab === tab.id ? 0 : -1}
                    className={`
                      flex items-center w-full px-5 py-3 rounded-xl text-left text-lg font-medium
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
                      transition-all duration-300 ease-in-out
                      ${activeTab === tab.id
                        ? 'bg-purple-600 text-white shadow-md dark:bg-purple-700'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-purple-400'
                      }
                    `}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content (Right/Bottom) - Remains same structure but responsive */}
            <div className="w-full md:w-3/4 min-h-[400px] relative z-10">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  id={`panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  className={`
                    ${activeTab === tab.id ? 'block' : 'hidden'}
                    transition-all duration-500 ease-in-out
                    ${activeTab === tab.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}
                >
                  <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4 sm:mb-5" title={tab.heading}>
                        {tab.heading}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                        {tab.description}
                      </p>
                      <a
                        href={tab.buttonLink || '#contact'}
                        onClick={(e) => {
                          if (!tab.buttonLink) {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="inline-flex items-center justify-center px-8 py-3 border border-purple-500 text-purple-600 dark:text-purple-300 dark:border-purple-300 rounded-lg text-base font-medium
                          hover:bg-purple-50 dark:hover:bg-gray-700
                          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
                          transition-all duration-300 ease-in-out w-full md:w-auto"
                        target={tab.buttonLink && tab.buttonLink.startsWith('http') && (typeof window === 'undefined' || !tab.buttonLink.includes(window.location.hostname)) ? "_blank" : "_self"}
                        rel={tab.buttonLink && tab.buttonLink.startsWith('http') && (typeof window === 'undefined' || !tab.buttonLink.includes(window.location.hostname)) ? "noopener noreferrer" : undefined}
                        title={tab.buttonText}
                        role="button"
                      >
                        {tab.buttonText}
                      </a>
                    </div>
                    
                    <div className="w-full md:w-1/2 flex justify-center items-center p-2 md:p-4">
                      {/* Restrict image width on mobile for better proportions */}
                      <div className="w-full max-w-sm md:max-w-none">
                        <Image
                          src={tab.imageSrc}
                          alt={tab.imageAlt}
                          width={600}
                          height={400}
                          layout="responsive"
                          objectFit="contain"
                          className="drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Combined tabs data (Industry + Translation) ---
const allTabsData = [
  {
    id: 'corporate',
    title: 'Corporate',
    heading: 'Corporate & enterprise',
    description: 'Accurate, scalable transcription and live captioning for meetings, webinars, trainings, and internal communications. Creating searchable records for compliance, knowledge sharing, and global team access.',
    imageSrc: 'https://verbit.ai/wp-content/uploads/2024/03/Verbit_Corporate.svg',
    imageAlt: 'A blue, white, and black cartoon image of a conference call showing a man with dark hair wearing a blue suit jacket and tie pointing to a pie graph.',
    buttonText: 'Get started',
    buttonLink: '',
  },
  {
    id: 'education',
    title: 'Education',
    heading: 'Education & training',
    description: 'Real-time and post-production transcription for lectures, LMS content, faculty research, and training materials to support accessibility, studying, comprehension, and content review.',
    imageSrc: 'https://verbit.ai/wp-content/uploads/2024/03/Verbit_Education_upd.svg',
    imageAlt: 'A blue, white and black cartoon image of a classroom.',
    buttonText: 'Get started',
    buttonLink: '',
  },
  {
    id: 'media',
    title: 'Media',
    heading: 'Media & entertainment',
    description: 'Fast transcription for interviews, broadcasts, podcasts, real-time streaming, and post-production workflows, improving searchability, editing, and content repurposing at scale.',
    imageSrc: 'https://verbit.ai/wp-content/uploads/2024/03/Verbit_Media_upd.svg',
    imageAlt: 'A blue, white and black cartoon image of a female newscaster.',
    buttonText: 'Get started',
    buttonLink: '',
  },
 
  {
    id: 'business_translation',
    title: 'Business Translation',
    heading: 'Corporate translation and localization',
    description: 'Reach global teams and customers with AI translation, live translation, and multilingual captioning designed for content and website localization needs. Translate company announcements, webinars, and meetings to support international collaboration.',
    imageSrc: 'https://verbit.ai/wp-content/uploads/2024/03/Verbit_Corporate.svg',
    imageAlt: 'Conference call cartoon.',
    buttonText: 'Get started',
    buttonLink:'',
  },
  {
    id: 'education_translation',
    title: 'Education Translation',
    heading: 'Education translation tool',
    description: 'Support diverse learners and international students with multilingual captioning and real-time translation for lectures, courses, and campus events. Enable comprehension and accessibility while bridging language barriers.',
    imageSrc: 'https://verbit.ai/wp-content/uploads/2024/03/Verbit_Education_upd.svg',
    imageAlt: 'Classroom cartoon.',
    buttonText: 'Get started',
    buttonLink:'',
  },
  {
    id: 'media_translation',
    title: 'Media Translation',
    heading: 'Voice translation for media & entertainment',
    description: 'Expand international reach with subtitle translation and multilingual captions for video libraries, broadcasts, and streaming content. Maintain FCC & ADA compliance and deliver content in multiple languages for global audiences.',
    imageSrc: 'https://verbit.ai/wp-content/uploads/2024/03/Verbit_Media_upd.svg',
    imageAlt: 'Newscaster cartoon.',
    buttonText: 'Get started',
    buttonLink: '',
  },
  {
    id: 'government_translation',
    title: 'Government Translation',
    heading: 'AI-powered translation for government',
    description: 'Ensure accessible public communications with AI translation and interpretation technology for meetings, hearings, press briefings, and public events. Facilitate understanding for all constituents while maintaining SOC 2 Type II compliance.',
    imageSrc: 'https://verbit.ai/wp-content/uploads/2024/10/Legal-tech-rigorously-trained-transcribers.svg',
    imageAlt: 'Judge cartoon.',
    buttonText: 'Get started',
    buttonLink: '',
  },
];

// --- Main Page Component ---
export default function HomePage() {
  return (
    <div className="dark:bg-gray-950">
      <IndustryTabs
        tabsData={allTabsData}
        title="Industry Solutions & Translation Services"
      />
    </div>
  );
}