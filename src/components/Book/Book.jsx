import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Book.css';
import Cover from '../Cover/Cover';
import PageBeginning from '../Pages/PageBeginning';
import PageStruggles from '../Pages/PageStruggles';
import PageLateNights from '../Pages/PageLateNights';
import PageRealization from '../Pages/PageRealization';
import PageFarewell from '../Pages/PageFarewell';
import MobileNotepad from '../MobileNotepad/MobileNotepad';
import useMediaQuery from '../../hooks/useMediaQuery';

const TOTAL_PAGES = 6;
const AUTO_TURN_DELAY = 6500;

export default function Book() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [currentPage, setCurrentPage] = useState(0);
  const [flipped, setFlipped] = useState(Array(TOTAL_PAGES).fill(false));
  const bookRef = useRef(null);
  const autoTurnRef = useRef(null);

  // Compute z-indexes so pages stack correctly
  const getZIndex = useCallback(
    (index) => (index < currentPage ? index : TOTAL_PAGES - index),
    [currentPage]
  );

  const flipForward = useCallback(() => {
    if (currentPage >= TOTAL_PAGES) return;
    setFlipped((prev) => {
      const next = [...prev];
      next[currentPage] = true;
      return next;
    });
    setCurrentPage((p) => p + 1);
  }, [currentPage]);

  const flipBackward = useCallback(() => {
    if (currentPage <= 0) return;
    const prevPage = currentPage - 1;
    setFlipped((prev) => {
      const next = [...prev];
      next[prevPage] = false;
      return next;
    });
    setCurrentPage(prevPage);
  }, [currentPage]);

  // Auto-turn timer
  const scheduleAutoTurn = useCallback(() => {
    clearTimeout(autoTurnRef.current);
    if (currentPage >= TOTAL_PAGES - 1) return;
    autoTurnRef.current = setTimeout(flipForward, AUTO_TURN_DELAY);
  }, [currentPage, flipForward]);

  useEffect(() => {
    scheduleAutoTurn();
    return () => clearTimeout(autoTurnRef.current);
  }, [scheduleAutoTurn]);

  // Click handler
  const handleBookClick = (e) => {
    const rect = bookRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    scheduleAutoTurn();
    if (clickX > rect.width / 2) {
      flipForward();
    } else {
      flipBackward();
    }
  };

  // Touch swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    scheduleAutoTurn();
  };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (diff > 50) flipForward();
    else if (diff < -50) flipBackward();
  };

  const pages = [
    <Cover key="cover" />,
    <PageBeginning key="beginning" />,
    <PageStruggles key="struggles" />,
    <PageLateNights key="lateNights" />,
    <PageRealization key="realization" />,
    <PageFarewell key="farewell" />,
  ];

  // Mobile: render notepad instead of 3D book
  if (isMobile) return <MobileNotepad />;

  return (
    <div className="scene">
      <div
        className="book"
        ref={bookRef}
        onClick={handleBookClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="spiral-wire" />

        {pages.map((pageContent, index) => (
          <div
            key={index}
            className={`page${flipped[index] ? ' flipped' : ''}`}
            style={{ zIndex: getZIndex(index) }}
          >
            {pageContent}
          </div>
        ))}
      </div>

      <div className="hint">Click right side to turn forward, left to turn back</div>
    </div>
  );
}
