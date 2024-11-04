import { useGLTF } from "@react-three/drei";

const logoPath = "/logo.gltf";
useGLTF.preload(logoPath);

export const Model = () => {
  const { scene } = useGLTF(logoPath);

  return <primitive object={scene} />;
};
