import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Award, 
  Sparkles,
  Star,
  CheckCircle,
  Zap,
  Building2,
  Code,
  UserCheck,
  RefreshCw,
  Target,
  Globe
} from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                The Future of 
                <span className="highlight"> HR Solutions</span>
                <br />
                Starts Here
              </motion.h1>
              
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ color: '#333333', fontWeight: '600' }}
              >
                Dazzlo Enterprises specializes in IT, Non-IT, Bulk & Lateral recruitment 
                solutions. We connect top talent with leading organizations through 
                cutting-edge technology and premium HR services that drive business success.
              </motion.p>
              
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/services" className="btn btn-primary hero-cta">
                  <Sparkles size={20} />
                  Discover Our Magic
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <Users size={20} />
                  Get Started Today
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="floating-cards">
                <div className="hero-card card-1 float-animation">
                  <TrendingUp size={32} />
                  <h3>300%</h3>
                  <p>Productivity Boost</p>
                </div>
                <div className="hero-card card-2 float-animation">
                  <Shield size={32} />
                  <h3>100%</h3>
                  <p>Security Guaranteed</p>
                </div>
                <div className="hero-card card-3 float-animation">
                  <Clock size={32} />
                  <h3>24/7</h3>
                  <p>Premium Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruitment Specializations Section */}
      <section className="recruitment-specializations section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Recruitment Specializations</h2>
            <p style={{ color: '#333333', fontWeight: '600' }}>
              Comprehensive talent solutions across all industries and experience levels
            </p>
          </motion.div>
          
          <div className="specializations-grid grid grid-4">
            {[
              {
                icon: Code,
                title: "IT Recruitment",
                description: "Full-stack developers, DevOps engineers, data scientists, cybersecurity experts, and emerging tech specialists.",
                highlights: ["Software Development", "Cloud & DevOps", "Data Science & AI", "Cybersecurity", "Mobile Development"]
              },
              {
                icon: Building2,
                title: "Non-IT Recruitment",
                description: "Finance, marketing, sales, operations, HR, and executive leadership across all industries.",
                highlights: ["Finance & Accounting", "Sales & Marketing", "Operations", "Executive Leadership", "Healthcare & Pharma"]
              },
              {
                icon: Users,
                title: "Bulk Recruitment",
                description: "Large-scale hiring solutions for BPOs, call centers, manufacturing, and rapid expansion projects.",
                highlights: ["BPO & Call Centers", "Manufacturing", "Retail & E-commerce", "Startup Scaling", "Campus Hiring"]
              },
              {
                icon: RefreshCw,
                title: "Lateral Recruitment",
                description: "Mid to senior-level professionals seeking career advancement and specialized skill transitions.",
                highlights: ["Senior Management", "Specialized Skills", "Career Transitions", "Industry Switching", "Leadership Roles"]
              }
            ].map((specialization, index) => (
              <motion.div
                key={index}
                className="specialization-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="specialization-icon">
                  <specialization.icon size={48} />
                </div>
                <h3>{specialization.title}</h3>
                <p>{specialization.description}</p>
                <ul className="specialization-highlights">
                  {specialization.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <Target size={14} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="specializations-stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stats-row">
              <div className="stat-item">
                <Globe size={24} />
                <span className="stat-number">10+</span>
                <span className="stat-label">Companies Served</span>
              </div>
              <div className="stat-item">
                <UserCheck size={24} />
                <span className="stat-number">500+</span>
                <span className="stat-label">Candidates Served</span>
              </div>
              <div className="stat-item">
                <Clock size={24} />
                <span className="stat-number">72hrs</span>
                <span className="stat-label">Average Turnaround</span>
              </div>
              <div className="stat-item">
                <Award size={24} />
                <span className="stat-number">95%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Companies Choose Dazzlo</h2>
            <p style={{ color: '#333333', fontWeight: '600' }}>Experience the premium difference that sets us apart from the rest</p>
          </motion.div>
          
          <div className="features-grid grid grid-3">
            {[
              {
                icon: Award,
                title: "Premium Excellence",
                description: "Award-winning HR solutions that exceed industry standards and deliver exceptional results for your organization."
              },
              {
                icon: Zap,
                title: "Lightning-Fast Results",
                description: "Revolutionary automation and AI-powered insights that deliver results at unprecedented speed and accuracy."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Military-grade security protocols protecting your most sensitive HR data with advanced encryption."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Industry-leading specialists with decades of experience in transforming HR operations."
              },
              {
                icon: TrendingUp,
                title: "Proven Growth",
                description: "Documented success stories showing average 300% improvement in HR efficiency and employee satisfaction."
              },
              {
                icon: Sparkles,
                title: "Innovation First",
                description: "Cutting-edge technology solutions that keep your organization ahead of the competition."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">
                  <feature.icon size={40} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="stats-grid grid grid-4">
            {[
              { number: "10+", label: "Industries Served", icon: Users },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
              { number: "24/7", label: "Business Hours", icon: Clock },
              { number: "500+", label: "Lives Impacted", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card card"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Premium HR Solutions</h2>
            <p>Comprehensive services designed to revolutionize your HR operations</p>
          </motion.div>
          
          <div className="services-grid grid grid-2">
            {[
              {
                title: "AI-Powered Recruitment",
                description: "Advanced artificial intelligence algorithms that identify and attract top-tier talent with unprecedented precision and speed.",
                features: ["Smart Candidate Matching", "Automated Screening", "Predictive Analytics", "Global Talent Pool Access"]
              },
              {
                title: "Employee Experience Platform",
                description: "Revolutionary platform that transforms every aspect of the employee journey, from onboarding to career development.",
                features: ["Personalized Onboarding", "Career Path Planning", "Performance Analytics", "Engagement Insights"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="btn btn-primary">
              <Star size={20} />
              Explore All Services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your HR Operations?</h2>
            <p style={{ color: '#333333', fontWeight: '600' }}>Join thousands of companies that trust Dazzlo Enterprises for their premium business needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <Sparkles size={20} />
                Start Your Journey
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                <Users size={20} />
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 