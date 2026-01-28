"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

function HydrogenAtom({
  position,
  color,
  size = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.2}
          radius={1}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Glow effect */}
      <mesh position={position}>
        <sphereGeometry args={[size * 1.2, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

function Bond({
  start,
  end,
  color,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}) {
  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  }, [start, end]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.5}
    />
  );
}

function HydrogenStructure() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  // H2 molecule structure - two hydrogen atoms
  const atom1Position: [number, number, number] = [-0.8, 0, 0];
  const atom2Position: [number, number, number] = [0.8, 0, 0];

  return (
    <group ref={groupRef}>
      {/* Hydrogen atoms */}
      <HydrogenAtom
        position={atom1Position}
        color="#35AAF9"
        size={0.5}
        speed={1.2}
      />
      <HydrogenAtom
        position={atom2Position}
        color="#35AAF9"
        size={0.5}
        speed={0.8}
      />

      {/* Bond between atoms */}
      <Bond start={atom1Position} end={atom2Position} color="#35AAF9" />

      {/* Outer electron orbits */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#35AAF9" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
        <torusGeometry args={[1.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#183A6B" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2, -Math.PI / 4, 0]}>
        <torusGeometry args={[2.1, 0.01, 16, 100]} />
        <meshBasicMaterial color="#04223F" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 15;
      pos[i + 1] = (Math.random() - 0.5) * 15;
      pos[i + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#35AAF9"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HydrogenMolecule({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#35AAF9" />

        <HydrogenStructure />
        <ParticleField />
      </Canvas>
    </div>
  );
}
