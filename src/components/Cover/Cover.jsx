import React from 'react';
import './Cover.css';

export default function Cover() {
  return (
    <>
      {/* Front Cover */}
      <div className="front cover">
        <div className="fold-shadow" />
        <div className="cover-inner">
          <h1 className="cover-title">Enigma Diaries</h1>
          <p className="cover-subtitle">Coders? No, Fighters.</p>
        </div>
      </div>

      {/* Back of Cover (inside first page) */}
      <div className="back paper-texture ruled">
        <div className="fold-shadow-back" />
        <div className="layout-center" style={{ opacity: 0.7 }}>
          <h2 className="handwritten" style={{ fontSize: '2rem', textDecoration: 'underline', color: '#1c2e36' }}>
            Property of Enigma Crew
          </h2>
          <p className="cursive" style={{ marginTop: '25px' }}>
            If found, do not return.<br />Just read it and smile.
          </p>
          <div className="coffee-stain" style={{ top: '20%', left: '10%', transform: 'rotate(15deg) scale(0.8)' }} />
          <div className="doodle doodle-star" style={{ bottom: '50px', right: '50px' }} />
        </div>
      </div>
    </>
  );
}
