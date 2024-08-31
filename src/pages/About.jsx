import React from 'react';
import { motion } from 'framer-motion';
import FloatingMenu from '../components/FloatingMenu';
import { useTheme } from 'next-themes';
import BackButton from '../components/BackButton';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { theme } = useTheme();
  const { translate } = useLanguage();

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
          {translate('about')} Numus
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-semibold text-green-300 mb-4">{translate('ourStory')}</h2>
            <p className="text-lg text-gray-300 mb-6">
              {translate('storyContent')}
            </p>
            <p className="text-lg text-gray-300">
              {translate('storyContentExtra')}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-green-300 mb-4">{translate('ourMission')}</h2>
            <p className="text-lg text-gray-300 mb-6">
              {translate('missionContent')}
            </p>
            <p className="text-lg text-gray-300">
              {translate('missionContentExtra')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
