import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AIModel } from "./AiModel"; // Replace with your AI model
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const AIModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <AIModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default AIModelContainer;
