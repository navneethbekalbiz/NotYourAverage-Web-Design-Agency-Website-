import React, { useEffect, useRef } from 'react';

export const WireframeGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Golden Ratio
    const phi = (1 + Math.sqrt(5)) / 2;
    const r = 250; // Radius

    // Icosahedron Vertices
    const vertices = [
        [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
        [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
        [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ].map(v => ({ x: v[0], y: v[1], z: v[2] }));

    // Normalize to radius r
    vertices.forEach(v => {
        const mag = Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
        v.x = (v.x / mag) * r;
        v.y = (v.y / mag) * r;
        v.z = (v.z / mag) * r;
    });

    // Edges (Indices of connected vertices)
    const edges = [
        [0, 11], [0, 5], [0, 1], [0, 7], [0, 10], [1, 5],
        [1, 9], [1, 8], [1, 7], [2, 11], [2, 4], [2, 3],
        [2, 6], [2, 10], [3, 4], [3, 9], [3, 8], [3, 6],
        [4, 11], [4, 5], [4, 9], [5, 11], [6, 10], [6, 7],
        [6, 8], [7, 10], [7, 8], [8, 9], [9, 5], [10, 11]
    ]; // Partial connectivity for aesthetic, or full

    // Let's generate a denser mesh by subdividing or just drawing these lines
    // We'll stick to the base icosahedron for clean "Tech" look
    
    let angleX = 0;
    let angleY = 0;

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        angleX += 0.002;
        angleY += 0.003;

        const cx = width / 2;
        const cy = height / 2;

        const rotatedVertices = vertices.map(v => {
            // Rotate Y
            let x = v.x * Math.cos(angleY) - v.z * Math.sin(angleY);
            let z = v.z * Math.cos(angleY) + v.x * Math.sin(angleY);
            let y = v.y;

            // Rotate X
            let y2 = y * Math.cos(angleX) - z * Math.sin(angleX);
            let z2 = z * Math.cos(angleX) + y * Math.sin(angleX);
            
            return { x: x, y: y2, z: z2 };
        });

        ctx.strokeStyle = 'rgba(247, 6, 112, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw Edges
        edges.forEach(edge => {
            const v1 = rotatedVertices[edge[0]];
            const v2 = rotatedVertices[edge[1]];

            // Simple perspective
            const scale1 = 600 / (600 + v1.z + 400); // push back 400
            const scale2 = 600 / (600 + v2.z + 400);

            const x1 = cx + v1.x * scale1;
            const y1 = cy + v1.y * scale1;
            const x2 = cx + v2.x * scale2;
            const y2 = cy + v2.y * scale2;
            
            // Depth modulation for opacity
            const avgZ = (v1.z + v2.z) / 2;
            const opacity = Math.max(0.05, (avgZ + r) / (2 * r)); // Front is brighter
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(247, 6, 112, ${opacity * 0.4})`;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            // Draw connecting dots for "Node" look
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x1, y1, 2 * scale1, 0, Math.PI * 2);
            ctx.fill();
        });

        // Ambient pulse
        const pulse = 1 + Math.sin(Date.now() * 0.002) * 0.1;
        ctx.shadowBlur = 20 * pulse;
        ctx.shadowColor = '#F70670';
        
        requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    const handleResize = () => {
       if(canvas) {
           width = canvas.width = canvas.offsetWidth;
           height = canvas.height = canvas.offsetHeight;
       }
    };
    window.addEventListener('resize', handleResize);

    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
};