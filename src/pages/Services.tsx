import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Users, TrendingUp, Shield, Brain, Zap, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: "AI-Powered Recruitment",
      description: "Revolutionary AI algorithms that identify, attract, and evaluate top talent with unprecedented precision.",
      features: ["Smart Candidate Matching", "Automated Screening", "Predictive Analytics", "Global Talent Pool", "Cultural Fit Assessment"],
      price: "Premium"
    },
    {
      icon: Users,
      title: "Employee Experience Platform",
      description: "Comprehensive platform transforming every aspect of the employee journey from day one to career pinnacle.",
      features: ["Personalized Onboarding", "Career Development", "Performance Management", "Engagement Surveys", "Recognition Systems"],
      price: "Enterprise"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics providing deep insights into employee performance, productivity, and organizational health.",
      features: ["Real-time Dashboards", "Predictive Insights", "Custom Reports", "KPI Tracking", "ROI Analysis"],
      price: "Professional"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security and compliance solutions ensuring your HR data is protected and regulations are met.",
      features: ["Data Encryption", "Compliance Monitoring", "Audit Trails", "Risk Assessment", "Regulatory Updates"],
      price: "Essential"
    },
    {
      icon: Brain,
      title: "Learning & Development",
      description: "Intelligent learning platforms that adapt to individual needs and drive continuous professional growth.",
      features: ["Personalized Learning Paths", "Skill Assessments", "Virtual Training", "Certification Tracking", "Knowledge Management"],
      price: "Premium"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline HR processes with intelligent automation that reduces manual work and increases efficiency.",
      features: ["Process Automation", "Approval Workflows", "Task Management", "Integration Hub", "Smart Notifications"],
      price: "Professional"
    }
  ];

  return (
    <div className="services">
      <section className="hero section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Premium HR Solutions</h1>
            <p>
              Comprehensive suite of cutting-edge HR services designed to transform 
              your organization and elevate your human resource management to new heights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-grid-section section">
        <div className="container">
          <div className="services-grid grid grid-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <service.icon size={40} />
                  </div>
                  <div className="service-title">
                    <h3>{service.title}</h3>
                    <span className="service-price">{service.price}</span>
                  </div>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="btn btn-primary service-cta">
                  <Star size={18} />
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose DazzloHR Services</h2>
            <p>Experience the premium difference that sets us apart</p>
          </motion.div>
          
          <div className="benefits-grid grid grid-3">
            {[
              {
                title: "Cutting-Edge Technology",
                description: "Latest AI and machine learning innovations integrated into every solution."
              },
              {
                title: "Proven Results",
                description: "Average 300% improvement in HR efficiency across all client organizations."
              },
              {
                title: "24/7 Premium Support",
                description: "Dedicated support team available around the clock for immediate assistance."
              },
              {
                title: "Scalable Solutions",
                description: "Services that grow with your organization from startup to enterprise."
              },
              {
                title: "Industry Expertise",
                description: "Deep knowledge across multiple industries and organizational structures."
              },
              {
                title: "Security First",
                description: "Enterprise-grade security protecting your most sensitive HR data."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 