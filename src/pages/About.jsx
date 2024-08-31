import React from 'react';
import { motion } from 'framer-motion';
import FloatingMenu from '../components/FloatingMenu';
import { useTheme } from 'next-themes';

const About = () => {
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
          About Notka
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-semibold text-green-300 mb-4">Our Story</h2>
            <p className="text-lg text-gray-300 mb-6">
              Notka was founded in 2023 with a vision to revolutionize the digital marketing landscape. 
              Our team of passionate marketers and tech enthusiasts came together to create a unique 
              blend of creativity and data-driven strategies.
            </p>
            <p className="text-lg text-gray-300">
              Today, we're proud to be at the forefront of innovative marketing solutions, 
              helping businesses of all sizes achieve their goals in the digital realm.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-green-300 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              At Notka, our mission is to empower businesses with cutting-edge marketing strategies 
              that drive growth, engagement, and lasting success. We believe in the power of 
              data-driven decisions combined with creative excellence.
            </p>
            <p className="text-lg text-gray-300">
              We're committed to staying ahead of the curve, constantly innovating and adapting 
              to the ever-changing digital landscape to ensure our clients always stay one step ahead.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
