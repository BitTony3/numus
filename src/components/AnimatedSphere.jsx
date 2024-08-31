import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#ff69b4"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

export default AnimatedSphere;