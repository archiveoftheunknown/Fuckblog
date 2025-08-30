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

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Test with solid visible colors first
    const colors = ['#FF0080', '#8000FF', '#00FFFF', '#FF00FF'];

    const circles = [
      { x: 200, y: 200, radius: 150, color: colors[0], vx: 1, vy: 1 },
      { x: 600, y: 400, radius: 150, color: colors[1], vx: -1, vy: 1 },
      { x: 400, y: 600, radius: 100, color: colors[2], vx: 1, vy: -1 },
      { x: 800, y: 200, radius: 100, color: colors[3], vx: -1, vy: -1 }
    ];

    const animate = () => {
      // Clear with a semi-transparent rect to create trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      circles.forEach(circle => {
        // Update position
        circle.x += circle.vx;
        circle.y += circle.vy;

        // Bounce
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.vx = -circle.vx;
        }
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.vy = -circle.vy;
        }

        // Draw solid colored circle
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = circle.color;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
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
        pointerEvents: 'none'
      }}
    />
  );
}