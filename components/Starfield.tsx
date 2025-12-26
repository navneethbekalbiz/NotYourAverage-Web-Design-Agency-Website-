import React, { useEffect, useRef } from 'react';

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars: { x: number; y: number; z: number; size: number }[] = [];
    const STAR_COUNT = 400;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        size: Math.random() * 2
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) * 0.5;
      mouseY = (e.clientY - height / 2) * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear with trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // fade out trail
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = '#FFFFFF';

      stars.forEach(star => {
        // Move star towards camera (z decreases)
        star.z -= 2;

        // Apply mouse interaction (parallax)
        const tx = star.x + (mouseX * (width - star.z)) / width;
        const ty = star.y + (mouseY * (width - star.z)) / width;

        // Perspective projection
        if (star.z <= 0) {
          // Reset star to back
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
        }

        const scale = 500 / star.z;
        const sx = tx * scale + width / 2;
        const sy = ty * scale + height / 2;
        const r = star.size * scale;

        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
};