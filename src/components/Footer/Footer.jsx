import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>With&nbsp;</span>
      <span className="footer-heart">♥</span>
      <span>&nbsp;by&nbsp;</span>
      <img
        src="/enigma-logo.png"
        alt="Enigma"
        className="footer-logo"
      />
    </footer>
  );
}
