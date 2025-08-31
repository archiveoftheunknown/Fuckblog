import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  direction?: 'up' | 'down';
}

export function AnimatedNumber({ value, direction = 'up' }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setIsAnimating(true);
      setDisplayValue(value);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [value]);

  const slideDirection = direction === 'up' ? -1 : 1;

  return (
    <div className="relative inline-block overflow-hidden h-[1.2em] align-middle">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={displayValue}
          className="absolute inset-0 flex items-center"
          initial={{ y: slideDirection * 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: slideDirection * -20, opacity: 0 }}
          transition={{ 
            duration: 0.2,
            ease: [0.32, 0.72, 0, 1]
          }}
        >
          {displayValue}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}