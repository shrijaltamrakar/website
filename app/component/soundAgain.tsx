/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

const BoopButton = () => {
  const [play, { stop }] = useSound('/assets/audio/rawhide.mp3');
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    setIsPlaying(true);
    play();
  };

  const stopMusic = () => {
    setIsPlaying(false);
    stop();
  };

  useEffect(() => {
    const playAudioOnScroll = () => {
      if (!isPlaying) {
        playMusic();
        setTimeout(stopMusic, 5000);
      }
    };

    window.addEventListener('scroll', playAudioOnScroll);

    return () => {
      window.removeEventListener('scroll', playAudioOnScroll);
    };
  }, [isPlaying, playMusic, stopMusic]);

  return (
    <div className="fixed right-4 bottom-4">
      {!isPlaying ? (
        <Image
          src="/assets/image/PLay.png"
          height={100}
          width={100}
          onClick={playMusic}
          alt="play"
        />
      ) : (
        <Image
          src="/assets/image/Pause.jpeg"
          height={100}
          width={100}
          onClick={stopMusic}
          alt="pause"
        />
      )}{' '}
    </div>
  );
};

export default BoopButton;
