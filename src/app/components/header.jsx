"use client"; 
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import Image from "next/image";
import LottiePlayer from "./LottiePlayer";

export default function HeroHeader() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <header className="w-full bg-transparent  text-white py-6 px-30 flex justify-between items-center shadow-xl ">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Propulso Logo"
            className="w-[150px] cursor-pointer"
            width={120}
            height={120}
          />
          
</div>
       <nav className="space-x-8 text-md font-medium">
  <a href="#home" className="hover:text-gray-300 cursor-pointer transition-colors">Home</a>
  <a href="#features" className="hover:text-gray-300 transition-colors">Features</a>
  <a href="#usecases" className="hover:text-gray-300 transition-colors">UseCases</a>
  <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
  <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
</nav>

        <button className="ml-6 cursor-pointer px-5 py-1.5 border border-white rounded-full text-md font-medium hover:bg-white hover:text-black transition-all duration-200">
          Explore Lingoscribe
        </button>
      </header>


      <div className=" top-[200px] absolute w-full   flex flex-col justify-center items-center text-center  px-6 pt-28">

        <h1 className="text-4xl w-full text-center md:text-6xl font-medium leading-tight">

          <span className="bg-gradient-to-r from-[#7EC8F5] to-white bg-clip-text text-transparent">
            Speak.
          </span>{' '}

          <span className="bg-gradient-to-r from-[#7EC8F5] via-white to-[#C08CFA] bg-clip-text text-transparent">
            Transcribe.
          </span>{' '}

          <span className="bg-gradient-to-r from-white via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent">
            Understand.
          </span>

        </h1>

        <p className="mt-4 font-bold text-sm md:text-sm max-w-[550px] bg-gradient-to-r from-[#F5F5F5] via-[#D4BFF9] to-[#B18AF5] bg-clip-text text-transparent leading-relaxed">
          Precision transcription for the world’s forgotten voices.
          We turn complex ideas into effortless experiences.
        </p>
        <div className="flex flex-col cursor-pointer relative justify-center items-center group transition-transform duration-300 hover:scale-105">
          <LottiePlayer />
          <div className="absolute">
            <p className="bg-gradient-to-r from-white via-[#C08CFA] to-[#A05CEB] bg-clip-text text-transparent text-lg font-medium">
              Try Now
            </p>
          </div>
        </div>
      </div>
      <div className=" pointer-event-none select-none  ">
        <Spline scene="https://prod.spline.design/Y6Rm0cA5UY7INlRW/scene.splinecode" />
      </div>
    </div>
  );
}