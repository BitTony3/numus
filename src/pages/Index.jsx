import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useNavigate } from 'react-router-dom';
import FuturisticScene from '../components/FuturisticScene';
import FloatingMenu from '../components/FloatingMenu';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

const MarketingContent = () => {
  const { translate } = useLanguage();
  
  const contentSections = [
    {
      title: translate('revolutionizeTitle'),
      description: translate('revolutionizeDescription'),
      buttonText: translate('getStarted')
    },
    {
      title: translate('aiCampaignsTitle'),
      description: translate('aiCampaignsDescription'),
      buttonText: translate('learnMore')
    },
    {
      title: translate('realTimeAnalyticsTitle'),
      description: translate('realTimeAnalyticsDescription'),
      buttonText: translate('seeDemo')
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-900 to-black py-20">
      {contentSections.map((section, index) => (
        <motion.div
          key={index}
          className="max-w-4xl mx-auto text-white mb-32 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
            {section.title}
          </h2>
          <p className="text-2xl mb-8 text-gray-300">
            {section.description}
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full transition-colors duration-300">
            {section.buttonText}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const { translate, language } = useLanguage();

  const fontClass = language === 'he' ? 'font-hebrew' : 'font-sans tracking-wide';

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(0, 50, 0, 1)", "rgba(0, 100, 0, 0.9)"]
  );

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleExploreServices = () => {
    navigate('/explore-services');
  };

  const handleLearnMore = () => {
    navigate('/learn-more');
  };

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
  ];

  const successStories = [
    { title: translate('successStory1Title'), description: translate('successStory1Desc') },
    { title: translate('successStory2Title'), description: translate('successStory2Desc') },
    { title: translate('successStory3Title'), description: translate('successStory3Desc') },
  ];

  const services = [
    { name: translate('digitalMarketing'), icon: '🤖', description: translate('digitalMarketingDesc') },
    { name: translate('socialMediaManagement'), icon: '🔮', description: translate('socialMediaManagementDesc') },
    { name: translate('contentCreation'), icon: '🌐', description: translate('contentCreationDesc') },
  ];

  return (
    <motion.div 
      ref={containerRef} 
      className={`min-h-screen text-white overflow-x-hidden ${fontClass}`}
      style={{ background: backgroundColor }}
    >
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <Button onClick={toggleTheme} className="bg-green-600 hover:bg-green-700">
          {theme === 'dark' ? '☀️' : '🌙'}
        </Button>
        <LanguageSwitcher />
      </div>
      <FloatingMenu />
      <div className="h-screen w-full relative">
        <Canvas className="absolute inset-0">
          <FuturisticScene />
        </Canvas>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black/70">
          <motion.h1 
            className={`text-6xl md:text-8xl font-bold text-green-400 z-10 mb-4 ${language === 'he' ? 'font-hebrew' : 'font-heading tracking-wider'}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Numus
          </motion.h1>
          <motion.p 
            className={`text-xl md:text-2xl text-green-200 z-10 max-w-2xl text-center mb-8 px-4 ${language === 'he' ? 'font-hebrew' : 'font-body tracking-wide'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {translate('welcomeMessage')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full transition-colors duration-300"
              onClick={handleExploreServices}
            >
              {translate('exploreServices')}
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="relative z-10">
        <MarketingContent />
      </div>
      
      <section className="py-20 bg-gradient-to-r from-green-900 to-black relative z-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {translate('ourImpact')}
          </motion.h2>
          <motion.div 
            className="w-full h-64 md:h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a4a1a" />
                <XAxis dataKey="name" stroke="#4ade80" />
                <YAxis stroke="#4ade80" />
                <Tooltip contentStyle={{ backgroundColor: '#1a4a1a', border: 'none' }} />
                <Bar dataKey="value" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-black to-green-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {translate('successStories')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {successStories.map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-green-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 h-full">
                    <h3 className="text-xl font-bold text-green-400 mb-2">{story.title}</h3>
                    <p className="text-green-200">{story.description}</p>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {translate('ourServices')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-green-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">{service.name}</h3>
                    <p className="text-green-200">{service.description}</p>
                  </div>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={handleLearnMore}>{translate('learnMore')}</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Index;
