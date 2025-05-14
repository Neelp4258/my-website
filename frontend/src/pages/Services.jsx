import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaBuilding, FaLaptopCode, FaUsers, FaHandshake, FaBullseye } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Overseas Recruitment',
      description: 'Expert hiring for blue-collar, technical, and white-collar roles across UAE, Qatar, KSA & more.',
      icon: FaGlobe,
      features: [
        'Blue-collar recruitment',
        'Technical staff hiring',
        'White-collar positions',
        'Gulf region expertise'
      ]
    },
    {
      title: 'BPO Recruitment',
      description: 'Voice, non-voice, blended & backend roles with volume delivery & strong join ratio.',
      icon: FaBuilding,
      features: [
        'Voice process hiring',
        'Non-voice operations',
        'Backend processing',
        'Volume recruitment'
      ]
    },
    {
      title: 'IT Recruitment',
      description: 'Developers, testers, support engineers to tech leads — sourced, screened, and ready to onboard.',
      icon: FaLaptopCode,
      features: [
        'Software development',
        'Quality assurance',
        'Technical support',
        'IT infrastructure'
      ]
    },
    {
      title: 'Non-IT Hiring',
      description: 'Finance, logistics, retail, sales, marketing & operations across all experience levels.',
      icon: FaUsers,
      features: [
        'Finance & accounting',
        'Sales & marketing',
        'Operations & logistics',
        'Administrative roles'
      ]
    },
    {
      title: 'End-to-End Solutions',
      description: 'From sourcing to onboarding — complete hiring cycle managed by a dedicated team.',
      icon: FaHandshake,
      features: [
        'Talent sourcing',
        'Screening & assessment',
        'Interview coordination',
        'Onboarding support'
      ]
    },
    {
      title: 'Custom Strategies',
      description: 'Tailored hiring solutions designed to meet your specific business needs.',
      icon: FaBullseye,
      features: [
        'Industry-specific hiring',
        'Volume recruitment',
        'Executive search',
        'Contract staffing'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-amber-900 dark:text-amber-100 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
              Comprehensive recruitment solutions tailored to your business needs, from entry-level to executive positions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-amber-500 dark:text-amber-400 mb-6" />
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                  {service.title}
                </h3>
                <p className="text-amber-800/80 dark:text-amber-200/80 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-amber-800/80 dark:text-amber-200/80">
                      <svg
                        className="w-5 h-5 text-amber-500 dark:text-amber-400 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-amber-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-playfair font-bold text-amber-900 dark:text-amber-100 mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
              A streamlined approach to finding the perfect match for your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Requirement Analysis',
                description: 'Understanding your specific needs and job requirements.'
              },
              {
                step: '02',
                title: 'Talent Sourcing',
                description: 'Identifying and attracting qualified candidates.'
              },
              {
                step: '03',
                title: 'Screening & Selection',
                description: 'Thorough evaluation of candidates\' skills and fit.'
              },
              {
                step: '04',
                title: 'Placement & Support',
                description: 'Facilitating smooth onboarding and ongoing support.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl font-bold text-amber-500 dark:text-amber-400 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-amber-800/80 dark:text-amber-200/80">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 