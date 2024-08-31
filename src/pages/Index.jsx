import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import AnimatedSphere from '../components/AnimatedSphere';
import TransformingRobot from '../components/TransformingRobot';
import MarketingContent from '../components/MarketingContent';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
      <nav className="bg-white bg-opacity-10 p-4">
        <motion.h1 
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NextGen Marketing
        </motion.h1>
      </nav>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <MarketingContent />
          <div className="h-[600px]">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <AnimatedSphere />
              <TransformingRobot />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
