import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MugModelContainer = () => {
  return (
    <div className="sSection right">
      {currentServiceId === 1 ? (
        <ComputerModelContainer />
      ) : currentServiceId === 2 ? (
        <AIModelContainer /> // Replace with your AI-related 3D model
      ) : (
        <ConsoleModelContainer />
      )}
      <Canvas>
        <Suspense fallback="loading...">
          <Stage environment="night" intensity={10}>
            <MugModel />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
          <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MugModelContainer;
