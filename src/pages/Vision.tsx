import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Rocket, Globe, Brain, Zap, Heart, Star, TrendingUp, Users, Shield } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <div className="vision">
      <section className="hero section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Vision for the Future</h1>
            <p>
              Imagine a world where human resources transcends traditional boundaries, 
              where AI and human intelligence unite to create unprecedented organizational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="vision-statement section">
        <div className="container">
          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="vision-icon">
              <Eye size={80} />
            </div>
            <h2>Our Vision Statement</h2>
            <p className="vision-text">
              "To be the global catalyst that transforms every workplace into a thriving ecosystem 
              where technology amplifies human potential, where data drives empathy, and where 
              every employee feels valued, empowered, and inspired to achieve greatness."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="future-goals section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Shaping Tomorrow's Workplace</h2>
            <p>Our ambitious goals for revolutionizing human resources</p>
          </motion.div>
          
          <div className="goals-grid grid grid-2">
            {[
              {
                icon: Brain,
                title: "AI-Powered Human Intelligence",
                description: "Create seamless integration between artificial intelligence and human intuition, where technology enhances rather than replaces human decision-making in HR processes.",
                timeline: "2025-2027"
              },
              {
                icon: Globe,
                title: "Global Workforce Revolution",
                description: "Enable organizations worldwide to build diverse, inclusive, and high-performing teams through our revolutionary platform and consulting services.",
                timeline: "2024-2026"
              },
              {
                icon: Rocket,
                title: "Next-Gen Employee Experience",
                description: "Pioneer unprecedented employee journey experiences that predict needs, personalize growth paths, and create emotional connections with work.",
                timeline: "2025-2028"
              },
              {
                icon: Zap,
                title: "Instant HR Transformation",
                description: "Develop one-click solutions that can transform any organization's HR operations from traditional to cutting-edge in record time.",
                timeline: "2026-2029"
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                className="goal-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="goal-icon">
                  <goal.icon size={48} />
                </div>
                <div className="goal-timeline">{goal.timeline}</div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-vision section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>The Impact We Envision</h2>
            <p>How we see our solutions transforming the world of work</p>
          </motion.div>
          
          <div className="impact-areas grid grid-3">
            {[
              {
                icon: Users,
                title: "10 Million Lives Transformed",
                description: "Empowering 10 million professionals worldwide to reach their full potential through better HR experiences."
              },
              {
                icon: TrendingUp,
                title: "1000% Productivity Growth",
                description: "Helping organizations achieve unprecedented productivity gains through intelligent HR optimization."
              },
              {
                icon: Heart,
                title: "Universal Workplace Happiness",
                description: "Creating work environments where 95% of employees feel genuinely fulfilled and engaged."
              },
              {
                icon: Shield,
                title: "Bias-Free Decisions",
                description: "Eliminating unconscious bias in hiring, promotion, and development decisions through AI-powered insights."
              },
              {
                icon: Star,
                title: "Industry Standard Setter",
                description: "Establishing DazzloHR methodologies as the global gold standard for HR excellence."
              },
              {
                icon: Globe,
                title: "Sustainable Future",
                description: "Contributing to a more sustainable future by optimizing human capital and reducing organizational waste."
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                className="impact-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="impact-icon">
                  <impact.icon size={36} />
                </div>
                <h3>{impact.title}</h3>
                <p>{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="innovation-roadmap section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Innovation Roadmap</h2>
            <p>The technologies and innovations we're pioneering</p>
          </motion.div>
          
          <div className="roadmap-timeline">
            {[
              {
                year: "2024",
                title: "Quantum Analytics Launch",
                description: "Revolutionary quantum-powered HR analytics providing unprecedented insights into organizational dynamics and employee behavior patterns."
              },
              {
                year: "2025",
                title: "Emotional AI Integration",
                description: "Advanced emotional intelligence algorithms that understand and respond to employee emotional states, creating more empathetic HR processes."
              },
              {
                year: "2026",
                title: "Holographic Collaboration",
                description: "Immersive holographic meeting spaces that revolutionize remote work and global team collaboration experiences."
              },
              {
                year: "2027",
                title: "Predictive Career Mapping",
                description: "AI systems that can predict and optimize career paths with 99% accuracy, ensuring every employee reaches their maximum potential."
              },
              {
                year: "2028",
                title: "Neural Interface HR",
                description: "Brain-computer interfaces that enable direct thought-based interaction with HR systems, making processes instantaneous and intuitive."
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="roadmap-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="roadmap-year">{milestone.year}</div>
                <div className="roadmap-content card">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-vision section">
        <div className="container">
          <motion.div
            className="join-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Be Part of This Vision</h2>
            <p>
              The future we envision isn't just a dream—it's a destination we're actively building. 
              Join us in creating a world where every workplace is a beacon of human potential.
            </p>
            <div className="vision-buttons">
              <button className="btn btn-primary">
                <Rocket size={20} />
                Start Your Journey
              </button>
              <button className="btn btn-secondary">
                <Eye size={20} />
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vision; 