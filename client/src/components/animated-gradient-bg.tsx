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

    // Different color schemes for light and dark themes
    const darkColors = [
      '#ff6b35', // Warm orange
      '#f7931e', // Amber
      '#ffc947', // Yellow
      '#ff4757', // Red-pink
    ];

    const lightColors = [
      '#ff8c42', // Light orange
      '#ffd166', // Light yellow
      '#06ffa5', // Mint green
      '#ff6b9d', // Pink
    ];

    const colors = theme === 'dark' ? darkColors : lightColors;
    
    // Reduce circles on mobile for better performance
    const isMobile = w < 768;
    const baseRadius = isMobile ? w * 0.4 : w * 0.3;
    const smallRadius = isMobile ? w * 0.35 : w * 0.25;

    const circles = isMobile ? [
      { x: w * 0.3, y: h * 0.3, radius: baseRadius, color: colors[0], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.7, y: h * 0.7, radius: baseRadius, color: colors[1], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.5, y: h * 0.5, radius: smallRadius, color: colors[2], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 }
    ] : [
      { x: w * 0.2, y: h * 0.4, radius: baseRadius, color: colors[0], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.8, y: h * 0.6, radius: baseRadius, color: colors[1], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.5, y: h * 0.8, radius: smallRadius, color: colors[2], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.6, y: h * 0.2, radius: smallRadius, color: colors[3], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 }
    ];

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      circles.forEach(circle => {
        // Move circle with slower speed
        circle.x += circle.vx * 0.3;
        circle.y += circle.vy * 0.3;

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > w) {
          circle.vx *= -1;
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > h) {
          circle.vy *= -1;
        }

        // Draw circle with radial gradient
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, `${circle.color}00`); // Transparent edge
        
        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Apply blur for liquid effect
      ctx.filter = 'blur(80px)';

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
        const isMobileAfterResize = w < 768;
        const newBaseRadius = isMobileAfterResize ? w * 0.4 : w * 0.3;
        const newSmallRadius = isMobileAfterResize ? w * 0.35 : w * 0.25;
        
        // Update circle positions and sizes on resize
        if (isMobileAfterResize && circles.length > 3) {
          // Switch to mobile layout (3 circles)
          circles.length = 3;
        } else if (!isMobileAfterResize && circles.length === 3) {
          // Add 4th circle for desktop
          circles.push({ x: w * 0.6, y: h * 0.2, radius: newSmallRadius, color: colors[3], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 });
        }
        
        // Update positions for existing circles
        circles.forEach((circle, i) => {
          if (isMobileAfterResize) {
            const positions = [
              { x: w * 0.3, y: h * 0.3 },
              { x: w * 0.7, y: h * 0.7 },
              { x: w * 0.5, y: h * 0.5 }
            ];
            if (i < positions.length) {
              circle.x = positions[i].x;
              circle.y = positions[i].y;
              circle.radius = i < 2 ? newBaseRadius : newSmallRadius;
            }
          } else {
            const positions = [
              { x: w * 0.2, y: h * 0.4 },
              { x: w * 0.8, y: h * 0.6 },
              { x: w * 0.5, y: h * 0.8 },
              { x: w * 0.6, y: h * 0.2 }
            ];
            if (i < positions.length) {
              circle.x = positions[i].x;
              circle.y = positions[i].y;
              circle.radius = i < 2 ? newBaseRadius : newSmallRadius;
            }
          }
        });
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
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 dark:opacity-25 transition-opacity duration-1000"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}