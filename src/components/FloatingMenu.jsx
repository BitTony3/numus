import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Menu } from 'lucide-react';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu size={24} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-green-800 to-green-900 z-40 shadow-lg"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-start p-8 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="text-white hover:text-green-200 transition-colors duration-300"
                    asChild
                  >
                    <Link to={item.to} className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMenu;
