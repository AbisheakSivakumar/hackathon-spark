
import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    // Configuration
    const particleCount = 30;
    const colors = ['#0ea5e9', '#67e8f9', '#93c5fd', '#3b82f6', '#a5f3fc'];
    const minSize = 5;
    const maxSize = 20;
    const minDuration = 15;
    const maxDuration = 40;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * (maxSize - minSize) + minSize;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.5 + 0.1;
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${left}%`;
      particle.style.bottom = `-${size}px`;
      particle.style.opacity = opacity.toString();
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
  }, []);

  return (
    <div ref={containerRef} className={`particles ${className}`}></div>
  );
};

export default AnimatedBackground;
