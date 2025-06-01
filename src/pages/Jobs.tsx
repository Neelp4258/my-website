import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, TrendingUp, Heart, Star, X, Upload, Send, Code, Building, Headphones, Globe, Target, Phone } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  location: string;
  salary: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
  icon: any;
}

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  coverLetter: string;
  resume: File | null;
}

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  const jobs: Job[] = [
    {
      id: 1,
      title: "Full Stack Developer",
      location: "Hyderabad",
      salary: "₹30 LPA",
      type: "Full-time",
      department: "Technology",
      description: "Build cutting-edge web applications using modern technologies. Work on both frontend and backend development.",
      requirements: ["5+ years experience", "React & Node.js", "Database design", "API development"],
      icon: Code
    },
    {
      id: 2,
      title: "Fundraiser",
      location: "Andheri",
      salary: "₹3.60 LPA",
      type: "Full-time",
      department: "Business Development",
      description: "Drive fundraising initiatives and build relationships with potential investors and partners.",
      requirements: ["2+ years experience", "Communication skills", "Relationship building", "Target achievement"],
      icon: Target
    },
    {
      id: 3,
      title: "Customer Relationship Specialist",
      location: "Bangalore",
      salary: "₹4 LPA",
      type: "Full-time",
      department: "Customer Success",
      description: "Manage client relationships and ensure exceptional customer experience and satisfaction.",
      requirements: ["2+ years CRM experience", "Customer service", "Problem solving", "Communication skills"],
      icon: Headphones
    },
    {
      id: 4,
      title: "Customer Relationship Specialist",
      location: "Vashi",
      salary: "₹3 LPA",
      type: "Full-time",
      department: "Customer Success",
      description: "Handle customer inquiries and build long-term client relationships in the Mumbai region.",
      requirements: ["1-2 years experience", "Local language skills", "Customer focus", "Team collaboration"],
      icon: Users
    },
    {
      id: 5,
      title: "Sales Head",
      location: "Gujarat",
      salary: "₹10 LPA",
      type: "Full-time",
      department: "Sales",
      description: "Lead sales operations and drive revenue growth across Gujarat region.",
      requirements: ["7+ years sales experience", "Team leadership", "Strategic planning", "Market analysis"],
      icon: TrendingUp
    },
    {
      id: 6,
      title: "Business Development Executive",
      location: "Gujarat",
      salary: "₹4.50 LPA",
      type: "Full-time",
      department: "Business Development",
      description: "Identify new business opportunities and develop strategic partnerships.",
      requirements: ["2-3 years experience", "Business acumen", "Negotiation skills", "Market research"],
      icon: Building
    },
    {
      id: 7,
      title: "Field Sales Executive",
      location: "Gujarat",
      salary: "₹4.50 LPA",
      type: "Full-time",
      department: "Sales",
      description: "Conduct field sales activities and manage client relationships on-ground.",
      requirements: ["2+ years field sales", "Local market knowledge", "Travel flexibility", "Results driven"],
      icon: MapPin
    },
    {
      id: 8,
      title: "HR Recruiter",
      location: "Remote",
      salary: "Pay in Proportion",
      type: "Flexible",
      department: "Human Resources",
      description: "Source, screen, and recruit top talent for various positions across different industries.",
      requirements: ["HR experience", "Recruitment skills", "Communication", "Remote work capability"],
      icon: Users
    },
    {
      id: 9,
      title: "FreeSWITCH Developer",
      location: "Delhi",
      salary: "₹12 LPA",
      type: "Full-time",
      department: "Technology",
      description: "Develop and maintain telecommunication solutions using FreeSWITCH platform.",
      requirements: ["FreeSWITCH experience", "VoIP knowledge", "Linux administration", "Scripting skills"],
      icon: Phone
    },
    {
      id: 10,
      title: "Company Secretary",
      location: "Gujarat",
      salary: "₹3 LPA",
      type: "Full-time",
      department: "Legal & Compliance",
      description: "Handle corporate compliance, legal documentation, and regulatory requirements.",
      requirements: ["CS qualification", "Corporate law", "Compliance knowledge", "Documentation skills"],
      icon: Building
    },
    {
      id: 11,
      title: "International CSR",
      location: "Thane",
      salary: "₹4 LPA",
      type: "Full-time",
      department: "Customer Success",
      description: "Manage international client relationships and provide exceptional customer service globally.",
      requirements: ["International experience", "Multi-language skills", "Time zone flexibility", "Cultural awareness"],
      icon: Globe
    }
  ];

  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive healthcare and wellness programs for you and your family" },
    { icon: TrendingUp, title: "Career Growth", description: "Continuous learning opportunities and clear advancement paths" },
    { icon: DollarSign, title: "Competitive Compensation", description: "Market-leading salaries and performance-based incentives" },
    { icon: Clock, title: "24/7 Support", description: "Flexible working hours and remote work options available" },
    { icon: Users, title: "Inclusive Culture", description: "Diverse, collaborative environment where innovation thrives" },
    { icon: Star, title: "Premium Benefits", description: "Modern workspace, team events, and professional development" }
  ];

  const handleJobApply = (job: Job) => {
    setSelectedJob(job);
    setShowApplication(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedJob) {
      // Remove console.log for production
      // console.log('Application submitted:', { job: selectedJob, application: applicationData });
      
      // Here you would typically send the data to your backend
      alert('Application submitted successfully! We will contact you soon.');
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        coverLetter: '',
        resume: null
      });
      setSelectedJob(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({
        ...applicationData,
        resume: e.target.files[0]
      });
    }
  };

  return (
    <div className="jobs">
      <section className="hero section" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Build Your Future with Dazzlo</h1>
            <p>
              Join our dynamic team and be part of a company that's transforming industries. 
              Discover exciting career opportunities across various domains.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="culture section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Dazzlo</h2>
            <p>Experience a workplace that values innovation, growth, and your success</p>
          </motion.div>
          
          <div className="benefits-grid grid grid-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="benefit-icon">
                  <benefit.icon size={28} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="open-positions section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Current Openings</h2>
            <p>Explore exciting opportunities across different locations and departments</p>
          </motion.div>
          
          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="job-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="job-header">
                  <div className="job-icon">
                    <job.icon size={24} />
                  </div>
                  <div className="job-title-section">
                    <h3>{job.title}</h3>
                    <span className="job-department">{job.department}</span>
                  </div>
                  <div className="job-salary">{job.salary}</div>
                </div>
                
                <div className="job-meta">
                  <div className="job-meta-item">
                    <MapPin size={14} />
                    {job.location}
                  </div>
                  <div className="job-meta-item">
                    <Clock size={14} />
                    {job.type}
                  </div>
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="job-requirements">
                  <h4>Key Requirements:</h4>
                  <ul>
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                    {job.requirements.length > 3 && <li>+{job.requirements.length - 3} more...</li>}
                  </ul>
                </div>
                
                <motion.button 
                  className="btn btn-primary job-apply"
                  onClick={() => handleJobApply(job)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star size={16} />
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplication && selectedJob && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowApplication(false)}
          >
            <motion.div
              className="application-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <h2>Apply for {selectedJob.title}</h2>
                  <p>{selectedJob.location} • {selectedJob.salary}</p>
                </div>
                <button 
                  className="modal-close"
                  onClick={() => setShowApplication(false)}
                >
                  <X size={24} />
                </button>
              </div>

              <form className="application-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={applicationData.name}
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
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience">Years of Experience *</label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., 3 years"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="resume">Upload Resume *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <div className="file-upload-content">
                      <Upload size={20} />
                      <span>{applicationData.resume ? applicationData.resume.name : 'Choose file or drag here'}</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="coverLetter">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setShowApplication(false)}
                  >
                    Cancel
                  </button>
                  <motion.button 
                    type="submit" 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={18} />
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jobs; 