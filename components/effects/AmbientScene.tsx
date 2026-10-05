"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Text, Billboard } from "@react-three/drei";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { Group, Mesh } from "three";

/* ═══════════════════════════════════════════════════
   Neon Tokyo Skill Orbits — Background Constellation
   ═══════════════════════════════════════════════════ */

const ORBIT_PALETTES = {
  light: [
    { id: "frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"], radius: 1.9, speed: 0.14, tilt: [0.4, 0, 0.15] as [number, number, number], color: "#f04a35", emissive: "#d62f8c" },
    { id: "backend", skills: ["FastAPI", "Python", "Node.js", "Express", "Socket.io"], radius: 2.7, speed: -0.1, tilt: [-0.5, 0.3, 0] as [number, number, number], color: "#d62f8c", emissive: "#8f1f67" },
    { id: "infra", skills: ["PostgreSQL", "Docker", "AWS", "Azure", "Redis"], radius: 3.5, speed: 0.07, tilt: [0.2, -0.4, 0.2] as [number, number, number], color: "#38d8ff", emissive: "#007da8" },
    { id: "frontier", skills: ["LangChain", "RAG", "AI Agents", "Solidity", "Web3"], radius: 4.3, speed: -0.055, tilt: [-0.3, 0.2, -0.25] as [number, number, number], color: "#49f2c2", emissive: "#1e9e93" }
  ],
  dark: [
    { id: "frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"], radius: 1.9, speed: 0.14, tilt: [0.4, 0, 0.15] as [number, number, number], color: "#ff4fba", emissive: "#ad277b" },
    { id: "backend", skills: ["FastAPI", "Python", "Node.js", "Express", "Socket.io"], radius: 2.7, speed: -0.1, tilt: [-0.5, 0.3, 0] as [number, number, number], color: "#ff5577", emissive: "#c51d4f" },
    { id: "infra", skills: ["PostgreSQL", "Docker", "AWS", "Azure", "Redis"], radius: 3.5, speed: 0.07, tilt: [0.2, -0.4, 0.2] as [number, number, number], color: "#38d8ff", emissive: "#007da8" },
    { id: "frontier", skills: ["LangChain", "RAG", "AI Agents", "Solidity", "Web3"], radius: 4.3, speed: -0.055, tilt: [-0.3, 0.2, -0.25] as [number, number, number], color: "#49f2c2", emissive: "#1e9e93" }
  ]
} as const;

type OrbitConfig = {
  id: string;
  skills: readonly string[];
  radius: number;
  speed: number;
  tilt: [number, number, number];
  color: string;
  emissive: string;
};

/* ── Central pulsing nexus ── */
function CoreNexus({ palette }: { palette: "light" | "dark" }) {
  const inner = useRef<Mesh>(null);
  const outer = useRef<Mesh>(null);
  const innerColor = palette === "light" ? "#f04a35" : "#38d8ff";
  const outerColor = palette === "light" ? "#d62f8c" : "#ff4fba";
  const outerEmissive = palette === "light" ? "#8f1f67" : "#ad277b";

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (inner.current) {
      inner.current.scale.setScalar(1 + Math.sin(t * 1.8) * 0.08);
      inner.current.rotation.y += 0.006;
      inner.current.rotation.z += 0.004;
    }
    if (outer.current) {
      outer.current.scale.setScalar(1 + Math.cos(t * 1.2) * 0.06);
      outer.current.rotation.y -= 0.004;
      outer.current.rotation.x += 0.003;
    }
  });

  return (
    <group>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.28, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive={innerColor}
          emissiveIntensity={0.9}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh ref={outer}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial
          color={outerColor}
          emissive={outerEmissive}
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <pointLight intensity={1.5} color={innerColor} distance={3} />
    </group>
  );
}

/* ── Single orbiting skill node ── */
function SkillNode({
  angle,
  radius,
  color,
  emissive,
  label,
}: {
  angle: number;
  radius: number;
  color: string;
  emissive: string;
  label: string;
}) {
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const node = useRef<Mesh>(null);

  useFrame(() => {
    if (node.current) {
      node.current.rotation.x += 0.018;
      node.current.rotation.y += 0.012;
    }
  });

  return (
    <group position={[x, 0, z]}>
      <mesh ref={node}>
        <octahedronGeometry args={[0.055, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={1.4}
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>
      <sprite scale={[0.32, 0.32, 1]}>
        <spriteMaterial
          color={color}
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
        />
      </sprite>
      <Billboard>
        <Text
          position={[0, 0.13, 0]}
          fontSize={0.07}
          color={color}
          anchorX="center"
          anchorY="bottom"
          outlineWidth={0.004}
          outlineColor="#000000"
        >
          {label}
        </Text>
      </Billboard>
    </group>
  );
}

/* ── One orbital ring with skill nodes ── */
function OrbitRing({ orbit }: { orbit: OrbitConfig }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * orbit.speed;
    }
  });

  return (
    <group ref={group} rotation={orbit.tilt}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[orbit.radius, 0.003, 8, 160]} />
        <meshBasicMaterial color={orbit.color} transparent opacity={0.1} />
      </mesh>
      {orbit.skills.map((skill, i) => (
        <SkillNode
          key={skill}
          angle={(i / orbit.skills.length) * Math.PI * 2}
          radius={orbit.radius}
          color={orbit.color}
          emissive={orbit.emissive}
          label={skill}
        />
      ))}
    </group>
  );
}

/* ── Gentle camera drift ── */
function CameraDrift() {
  const { camera } = useThree();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.08) * 0.2;
    camera.position.y = 0.2 + Math.cos(t * 0.06) * 0.12;
  });

  return null;
}

export function AmbientScene() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { resolvedTheme } = useTheme();
  const palette = resolvedTheme === "dark" ? "dark" : "light";
  const orbits = useMemo(() => ORBIT_PALETTES[palette], [palette]);
  const fogColor = palette === "dark" ? "#080b1c" : "#eef5f7";

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

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 opacity-55">
      <Canvas
        camera={{ fov: 55, position: [0, 0.2, 5.6] }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={[fogColor, 5, 14]} />
        <ambientLight intensity={0.45} />
        <pointLight position={[-4, 3, 5]} intensity={1.6} color={orbits[0].color} />
        <pointLight position={[4, -2, 5]} intensity={1.6} color={orbits[1].color} />
        <pointLight position={[0, 4, -3]} intensity={1.0} color={orbits[2].color} />
        <pointLight position={[2, -3, -4]} intensity={0.8} color={orbits[3].color} />

        <CoreNexus palette={palette} />
        {orbits.map((orbit) => (
          <OrbitRing key={orbit.id} orbit={orbit} />
        ))}

        <Stars radius={90} depth={45} count={palette === "dark" ? 3200 : 1200} factor={4} saturation={palette === "light" ? 0.35 : 0} fade speed={0.8} />
        <CameraDrift />
      </Canvas>
    </div>
  );
}
