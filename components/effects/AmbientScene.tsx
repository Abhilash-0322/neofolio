"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function DualCores() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={group}>
      <mesh position={[-1.35, 0, 0]}>
        <torusKnotGeometry args={[0.68, 0.18, 180, 24]} />
        <meshStandardMaterial color="#6fff5e" emissive="#1f9f44" emissiveIntensity={0.85} metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[1.35, 0, 0]}>
        <torusKnotGeometry args={[0.68, 0.18, 180, 24]} />
        <meshStandardMaterial color="#a67aff" emissive="#5522be" emissiveIntensity={0.9} metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function AmbientScene() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setIsEnabled(media.matches && !reduced.matches);
    update();
    media.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 opacity-65">
      <Canvas camera={{ fov: 55, position: [0, 0.2, 5.6] }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} dpr={[1, 1.5]}>
        <fog attach="fog" args={["#040507", 6, 12]} />
        <ambientLight intensity={0.65} />
        <pointLight position={[-3, 3, 4]} intensity={2.1} color="#6fff5e" />
        <pointLight position={[3, -2, 4]} intensity={2.2} color="#a67aff" />
        <DualCores />
        <Stars radius={80} depth={38} count={1700} factor={4.2} saturation={0} fade speed={1.05} />
      </Canvas>
    </div>
  );
}
