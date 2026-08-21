"use client";

import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count, isMobile }: { count: number; isMobile: boolean }) {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = Math.sin(i * 12.9898) * 10;
      arr[i * 3 + 1] = Math.sin(i * 78.233) * 10;
      arr[i * 3 + 2] = Math.sin(i * 43.758) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.03;
    meshRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.06 : 0.03}
        color="#7c3aed"
        transparent
        opacity={isMobile ? 0.9 : 0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  const isMobile = useSyncExternalStore(
    (onChange) => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(max-width: 767px)").matches,
    () => false,
  );
  const [isTouchDevice] = useState(
    () => typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0),
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1}
        style={{ background: "transparent", pointerEvents: isTouchDevice ? "none" : "auto" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles count={isMobile ? 240 : 800} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}