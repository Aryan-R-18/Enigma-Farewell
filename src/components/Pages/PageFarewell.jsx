import React from 'react';
import './PageFarewell.css';
import InvitationOverlay from '../Envelope/InvitationOverlay';

const LIGHTS = Array.from({ length: 18 });

export default function PageFarewell({ mobileMode = false }) {
  const [overlayOpen, setOverlayOpen] = React.useState(false);

  const trigger = (
    <div className="pocket-container">
      <div className="pocket-back" />
      <div
        className="mini-envelope"
        id="open-invitation"
        title="Click to open invitation"
        onClick={(e) => { e.stopPropagation(); setOverlayOpen(true); }}
      >
        <div className="wax-seal" />
      </div>
      <div className="pocket-front">
        <span className="pocket-label">To: Seniors</span>
      </div>
      <div className="doodle doodle-arrow" style={{ position: 'absolute', top: '-60px', left: '-20px', transform: 'rotate(-100deg) scaleX(-1)' }} />
      <span className="cursive open-me-label">Open me!</span>
    </div>
  );

  /* Mobile: just render the pocket trigger inline, no book page wrappers */
  if (mobileMode) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '16px' }}>
        <h2 className="handwritten" style={{ fontSize: '1.8rem', color: '#1c2e36' }}>A Final Note...</h2>
        {trigger}
        {overlayOpen && <InvitationOverlay onClose={() => setOverlayOpen(false)} />}
      </div>
    );
  }

  return (
    <>
      {/* Front — Pocket with envelope */}
      <div className="front paper-texture ruled">
        <div className="fold-shadow" />
        <div className="layout-center">
          <h2 className="title handwritten" style={{ color: '#1c2e36', marginBottom: '20px', border: 'none' }}>
            A Final Note...
          </h2>
          {trigger}
        </div>
      </div>

      {/* Back Cover */}
      <div className="back cover" style={{ borderRadius: '14px 2px 2px 14px' }}>
        <div className="fold-shadow-back" />
        <div className="doodle doodle-star" style={{ opacity: 0.2, width: '70px', height: '70px' }} />
        <p className="cover-subtitle" style={{ marginTop: '45px', transform: 'none', fontSize: '1.6rem', letterSpacing: '1px' }}>
          Some bonds are forever.
        </p>
      </div>

      {overlayOpen && <InvitationOverlay onClose={() => setOverlayOpen(false)} />}
    </>
  );
}
