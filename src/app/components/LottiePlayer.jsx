'use client';

import { useEffect } from 'react';

export default function LottiePlayer() {
  useEffect(() => {
  
    import('@lottiefiles/dotlottie-wc');
  }, []);

  return (
    <dotlottie-wc 
      src="https://lottie.host/a0a80134-5be7-420e-a153-d8dcb843ddaa/EH72MityGg.lottie"
      style={{ width: '200px', height: '200px', pointerEvents: 'none' }}
      speed="1"
      autoplay
      loop
    />
  );
}
