import React from 'react';
import { motion } from 'framer-motion';
import FloatingMenu from '../components/FloatingMenu';

const services = [
  { name: 'Digital Marketing', icon: '🌐' },
  { name: 'Social Media Management', icon: '📱' },
  { name: 'Content Creation', icon: '✍️' },
  { name: 'SEO Optimization', icon: '🔍' },
  { name: 'Email Marketing', icon: '📧' },
  { name: 'PPC Advertising', icon: '💰' },
  { name: 'Brand Strategy', icon: '🎯' },
  { name: 'Analytics & Reporting', icon: '📊' },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-green-800 to-black p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-green-400 mb-2">{service.name}</h3>
      <p className="text-green-200">Innovative solutions to boost your brand's presence and engagement.</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-900 text-white">
      <FloatingMenu />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-green-400 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;