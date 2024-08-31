import React from 'react';
import { motion } from 'framer-motion';
import FloatingMenu from '../components/FloatingMenu';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import BackButton from '../components/BackButton';

const services = [
  { name: translate('digitalMarketing'), icon: '🌐', description: translate('digitalMarketingDesc') },
  { name: translate('socialMediaManagement'), icon: '📱', description: translate('socialMediaManagementDesc') },
  { name: translate('contentCreation'), icon: '✍️', description: translate('contentCreationDesc') },
  { name: translate('seoOptimization'), icon: '🔍', description: translate('seoOptimizationDesc') },
  { name: translate('emailMarketing'), icon: '📧', description: translate('emailMarketingDesc') },
  { name: translate('ppcAdvertising'), icon: '💰', description: translate('ppcAdvertisingDesc') },
  { name: translate('brandStrategy'), icon: '🎯', description: translate('brandStrategyDesc') },
  { name: translate('analyticsReporting'), icon: '📊', description: translate('analyticsReportingDesc') },
  { name: translate('influencerMarketing'), icon: '🌟', description: translate('influencerMarketingDesc') },
  { name: translate('conversionRateOptimization'), icon: '📈', description: translate('conversionRateOptimizationDesc') },
  { name: translate('marketingAutomation'), icon: '🤖', description: translate('marketingAutomationDesc') },
  { name: translate('videoMarketing'), icon: '🎥', description: translate('videoMarketingDesc') },
];

const questArchitecture = [
  { name: 'Discovery', description: 'Understand your business goals and target audience.', icon: '🔍' },
  { name: 'Strategy', description: 'Develop a tailored marketing strategy aligned with your objectives.', icon: '🎯' },
  { name: 'Implementation', description: 'Execute the strategy across chosen channels and platforms.', icon: '🚀' },
  { name: 'Optimization', description: 'Continuously refine and improve based on data and performance.', icon: '📈' },
  { name: 'Reporting', description: 'Provide regular insights and analytics on campaign performance.', icon: '📊' },
  { name: 'Innovation', description: 'Stay ahead with cutting-edge marketing technologies and trends.', icon: '💡' },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="bg-gradient-to-br from-green-800 to-black p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300">
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
      </Card>
    </motion.div>
  );
};

const QuestCard = ({ quest, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-gradient-to-br from-green-700 to-black p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{quest.icon}</span>
          <h3 className="text-xl font-bold text-green-300">{quest.name}</h3>
        </div>
        <p className="text-green-100">{quest.description}</p>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-black to-green-900 text-white' : 'bg-gradient-to-b from-green-50 to-green-200 text-black'}`}>
      <FloatingMenu />
      <BackButton />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold text-center text-green-400 mb-12 font-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-center text-green-400 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Quest Architecture
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {questArchitecture.map((quest, index) => (
            <QuestCard key={quest.name} quest={quest} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
