import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Contact Us
            </h1>
            <p className="text-lg text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
              Get in touch with our team for any inquiries about our recruitment services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaPhone,
                title: 'Phone',
                content: '+91 9373015503',
                link: 'tel:+919373015503'
              },
              {
                icon: FaEnvelope,
                title: 'Email',
                content: 'info@dazzlo.co.in',
                link: 'mailto:info@dazzlo.co.in'
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Location',
                content: 'Kalyan, Maharashtra, India',
                link: 'https://maps.google.com/?q=Kalyan,Maharashtra'
              },
              {
                icon: FaClock,
                title: 'Business Hours',
                content: '24/7 Available',
                link: null
              }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.link ? '_blank' : undefined}
                rel={item.link ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  item.link ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <item.icon className="w-8 h-8 text-amber-500 dark:text-amber-400 mb-4" />
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-amber-800/80 dark:text-amber-200/80">
                  {item.content}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-amber-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-playfair font-bold text-amber-900 dark:text-amber-100 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-amber-900 dark:text-amber-100 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-amber-900 dark:text-amber-100 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-amber-900 dark:text-amber-100 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-amber-900 dark:text-amber-100 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-amber-900 dark:text-amber-100 focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 