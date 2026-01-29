import Image from "next/image";
import HeaderHero from "./components/HeaderHero";
import HowItWorks from "./components/How";
import UseCases from "./components/work";
import SpeechSolutions from "./components/solution";
import AudioDemo from "./components/TryAudio";
import SpeechHero from "./components/SpeechHero";
import EnterpriseScaleSection from "./components/EnterpriseScaleSection";
import SpeechCards from "./components/work";
import AudioTranscriptionPage from "./components/audio";
import AudioApiComponent from "./components/new";
import TranscriptionSection from "./components/TranscriptionAnimation";
import ContactForm from "./components/contact";
import TranscriptionCTA from "./components/TranscriptionCTA";
import Footer from "./components/Footer";
import LingoscribeFeatures from "./components/LingoscribeFeatures";
import AboutUs from "./components/About";
import LingoScribeVideoSection from "./components/videopart";
import FloatingWordsCloud from "./components/FlowTypingText";
import IndustryTabs from "./components/IndustryTabs";
import VoiceAIHero from "./components/voiceModel";
import DialectCoverage from "./components/DialectCoverage";

export default function Home() {
  return (
    <div>
      <div id="home">
        <HeaderHero />
      </div>
{/* <VoiceAIHero/>   */}
      <div id="how it work">
        <HowItWorks />
         <div id="try" >
        {/* <AudioApiComponent /> */}
      </div>
        <LingoscribeFeatures />
      </div>
      <LingoScribeVideoSection />
      <div
        id="features"
        className="transition-opacity duration-500 ease-in-out"
      >
        <SpeechSolutions />
      </div>

      <TranscriptionSection />

     
      <div id="about">
        <AboutUs />
      </div>
      <EnterpriseScaleSection />
      <DialectCoverage />
      <IndustryTabs/>
      <div className="my-15">

        <div id="contact">
          <ContactForm />
        </div>
        <TranscriptionCTA />
      </div>
      <Footer />
    </div>
  );
}


