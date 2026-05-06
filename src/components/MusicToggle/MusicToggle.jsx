import { useEffect, useRef } from 'react';

const MUSIC_URL =
  '/bgplay.mp3';

export default function MusicToggle() {
  const audioRef = useRef(null);
  const started  = useRef(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop        = true;
    audio.volume      = 0.45;
    audio.preload     = 'auto';
    audioRef.current  = audio;

    const start = () => {
      if (started.current) return;
      started.current = true;
      audio.play().catch(() => {});
      window.removeEventListener('click',      start, true);
      window.removeEventListener('touchstart', start, true);
      window.removeEventListener('touchend',   start, true);
      window.removeEventListener('keydown',    start, true);
    };

    // Try immediate autoplay (works on desktop / some browsers)
    audio.play().then(() => {
      started.current = true;
    }).catch(() => {
      // Blocked — fire on first user interaction anywhere on the page
      // Use capture phase so it fires before anything else consumes the event
      window.addEventListener('click',      start, true);
      window.addEventListener('touchstart', start, true);
      window.addEventListener('touchend',   start, true);
      window.addEventListener('keydown',    start, true);
    });

    return () => {
      audio.pause();
      audio.src = '';
      window.removeEventListener('click',      start, true);
      window.removeEventListener('touchstart', start, true);
      window.removeEventListener('touchend',   start, true);
      window.removeEventListener('keydown',    start, true);
    };
  }, []);

  return null;
}
