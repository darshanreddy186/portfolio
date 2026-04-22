import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Floating orbs that drift slowly
function FloatingOrbs() {
  const group = useRef<THREE.Group>(null);
  const count = 60;

  const { positions, scales } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      sc[i] = 0.04 + Math.random() * 0.12;
    }
    return { positions: pos, scales: sc };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      child.position.y += Math.sin(t * 0.3 + i * 0.7) * 0.001;
      child.position.x += Math.cos(t * 0.2 + i * 0.5) * 0.0008;
    });
  });

  const meshes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]] as [number, number, number],
      scale: scales[i],
      color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#818cf8' : '#c084fc',
    }));
  }, [positions, scales]);

  return (
    <group ref={group}>
      {meshes.map((m, i) => (
        <mesh key={i} position={m.position}>
          <sphereGeometry args={[m.scale, 6, 6]} />
          <meshBasicMaterial color={m.color} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

// Dense star-like particles
function StarField({ count = 1800 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;
      const t = Math.random();
      // cyan → indigo → violet gradient
      col[i * 3]     = 0.15 + t * 0.55;
      col[i * 3 + 1] = 0.55 - t * 0.25;
      col[i * 3 + 2] = 0.95;
      sz[i] = 0.5 + Math.random() * 1.5;
    }
    return [pos, col, sz];
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.018;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.012) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

// Mouse-reactive connection lines
function MouseReactiveGrid() {
  const mesh = useRef<THREE.LineSegments>(null);
  const { mouse } = useThree();

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const verts: number[] = [];
    const size = 14;
    const step = 2.5;
    for (let i = -size; i <= size; i += step) {
      verts.push(i, -size, -6, i, size, -6);
      verts.push(-size, i, -6, size, i, -6);
    }
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    return g;
  }, []);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x = mouse.y * 0.04;
    mesh.current.rotation.y = mouse.x * 0.04;
  });

  return (
    <lineSegments ref={mesh} geometry={geo}>
      <lineBasicMaterial color="#38bdf8" transparent opacity={0.035} />
    </lineSegments>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
    >
      <StarField />
      <FloatingOrbs />
      <MouseReactiveGrid />
    </Canvas>
  );
}
