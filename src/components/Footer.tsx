import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Heart,
  Star
} from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/jobs', label: 'Careers' },
    { path: '/vision', label: 'Our Vision' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'AI-Powered Recruitment',
    'Employee Management',
    'Performance Analytics',
    'Payroll Solutions',
    'Training & Development',
    'HR Consulting'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/dazzlo-ventures-pvt-ltd/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/dazzlohr/', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-glow"></div>
        <div className="footer-pattern"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <motion.div
            className="footer-section company-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <div className="logo-text">
                <span className="logo-primary">Dazzlo</span>
                <span className="logo-secondary"></span>
              </div>
              <div className="logo-subtitle">Enterprises</div>
            </div>
            
            <p className="company-description">
              A multi-brand enterprise transforming industries with innovative solutions, 
              premium services, and cutting-edge technology across various sectors.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <span>info@dazzlo.co.in</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 9373015503</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link to={link.path} className="footer-link">
                    <ArrowRight size={14} />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link to="/services" className="footer-link">
                    <Star size={14} />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            className="footer-section newsletter-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for the latest updates and premium insights.</p>
            
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  target={social.href !== '#' ? '_blank' : '_self'}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Dazzlo Enterprises. All rights reserved.
            </p>
            <p className="made-with-love">
              Made with <Heart size={14} className="heart-icon" /> for the future of HR
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/cookies" className="footer-bottom-link">Cookie Policy</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 