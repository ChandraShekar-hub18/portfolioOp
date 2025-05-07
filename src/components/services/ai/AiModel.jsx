import { useGLTF } from "@react-three/drei";

export const AIModel = () => {
  const { scene } = useGLTF("/robot_girl.glb"); // Path to your .glb file

  return <primitive object={scene} />;
};
useGLTF.preload("/mugModel.glb");
