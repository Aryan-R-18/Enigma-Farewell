import React from 'react';
import Book from './components/Book/Book';
import MusicToggle from './components/MusicToggle/MusicToggle';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <MusicToggle />
      <Book />
      <Footer />
    </>
  );
}
