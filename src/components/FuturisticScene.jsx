import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, PerspectiveCamera, OrbitControls, Instances, Instance } from '@react-three/drei';
import MatrixRain from './MatrixRain';

const TornadoEffect = ({ count = 1000 }) => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particlesRef = useRef();

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01;
      particle.my += (state.mouse.y * 1000 - 1 - particle.my) * 0.01;
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      particlesRef.current.setMatrixAt(i, dummy.matrix);
    });
    particlesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <Instances ref={particlesRef} limit={particles.length}>
      <sphereGeometry args={[0.1]} />
      <meshPhongMaterial color="#00ff00" />
      {particles.map((_, i) => (
        <Instance key={i} />
      ))}
    </Instances>
  );
};

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
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 30]} />
      <OrbitControls camera={cameraRef.current} enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <MatrixRain count={1000} />
      <TornadoEffect count={2000} />
      <Sphere ref={sphereRef} args={[2, 64, 32]} position={[0, 0, -5]}>
        <meshPhongMaterial color="#000000" shininess={100} />
      </Sphere>
    </>
  );
};

export default FuturisticScene;
