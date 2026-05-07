import { useEffect } from 'react';
import { audio } from '../../audio';

export default function MusicToggle() {
  useEffect(() => {
    const start = () => {
      audio.play().catch(() => {});
      window.removeEventListener('click',      start, true);
      window.removeEventListener('touchstart', start, true);
      window.removeEventListener('touchend',   start, true);
      window.removeEventListener('keydown',    start, true);
    };

    audio.play().catch(() => {
      window.addEventListener('click',      start, true);
      window.addEventListener('touchstart', start, true);
      window.addEventListener('touchend',   start, true);
      window.addEventListener('keydown',    start, true);
    });

    return () => {
      window.removeEventListener('click',      start, true);
      window.removeEventListener('touchstart', start, true);
      window.removeEventListener('touchend',   start, true);
      window.removeEventListener('keydown',    start, true);
    };
  }, []);

  return null;
}
