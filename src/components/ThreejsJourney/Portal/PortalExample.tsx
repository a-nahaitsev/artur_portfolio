import PortalExperience from "./PortalExperience";
import { Canvas } from "@react-three/fiber";
import React from "react";

const PortalExample = () => {
  return (
    <Canvas
      flat // noToneMapping applied
      dpr={[1, 2]} // device pixel ratio default is [1, 2]
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 2, 6],
      }}
    >
      <PortalExperience />
    </Canvas>
  );
};

export default PortalExample;
