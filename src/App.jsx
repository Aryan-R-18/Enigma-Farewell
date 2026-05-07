import React from 'react';
import Book from './components/Book/Book';
import MusicToggle from './components/MusicToggle/MusicToggle';
import MobileMusicBtn from './components/MobileMusicBtn/MobileMusicBtn';
import Footer from './components/Footer/Footer';
import useMediaQuery from './hooks/useMediaQuery';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <MusicToggle />
      <Book />
      <Footer />
      {isMobile && <MobileMusicBtn />}
    </>
  );
}
