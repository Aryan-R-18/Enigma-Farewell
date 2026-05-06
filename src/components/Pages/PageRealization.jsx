import React from 'react';

export default function PageRealization() {
  return (
    <>
      {/* Front */}
      <div className="front paper-texture ruled">
        <div className="fold-shadow" />
        <div className="layout-scattered">
          <div className="polaroid" style={{ transform: 'rotate(3deg)', width: '92%', marginTop: '15px', marginLeft: '10px' }}>
            <div className="tape tape-1" style={{ transform: 'translateX(-50%) rotate(2deg)' }} />
            <div className="photo-inner">
              <img
                src="/pic8.JPG"
                alt="Friends laughing"
              />
            </div>
            <div className="polaroid-caption">The Chhichhore Gang</div>
          </div>

          <div className="torn-paper" style={{ bottom: '30px', left: '20px', width: '85%', transform: 'rotate(-1deg)', padding: '15px' }}>
            <p className="cursive" style={{ fontSize: '1.35rem', textAlign: 'center' }}>
              "Tumhara result decide nahi karta ki tum loser ho ki nahi, tumhari koshish decide karti hai."
            </p>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="back paper-texture ruled">
        <div className="fold-shadow-back" />
        <div className="layout-center">
          <h2 className="handwritten" style={{ fontSize: '3.5rem', color: '#8c2727', transform: 'rotate(-4deg)', textShadow: '1px 1px 0 rgba(0,0,0,0.1)' }}>
            Time flies...
          </h2>
          <div className="doodle doodle-star" style={{ marginTop: '15px', transform: 'scale(1.2)', position: 'relative' }} />
          <p className="cursive" style={{ marginTop: '35px', fontSize: '1.8rem', padding: '0 20px' }}>
            "Ek hi life hai... usme bhi itna tension?"
            <br /><br />
            Suddenly, the bags are packed. The posters are off the walls. The corridors are silent.
          </p>
        </div>
      </div>
    </>
  );
}
