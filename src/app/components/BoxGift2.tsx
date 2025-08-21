import React from 'react';

export default function BoxGift2() {
  return (
    <>
      <style>{`
        .gift-box-container {
          position: relative;
          perspective: 1000px;
        }

        .gift-box {
          position: relative;
          width: 200px;
          height: 200px;
          transform-style: preserve-3d;
          transform: rotateX(0deg) rotateY(0deg);
          transition: transform 0.5s;
        }

        .gift-box__side {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(#762c2c,#ff0303);
          border: 2px solid #cc231e;
        }

        .gift-box__side--front { transform: translateZ(100px); }
        .gift-box__side--back { transform: translateZ(-100px) rotateY(180deg); }
        .gift-box__side--left { transform: translateX(-100px) rotateY(-90deg); }
        .gift-box__side--right { transform: translateX(100px) rotateY(90deg); }

        .gift-box__end {
          position: absolute;
          width: 200px;
          height: 200px;
          background: linear-gradient(#762c2c,#ff0303);
          border: 2px solid #cc231e;
        }

        .gift-box__side--top { transform: translateY(-100px) rotateX(90deg); }
        .gift-box__side--bottom { transform: translateY(100px) rotateX(-90deg); }

        .gift-box-lid {
          position: absolute;
          width: 220px;
          height: 40px;
          top: -40px;
          left: -10px;
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }

        .gift-box-lid__side {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(#762c2c,#ff0303);
          border: 2px solid #cc231e;
        }

        .gift-box-lid__side--front { transform: translateZ(20px); }
        .gift-box-lid__side--back { transform: translateZ(-20px) rotateY(180deg); }
        .gift-box-lid__side--left { transform: translateX(-110px) rotateY(-90deg); }
        .gift-box-lid__side--right { transform: translateX(110px) rotateY(90deg); }

        .gift-box-lid__end {
          position: absolute;
          width: 220px;
          height: 220px;
          background: linear-gradient(#762c2c,#ff0303);
          border: 2px solid #cc231e;
        }

        .gift-box-lid__side--top { transform: translateY(-20px) rotateX(90deg); }

        .ribbon-l, .ribbon-r {
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 20px 40px 20px;
          border-color: transparent transparent var(--wrap-ribbon-color) transparent;
          left: 50%;
          transform: translateX(-50%);
          top: var(--gift-box-position);
        }

        .ribbon-l { transform: translateX(-50%) rotate(-45deg); }
        .ribbon-r { transform: translateX(-50%) rotate(45deg); }

        .ribbon-l-end, .ribbon-r-end {
          position: absolute;
          width: 40px;
          height: 40px;
          background: var(--wrap-ribbon-color);
          border-radius: 50%;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .gift-box-container:hover .gift-box {
          transform: rotateX(20deg) rotateY(20deg);
        }

        .gift-box-container:hover .gift-box-lid {
          transform: translateY(-20px) rotateX(-20deg);
        }
      `}</style>
      <div className="gift-box-container">
        <div className="gift-box">
          <div className="gift-box__side gift-box__side--front"></div>
          <div className="gift-box__side gift-box__side--back"></div>
          <div className="gift-box__side gift-box__side--left"></div>
          <div className="gift-box__side gift-box__side--right"></div>
          <div className="gift-box__end gift-box__side--top"></div>
          <div className="gift-box__end gift-box__side--bottom"></div>
          <div className="gift-box-lid">
            <div className="gift-box-lid__side gift-box-lid__side--front"></div>
            <div className="gift-box-lid__side gift-box-lid__side--back"></div>
            <div className="gift-box-lid__side gift-box-lid__side--left"></div>
            <div className="gift-box-lid__side gift-box-lid__side--right"></div>
            <div className="gift-box-lid__end gift-box-lid__side--top"></div>
          </div>
          {Array.from({ length: 41 }).map((_, i) => (
            <React.Fragment key={i}>
              <div
                className="ribbon-l"
                style={{
                  '--gift-box-position': `${i}px`,
                  '--wrap-ribbon-color': i < 3 || i > 37 ? '#cc231e' : '#ff0303'
                } as React.CSSProperties}
              />
              <div
                className="ribbon-r"
                style={{
                  '--gift-box-position': `${i}px`,
                  '--wrap-ribbon-color': i < 3 || i > 37 ? '#cc231e' : '#ff0303'
                } as React.CSSProperties}
              />
            </React.Fragment>
          ))}
          <div className="ribbon-l-end" style={{ '--wrap-ribbon-color': '#ff0303' } as React.CSSProperties} />
          <div className="ribbon-r-end" style={{ '--wrap-ribbon-color': '#ff0303' } as React.CSSProperties} />
        </div>
      </div>
    </>
  );
} 