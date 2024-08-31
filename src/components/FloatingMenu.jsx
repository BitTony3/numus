import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const FloatingMenu = () => {
  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 to-green-700 bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="text-white hover:text-green-200 transition-colors duration-300 mx-2"
          asChild
        >
          <Link to={item.to}>
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        </Button>
      ))}
    </motion.nav>
  );
};

export default FloatingMenu;
