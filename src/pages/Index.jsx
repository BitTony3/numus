import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedSphere from '../components/AnimatedSphere';
import MarketingContent from '../components/MarketingContent';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
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
          <div className="h-[400px]">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <AnimatedSphere />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
