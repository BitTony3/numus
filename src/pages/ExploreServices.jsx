import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import FloatingMenu from '../components/FloatingMenu';
import { Card } from '@/components/ui/card';
import BackButton from '../components/BackButton';

const services = [
  { name: 'AI-Powered Analytics', description: 'Harness the power of artificial intelligence for deep insights.' },
  { name: 'Predictive Marketing', description: 'Anticipate trends and customer behavior with advanced algorithms.' },
  { name: 'Omnichannel Optimization', description: 'Seamless integration across all marketing channels for maximum impact.' },
  { name: 'Content Personalization', description: 'Deliver tailored content to each user for enhanced engagement.' },
  { name: 'Automated Campaign Management', description: 'Streamline your marketing efforts with intelligent automation.' },
  { name: 'Real-time Performance Tracking', description: 'Monitor and adjust your strategies on the fly for optimal results.' },
];

const ExploreServices = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-black to-green-900 text-white' : 'bg-gradient-to-b from-green-50 to-green-200 text-black'}`}>
      <FloatingMenu />
      <BackButton />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold text-center text-green-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-green-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-green-400 mb-2">{service.name}</h3>
                <p className="text-green-200">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
