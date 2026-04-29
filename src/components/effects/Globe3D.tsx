'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';

import { useRef } from 'react';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        map={new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Land_ocean_ice_2048.jpg/1024px-Land_ocean_ice_2048.jpg')}
        normalMap={new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg')}
        emissive="#111" 
      />
    </Sphere>
  );
}

function TanzaniaMarker() {
  return (
    <mesh position={[0.35, 0.05, 1.02]}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={0.3} />
    </mesh>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <Globe />
        <TanzaniaMarker />
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
