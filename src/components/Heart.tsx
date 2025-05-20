import React from 'react';

interface HeartProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  variant?: 'classic' | 'curved';
}

const Heart: React.FC<HeartProps> = ({ 
  width = 20, 
  height = 20, 
  color = "#FF9AAC",
  className = "",
  variant = 'classic',
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 40 24" 
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === 'curved' ? (
        // Trái tim cong, mô phỏng theo mẫu
        <path d="M36 4c-3-3-8-3-11 1-1 1-2 2-3 4-1-2-2-3-3-4C16 1 11 1 8 4c-3 3-3 8 1 11l11 8 11-8c4-3 4-8 1-11z" />
      ) : (
        // Trái tim classic
        <path d="M20 22.35l-2.9-2.64C7.4 13.36 4 10.28 4 6.5 4 3.42 6.42 1 9.5 1c2.04 0 4.04 1 5.5 2.09C16.46 2 18.46 1 20.5 1 23.58 1 26 3.42 26 6.5c0 3.78-3.4 6.86-13.1 13.21L20 22.35z" />
      )}
    </svg>
  );
};

export default Heart; 