import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import PremiumCard from '../components/PremiumCard';
import PremiumButton from '../components/PremiumButton';
import AnimatedIcon from '../components/AnimatedIcon';
import ScrollProgress from '../components/ScrollProgress';
import FloatingActionButton from '../components/FloatingActionButton';

const Home = () => {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AnimatedIcon icon="🌟" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Overseas Recruitment & IT Non-IT Recruitment Specialist
            </motion.h1>
            <motion.p 
              className="text-xl text-amber-800 dark:text-amber-200 mb-8 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building teams that drive growth across India and the Gulf region. Your trusted partner in recruitment solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/jobs">
                <PremiumButton variant="primary">Find Jobs</PremiumButton>
              </Link>
              <Link to="/contact">
                <PremiumButton variant="secondary">Contact Us</PremiumButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AnimatedIcon icon="🎯" />
              </motion.div>
              <motion.h2 
                className="text-4xl md:text-5xl font-playfair font-bold mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Our Vision
              </motion.h2>
              <motion.p 
                className="text-xl text-amber-800 dark:text-amber-200 font-poppins"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Building India's most trusted, diversified business group
              </motion.p>
            </div>

            <motion.div 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-amber-100 dark:border-gray-700 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg text-amber-900 dark:text-amber-100 mb-6 leading-relaxed">
                At Dazzlo Enterprises Pvt Ltd, our vision is to become one of India's most trusted, diversified business groups — a catalyst for growth in the fields of Human Resource, Technology, Overseas Recruitment, and Digital Transformation.
              </p>
              <p className="text-lg text-amber-900 dark:text-amber-100 leading-relaxed">
                We believe the future belongs to those who build fearlessly — and that's exactly what we're here to do. Our aim is to simplify complex business needs by offering end-to-end, reliable, and scalable solutions under one brand. From connecting the right talent to the right companies, to crafting stunning digital experiences, to powering businesses with automation and infrastructure — we envision Dazzlo as a brand that delivers value with speed, strategy, and integrity.
              </p>
            </motion.div>

            <motion.h3 
              className="text-3xl font-playfair font-bold text-center mb-12 text-amber-900 dark:text-amber-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              What We Stand For
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation with Purpose",
                  description: "We don't follow trends, we set them — through smart technology, sharp insights, and bold execution.",
                  icon: "💡"
                },
                {
                  title: "Global Reach, Indian Roots",
                  description: "With a strong presence in India and growing reach in the Gulf region, we serve clients both locally and internationally.",
                  icon: "🌍"
                },
                {
                  title: "Excellence in Execution",
                  description: "From a single hire to a complete SaaS platform, we deliver every project like it's our own.",
                  icon: "⭐"
                },
                {
                  title: "Empowering Businesses",
                  description: "Whether you're a startup, an SME, or a Fortune 500 — we have solutions designed to scale with you.",
                  icon: "🚀"
                },
                {
                  title: "People-First Culture",
                  description: "Our foundation is built on strong relationships — with clients, candidates, partners, and our own team.",
                  icon: "🤝"
                }
              ].map((item, index) => (
                <PremiumCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
              >
                <AnimatedIcon icon="✨" />
              </motion.div>
              <p className="text-2xl font-playfair font-bold text-amber-900 dark:text-amber-100 italic">
                "We don't just run a business — We build brands, craft impact, and fuel the future."
              </p>
              <p className="text-xl text-amber-800 dark:text-amber-200 mt-4">
                This is Dazzlo. This is what we stand for.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AnimatedIcon icon="🎉" />
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Build Your Dream Team?
            </motion.h2>
            <motion.p 
              className="text-amber-800 dark:text-amber-200 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Let's discuss how Dazzlo HR can help you find the perfect talent for your organization.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact">
                <PremiumButton variant="primary">Get Started</PremiumButton>
              </Link>
              <Link to="/services">
                <PremiumButton variant="secondary">Learn More</PremiumButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FloatingActionButton />
    </div>
  );
};

export default Home; 