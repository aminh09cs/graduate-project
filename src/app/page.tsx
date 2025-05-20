'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';

export default function Home() {
  const progressRef = useRef<HTMLDivElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const progressBar = progressRef.current;
    const emoji = emojiRef.current;
    const container = containerRef.current;
    if (!progressBar || !emoji || !container) return;

    // Create the progress bar animation
    gsap.to(progressBar, {
      width: '100%',
      duration: 5,
      ease: 'power2.inOut',
      onComplete: () => {
        router.push('/celebration');
      }
    });

    // Animate emoji
    gsap.to(emoji, {
      y: -10,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Create flying hearts animation
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.className = 'absolute text-xl sm:text-2xl md:text-3xl';
      container.appendChild(heart);

      const startY = Math.random() * 20 - 10; // Random vertical position
      const progressWidth = progressBar.offsetWidth;
      
      gsap.fromTo(
        heart,
        {
          x: -50,
          y: startY,
          opacity: 0,
          scale: 0.5,
        },
        {
          x: progressWidth,
          y: startY + (Math.random() * 20 - 10),
          opacity: 1,
          scale: 1,
          duration: 2 + Math.random(),
          ease: 'power1.inOut',
          onComplete: () => {
            container.removeChild(heart);
          },
        }
      );
    };

    // Create hearts periodically
    const heartInterval = setInterval(createHeart, 300);

    return () => {
      clearInterval(heartInterval);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
      <div className="relative w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[24rem]">
        {/* Cute cloud background */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl">
          ☁️
        </div>
        
        {/* Progress bar container with hearts */}
        <div ref={containerRef} className="relative h-8 sm:h-10">
          {/* Progress bar background */}
          <div className="absolute inset-0 bg-white rounded-full shadow-lg border-2 border-pink-200 overflow-hidden">
            {/* Progress bar */}
            <div
              ref={progressRef}
              className="h-full w-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"
            />
          </div>
          
          {/* Emoji that moves with progress */}
          <div 
            ref={emojiRef}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-xl sm:text-2xl md:text-3xl"
            style={{ marginLeft: '-1.5rem' }}
          >
            🎓
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl">
          🌈
        </div>
      </div>

      {/* Loading text with cute animation */}
      <div className="mt-16 text-center">
        <p className="text-base sm:text-lg md:text-xl text-purple-600 font-medium animate-pulse">
          Đang chuẩn bị điều bất ngờ...
        </p>
        <div className="flex justify-center space-x-2 mt-4">
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0s' }}>✨</span>
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</span>
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🎊</span>
        </div>
      </div>
    </div>
  );
} 