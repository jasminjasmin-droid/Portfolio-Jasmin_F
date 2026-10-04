import React, { useRef, useState, useCallback } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt in degrees
  glare?: boolean;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxTilt = 7,
  glare = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`,
        transition: 'transform 0.08s ease-out',
      });

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlareStyle({
          opacity: 1,
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(212, 175, 55, 0.18), transparent 70%)`,
          transition: 'opacity 0.15s ease-out',
        });
      }
    },
    [maxTilt, glare]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
    });
    if (glare) {
      setGlareStyle({
        opacity: 0,
        transition: 'opacity 0.4s ease-out',
      });
    }
  }, [glare]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative will-change-transform transform-gpu ${className}`}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
