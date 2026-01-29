
  "use client";
  import React, { useState } from 'react';

  const VoiceAIHero = () => {
    const [mainTab, setMainTab] = useState('speech-to-text');
    const [activeFeature, setActiveFeature] = useState('summarization');

    const featureData = {
      summarization: {
        title: "Summarization",
        render: () => (
          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-[#18181b] p-5 border border-white/5">
              <p className="text-[13px] leading-relaxed text-[#BBBBBF]">
                <span className="font-bold text-[#13EF95]">Summary: </span>
                The customer calls Wham to change their payment and asks if they 
                can do it on the phone since their sub is about to renew. The agent takes down 
                the customer's information and updates their card information.
              </p>
            </div>
            <div className="text-[13px] leading-relaxed text-[#BBBBBF]">
              <span className="font-bold text-white">Transcript </span>
              Hi. Thank you so much for calling Wham. My name is Ali. How can I help 
              you today? Hey. Just trying to change the payment info on the website...
            </div>
          </div>
        )
      },
      sentiment: {
        title: "Sentiment Analysis",
        render: () => (
          <div className="flex flex-col gap-6 text-[13px] leading-relaxed">
            <AnalysisItem label="Positive" labelColor="text-[#60a5fa]" meta="(score 0.62)" text="Hi. Thank you so much for calling Wham. My name is Ali." />
            <AnalysisItem label="Neutral" labelColor="text-white" meta="(score 0.08)" text="Hey. Just trying to change the payment info on the website." />
          </div>
        )
      },
      intent: {
        title: "Intent Detection",
        render: () => (
          <div className="flex flex-col gap-6 text-[13px] leading-relaxed">
            <AnalysisItem label="Change payment info" labelColor="text-white" meta="(confidence 0.43)" text="Hey. Just trying to change the payment info." />
          </div>
        )
      },
      topic: {
        title: "Topic Detection",
        render: () => (
          <div className="flex flex-col gap-6 text-[13px] leading-relaxed">
            <AnalysisItem label="Payment info change" labelColor="text-[#60a5fa]" meta="(score 0.25)" text="Hey. Just trying to change the payment info." />
          </div>
        )
      }
    };

    return (
      <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center justify-center p-4 selection:bg-[#13EF95] selection:text-black">
        
        {/* --- Main Component Container --- */}
        <div className="w-full max-w-[1250px] rounded-xl border border-white/10 p-2 shadow-2xl relative overflow-hidden" 
            style={{ background: 'linear-gradient(96.2deg, rgba(255, 255, 255, 0.14) -2.17%, rgba(255, 255, 255, 0.03) 50.7%, rgba(255, 255, 255, 0.03) 74.86%, rgba(255, 255, 255, 0.1) 103.13%)' }}>
          
          {/* --- Top Navigation Buttons (Restored Original Images) --- */}
          <div className="flex w-full gap-3 mb-8 p-2">
            <NavButton 
              icon={<img src="https://www.datocms-assets.com/96965/1755890893-speech-to-text-icon.svg" alt="Speech to Text" className="w-full h-full" />} 
              label="Speech to Text" 
              active={mainTab === 'speech-to-text'}
              onClick={() => setMainTab('speech-to-text')}
              iconColor="text-[#7dd3fc]" 
            />        
            <NavButton 
              icon={<img src="https://www.datocms-assets.com/96965/1755890893-speech-to-text-icon.svg" alt="Voice Agent" className="w-full h-full" />} 
              label="Voice Agent" 
              active={mainTab === 'voice-agent'}
              onClick={() => setMainTab('voice-agent')}
              iconColor="text-[#c084fc]" 
            />
            <NavButton 
              icon={<img src="https://www.datocms-assets.com/96965/1755890945-brain-ai-icon.svg" alt="Audio Intelligence" className="w-full h-full" />} 
              label="Audio Intelligence" 
              active={mainTab === 'audio-intelligence'}
              onClick={() => setMainTab('audio-intelligence')}
              iconColor="text-[#13EF95]" 
            />
          </div>

          {/* --- 1. Speech To Text View --- */}
          {mainTab === 'speech-to-text' && (
            <SpeechToTextInterface />
          )}

          {/* --- 2. Voice Agent View --- */}
          {mainTab === 'voice-agent' && (
            <div className="flex items-center justify-center min-h-[400px] text-gray-500">
              Voice Agent Interface
            </div>
          )}

          {/* --- 3. Audio Intelligence View --- */}
          {mainTab === 'audio-intelligence' && (
            <div className="flex flex-col md:flex-row gap-6 px-4 pb-6">
              <div className="flex w-full flex-col gap-6 md:w-[380px]">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-[#BBBBBF]">Call Center: Customer Support: </span>
                  <div className="flex items-center">
                    <div className="w-[30px] flex-shrink-0">
                      <div className="w-[26px] h-[26px] cursor-pointer relative flex items-center justify-center group">
                        <span className="flex items-center justify-center text-[#A9A9AD] group-hover:text-white transition-colors duration-200">
                            <PlayIconSVG />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center gap-2">
                        <div className="w-[40px] text-right"><span className="text-[10px] font-mono font-medium text-[#A9A9AD]">00:31</span></div>
                        <div className="relative h-[32px] w-full flex-1 cursor-pointer group">
                            <span className="absolute inset-0 flex h-full w-full items-center opacity-40 text-[#A9A9AD] transition-colors duration-200 group-hover:text-[#BBBBBF]"><WaveformSVG /></span>
                            <div className="absolute inset-0 flex h-full items-center overflow-hidden text-[#13EF95]" style={{ width: '30%' }}>
                              <span className="flex h-full w-full items-center min-w-[200px]"><WaveformSVG /></span>
                            </div>
                        </div>
                        <div className="w-[40px]"><span className="text-[10px] font-mono font-medium text-[#A9A9AD]">01:44</span></div>
                    </div>

                    
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <PillButton label="Summarization" active={activeFeature === 'summarization'} onClick={() => setActiveFeature('summarization')} />
                  <PillButton label="Sentiment Analysis" active={activeFeature === 'sentiment'} onClick={() => setActiveFeature('sentiment')} />
                  <PillButton label="Intent Detection" active={activeFeature === 'intent'} onClick={() => setActiveFeature('intent')} />
                  <PillButton label="Topic Detection" active={activeFeature === 'topic'} onClick={() => setActiveFeature('topic')} />
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-white/10 bg-black/20 p-6 min-h-[400px]">
                <h3 className="mb-6 text-sm font-medium text-[#BBBBBF]">{featureData[activeFeature].title}</h3>
                {featureData[activeFeature].render()}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  };

  const SpeechToTextInterface = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('afridi');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [transcription, setTranscription] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioRef, setAudioRef] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioUrl, setAudioUrl] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');
    
    const languages = [
      { id: 'afridi', label: 'Afridi' },
      { id: 'bittani', label: 'Bittani' },
      { id: 'brahui', label: 'Brahui' },
      { id: 'bugti', label: 'Bugti' },
      { id: 'makrani', label: 'Makrani' },
      { id: 'marri', label: 'Marri' },
      { id: 'mehsud', label: 'Mehsud' },
      { id: 'pesh', label: 'Peshawari' },
      { id: 'waziri', label: 'Waziri' }
    ];

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith('audio/')) {
        setUploadedFile(file);
        setTranscription('Processing your audio file...');
        
        const audio = new Audio(URL.createObjectURL(file));
        setAudioRef(audio);
        
        audio.addEventListener('loadedmetadata', () => {
          setDuration(audio.duration);
        });
        
        audio.addEventListener('timeupdate', () => {
          setCurrentTime(audio.currentTime);
        });
        
        audio.addEventListener('ended', () => {
          setIsPlaying(false);
        });
        
        setTimeout(() => {
          setTranscription('Your uploaded audio has been transcribed successfully.');
        }, 2000);
      } 
    };

    const togglePlay = () => {
      if (audioRef) {
        if (isPlaying) {
          audioRef.pause();
        } else {
          audioRef.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSpeakClick = async () => {
      if (isRecording) {
        mediaRecorder.stop();
        setIsRecording(false);
      } else {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const recorder = new MediaRecorder(stream);
          const chunks = [];
          
          recorder.ondataavailable = (event) => {
            chunks.push(event.data);
          };
          
          
          recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'audio/wav' });
            const file = new File([blob], 'recorded-audio.wav', { type: 'audio/wav' });
            
            setUploadedFile(file);
            setTranscription('Processing your recorded audio...');
            
            const audio = new Audio(URL.createObjectURL(blob));
            setAudioRef(audio);
            
            audio.addEventListener('loadedmetadata', () => {
              setDuration(audio.duration);
            });
            
            audio.addEventListener('timeupdate', () => {
              setCurrentTime(audio.currentTime);
            });
            
            audio.addEventListener('ended', () => {
              setIsPlaying(false);
            });
            
            setTimeout(() => {
              setTranscription('Your recorded audio has been transcribed successfully.');
            }, 2000);
            
            stream.getTracks().forEach(track => track.stop());
          };
          
          setMediaRecorder(recorder);
          recorder.start();
          setIsRecording(true);
        } catch (error) {
          console.error('Error accessing microphone:', error);
        }
      }
    };

    const handleWaveformClick = (event) => {
      if (audioRef && duration) {
        const rect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = clickX / rect.width;
        const newTime = percentage * duration;
        audioRef.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

 const handleProcessUrl = async () => {
    if (!audioUrl.trim()) return;
    
    setIsProcessing(true);
    setError('');
    setTranscription('Downloading and converting audio...');
    // Clear previous file if any
    setUploadedFile(null); 

    try {
      const response = await fetch('http://localhost:5000/api/convert-to-mp3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: audioUrl })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to process URL');
      }

      // 1. Get the raw MP3 data as a Blob
      const blob = await response.blob();
      
      // 2. Create a JS File object from the Blob
      // This mimics a user uploading a file manually, so your existing UI works perfectly
      const processedFile = new File([blob], 'processed_audio.mp3', { type: 'audio/mp3' });
      
      setUploadedFile(processedFile);
      setTranscription('Audio processed successfully.');
      
      // 3. Initialize Audio Player Logic (Same as your upload logic)
      const audio = new Audio(URL.createObjectURL(blob));
      setAudioRef(audio);
      
      audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
      audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
      audio.addEventListener('ended', () => setIsPlaying(false));

    } catch (err) { 
      console.error(err);
      setError('Failed to process URL. Please check the link.');
      setTranscription(''); 
    } finally {
      setIsProcessing(false);
    }
  };
    const selectedLang = languages.find(lang => lang.id === selectedLanguage);

    return (
      <div className="px-6 pb-8">
        <div className="flex gap-8 border-b border-gray-800 mb-8">
          <div className="pb-3 text-[#13EF95] border-b-2 border-[#13EF95] font-medium cursor-pointer">Lingo: Transcription</div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {uploadedFile && (
              <div className="w-full mb-4">
                <div className="text-xs text-[#BBBBBF] mb-3">{uploadedFile.name}</div>
                <div className="flex items-center gap-3">
                  <button onClick={togglePlay} className="w-[32px] h-[32px] cursor-pointer flex items-center justify-center group bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <span className="flex items-center justify-center text-[#A9A9AD] group-hover:text-white transition-colors duration-200">
                        {isPlaying ? <PauseIconSVG /> : <PlayIconSVG />}
                    </span>
                  </button>
                  <div className="flex-1 flex items-center gap-3">
                      <span className="text-[10px] font-mono text-[#A9A9AD] w-[35px]">{formatTime(currentTime)}</span>
                      <div className="relative h-[24px] w-full flex-1 cursor-pointer group" onClick={handleWaveformClick}>
                          <span className="absolute inset-0 flex h-full w-full items-center opacity-40 text-[#A9A9AD] transition-colors duration-200 group-hover:text-[#BBBBBF]"><WaveformSVG /></span>
                          <div className="absolute inset-0 flex h-full items-center overflow-hidden text-[#13EF95]" style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}>
                            <span className="flex h-full w-full items-center"><WaveformSVG /></span>
                          </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#A9A9AD] w-[35px]">{duration ? formatTime(duration) : '--:--'}</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-row gap-10 items-center justify-start pt-8">
              <div className="stt-btn-outer ready mb-8">
                <button type="button" onClick={handleSpeakClick} className={`stt-btn-inner ready group relative flex h-40 w-40 items-center justify-center rounded-full bg-transparent focus:outline-none ${isRecording ? 'animate-pulse' : ''}`}>
                    <svg className="absolute inset-0 h-full w-full -rotate-90 transform">
                        <circle cx="80" cy="80" r="78" stroke="url(#btn-mic-gradient-hover)" strokeWidth="4" fill="transparent" />
                        <defs>
                            <linearGradient id="btn-mic-gradient-hover" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#11B1DF"></stop>
                                <stop offset="100%" stopColor="#0FEF95"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" color="#fff" height="40" width="40" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-200">
                            <path d="M96 96V256c0 53 43 96 96 96s96-43 96-96H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V192H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96zM320 240v16c0 70.7-57.3 128-128 128s-128-57.3-128-128V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24z"></path>
                        </svg>
                        <span className="text-white font-medium group-hover:text-[#13EF95] transition-colors duration-200">{isRecording ? 'Stop' : 'Speak'}</span>
                    </div>
                </button>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="relative">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-[14px] justify-between w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded text-white hover:border-gray-500 transition-colors"
                  >
                    <span>{selectedLang?.label || 'Select Language'}</span>
                    <ChevronDownIcon /> 
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-[#111827] border border-gray-700 rounded shadow-lg z-10 max-h-48 overflow-y-auto" style={{scrollbarWidth: 'thin', scrollbarColor: '#374151 #1f2937'}}>
                      {languages.map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => {
                            setSelectedLanguage(lang.id);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition-colors text-[12px]"
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center w-full">
                  <div className="h-px flex-grow bg-gray-700"></div>
                  <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
                  <div className="h-px flex-grow bg-gray-700"></div>
                </div>

                <label className="flex items-center text-[12px] justify-center gap-2 w-full px-4 py-3 border border-gray-700 rounded text-white hover:bg-gray-800 transition-colors cursor-pointer">
                  <span>Use Your Own File</span>
                  <UploadIcon />
                  <input 
                    type="file" 
                    accept="audio/*" 
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <div className="flex items-center w-full">
                  <div className="h-px flex-grow bg-gray-700"></div>
                  <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
                  <div className="h-px flex-grow bg-gray-700"></div>
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Paste YouTube or Audio Link"
                    value={audioUrl}
                    onChange={(e) => setAudioUrl(e.target.value)}
                    className="w-full px-4 py-3 bg-[#111827] border border-gray-700 rounded text-white text-[12px] focus:outline-none focus:border-gray-500 placeholder-gray-500"
                  />
                  <button
                    onClick={handleProcessUrl}
                    disabled={isProcessing}
                    className="w-full px-4 py-3 bg-[#13EF95] text-black rounded text-[12px] font-medium hover:bg-[#0FEF95] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing...' : 'Process URL'}
                  </button>
                  {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col h-full min-h-[400px]">
            <div className="flex-1 bg-[#09090b] border border-gray-800 rounded-lg p-4 relative">
              {transcription ? (
                <div className="text-white text-sm leading-relaxed">
                  {transcription}
                </div>
              ) : (
                <p className="text-sm text-gray-500">Your transcriptions will show here.</p>
              )}
              
              <div className="absolute bottom-4 right-4 flex gap-4">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white text-xs">
                  <img alt="Copy" loading="lazy" width="16" height="16" src="https://cdn.sanity.io/images/10fppwnn/production/5bc8374c2147731aca687fd464adf7d1ae8b10de-16x20.svg" />
                  <span>Copy</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white text-xs">
                  <img alt="Download" loading="lazy" width="16" height="16" src="https://cdn.sanity.io/images/10fppwnn/production/91f2441dc9597207a3996f85a97048efc5618b8a-16x17.svg" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Sub Components ---

  const NavButton = ({ icon, label, active, iconColor, onClick }) => (
    <button
      onClick={onClick}
      className={`
        flex-1 flex items-center justify-center gap-3 rounded-[4px] px-2 py-3 text-[14px] font-semibold tracking-wide
        transition-all duration-300 border
        ${
          active
            ? `border-[#13EF95] text-white bg-gradient-to-b from-[#13EF95]/20 via-[#13EF95]/5 to-transparent shadow-[0_0_20px_-5px_rgba(19,239,149,0.4),inset_0_1px_0_0_rgba(255,255,255,0.1)]`
            : 'border-white/[0.08] bg-[#1F1F1F] text-[#9ca3af] hover:bg-[#2A2A2A] hover:border-white/10 hover:text-white'
        }
      `}
    >
      <span className={`${active ? 'text-[#13EF95] drop-shadow-[0_0_8px_rgba(19,239,149,0.5)]' : iconColor} w-5 h-5 flex items-center justify-center transition-all`}>
        {icon}
      </span>
      <span className="whitespace-nowrap hidden lg:block">{label}</span>
    </button>
  );

  const PillButton = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`
        w-full rounded-full border px-6 py-3 text-sm font-medium text-left
        transition-all duration-300 ease-in-out
        ${
          active
            ? 'border-white/20 bg-white/5 text-white shadow-inner'
            : 'border-white/10 bg-transparent text-[#BBBBBF] hover:border-white/20 hover:bg-white/[0.03] hover:text-white'
        }
      `}
    >
      {label}
    </button>
  );

  const AnalysisItem = ({ label, labelColor, meta, text }) => (
    <div>
      <div className="mb-1">
        <span className={`font-bold ${labelColor}`}>{label}</span>
        <span className="ml-2 font-mono text-xs text-zinc-500">{meta}</span>
      </div>
      <p className="text-[#BBBBBF] leading-[1.6]">{text}</p>
    </div>
  );

  // --- Helpers & SVGs ---

  const PauseIconSVG = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path>
    </svg>
  );

  const PlayIconSVG = () => (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="26" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
      </svg>
  );
  // Kept inline because sprites.svg is likely missing locally
  const ChevronDownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
  );
  // Kept inline because sprites.svg is likely missing locally
  const UploadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
  );

  const WaveformSVG = () => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263 32" className="w-full h-full">
      <path d="M261.501 7.909H263v16.184h-1.499V7.909ZM256.269 11.725h1.5v8.551h-1.5v-8.551ZM251.038 13.979h1.499v4.042h-1.499V13.98ZM245.809 15.02h1.499v1.96h-1.499v-1.96ZM240.886 15.02h1.499v1.96h-1.499v-1.96ZM235.654 13.979h1.499v4.042h-1.499V13.98ZM230.423 11.725h1.499v8.551h-1.499v-8.551ZM225.191 9.121h1.499V22.88h-1.499V9.121ZM219.962 3.82h1.499v24.36h-1.499V3.82ZM214.731 3.088h1.499V28.91h-1.499V3.088ZM209.5 5.465h1.499v21.07H209.5V5.465ZM204.268 0h1.5v32h-1.5V0ZM199.037 7.909h1.499v16.184h-1.499V7.909ZM193.808 11.725h1.499v8.551h-1.499v-8.551ZM188.576 5.465h1.499v21.07h-1.499V5.465ZM183.345 0h1.499v32h-1.499V0ZM178.114 7.909h1.499v16.184h-1.499V7.909ZM172.884 3.82h1.499v24.36h-1.499V3.82ZM167.653 0h1.499v32h-1.499V0ZM162.421 3.82h1.499v24.36h-1.499V3.82ZM157.19 7.909h1.499v16.184h-1.499V7.909ZM151.959 5.465h1.499v21.07h-1.499V5.465ZM146.729 11.725h1.5v8.551h-1.5v-8.551ZM141.498 7.909h1.499v16.184h-1.499V7.909ZM136.267 11.725h1.499v8.551h-1.499v-8.551ZM131.036 7.909h1.499v16.184h-1.499V7.909ZM125.806 3.82h1.499v24.36h-1.499V3.82ZM120.575 1.826h1.499v28.347h-1.499V1.826ZM115.344 0h1.499v32h-1.499V0ZM110.112 3.82h1.499v24.36h-1.499V3.82ZM104.881 9.121h1.499V22.88h-1.499V9.121ZM99.651 5.465h1.499v21.07h-1.499V5.465ZM94.42 0h1.5v32h-1.5V0ZM89.189 3.82h1.499v24.36h-1.5V3.82ZM83.957 7.909h1.5v16.184h-1.5V7.909ZM78.728 11.725h1.5v8.551h-1.5v-8.551ZM73.497 13.979h1.5v4.042h-1.5V13.98ZM68.266 14.842h1.499v2.317h-1.5v-2.317ZM63.034 14.842h1.5v2.317h-1.5v-2.317ZM58.11 12.497h1.5v7.008h-1.5v-7.008ZM52.88 9.121h1.498V22.88H52.88V9.121ZM47.65 5.465h1.5v21.07h-1.5V5.465ZM42.419 9.748h1.499v12.506h-1.5V9.748ZM37.187 1.826h1.5v28.347h-1.5V1.826ZM31.956 5.465h1.5v21.07h-1.5V5.465ZM26.724 0h1.5v32h-1.5V0ZM21.495 7.118h1.5v17.764h-1.5V7.118ZM16.264 10.729h1.5v10.543h-1.5V10.729ZM11.033 11.721h1.499v8.559h-1.5v-8.559ZM5.801 14.842h1.5v2.317H5.8v-2.317ZM.572 14.842h1.5v2.317h-1.5v-2.317Z" fill="currentColor"></path>
    </svg>
  );

  export default VoiceAIHero;