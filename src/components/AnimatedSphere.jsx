import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();
  const boxRef = useRef();
  const torusRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    sphereRef.current.rotation.x = t * 0.2;
    sphereRef.current.rotation.y = t * 0.3;
    boxRef.current.rotation.x = t * 0.3;
    boxRef.current.rotation.y = t * 0.2;
    torusRef.current.rotation.x = t * 0.4;
    torusRef.current.rotation.y = t * 0.5;
  });

  return (
    <group>
      <Sphere ref={sphereRef} args={[0.7, 64, 32]} position={[-1.5, 0, 0]}>
        <MeshDistortMaterial color="#ff69b4" attach="material" distort={0.6} speed={1.5} roughness={0} />
      </Sphere>
      <Box ref={boxRef} args={[1, 1, 1]} position={[1.5, 0, 0]}>
        <meshNormalMaterial attach="material" />
      </Box>
      <Torus ref={torusRef} args={[0.5, 0.2, 16, 100]} position={[0, 1.5, 0]}>
        <MeshDistortMaterial color="#4fc3f7" attach="material" distort={0.4} speed={2} roughness={0.2} />
      </Torus>
    </group>
  );
};

export default AnimatedSphere;
