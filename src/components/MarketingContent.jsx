import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MarketingContent = () => {
  const contentSections = [
    {
      title: "Revolutionize Your Marketing Strategy",
      description: "Harness the power of cutting-edge technology and data-driven insights to skyrocket your brand's success.",
      buttonText: "Get Started"
    },
    {
      title: "AI-Powered Campaigns",
      description: "Leverage artificial intelligence to create hyper-personalized marketing campaigns that resonate with your audience.",
      buttonText: "Learn More"
    },
    {
      title: "Real-Time Analytics",
      description: "Make informed decisions with our advanced real-time analytics dashboard, providing actionable insights at your fingertips.",
      buttonText: "See Demo"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-blue-900 py-20">
      {contentSections.map((section, index) => (
        <motion.div
          key={index}
          className="max-w-4xl mx-auto text-white mb-32 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {section.title}
          </h2>
          <p className="text-2xl mb-8 text-gray-300">
            {section.description}
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-full transition-colors duration-300">
            {section.buttonText}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default MarketingContent;
