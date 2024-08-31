import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const MatrixSymbol = ({ position, character, speed }) => {
  const ref = useRef();

  useFrame((state) => {
    ref.current.position.z += speed;
    if (ref.current.position.z > 10) {
      ref.current.position.z = -30;
    }
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.5}
      color="#00ff00"
    >
      {character}
    </Text>
  );
};

const MatrixRain = ({ count = 1000 }) => {
  const symbols = useMemo(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    return Array.from({ length: count }, () => ({
      position: [
        Math.random() * 60 - 30,
        Math.random() * 60 - 30,
        Math.random() * -30
      ],
      character: chars[Math.floor(Math.random() * chars.length)],
      speed: Math.random() * 0.1 + 0.05
    }));
  }, [count]);

  return (
    <group>
      {symbols.map((symbol, index) => (
        <MatrixSymbol key={index} {...symbol} />
      ))}
    </group>
  );
};

export default MatrixRain;