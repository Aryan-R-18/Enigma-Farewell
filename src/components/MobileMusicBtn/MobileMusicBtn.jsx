import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { audio } from '../../audio';
import './MobileMusicBtn.css';

export default function MobileMusicBtn() {
  const [playing, setPlaying] = useState(!audio.paused);

  useEffect(() => {
    const onPlay  = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('play',  onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('play',  onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const toggle = (e) => {
    e.stopPropagation();
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return createPortal(
    <button
      className="mobile-music-btn"
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
    >
      {playing ? '⏸' : '▶'}
    </button>,
    document.body
  );
}
