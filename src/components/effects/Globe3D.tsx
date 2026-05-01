'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  const textureUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Land_ocean_ice_2048.jpg/1024px-Land_ocean_ice_2048.jpg';
  const normalUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg';

  const texture = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new THREE.TextureLoader().load(textureUrl);
    }
    return null;
  }, [textureUrl]);

  const normalMap = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new THREE.TextureLoader().load(normalUrl);
    }
    return null;
  }, [normalUrl]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const geometry = useMemo(() => new THREE.SphereGeometry(1, 64, 64), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalMap,
    emissive: new THREE.Color('#111')
  }), [texture, normalMap]);

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} />
  );
}

function TanzaniaMarker() {
  const geometry = useMemo(() => new THREE.SphereGeometry(0.025, 8, 8), []);
  const material = useMemo(() => new THREE.MeshBasicMaterial({ 
    color: '#C9A84C',
    emissive: new THREE.Color('#C9A84C'),
    emissiveIntensity: 0.3
  }), []);

  return (
    <mesh position={[0.35, 0.05, 1.02]} geometry={geometry} material={material} />
  );
}

export default function Globe3D() {
  if (typeof window === 'undefined') {
    return null;
  }

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
