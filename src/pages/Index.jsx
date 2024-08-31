import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text } from '@react-three/drei';
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
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FuturisticScene />
          <Text
            position={[0, 0, -1]}
            fontSize={0.5}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            NextGen Marketing
          </Text>
        </Canvas>
      </div>
      <motion.div style={{ y }} className="relative z-10">
        <MarketingContent />
      </motion.div>
    </div>
  );
};

export default Index;
