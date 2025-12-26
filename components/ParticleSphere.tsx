import React, { useEffect, useRef } from 'react';

export const ParticleSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    interface Particle {
      x: number;
      y: number;
      z: number;
      // Base positions for animation calculations
      u: number; 
      v: number;
      type: 'bell' | 'tentacle' | 'core';
      tentacleId?: number;
      segmentId?: number;
      size: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const R = 120; // Radius of the bell
    const BELL_PARTICLES = 500;
    const TENTACLES = 12;
    const SEGMENTS = 30;

    // 1. Generate Bell Particles (Hemisphere-ish)
    for (let i = 0; i < BELL_PARTICLES; i++) {
      const u = Math.random();
      const v = Math.random();
      
      // Distribution for a bell shape
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1); // spherical distribution
      
      // Only keep top half for the bell, and modify shape
      // We map phi (0 to PI) to a curve. 
      // Simple hemisphere: phi from 0 to PI/2
      const phi_hemi = phi * 0.5; // 0 to PI/2

      particles.push({
        x: 0, y: 0, z: 0,
        u: theta, // Store angle
        v: phi_hemi, // Store vertical angle
        type: 'bell',
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.5
      });
    }

    // 2. Generate Tentacles
    for (let t = 0; t < TENTACLES; t++) {
      const theta = (t / TENTACLES) * Math.PI * 2;
      for (let s = 0; s < SEGMENTS; s++) {
        particles.push({
          x: 0, y: 0, z: 0,
          u: theta,
          v: s / SEGMENTS, // normalized length 0 to 1
          type: 'tentacle',
          tentacleId: t,
          segmentId: s,
          size: Math.max(0.5, 2 - (s / SEGMENTS) * 2), // Tapering
          alpha: 1 - (s / SEGMENTS) // Fade out
        });
      }
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0; // Pitch
    let targetRotationY = 0; // Yaw
    let rotationX = 0.2; // Initial tilt
    let rotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + width / 2;
      const cy = rect.top + height / 2;
      mouseX = (e.clientX - cx) * 0.0005;
      mouseY = (e.clientY - cy) * 0.0005;
      
      targetRotationY = mouseX * 2;
      targetRotationX = -mouseY * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth rotation
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;
      
      // Auto gentle rotation
      const autoRotate = time * 0.1;
      
      // Pulse for breathing effect
      const pulse = 1 + Math.sin(time * 2) * 0.05;
      const bellWidth = R * pulse;
      const bellHeight = R * 0.8 * pulse; // Slightly flattened

      time += 0.01;

      particles.forEach(p => {
        let px = 0, py = 0, pz = 0;

        if (p.type === 'bell') {
          // Bell Shape Calculation
          // u = theta, v = phi
          
          // Add some noise/movement to surface
          const noise = Math.sin(p.u * 5 + time) * Math.cos(p.v * 5 + time) * 2;

          px = bellWidth * Math.sin(p.v) * Math.cos(p.u);
          pz = bellWidth * Math.sin(p.v) * Math.sin(p.u);
          py = -bellHeight * Math.cos(p.v); // Negative to point up
          
          // Shift down slightly to center the mass
          py += 20; 

        } else if (p.type === 'tentacle') {
          // Tentacle Calculation
          // Start at rim: radius R, angle u
          const startX = bellWidth * Math.cos(p.u);
          const startZ = bellWidth * Math.sin(p.u);
          const startY = 0 + 20; // Rim level

          // Wave motion
          const segmentLen = 12;
          const depth = p.segmentId! * segmentLen;
          
          // Spiral/Sine wave motion
          const waveX = Math.sin(depth * 0.05 + time * 2 + p.tentacleId!) * (depth * 0.2);
          const waveZ = Math.cos(depth * 0.05 + time * 2 + p.tentacleId!) * (depth * 0.2);

          px = startX + waveX;
          pz = startZ + waveZ;
          py = startY + depth; // Extending downwards
        }

        // 3D Rotation
        // Rotate Y (Yaw)
        let x1 = px * Math.cos(rotationY + autoRotate) - pz * Math.sin(rotationY + autoRotate);
        let z1 = pz * Math.cos(rotationY + autoRotate) + px * Math.sin(rotationY + autoRotate);
        
        // Rotate X (Pitch)
        let y1 = py * Math.cos(rotationX) - z1 * Math.sin(rotationX);
        let z2 = z1 * Math.cos(rotationX) + py * Math.sin(rotationX);

        // Project
        const perspective = 600;
        const scale = perspective / (perspective + z2);
        const x2d = x1 * scale + width / 2;
        const y2d = y1 * scale + height / 2;

        // Draw
        if (z2 > -perspective) { // Clip behind camera
          const alpha = p.alpha * Math.max(0, (scale - 0.2));
          
          ctx.beginPath();
          ctx.arc(x2d, y2d, p.size * scale, 0, Math.PI * 2);
          
          if (p.type === 'bell') {
             ctx.fillStyle = `rgba(247, 6, 112, ${alpha * 0.8})`;
          } else {
             ctx.fillStyle = `rgba(247, 6, 112, ${alpha * 0.6})`;
          }
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};