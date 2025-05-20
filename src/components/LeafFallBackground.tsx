import React, { useEffect, useRef } from 'react';
import { LEAF_IMAGES, LEAF_COUNT } from '../constants/leaf';

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

const LeafFallBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leaves: HTMLImageElement[] = [];
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < LEAF_COUNT; i++) {
      const leaf = document.createElement('img');
      leaf.src = LEAF_IMAGES[Math.floor(Math.random() * LEAF_IMAGES.length)];
      leaf.style.position = 'fixed';
      leaf.style.left = `${randomBetween(0, 100)}vw`;
      leaf.style.top = `${randomBetween(-20, 0)}vh`;
      leaf.style.width = `${randomBetween(24, 48)}px`;
      leaf.style.height = 'auto';
      leaf.style.pointerEvents = 'none';
      leaf.style.zIndex = '1';
      leaf.style.opacity = String(randomBetween(0.7, 1));
      leaf.style.transform = `rotate(${randomBetween(-40, 40)}deg)`;
      leaf.style.transition = 'none';

      // Animation
      const duration = randomBetween(6, 14);
      const delay = randomBetween(0, 6);
      leaf.animate([
        {
          transform: leaf.style.transform,
          top: leaf.style.top,
          left: leaf.style.left,
          opacity: leaf.style.opacity,
        },
        {
          transform: `rotate(${randomBetween(-80, 80)}deg)`,
          top: '110vh',
          left: `${randomBetween(0, 100)}vw`,
          opacity: 0.8,
        },
      ], {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: Infinity,
        easing: 'ease-in',
      });

      container.appendChild(leaf);
      leaves.push(leaf);
    }
    return () => {
      leaves.forEach(leaf => container.removeChild(leaf));
    };
  }, []);

  return <div ref={containerRef} style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 1 }} />;
};

export default LeafFallBackground; 