import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Building, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="contact">
      <section className="hero section" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Connect With Dazzlo</h1>
            <p>
              Ready to transform your business? Let's discuss how we can help you achieve extraordinary results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="contact-grid grid grid-2">
            {/* Contact Form */}
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="form-header">
                <h2>Let's Start a Conversation</h2>
                <p>Share your requirements and we'll craft the perfect solution for you</p>
              </div>
              
              <form className="contact-form card" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="talent-acquisition">Talent Acquisition</option>
                    <option value="hr-consulting">HR Consulting</option>
                    <option value="recruitment-services">Recruitment Services</option>
                    <option value="employee-management">Employee Management</option>
                    <option value="business-consulting">Business Consulting</option>
                    <option value="technology-solutions">Technology Solutions</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements, challenges, or how we can help you..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary form-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-info">
                <h2>Reach Out to Us</h2>
                <p>Multiple ways to connect with our expert team</p>
                
                <div className="contact-methods">
                  <motion.div 
                    className="contact-method"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="method-icon">
                      <Mail size={24} />
                    </div>
                    <div className="method-info">
                      <h3>Email Us</h3>
                      <p>info@dazzlo.co.in</p>
                      <span>Quick response guaranteed</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-method"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="method-icon">
                      <Phone size={24} />
                    </div>
                    <div className="method-info">
                      <h3>Call Us</h3>
                      <p>+91 9373015503</p>
                      <span>Available 24/7</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-method"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="method-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="method-info">
                      <h3>Visit Us</h3>
                      <p>Mumbai, Maharashtra</p>
                      <span>India</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-method"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="method-icon">
                      <Clock size={24} />
                    </div>
                    <div className="method-info">
                      <h3>Business Hours</h3>
                      <p>24/7 Available</p>
                      <span>Always here for you</span>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="contact-cta card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="cta-content">
                    <MessageCircle size={32} className="cta-icon" />
                    <h3>Need Immediate Assistance?</h3>
                    <p>Our experts are ready to help you find the perfect solution</p>
                    <motion.button 
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone size={18} />
                      Schedule a Call
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-extra section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="container">
          <motion.div
            className="extra-info grid grid-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="info-card card">
              <Building size={32} className="info-icon" />
              <h3>Enterprise Solutions</h3>
              <p>Custom solutions for large organizations with complex requirements</p>
            </div>
            
            <div className="info-card card">
              <Globe size={32} className="info-icon" />
              <h3>Global Reach</h3>
              <p>Serving clients worldwide with localized expertise and support</p>
            </div>
            
            <div className="info-card card">
              <Clock size={32} className="info-icon" />
              <h3>Rapid Deployment</h3>
              <p>Quick implementation with minimal disruption to your operations</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 