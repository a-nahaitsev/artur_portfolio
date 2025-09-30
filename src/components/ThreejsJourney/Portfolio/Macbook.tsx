import { useGLTF } from "@react-three/drei";
import React from "react";

const Macbook = ({ children }: { children: React.ReactNode }) => {
  const { scene } = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf",
  );

  return (
    <primitive object={scene} position-y={-1.2}>
      {children}
    </primitive>
  );
};

export default Macbook;
