import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import FuturisticScene from '../components/FuturisticScene';
import FloatingMenu from '../components/FloatingMenu';
import MarketingContent from '../components/MarketingContent';

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(0, 0, 0, 1)", "rgba(0, 128, 0, 0.8)"]
  );

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef} 
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: backgroundColor }}
    >
      <FloatingMenu />
      <div className="h-screen w-full relative">
        <Canvas className="absolute inset-0">
          <FuturisticScene />
        </Canvas>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black/50">
          <h1 className="text-6xl font-bold text-green-400 z-10 animate-pulse mb-4">Notka</h1>
          <p className="text-2xl text-green-200 z-10 max-w-2xl text-center">
            Revolutionizing marketing with cutting-edge AI and data-driven strategies. 
            Welcome to the future of brand growth and customer engagement.
          </p>
        </div>
      </div>
      <motion.div style={{ y }} className="relative z-10">
        <MarketingContent />
      </motion.div>
    </motion.div>
  );
};

export default Index;
