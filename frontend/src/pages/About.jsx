import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaChartLine, FaGlobe } from 'react-icons/fa';

const team = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    image: "👨‍💼",
    description: "20+ years of experience in Gulf recruitment and HR management."
  },
  {
    name: "Sarah Johnson",
    position: "Head of Operations",
    image: "👩‍💼",
    description: "Expert in streamlining recruitment processes and team management."
  },
  {
    name: "Mohammed Ali",
    position: "Gulf Region Director",
    image: "👨‍💼",
    description: "Specialized in Middle East recruitment and client relations."
  },
  {
    name: "Emily Chen",
    position: "IT Recruitment Lead",
    image: "👩‍💻",
    description: "Tech industry expert with extensive network in the Gulf region."
  }
];

const stats = [
  { number: '200+', label: 'Successful Placements', icon: FaUsers },
  { number: '10+ MNCs', label: 'Partner Companies', icon: FaHandshake },
  { number: '95%', label: 'Client Satisfaction', icon: FaChartLine },
  { number: '2+ Years', label: 'Countries Served', icon: FaGlobe },
];

const About = () => {
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
              About DazzloHR
            </h1>
            <p className="text-lg text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
              Your trusted partner in global recruitment solutions, connecting exceptional talent with outstanding opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg">
                  <stat.icon className="w-12 h-12 text-amber-500 dark:text-amber-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-amber-800/80 dark:text-amber-200/80">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-amber-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-playfair font-bold text-amber-900 dark:text-amber-100 mb-4">
                Our Mission
              </h2>
              <p className="text-amber-800/80 dark:text-amber-200/80">
                To transform the recruitment landscape by connecting exceptional talent with outstanding opportunities, 
                fostering growth and success for both employers and employees.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-playfair font-bold text-amber-900 dark:text-amber-100 mb-4">
                Our Vision
              </h2>
              <p className="text-amber-800/80 dark:text-amber-200/80">
                To be the global leader in recruitment solutions, known for our integrity, innovation, and 
                commitment to creating meaningful connections in the professional world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-playfair font-bold text-amber-900 dark:text-amber-100 mb-4">
              Why Choose DazzloHR?
            </h2>
            <p className="text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
              We combine expertise with personalized service to deliver exceptional recruitment solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Reach',
                description: 'Access to talent and opportunities across multiple countries and industries.',
              },
              {
                title: 'Expert Team',
                description: 'Experienced professionals dedicated to understanding your unique needs.',
              },
              {
                title: 'Quality Service',
                description: 'Committed to delivering excellence in every aspect of our service.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-amber-800/80 dark:text-amber-200/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 