import React from 'react';

export default function PageLateNights() {
  return (
    <>
      {/* Front */}
      <div className="front paper-texture ruled">
        <div className="fold-shadow" />
        <div className="layout-scattered">
          <h2 className="title handwritten" style={{ color: '#2c241b', marginLeft: '10px' }}>
            Late Nights
          </h2>

          <div className="polaroid" style={{ transform: 'rotate(-2deg)', width: '88%', marginLeft: '8%' }}>
            <div className="tape tape-2" style={{ top: '-5px', left: '-10px' }} />
            <div className="photo-inner">
              <img
                src="/pic3.jpg"
                alt="Late night food"
              />
            </div>
            <div className="polaroid-caption">2 AM Maggi = Emotion</div>
          </div>

          <div className="torn-paper" style={{ bottom: '25px', left: '15px', width: '85%', transform: 'rotate(1deg)' }}>
            <p className="cursive" style={{ fontSize: '1.3rem', textAlign: 'center' }}>
              "Hostel ki maggi aur doston ki bakwaas... dono mein koi logic nahi hota, bas maza aata hai."
            </p>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="back paper-texture ruled">
        <div className="fold-shadow-back" />
        <div className="layout-scattered">
          <div className="polaroid" style={{ transform: 'rotate(3deg)', width: '92%', marginTop: '20px', float: 'left', marginLeft: '15px' }}>
            <div className="tape tape-3" style={{ bottom: '-8px', right: '-8px' }} />
            <div className="photo-inner">
              <img
                src="/pic7.jpg"
                alt="Terrace chilling"
              />
            </div>
            <div className="polaroid-caption">The Terrace Talks</div>
          </div>

          <p className="cursive" style={{ position: 'absolute', bottom: '80px', left: '20px', width: '85%', textAlign: 'center', fontSize: '1.6rem', color: '#1c2e36' }}>
            Sabse deep conversations hamesha raat ke 3 baje, hostel ki chhat par hoti hain.
          </p>

          <div className="doodle doodle-star" style={{ bottom: '140px', right: '40px', opacity: 0.5 }} />
        </div>
      </div>
    </>
  );
}
