import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./model";

export default function App() {
  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [4, -1, 8], fov: 35 }}
    >
      <Suspense fallback={<>Loading...</>}>
        <directionalLight position={[0, 2, 3]} />
        <Stage preset="rembrandt" intensity={1} environment="city">
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}
