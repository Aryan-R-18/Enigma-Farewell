import { useEffect, useRef } from 'react';

const MUSIC_URL =
  '/bgplay.mp3';

export default function MusicToggle() {
  const audioRef = useRef(null);
  const started  = useRef(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop   = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const start = () => {
      if (started.current) return;
      started.current = true;
      audio.play().catch(() => {});
      // remove listeners once started
      window.removeEventListener('click',      start);
      window.removeEventListener('touchstart', start);
      window.removeEventListener('keydown',    start);
    };

    // Try immediate autoplay first (works if browser allows it)
    audio.play().then(() => {
      started.current = true;
    }).catch(() => {
      // Blocked — wait for first interaction
      window.addEventListener('click',      start);
      window.addEventListener('touchstart', start);
      window.addEventListener('keydown',    start);
    });

    return () => {
      audio.pause();
      window.removeEventListener('click',      start);
      window.removeEventListener('touchstart', start);
      window.removeEventListener('keydown',    start);
    };
  }, []);

  return null; // no UI
}
