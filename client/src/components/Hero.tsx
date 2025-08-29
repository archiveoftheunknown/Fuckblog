import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, glassButton } from '@/lib/animations';

export default function Hero() {
  const scrollToFeatured = () => {
    const element = document.querySelector('[data-testid="featured-articles-section"]');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000"
          alt="Modern digital workspace"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-chart-3 bg-clip-text text-transparent leading-tight"
            variants={staggerItem}
            data-testid="hero-title"
          >
            Modern Political Analysis
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            variants={staggerItem}
            data-testid="hero-description"
          >
            Deep insights into contemporary politics, digital democracy, and the evolving landscape of public discourse in the digital age.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={staggerItem}
          >
            <motion.button
              className="glass-button px-8 py-4 rounded-xl font-semibold text-primary-foreground"
              {...glassButton}
              onClick={scrollToFeatured}
              data-testid="button-explore-articles"
            >
              Explore Articles
            </motion.button>
            
            <motion.button
              className="px-8 py-4 rounded-xl font-semibold border border-border text-foreground hover:bg-accent transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-subscribe"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
