import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import MatrixRain from './MatrixRain';

const FuturisticScene = () => {
  const sphereRef = useRef();
  const cameraRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    sphereRef.current.rotation.y = t * 0.2;
    sphereRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 10]} />
      <OrbitControls camera={cameraRef.current} enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <MatrixRain count={2000} />
      <Sphere ref={sphereRef} args={[2, 64, 32]} position={[0, 0, -5]}>
        <meshPhongMaterial color="#000000" shininess={100} />
      </Sphere>
    </>
  );
};

export default FuturisticScene;
