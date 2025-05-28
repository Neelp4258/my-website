import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="hero section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Dazzlo Enterprises</h1>
            <p>
              Dazzlo Enterprises is an ambitious multi-brand company with a bold vision to become 
              a powerhouse across multiple industries. Currently making a strong mark in the Human 
              Resources space, we provide cutting-edge talent solutions and consulting services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mission section">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              className="mission-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>
                Dazzlo Enterprises is an ambitious multi-brand company with a bold vision to become a powerhouse across multiple industries. Currently making a strong mark in the Human Resources space, Dazzlo provides cutting-edge talent solutions, recruitment services, and HR consulting to help companies build exceptional teams and drive growth.
              </p>
              <p>
                But this is just the beginning. Dazzlo is actively working towards expanding into new sectors, from consumer products and lifestyle brands to technology solutions, SaaS platforms, and beyond. With innovation, quality, and customer focus at its core, Dazzlo aims to launch and scale brands that make a meaningful impact on the market and deliver real value to customers.
              </p>
              <p>
                Our mission is clear — to become a leading multi-brand enterprise that reshapes industries, empowers people, and creates a future full of opportunity and success.
              </p>
              <div className="mission-values">
                <div className="value-item">
                  <Award size={24} />
                  <span>Excellence in Every Solution</span>
                </div>
                <div className="value-item">
                  <Users size={24} />
                  <span>People-Centered Approach</span>
                </div>
                <div className="value-item">
                  <Zap size={24} />
                  <span>Innovation at Core</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="mission-visual card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Our Impact</h3>
              <div className="impact-stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Industries Served</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Lives Impacted</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Managed by Dazzlo Enterprises Pvt Ltd</h2>
            <p>Explore our diverse portfolio of industries and solutions</p>
          </motion.div>
          
          <div className="industry-grid grid grid-4">
            {[
              {
                icon: "💻",
                title: "Software Solutions",
                description: "Comprehensive software development and enterprise solutions tailored to your business needs.",
                features: ["Custom Development", "Enterprise Software", "SaaS Solutions"]
              },
              {
                icon: "🌐",
                title: "Web Development",
                description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
                features: ["Responsive Design", "E-commerce", "Web Apps"]
              },
              {
                icon: "📱",
                title: "App Development",
                description: "Native and cross-platform mobile applications for iOS and Android platforms.",
                features: ["iOS Development", "Android Apps", "Cross-platform"]
              },
              {
                icon: "📈",
                title: "Digital Marketing",
                description: "Comprehensive digital marketing strategies to boost your online presence and growth.",
                features: ["SEO Optimization", "Social Media", "Content Marketing"]
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="industry-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, cursor: 'pointer' }}
                onClick={() => window.open('https://www.ambivare.com', '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-features">
                  {industry.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="learn-more">
                  <span>Click to learn more →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="innovation-areas section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Innovation Areas We're Expanding Into</h2>
            <p style={{ color: '#333333', fontWeight: '600' }}>
              Founded in 2024, we're rapidly expanding across multiple industries with cutting-edge solutions
            </p>
          </motion.div>
          
          <div className="innovation-grid grid grid-3">
            {[
              {
                icon: "🤖",
                title: "AI & Technology Solutions",
                description: "Developing intelligent automation, machine learning platforms, and next-gen software solutions.",
                status: "Active Development",
                areas: ["AI Automation", "SaaS Platforms", "Custom Software"]
              },
              {
                icon: "🏢",
                title: "Business Consulting",
                description: "Strategic consulting services helping businesses optimize operations and achieve growth.",
                status: "Currently Serving",
                areas: ["Strategy Planning", "Process Optimization", "Digital Transformation"]
              },
              {
                icon: "🛍️",
                title: "Consumer Products & Lifestyle",
                description: "Launching innovative consumer brands and lifestyle products that enhance daily experiences.",
                status: "Coming Soon",
                areas: ["E-commerce Brands", "Lifestyle Products", "Consumer Tech"]
              },
              {
                icon: "💼",
                title: "Professional Services",
                description: "Comprehensive professional services including legal, financial, and operational support.",
                status: "Expanding",
                areas: ["Legal Services", "Financial Advisory", "Operations Support"]
              },
              {
                icon: "🌐",
                title: "Digital Marketing & Media",
                description: "Full-spectrum digital marketing solutions and media production services.",
                status: "Beta Testing",
                areas: ["Digital Marketing", "Content Creation", "Social Media"]
              },
              {
                icon: "🎯",
                title: "Emerging Technologies",
                description: "Exploring blockchain, IoT, and other emerging technologies for future innovations.",
                status: "Research Phase",
                areas: ["Blockchain Solutions", "IoT Development", "Future Tech"]
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                className="innovation-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="innovation-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p style={{ color: '#333333', fontWeight: '500' }}>{area.description}</p>
                <div className="innovation-status">
                  <span className="status-badge">{area.status}</span>
                </div>
                <div className="innovation-areas">
                  {area.areas.map((item, idx) => (
                    <span key={idx} className="area-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="future-vision section">
        <div className="container">
          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-2">
              <div className="vision-text">
                <h2>The Future We're Building</h2>
                <p style={{ color: '#333333', fontWeight: '600' }}>
                  In just our first year, we've already begun making waves across multiple industries. 
                  Our ambitious roadmap extends far beyond traditional boundaries.
                </p>
                <div className="future-goals">
                  <div className="goal-item">
                    <span className="goal-number">2025</span>
                    <div className="goal-content">
                      <h4>Multi-Industry Launch</h4>
                      <p>Launching 5+ new brands across different sectors</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <span className="goal-number">2026</span>
                    <div className="goal-content">
                      <h4>Global Expansion</h4>
                      <p>Establishing operations in international markets</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <span className="goal-number">2027</span>
                    <div className="goal-content">
                      <h4>Industry Leadership</h4>
                      <p>Becoming a recognized leader in multiple verticals</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vision-visual">
                <motion.div 
                  className="achievement-card card"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3>2024 Achievements</h3>
                  <div className="achievements-list">
                    <div className="achievement-item">
                      <span className="achievement-icon">🚀</span>
                      <span>Company Founded</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">💼</span>
                      <span>HR Services Launched</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">🤝</span>
                      <span>First Clients Onboarded</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">⚡</span>
                      <span>Rapid Team Growth</span>
                    </div>
                    <div className="achievement-item">
                      <span className="achievement-icon">🎯</span>
                      <span>Multiple Verticals Identified</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 