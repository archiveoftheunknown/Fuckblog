import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function AnimatedGradientBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let animationId: number;

    // Use vibrant colors
    const colors = theme === 'dark' 
      ? ['#ff6b35', '#f7931e', '#ffc947', '#ff4757']
      : ['#ff8c42', '#ffd166', '#06ffa5', '#ff6b9d'];

    const circles = [
      { x: w * 0.2, y: h * 0.4, radius: w * 0.3, color: colors[0], vx: 1, vy: 0.5 },
      { x: w * 0.8, y: h * 0.6, radius: w * 0.3, color: colors[1], vx: -1, vy: -0.5 },
      { x: w * 0.5, y: h * 0.8, radius: w * 0.25, color: colors[2], vx: 0.5, vy: -1 },
      { x: w * 0.6, y: h * 0.2, radius: w * 0.25, color: colors[3], vx: -0.5, vy: 1 }
    ];

    function animate() {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, w, h);
      
      // Set blur for liquid effect
      ctx.filter = 'blur(80px)';
      
      // Draw all circles with blur applied
      circles.forEach(circle => {
        // Update position
        circle.x += circle.vx * 0.5;
        circle.y += circle.vy * 0.5;

        // Bounce off walls
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > w) {
          circle.vx = -circle.vx;
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > h) {
          circle.vy = -circle.vy;
        }

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.radius
        );
        
        // Add color stops for gradient
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, 'transparent');

        // Draw the circle
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      circles[0].radius = circles[1].radius = w * 0.3;
      circles[2].radius = circles[3].radius = w * 0.25;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.7,
        pointerEvents: 'none'
      }}
    />
  );
}