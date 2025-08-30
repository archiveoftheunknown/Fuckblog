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

    // Use fixed dimensions to prevent mobile scrolling glitches
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    // Store initial viewport height to detect scroll-based changes
    const initialHeight = h;

    // Different color schemes for light and dark themes - more vibrant
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
    
    // Original smaller sizes but better positioned
    const isMobile = w < 768;
    const baseRadius = isMobile ? w * 0.4 : w * 0.3;
    const smallRadius = isMobile ? w * 0.35 : w * 0.25;

    const circles = isMobile ? [
      { x: w * 0.1, y: h * 0.2, radius: baseRadius, color: colors[0], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.9, y: h * 0.8, radius: baseRadius, color: colors[1], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.5, y: h * 0.5, radius: smallRadius, color: colors[2], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 }
    ] : [
      { x: w * 0.1, y: h * 0.2, radius: baseRadius, color: colors[0], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.9, y: h * 0.7, radius: baseRadius, color: colors[1], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.3, y: h * 0.9, radius: smallRadius, color: colors[2], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 },
      { x: w * 0.7, y: h * 0.1, radius: smallRadius, color: colors[3], vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 }
    ];

    const animate = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, w, h);
      
      // Draw without blur first to test
      circles.forEach(circle => {
        // Move circle with slower speed
        circle.x += circle.vx * 0.5;
        circle.y += circle.vy * 0.5;

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > w) {
          circle.vx *= -1;
          circle.x = Math.max(circle.radius, Math.min(w - circle.radius, circle.x));
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > h) {
          circle.vy *= -1;
          circle.y = Math.max(circle.radius, Math.min(h - circle.radius, circle.y));
        }
      });
      
      // Now draw all circles with blur - reduced for better spread
      ctx.filter = 'blur(60px)';
      
      circles.forEach(circle => {
        // Draw circle with radial gradient
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(0.5, circle.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize with debounce - only on actual window resize
    let resizeTimeout: NodeJS.Timeout;
    let lastWidth = w;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        
        // Only update if width changed (orientation change) or height changed significantly (>150px)
        // This prevents mobile address bar hide/show from triggering resize
        if (Math.abs(newWidth - lastWidth) < 10 && Math.abs(newHeight - initialHeight) < 150) {
          return;
        }
        
        lastWidth = w = canvas.width = newWidth;
        h = canvas.height = newHeight;
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
        
        // Update positions for existing circles - keep them spread out
        circles.forEach((circle, i) => {
          if (isMobileAfterResize) {
            const positions = [
              { x: w * 0.1, y: h * 0.2 },
              { x: w * 0.9, y: h * 0.8 },
              { x: w * 0.5, y: h * 0.5 }
            ];
            if (i < positions.length) {
              circle.x = positions[i].x;
              circle.y = positions[i].y;
              circle.radius = i < 2 ? newBaseRadius : newSmallRadius;
            }
          } else {
            const positions = [
              { x: w * 0.1, y: h * 0.2 },
              { x: w * 0.9, y: h * 0.7 },
              { x: w * 0.3, y: h * 0.9 },
              { x: w * 0.7, y: h * 0.1 }
            ];
            if (i < positions.length) {
              circle.x = positions[i].x;
              circle.y = positions[i].y;
              circle.radius = i < 2 ? newBaseRadius : newSmallRadius;
            }
          }
        });
      }, 1000); // Increased debounce to 1 second
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
        zIndex: 0,
        opacity: theme === 'dark' ? 0.5 : 0.3
      }}
      aria-hidden="true"
    />
  );
}