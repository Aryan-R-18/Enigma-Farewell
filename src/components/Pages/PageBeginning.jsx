import React from 'react';

export default function PageBeginning() {
  return (
    <>
      {/* Front */}
      <div className="front paper-texture ruled">
        <div className="fold-shadow" />
        <div className="layout-scattered">
          <div className="coffee-stain" style={{ top: '60%', right: '5%', transform: 'rotate(80deg)' }} />

          <h2 className="title handwritten">The Beginning</h2>

          <div className="polaroid" style={{ transform: 'rotate(-3deg)', marginTop: '5px', zIndex: 2 }}>
            <div className="tape tape-1" />
            <div className="photo-inner">
              <img
                src="/pic2.jpg"
                alt="Friends gathering"
              />
            </div>
            <div className="polaroid-caption">Where it all started.</div>
          </div>

          <div className="torn-paper" style={{ bottom: '10px', right: '10px', width: '85%' }}>
            <div className="paperclip" style={{ top: '-20px', left: '30px', transform: 'rotate(-10deg)' }} />
            "Humne toh bas dosti ki thi... humein kya pata tha ki rishtedaari ho jayegi."
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="back paper-texture ruled">
        <div className="fold-shadow-back" />
        <div className="layout-scattered">
          <div className="polaroid" style={{ transform: 'rotate(4deg)', width: '85%', float: 'right', marginTop: '20px', marginRight: '20px' }}>
            <div className="tape tape-2" style={{ top: '-8px', left: '-8px' }} />
            <div className="photo-inner">
              <img
                src="/pic1.jpeg"
                alt="Messy room"
              />
            </div>
            <div className="polaroid-caption">4 walls, infinite chaos.</div>
          </div>

          <p className="cursive" style={{ position: 'absolute', bottom: '60px', left: '20px', width: '85%', zIndex: 2, textAlign: 'center', fontSize: '1.5rem' }}>
            "Success ke baad ka plan sabke paas hai... lekin agar fail ho gaye, toh kaise deal karna hai... koi baat hi nahi karna chahta."
          </p>
        </div>
      </div>
    </>
  );
}
