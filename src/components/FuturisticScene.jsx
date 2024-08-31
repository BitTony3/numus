import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, MeshWobbleMaterial } from '@react-three/drei';

const FuturisticScene = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Box args={[1, 1, 1]} position={[-2, 0, 0]}>
        <MeshWobbleMaterial color="#00ff00" factor={0.6} speed={1} />
      </Box>
      <Sphere args={[0.7, 64, 32]} position={[0, 1.5, 0]}>
        <MeshWobbleMaterial color="#ff00ff" factor={0.4} speed={2} />
      </Sphere>
      <Torus args={[0.5, 0.2, 16, 100]} position={[2, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <MeshWobbleMaterial color="#00ffff" factor={0.8} speed={3} />
      </Torus>
    </group>
  );
};

export default FuturisticScene;