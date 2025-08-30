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

    // Set canvas size
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    // Different color schemes for light and dark themes
    const darkColors = [
      '#1e00ff', // Blue
      '#8f00ff', // Purple
      '#ff00c8', // Pink
      '#00ffc8', // Cyan
    ];

    const lightColors = [
      '#ff6b35', // Orange
      '#f7931e', // Amber
      '#06ffa5', // Mint
      '#ff6b9d', // Pink
    ];

    const colors = theme === 'dark' ? darkColors : lightColors;
    
    // Initialize circles exactly like the sample
    const circles = [
      { x: w * 0.2, y: h * 0.4, radius: w * 0.3, color: colors[0], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.8, y: h * 0.6, radius: w * 0.3, color: colors[1], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.5, y: h * 0.8, radius: w * 0.25, color: colors[2], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.6, y: h * 0.2, radius: w * 0.25, color: colors[3], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 }
    ];

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      circles.forEach(circle => {
        // Move circle with slow speed
        circle.x += circle.vx * 0.5;
        circle.y += circle.vy * 0.5;

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > w) {
          circle.vx *= -1;
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > h) {
          circle.vy *= -1;
        }

        // Draw circle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, circle.color + '00'); // Transparent edge
        
        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Apply blur filter for liquid effect AFTER drawing all circles
      ctx.filter = 'blur(100px)';

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        
        // Update circle radii on resize
        circles[0].radius = w * 0.3;
        circles[1].radius = w * 0.3;
        circles[2].radius = w * 0.25;
        circles[3].radius = w * 0.25;
        
        // Optionally reposition circles
        circles[0].x = w * 0.2;
        circles[0].y = h * 0.4;
        circles[1].x = w * 0.8;
        circles[1].y = h * 0.6;
        circles[2].x = w * 0.5;
        circles[2].y = h * 0.8;
        circles[3].x = w * 0.6;
        circles[3].y = h * 0.2;
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ 
        pointerEvents: 'none',
        zIndex: -1,
        opacity: theme === 'dark' ? 0.7 : 0.5
      }}
      aria-hidden="true"
    />
  );
}