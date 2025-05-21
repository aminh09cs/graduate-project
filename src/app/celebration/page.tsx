'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';

export default function CelebrationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create fireworks
    const createFirework = (x: number, y: number) => {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
      const particles = 30;
      const size = Math.max(window.innerWidth, window.innerHeight) < 640 ? 1.2 : 2;
      for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute';
        particle.style.width = `${size * 0.75}rem`;
        particle.style.height = `${size * 0.75}rem`;
        particle.style.borderRadius = '9999px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(particle);

        const angle = (i / particles) * Math.PI * 2;
        const velocity = size + Math.random() * size;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        gsap.fromTo(
          particle,
          {
            x: x,
            y: y,
            scale: 1,
            opacity: 1,
          },
          {
            x: x + vx * 40 * size,
            y: y + vy * 40 * size,
            scale: 0,
            opacity: 0,
            duration: 1 + Math.random(),
            ease: 'power2.out',
            onComplete: () => {
              container.removeChild(particle);
            },
          }
        );
      }
    };

    // Create multiple fireworks
    const createFireworks = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createFirework(
            Math.random() * width,
            Math.random() * height * 0.5
          );
        }, i * 1000);
      }
    };

    createFireworks();
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 animate-bounce text-center z-10">Chúc Mừng Tốt Nghiệp!</h1>
      <p className="text-base sm:text-xl md:text-2xl text-center px-2 z-10">
        Chúc bạn thành công trên con đường sắp tới!
      </p>
    </div>
  );
} 