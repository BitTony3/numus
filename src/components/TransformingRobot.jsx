import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';

const TransformingRobot = () => {
  const robotRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scale = Math.sin(t) * 0.5 + 1;
    robotRef.current.scale.set(scale, scale, scale);
    robotRef.current.rotation.y = t * 0.5;
  });

  return (
    <group ref={robotRef}>
      {/* Robot Body */}
      <Box args={[1, 1.5, 0.5]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#3f51b5" />
      </Box>
      {/* Robot Head */}
      <Sphere args={[0.3, 32, 32]} position={[0, 1, 0]}>
        <meshPhongMaterial color="#e91e63" />
      </Sphere>
      {/* Robot Arms */}
      <Cylinder args={[0.1, 0.1, 0.8]} position={[-0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshPhongMaterial color="#4caf50" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.8]} position={[0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshPhongMaterial color="#4caf50" />
      </Cylinder>
      {/* Robot Legs / Car Wheels */}
      <Sphere args={[0.2, 32, 32]} position={[-0.3, -1, 0.3]}>
        <meshPhongMaterial color="#ffc107" />
      </Sphere>
      <Sphere args={[0.2, 32, 32]} position={[0.3, -1, 0.3]}>
        <meshPhongMaterial color="#ffc107" />
      </Sphere>
      <Sphere args={[0.2, 32, 32]} position={[-0.3, -1, -0.3]}>
        <meshPhongMaterial color="#ffc107" />
      </Sphere>
      <Sphere args={[0.2, 32, 32]} position={[0.3, -1, -0.3]}>
        <meshPhongMaterial color="#ffc107" />
      </Sphere>
    </group>
  );
};

export default TransformingRobot;