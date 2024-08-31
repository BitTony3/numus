import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import FloatingMenu from '../components/FloatingMenu';
import { Card } from '@/components/ui/card';

const features = [
  { name: 'Advanced AI Integration', description: 'Our AI-powered tools analyze vast amounts of data to provide actionable insights.' },
  { name: 'Customizable Dashboards', description: 'Tailor your analytics view to focus on the metrics that matter most to your business.' },
  { name: 'Predictive Modeling', description: 'Forecast future trends and customer behaviors to stay ahead of the curve.' },
  { name: 'Multi-channel Attribution', description: 'Understand the true impact of each marketing touchpoint on your conversions.' },
  { name: 'Real-time Alerts', description: 'Get instant notifications about significant changes in your campaign performance.' },
  { name: 'Competitor Analysis', description: 'Benchmark your performance against industry leaders and identify opportunities for growth.' },
];

const LearnMore = () => {
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
          Learn More About Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-green-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-green-400 mb-2">{feature.name}</h3>
                <p className="text-green-200">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;