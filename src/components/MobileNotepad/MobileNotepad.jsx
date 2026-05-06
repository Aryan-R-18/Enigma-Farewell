import React, { useState, useRef } from 'react';
import './MobileNotepad.css';
import PageFarewell from '../Pages/PageFarewell';

const RINGS = Array.from({ length: 9 });

/* ── Page definitions ── */
const NP_PAGES = [
  { id: 'cover',       type: 'cover' },
  { id: 'beginning',   type: 'content',
    title: 'The Beginning',
    image: { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop', alt: 'Friends gathering', caption: 'Where it all started.' },
    quote: '"Humne toh bas dosti ki thi... humein kya pata tha ki rishtedaari ho jayegi."',
  },
  { id: 'struggles',   type: 'content',
    title: 'The Struggles', titleColor: 'red',
    image: { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop', alt: 'Group study', caption: '10% study, 90% panic' },
    quote: '"Pata hai yahan pe loser kisko kehte hain? Jiske paas jeetne ka option ho, aur phir bhi woh haar maan le."',
  },
  { id: 'lateNights',  type: 'content',
    title: 'Late Nights',
    image: { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop', alt: 'Late night food', caption: '2 AM Maggi = Emotion' },
    quote: '"Hostel ki maggi aur doston ki bakwaas... dono mein koi logic nahi hota, bas maza aata hai."',
  },
  { id: 'realization', type: 'content',
    title: 'The Realization',
    image: { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop', alt: 'Friends laughing', caption: 'The Chhichhore Gang' },
    quote: '"Tumhara result decide nahi karta ki tum loser ho ki nahi, tumhari koshish decide karti hai."',
  },
  { id: 'farewell',    type: 'farewell' },
];

const TOTAL = NP_PAGES.length;

/* ── Page state helper ── */
function getPageState(index, current, exiting) {
  if (index === exiting)          return 'np-exit';
  if (index === current)          return 'np-current';
  if (index === current + 1)      return 'np-below';
  if (index === current + 2)      return 'np-below-2';
  if (index < current)            return 'np-done';
  return 'np-below-2';
}

export default function MobileNotepad() {
  const [current,  setCurrent]  = useState(0);
  const [exiting,  setExiting]  = useState(null);
  const touchStartY = useRef(0);

  const goNext = () => {
    if (current >= TOTAL - 1 || exiting !== null) return;
    setExiting(current);
    setTimeout(() => {
      setCurrent((c) => c + 1);
      setExiting(null);
    }, 520);
  };

  const goPrev = () => {
    if (current <= 0 || exiting !== null) return;
    // Slide current page back down, reveal previous
    setCurrent((c) => c - 1);
  };

  const handleTouchStart = (e) => { touchStartY.current = e.changedTouches[0].clientY; };
  const handleTouchEnd   = (e) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (diff > 50)  goNext();
    if (diff < -50) goPrev();
  };

  return (
    <div
      className="notepad-scene"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Spiral rings bar */}
      <div className="notepad-rings">
        {RINGS.map((_, i) => <div key={i} className="ring" />)}
      </div>

      {/* Pages */}
      <div className="notepad-pages">
        {NP_PAGES.map((page, index) => {
          const state = getPageState(index, current, exiting);
          return (
            <div
              key={page.id}
              className={`notepad-page ${state}${page.type === 'cover' ? ' np-cover' : ''}`}
            >
              <PageContent page={page} />
            </div>
          );
        })}
      </div>

      {/* Nav */}
      <div className="np-nav">
        <button className="np-nav-btn" onClick={goPrev} disabled={current === 0}>
          ↓ Back
        </button>
        <span className="np-page-counter">{current + 1} / {TOTAL}</span>
        <button className="np-nav-btn" onClick={goNext} disabled={current === TOTAL - 1}>
          ↑ Next
        </button>
      </div>

      <div className="np-hint">Swipe up to turn page</div>
    </div>
  );
}

/* ── Renders the right content per page type ── */
function PageContent({ page }) {
  if (page.type === 'cover') {
    return (
      <>
        <div className="np-cover-title">The Hostel Diaries</div>
        <div className="np-cover-sub">Losers? No, Fighters.</div>
      </>
    );
  }

  if (page.type === 'farewell') {
    return (
      <div className="np-page-content">
        {/* Reuse the farewell pocket/envelope trigger */}
        <PageFarewell mobileMode />
      </div>
    );
  }

  // Standard content page
  return (
    <div className="np-page-content">
      <div className={`np-page-title${page.titleColor === 'red' ? ' red' : ''}`}>
        {page.title}
      </div>

      {page.image && (
        <div className="np-photo">
          <div className="np-tape" />
          <img src={page.image.src} alt={page.image.alt} loading="lazy" />
          <div className="np-photo-caption">{page.image.caption}</div>
        </div>
      )}

      {page.quote && (
        <p className="np-quote">{page.quote}</p>
      )}
    </div>
  );
}
