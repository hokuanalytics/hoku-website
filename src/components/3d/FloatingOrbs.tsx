"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Orb({
  position,
  color,
  size,
  speed,
  distort,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.position.x =
        position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={3}
          distort={distort}
          radius={1}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Inner glow */}
      <mesh position={position}>
        <sphereGeometry args={[size * 0.8, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      {/* Outer glow */}
      <mesh position={position}>
        <sphereGeometry args={[size * 1.5, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.05} />
      </mesh>
    </Float>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const lines = useMemo(() => {
    const connections = [];
    for (let i = 0; i < 15; i++) {
      const startX = (Math.random() - 0.5) * 10;
      const startY = (Math.random() - 0.5) * 10;
      const endX = (Math.random() - 0.5) * 10;
      const endY = (Math.random() - 0.5) * 10;

      connections.push({
        start: new THREE.Vector3(startX, startY, -2),
        end: new THREE.Vector3(endX, endY, -2),
      });
    }
    return connections;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((line, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          line.start,
          line.end,
        ]);
        return (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial
              color="#35AAF9"
              transparent
              opacity={0.1}
              linewidth={1}
            />
          </line>
        );
      })}
    </group>
  );
}

export default function FloatingOrbs({ className = "" }: { className?: string }) {
  const orbs = [
    { position: [-3, 2, 0] as [number, number, number], color: "#35AAF9", size: 0.8, speed: 1.2, distort: 0.4 },
    { position: [3, -1, -1] as [number, number, number], color: "#183A6B", size: 1.2, speed: 0.8, distort: 0.3 },
    { position: [-2, -2, 1] as [number, number, number], color: "#35AAF9", size: 0.6, speed: 1.5, distort: 0.5 },
    { position: [2, 2.5, -2] as [number, number, number], color: "#04223F", size: 1, speed: 1, distort: 0.35 },
    { position: [0, -3, 0] as [number, number, number], color: "#35AAF9", size: 0.5, speed: 1.3, distort: 0.45 },
    { position: [-4, 0, -1] as [number, number, number], color: "#183A6B", size: 0.7, speed: 0.9, distort: 0.4 },
    { position: [4, 1, 1] as [number, number, number], color: "#35AAF9", size: 0.4, speed: 1.6, distort: 0.5 },
  ];

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#35AAF9" />

        {orbs.map((orb, index) => (
          <Orb key={index} {...orb} />
        ))}
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
