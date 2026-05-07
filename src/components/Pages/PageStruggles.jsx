import React from 'react';

export default function PageStruggles() {
  return (
    <>
      {/* Front */}
      <div className="front paper-texture ruled">
        <div className="fold-shadow" />
        <div className="layout-scattered">
          <h2 className="title handwritten" style={{ color: '#8c2727', marginLeft: '10px' }}>
            The Hostel Struggles
          </h2>

          <div className="polaroid" style={{ transform: 'rotate(1deg)', width: '90%', marginLeft: '5%' }}>
            <div className="tape tape-3" style={{ bottom: '-8px', right: '-8px' }} />
            <div className="photo-inner">
              <img
                src="/pic6.jpg"
                alt="Group study"
              />
            </div>
            <div className="polaroid-caption">10% study, 90% panic</div>
          </div>

          <p className="cursive" style={{ marginTop: '20px', padding: '0 10px', textAlign: 'center', position: 'relative' }}>
            "Success ki buniyaad sirf dimaag nahi, hostel ki bakchodi bhi hoti hai"
          </p>
        </div>
      </div>

      {/* Back */}
      <div className="back paper-texture ruled">
        <div className="fold-shadow-back" />
        <div className="layout-center">
          <div className="polaroid" style={{ transform: 'rotate(-4deg)', width: '95%' }}>
            <div className="tape tape-1" style={{ width: '100px' }} />
            <div className="photo-inner">
              <img
                src="/pic4.jpg"
                alt="Sports ground"
              />
            </div>
            <div className="polaroid-caption" style={{ fontSize: '1.3rem' }}>We Fought and we Won.</div>
          </div>

          <h3 className="handwritten" style={{ fontSize: '1.9rem', marginTop: '25px', color: '#1c2e36', padding: '0 10px' }}>
            "Pata hai yahan pe loser kisko kehte hain? Jiske paas jeetne ka option ho, aur phir bhi woh haar maan le."
          </h3>
        </div>
      </div>
    </>
  );
}
