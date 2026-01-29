"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { 
  Menu, X, ChevronDown, 
  Headset, Activity, FileText, MessageSquare, Utensils, 
  BarChart3, Clapperboard, Zap, Users, Handshake, Rocket 
} from "lucide-react";
import LottiePlayer from "./LottiePlayer";
import { Calendar } from "lucide-react"; 

export default function HeroHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    const featuresSection = document.getElementById("features");

    if (!target) return;

    if (id !== "features" && featuresSection) {
      featuresSection.style.opacity = "0";
      featuresSection.style.pointerEvents = "none";
      featuresSection.style.visibility = "hidden";
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (id !== "features" && featuresSection) {
      setTimeout(() => {
        featuresSection.style.opacity = "1";
        featuresSection.style.pointerEvents = "auto";
        featuresSection.style.visibility = "visible";
      }, 1000);
    }

    setMobileMenuOpen(false);
  };
  const useCases = [
    { name: "Contact Centers", icon: Headset, href: "#" },
    { name: "Healthcare Voice AI", icon: Activity, href: "#" },
    { name: "Medical Transcription", icon: FileText, href: "#" },
    { name: "Conversational AI", icon: MessageSquare, href: "#" },
    { name: "Restaurants", icon: Utensils, href: "#" },
    { name: "Speech Analytics", icon: BarChart3, href: "#" },
    { name: "Media Transcription", icon: Clapperboard, href: "#" },
  ];
  const platformLinks = [
    { name: "Powered by DG", icon: Zap, href: "#" },
    { name: "Customers", icon: Users, href: "#" },
    { name: "Partners", icon: Handshake, href: "#" },
    { name: "Startup Program", icon: Rocket, href: "#" },
  ];
  return (
    <div className="min-h-screen text-white overflow-hidden bg-black">
      {/* Background Layer */}
      <div className="absolute pt-50 inset-0 z-0 pointer-events-none select-none">
        <Spline scene="https://prod.spline.design/Y6Rm0cA5UY7INlRW/scene.splinecode" />
      </div>

      {/* Header - Z-index set high to sit above Hero Text */}
    


{/* Header - Z-index set high to sit above Hero Text */}
<header className="relative z-50 w-full px-6 md:px-12 py-6 flex justify-between items-center">
  {/* Logo */}
  <div className="flex items-center">
    <Image
      src="/images/logo.png"
      alt="Propulso Logo"
      className="w-[140px] md:w-[170px] cursor-pointer"
      width={170}
      height={170}
    />
  </div>
  
  <nav className="hidden md:flex space-x-6 text-lg font-medium items-center">         
    <button
      onClick={() => handleNavClick("home")}
      className="hover:text-gray-300 transition-colors capitalize"
    >
      home
    </button>

    <button
      onClick={() => handleNavClick("solutions")}
      className="hover:text-gray-300 transition-colors capitalize"
    >
      Solutions
    </button>

    {["how it works", "features", "about"].map((item) => (
      <button
        key={item}
        onClick={() => handleNavClick(item)}
        className="hover:text-gray-300 transition-colors capitalize"
      >
        {item}
      </button>
    ))}
  </nav>

  <div className="hidden md:flex flex-row gap-2">
    <button
      onClick={() => handleNavClick("contact")}
      className="group flex items-center gap-2 px-3 md:px-4 py-2 bg-white text-black rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
    >
      <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-800 group-hover:text-black transition-colors" />
      <span>Book a Demo</span>
    </button>
  <a
    href="#try"
    onClick={(e) => { e.preventDefault(); handleNavClick("how it works"); }}
    className="ml-2 md:ml-4 px-3 md:px-5 py-1.5 border border-white rounded-lg text-xs md:text-md font-medium hover:bg-white hover:text-black transition-all duration-200"
  >
    Get Started
  </a>
  </div>

  <div className="md:hidden">
    <button onClick={() => setMobileMenuOpen(true)} className="text-white">
      <Menu className="w-6 h-6" />
    </button>
  </div>

</header>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex">
            <Transition.Child
              as={Fragment}
              enter="transition duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative w-full max-w-xs bg-black shadow-xl pb-6 pt-5 px-6 flex flex-col">
                
                <div className="flex items-center justify-between mb-6">
                  <Image
                    src="/images/logo.png"
                    alt="Propulso Logo"
                    className="w-[120px]"
                    width={120}
                    height={120}
                  />
                  <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col text-white gap-4">
                  {["home", "about", "features", "usecases", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className="text-left text-lg font-medium capitalize hover:text-gray-300 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="group flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-gray-200"
                  >
                    <Calendar className="w-4 h-4 text-gray-800" />
                    <span>Book a Demo</span>
                  </button>
                  <a
                    href="#try"
                    onClick={(e) => { e.preventDefault(); handleNavClick("how it works"); }}
                    className="px-4 py-2 text-center border border-white rounded-lg font-medium hover:bg-white hover:text-black transition-all"
                  >
                    Get Started
                  </a>
                </nav>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="relative z-10 w-full flex flex-col items-center text-center pt-10 2xl:pt-34 px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium leading-tight">
          <span className="bg-gradient-to-r from-[#7EC8F5] to-white bg-clip-text text-transparent">
            Speak.
          </span>{" "}
          <span className="bg-gradient-to-r from-[#7EC8F5] via-white to-[#C08CFA] bg-clip-text text-transparent">
            Transcribe.
          </span>{" "}
          <span className="bg-gradient-to-r from-white via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent">
            Understand.
          </span>
        </h1>
        <p className="mt-4 font-bold text-xs md:text-sm max-w-xl bg-gradient-to-r from-[#F5F5F5] via-[#D4BFF9] to-[#B18AF5] bg-clip-text text-transparent leading-relaxed">
          Lingoscribe is an audio-to-text platform purpose-built for the world’s most underserved languages.
        </p>
        <div className="flex flex-col relative justify-center items-center group transition-transform duration-300 hover:scale-105">
          <LottiePlayer />
          <div className="absolute z-10">
            <a
              href="#try"
              onClick={(e) => { e.preventDefault(); const target = document.getElementById("how it works"); if (target) target.scrollIntoView({ behavior: "smooth", block: "start" }); }}
              className="bg-gradient-to-r from-white via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent text-lg font-medium cursor-pointer"
            >
              Try Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}