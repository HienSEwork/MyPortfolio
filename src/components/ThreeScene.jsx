import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const FloatingShapes = () => {
  const group = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;
    group.current.rotation.x = t * 0.1;
    group.current.rotation.y = t * 0.12;
  });

  return (
    <group ref={group}>
      <mesh position={[-1.2, 0, 0]}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#bfa8ff" roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[1.2, 0.3, -0.3]}>
        <torusGeometry args={[0.7, 0.18, 16, 60]} />
        <meshStandardMaterial color="#8b74f1" roughness={0.35} metalness={0.3} />
      </mesh>
      <mesh position={[0, -1, 0.2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#d8ccff" roughness={0.5} metalness={0.1} />
      </mesh>
    </group>
  );
};

const ThreeScene = () => {
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
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
        3D preview disabled for reduced motion preference.
      </div>
    );
  }

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
    >
      <color attach="background" args={["#0f0b1f"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} />
      <FloatingShapes />
    </Canvas>
  );
};

export default ThreeScene;
