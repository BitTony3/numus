import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FloatingMenu = () => {
  const menuItems = ['Home', 'Services', 'About', 'Contact'];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {menuItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="text-white hover:text-blue-300 transition-colors duration-300 mx-2"
        >
          {item}
        </Button>
      ))}
    </motion.nav>
  );
};

export default FloatingMenu;