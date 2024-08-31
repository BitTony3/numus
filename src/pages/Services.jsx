import React from 'react';
import { motion } from 'framer-motion';
import FloatingMenu from '../components/FloatingMenu';
import { useTheme } from 'next-themes';

const services = [
  { name: 'Digital Marketing', icon: '🌐', description: 'Comprehensive digital strategies to boost your online presence and reach.' },
  { name: 'Social Media Management', icon: '📱', description: 'Engaging content and community management across all major platforms.' },
  { name: 'Content Creation', icon: '✍️', description: 'Compelling, SEO-optimized content that resonates with your target audience.' },
  { name: 'SEO Optimization', icon: '🔍', description: 'Data-driven SEO strategies to improve your search engine rankings.' },
  { name: 'Email Marketing', icon: '📧', description: 'Personalized email campaigns to nurture leads and drive conversions.' },
  { name: 'PPC Advertising', icon: '💰', description: 'Targeted pay-per-click campaigns to maximize your ROI.' },
  { name: 'Brand Strategy', icon: '🎯', description: 'Comprehensive brand development and positioning strategies.' },
  { name: 'Analytics & Reporting', icon: '📊', description: 'In-depth analysis and reporting to track and improve campaign performance.' },
  { name: 'Influencer Marketing', icon: '🌟', description: 'Strategic partnerships with influencers to amplify your brand message.' },
  { name: 'Conversion Rate Optimization', icon: '📈', description: 'Data-driven strategies to improve website conversions.' },
  { name: 'Marketing Automation', icon: '🤖', description: 'Streamlined marketing processes for improved efficiency and results.' },
  { name: 'Video Marketing', icon: '🎥', description: 'Engaging video content to captivate and convert your audience.' },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-green-800 to-black p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300"
    >
      <motion.div 
        className="text-4xl mb-4"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        {service.icon}
      </motion.div>
      <h3 className="text-xl font-bold text-green-400 mb-2">{service.name}</h3>
      <p className="text-green-200">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-black to-green-900 text-white' : 'bg-gradient-to-b from-white to-green-100 text-black'}`}>
      <FloatingMenu />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold text-center text-green-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
