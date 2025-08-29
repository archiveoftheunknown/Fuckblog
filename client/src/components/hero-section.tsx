import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000"
          alt="Modern digital workspace"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-chart-3 bg-clip-text text-transparent leading-tight"
            data-testid="hero-title"
          >
            Modern Political Analysis
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            data-testid="hero-description"
          >
            Deep insights into contemporary politics, digital democracy, and the evolving landscape of public discourse in the digital age.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              className="glass-button px-8 py-4 rounded-xl font-semibold text-primary-foreground"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
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
