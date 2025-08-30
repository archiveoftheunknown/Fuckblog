import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function AnimatedGradientBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    // Colors for the gradient orbs
    const colors = theme === 'dark' 
      ? ['#ff6b35', '#f7931e', '#ffc947', '#ff4757']
      : ['#ff8c42', '#ffd166', '#06ffa5', '#ff6b9d'];

    const circles = [
      { x: w * 0.2, y: h * 0.4, radius: w * 0.3, color: colors[0], vx: 1, vy: 0.5 },
      { x: w * 0.8, y: h * 0.6, radius: w * 0.3, color: colors[1], vx: -1, vy: -0.5 },
      { x: w * 0.5, y: h * 0.8, radius: w * 0.25, color: colors[2], vx: 0.5, vy: -1 },
      { x: w * 0.6, y: h * 0.2, radius: w * 0.25, color: colors[3], vx: -0.5, vy: 1 }
    ];

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, w, h);
      
      // Apply blur for liquid effect
      ctx.filter = 'blur(60px)';
      
      circles.forEach(circle => {
        // Move circles
        circle.x += circle.vx * 0.3;
        circle.y += circle.vy * 0.3;

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > w) {
          circle.vx *= -1;
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > h) {
          circle.vy *= -1;
        }

        // Draw gradient circle
        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.radius
        );
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(0.5, circle.color + 'aa');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Reset filter
      ctx.filter = 'none';

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      circles[0].radius = circles[1].radius = w * 0.3;
      circles[2].radius = circles[3].radius = w * 0.25;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        zIndex: -1,
        opacity: theme === 'dark' ? 0.5 : 0.3,
        pointerEvents: 'none'
      }}
    />
  );
}