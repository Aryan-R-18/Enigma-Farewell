import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './InvitationOverlay.css';

export default function InvitationOverlay({ onClose }) {
  const [active,  setActive]  = useState(false);
  const [isOpen,  setIsOpen]  = useState(false);
  const timers = useRef([]);

  const t = (fn, ms) => { const id = setTimeout(fn, ms); timers.current.push(id); };

  useEffect(() => {
    t(() => setActive(true), 50);   // backdrop fades in
    t(() => setIsOpen(true), 600);  // envelope auto-opens
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    t(() => setActive(false), 1400);
    t(() => onClose(),        1900);
  };

  return createPortal(
    <div
      className={`invitation-overlay${active ? ' active' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <button className="close-btn" onClick={handleClose} aria-label="Close">✕</button>

      <div className="float-wrapper">
        <div
          className={`envelope${isOpen ? ' is-open' : ''}`}
          onClick={() => setIsOpen((o) => !o)}
          title="Click to open / close"
        >
          {/* Back inside wall */}
          <div className="envelope-back" />

          {/* Letter */}
          <div className="letter">
            <p className="message">
              You are warmly invited<br />
              to our Farewell Party!
              <span className="juniors-text">~ Your Juniors ✨</span>
            </p>
          </div>

          {/* Bottom & side flaps */}
          <div className="front-flaps-wrapper">
            <div className="front-flaps" />
          </div>

          {/* Top flap with heart seal */}
          <div className="top-flap">
            <div className="top-flap-inner" />
            <div className="top-flap-outer">
              <svg className="heart" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
