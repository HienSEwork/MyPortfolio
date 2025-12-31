import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const OrbitalForms = () => {
  const group = useRef(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.08;
    group.current.rotation.x = t * 0.05;
  });

  return (
    <group ref={group}>
      <mesh position={[-2.2, 0.2, -0.6]}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#a58cf5" roughness={0.35} metalness={0.3} />
      </mesh>
      <mesh position={[2.1, -0.4, 0.2]}>
        <torusKnotGeometry args={[0.7, 0.18, 80, 12]} />
        <meshStandardMaterial color="#bfa8ff" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[0, 1.4, -0.2]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#d8ccff" roughness={0.5} metalness={0.1} />
      </mesh>
    </group>
  );
};

const ThreeBackground = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const handler = () => setReduced(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  if (reduced) {
    return null;
  }

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 50 }}
      className="absolute inset-0 h-full w-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 6]} intensity={1} />
      <OrbitalForms />
    </Canvas>
  );
};

export default ThreeBackground;
