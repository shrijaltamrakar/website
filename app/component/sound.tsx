// components/AutoPlaySoundOnScroll.tsx

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AutoPlaySoundOnScroll: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true });
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    console.log("HEREER")
    const playAudioOnScroll = () => {
      handlePlayClick()
      if (audioElement && inView && userInteracted) {
        audioElement.play().catch(error => {
          // Autoplay might still be blocked, handle the error here
          console.error('Autoplay error:', error);
        });
      }
    };

    window.addEventListener('scroll', playAudioOnScroll);

    return () => {
      window.removeEventListener('scroll', playAudioOnScroll);
    };
  }, [inView, userInteracted]);

  const handlePlayClick = () => {
    setUserInteracted(true);
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play().catch(error => {
        // Autoplay might still be blocked, handle the error here
        console.error('Autoplay error:', error);
      });
    }
  };

  const handlePauseClick = () => {
    setUserInteracted(true);
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause()
    }
  };

  

  return (
    <div ref={ref}>
      <button onClick={handlePlayClick}>Play Audio</button>
      <button onClick={handlePauseClick}>Pause</button>
      <audio ref={audioRef} controls={false}>
      <source src="/assets/audio/rawhide.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AutoPlaySoundOnScroll;
