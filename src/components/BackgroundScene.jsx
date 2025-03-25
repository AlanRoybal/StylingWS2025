import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedBoxes() {
  const boxesRef = React.useRef([]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    boxesRef.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.y = Math.sin(elapsedTime * 1.5 + i * 0.5) * 0.5;
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      }
    });
  });

  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <mesh 
          key={i}
          ref={el => boxesRef.current[i] = el}
          position={[
            Math.random() * 10 - 5, 
            Math.random() * 5, 
            Math.random() * -10
          ]}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial 
            color={`hsl(${i * 60}, 70%, 60%)`} 
            opacity={0.7} 
            transparent 
          />
        </mesh>
      ))}
    </group>
  );
}

function BackgroundScene() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas 
        camera={{ 
          position: [0, 0, 5], 
          fov: 75, 
          near: 0.1, 
          far: 1000 
        }}
      >
        <color attach="background" args={['#f0f4f8']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedBoxes />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

export default BackgroundScene;