import { motion } from "framer-motion";
import { Users, Target, Award, Globe, Shield, TrendingUp } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Political Analyst",
    expertise: "Digital Democracy & Policy Analysis",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Mark Johnson",
    role: "Senior Investigative Journalist",
    expertise: "Political Investigations & Data Forensics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Dr. Lisa Park",
    role: "Communication Strategist",
    expertise: "Crisis Communication & Media Analysis",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
];

const values = [
  {
    icon: Shield,
    title: "Editorial Independence",
    description: "We maintain strict editorial independence and are committed to factual, unbiased reporting.",
  },
  {
    icon: Target,
    title: "Analytical Rigor",
    description: "Our analysis is grounded in thorough research, data-driven insights, and expert knowledge.",
  },
  {
    icon: Globe,
    title: "Democratic Values",
    description: "We champion transparency, accountability, and the principles of democratic governance.",
  },
  {
    icon: TrendingUp,
    title: "Forward-Thinking",
    description: "We explore emerging trends in digital democracy and contemporary political discourse.",
  },
];

export default function About() {
  return (
    <div className="py-20 px-8" data-testid="page-about">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            About Political Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a team of dedicated political analysts, journalists, and researchers committed to providing 
            in-depth analysis of contemporary politics and digital democracy.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          data-testid="mission-section"
        >
          <div className="glass-card p-12 rounded-2xl text-center">
            <motion.h2
              className="text-3xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              To bridge the gap between complex political realities and public understanding through rigorous 
              analysis, investigative journalism, and accessible commentary. We believe that informed citizens 
              are the cornerstone of healthy democracies, and our work aims to equip readers with the knowledge 
              and insights needed to engage meaningfully with contemporary political issues.
            </motion.p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          data-testid="values-section"
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="glass-card p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  data-testid={`value-card-${index}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-3 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          data-testid="team-section"
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Our Expert Team
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-card p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                data-testid={`team-member-${index}`}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Statistics */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          data-testid="statistics-section"
        >
          <div className="glass-card p-12 rounded-2xl">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              Our Impact
            </motion.h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">In-depth Articles</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Monthly Readers</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Years of Analysis</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Fact-Check Rate</div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          data-testid="contact-cta-section"
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Collaborate?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We welcome partnerships, story tips, and collaboration opportunities. 
            Get in touch to discuss how we can work together.
          </p>
          <motion.button
            className="glass-button px-8 py-4 rounded-xl font-semibold text-primary-foreground"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-testid="button-contact-us"
          >
            Contact Us
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
}
