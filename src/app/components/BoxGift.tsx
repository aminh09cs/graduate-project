import React from 'react';
import { useRouter } from 'next/navigation';

export default function BoxGift() {
  const router = useRouter();
  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      router.push('/celebration');
    }, 900); 
  };

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 50
    }}>
      <style>{`
        .box { position: relative; }
        .box::before { content: ""; width: 440px; height: 440px; background-color: transparent; position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 50%; }
        .box-body { position: relative; height: 200px; width: 200px; background-color: #cc231e; border-bottom-left-radius: 5%; border-bottom-right-radius: 5%; box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.3); background: linear-gradient(#762c2c,#ff0303); transition: box-shadow 0.2s; }
        .box-body .img { opacity: 0; transform: translateY(0%); transition: all 0.5s; margin: 0 auto; display: block; }
        .box-body.active { cursor: pointer; animation: box-body 1s forwards ease-in-out; }
        .box-body.active .img { opacity: 1; z-index: 0; transform: translateY(-157px); }
        .box-body.active .box-lid { animation: box-lid 1s forwards ease-in-out; }
        .box-body.active .box-bowtie::before { animation: box-bowtie-left 1.1s forwards ease-in-out; }
        .box-body.active .box-bowtie::after { animation: box-bowtie-right 1.1s forwards ease-in-out; }
        .box-body::after { content: ""; position: absolute; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: 50px; background: linear-gradient(#ffffff,#ffefa0); }
        .box-lid { position: absolute; z-index: 1; left: 50%; transform: translateX(-50%); bottom: 90%; height: 40px; background-color: #cc231e; width: 220px; border-radius: 5%; box-shadow: 0 8px 4px -4px rgba(0,0,0,0.3); }
        .box-lid::after { content: ""; position: absolute; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: 50px; background: linear-gradient(#ffefa0,#fff); }
        .box-bowtie { z-index: 1; height: 100%; }
        .box-bowtie::before, .box-bowtie::after { content: ""; width: 83.33px; height: 83.33px; border: 16.67px solid white; border-radius: 50% 50% 0 50%; position: absolute; bottom: 99%; z-index: -1; }
        .box-bowtie::before { left: 50%; transform: translateX(-100%) skew(10deg, 10deg); }
        .box-bowtie::after { left: 50%; transform: translateX(0%) rotate(90deg) skew(10deg, 10deg); }
        @keyframes box-lid { 0%,42% { transform: translate3d(-50%,0%,0) rotate(0deg); } 60% { transform: translate3d(-85%,-230%,0) rotate(-25deg); } 90%,100% { transform: translate3d(-119%,225%,0) rotate(-70deg); } }
        @keyframes box-body { 0% { transform: translate3d(0%,0%,0) rotate(0deg); } 25% { transform: translate3d(0%,25%,0) rotate(20deg); } 50% { transform: translate3d(0%,-15%,0) rotate(0deg); } 70% { transform: translate3d(0%,0%,0) rotate(0deg); } }
        @keyframes box-bowtie-right { 0%,50%,75% { transform: translateX(0%) rotate(90deg) skew(10deg,10deg); } 90%,100% { transform: translate(-50%,-15%) rotate(45deg) skew(10deg,10deg); box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.3); } }
        @keyframes box-bowtie-left { 0% { transform: translateX(-100%) rotate(0deg) skew(10deg,10deg); } 50%,75% { transform: translate(-50%,-15%) rotate(45deg) skew(10deg,10deg); } 90%,100% { transform: translateX(-100%) rotate(0deg) skew(10deg,10deg); } }
      `}</style>
      <div className="box" style={{ position: 'relative' }}>
        <div className={`box-body${active ? ' active' : ''}`} onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img className="img" src="https://via.placeholder.com/150" alt="placeholder" />
          <div className="box-lid">
            <div className="box-bowtie"></div>
          </div>
        </div>
        <span
          className="absolute text-pink-500 text-lg animate-bounce"
          style={{
            position: 'absolute',
            top: 'calc(100% + 16px)',
            left: '2%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            fontSize: 16,
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          Bấm vào đây để nhận bất ngờ!
        </span>
      </div>
    </div>
  );
} 