"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Text, Billboard } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import type { Group, Mesh } from "three";

/* ═══════════════════════════════════════════════════
   Multiversal Skill Orbits — Background Constellation
   ═══════════════════════════════════════════════════ */

const ORBITS = [
  {
    id: "frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    radius: 1.9,
    speed: 0.14,
    tilt: [0.4, 0, 0.15] as [number, number, number],
    color: "#6fff5e",
    emissive: "#1f9f44",
  },
  {
    id: "backend",
    skills: ["Node.js", "Express", "FastAPI", "Python", "Socket.io"],
    radius: 2.7,
    speed: -0.10,
    tilt: [-0.5, 0.3, 0] as [number, number, number],
    color: "#a67aff",
    emissive: "#5522be",
  },
  {
    id: "infra",
    skills: ["MongoDB", "Docker", "Linux", "AWS", "Redis"],
    radius: 3.5,
    speed: 0.07,
    tilt: [0.2, -0.4, 0.2] as [number, number, number],
    color: "#37e1ff",
    emissive: "#1a7a8f",
  },
  {
    id: "frontier",
    skills: ["Solidity", "Rust", "Move", "AI/ML", "LangChain", "Web3"],
    radius: 4.3,
    speed: -0.055,
    tilt: [-0.3, 0.2, -0.25] as [number, number, number],
    color: "#ff7eb3",
    emissive: "#8f1a45",
  },
];

/* ── Central pulsing nexus ── */
function CoreNexus() {
  const inner = useRef<Mesh>(null);
  const outer = useRef<Mesh>(null);

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
          emissive="#6fff5e"
          emissiveIntensity={0.9}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh ref={outer}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial
          color="#a67aff"
          emissive="#5522be"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <pointLight intensity={1.5} color="#6fff5e" distance={3} />
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
function OrbitRing({ orbit }: { orbit: (typeof ORBITS)[number] }) {
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
        <fog attach="fog" args={["#040507", 5, 14]} />
        <ambientLight intensity={0.45} />
        <pointLight position={[-4, 3, 5]} intensity={1.6} color="#6fff5e" />
        <pointLight position={[4, -2, 5]} intensity={1.6} color="#a67aff" />
        <pointLight position={[0, 4, -3]} intensity={1.0} color="#37e1ff" />
        <pointLight position={[2, -3, -4]} intensity={0.8} color="#ff7eb3" />

        <CoreNexus />
        {ORBITS.map((orbit) => (
          <OrbitRing key={orbit.id} orbit={orbit} />
        ))}

        <Stars radius={90} depth={45} count={2500} factor={4} saturation={0} fade speed={0.8} />
        <CameraDrift />
      </Canvas>
    </div>
  );
}
