import { useState } from 'react';
import { motion } from 'framer-motion';
import { scaleIn, glassButton } from '@/lib/animations';
import { useToast } from '@/hooks/use-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-20 px-8" data-testid="newsletter-section">
      <div className="container mx-auto">
        <motion.div
          className="glass-card rounded-2xl p-12 text-center"
          {...scaleIn}
        >
          <motion.h3
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            data-testid="newsletter-title"
          >
            Stay Informed
          </motion.h3>
          
          <motion.p
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            data-testid="newsletter-description"
          >
            Get the latest political analysis and insights delivered directly to your inbox. Join our community of informed readers.
          </motion.p>
          
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300"
              data-testid="input-newsletter-email"
            />
            
            <motion.button
              type="submit"
              disabled={isLoading}
              className="glass-button px-8 py-3 rounded-xl font-semibold text-primary-foreground whitespace-nowrap disabled:opacity-50"
              {...glassButton}
              data-testid="button-newsletter-subscribe"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
