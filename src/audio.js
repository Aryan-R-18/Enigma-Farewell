// Shared audio singleton — imported by both MusicToggle and MobileMusicBtn
export const audio = new Audio('/bgplay.mp3');
audio.loop    = true;
audio.volume  = 0.45;
audio.preload = 'auto';
