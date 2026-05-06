import React, { useState, useRef } from 'react';
import './MusicToggle.css';

const MUSIC_URL =
  'https://cdn.pixabay.com/download/audio/2022/05/16/audio_b2f9ebfb14.mp3?filename=acoustic-guitars-110023.mp3';

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.volume = 0.5;
      audio.play();
    }
    setPlaying((p) => !p);
  };

  return (
    <>
      <audio ref={audioRef} loop src={MUSIC_URL} />
      <button className="music-toggle" onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}>
        {playing ? '⏸️ Pause Music' : '🎵 Play Music'}
      </button>
    </>
  );
}
