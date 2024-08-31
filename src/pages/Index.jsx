import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
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

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingMenu />
      <div className="h-screen w-full relative">
        <Canvas className="absolute inset-0">
          <FuturisticScene />
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white z-10">NextGen Marketing</h1>
        </div>
      </div>
      <motion.div style={{ y }} className="relative z-10">
        <MarketingContent />
      </motion.div>
    </div>
  );
};

export default Index;
