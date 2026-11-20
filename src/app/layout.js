import { Instrument_Sans, Newsreader, Noto_Naskh_Arabic } from "next/font/google";
import { THEME_SCRIPT } from "@/lib/theme";
import "./globals.css";

// Instrument Sans for the interface, Newsreader (italic) for translations,
// Noto Naskh Arabic for Urdu, Pashto, Balochi and the other Arabic-script languages.
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});
const naskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://lingoscribe.ai'),
  title: {
    default: "Lingoscribe | AI Speech-to-Text for Underrepresented Languages",
    template: "%s | Lingoscribe"
  },
  description: "The world's first AI transcription engine for underserved languages. Accurate Speech-to-Text, Sentiment Analysis, and Translation for Urdu, Pashto, Punjabi, Sindhi, Balochi, and indigenous dialects.",
  keywords: [
    "AI Speech to Text",
    "Automated Transcription",
    "Audio Intelligence",
    "Voice Agent API",
    "Speaker Recognition",
    "Sentiment Analysis",
    "Underrepresented language transcription",
    "Indigenous language AI",
    "Low-resource language processing",
    "Urdu Transcription", 
    "Pashto Speech to Text",  
    "Afridi Dialect Transcription",
    "Peshawari Audio to Text",
    "Punjabi Transcription AI",
    "Saraiki Speech Recognition",
    "Sindhi Audio Transcription",
    "Balochi Voice AI",
    "Brahui Language Support",
    "Multilingual Translation",
    "Audio Summarization",
    "Call Analytics for Dialects"
  ],
  authors: [{ name: "Lingoscribe Team"}],
  creator: "Lingoscribe",
  publisher: "Lingoscribe",
  formatDetection:{
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lingoscribe | Transcribe the World’s Underserved Voices",
    description: "From Afridi Pashto to Makrani Balochi. Transform audio into accurate text with the only AI built for indigenous and regional languages.",
    url: 'https://lingoscribe.ai',
    siteName: 'Lingoscribe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lingoscribe AI Dashboard showing Multilingual Transcription',
      },
      
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lingoscribe | AI for Indigenous Languages",
    description: "Accurate transcription and sentiment analysis for Urdu, Pashto, Punjabi, and other underrepresented languages.",
    images: ['/twitter-image.jpg'], 
    creator: '@lingoscribe', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lingoscribe.ai',
  },
};
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Lingoscribe",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Lingoscribe is an audio-to-text platform purpose-built for the world’s most underserved languages, offering transcription, translation, and sentiment analysis.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free trial available"
    },
    "featureList": [
      "Indigenous Language Transcription",
      "Speaker Recognition",
      "Sentiment Analysis",
      "Multilingual Translation",
      "Dialect Support (Afridi, Bugti, Makrani)"
    ]
    
  };
  return (
    // suppressHydrationWarning: THEME_SCRIPT sets data-theme before React loads
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${instrument.variable} ${newsreader.variable} ${naskh.variable}`}
      >
        {children}
      </body>
    </html>
  );
}