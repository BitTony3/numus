import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MarketingContent = () => {
  return (
    <div className="text-white">
      <motion.h2 
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Revolutionize Your Marketing Strategy
      </motion.h2>
      <motion.p 
        className="text-xl mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Harness the power of cutting-edge technology and data-driven insights to skyrocket your brand's success.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button className="bg-white text-purple-600 hover:bg-purple-100 text-lg px-8 py-3 rounded-full">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

export default MarketingContent;