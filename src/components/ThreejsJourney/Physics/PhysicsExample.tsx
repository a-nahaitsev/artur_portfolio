import PhysicsExperience from "./PhysicsExperience";
import { Canvas } from "@react-three/fiber";
import React from "react";

const PhysicsExample = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 65,
        near: 0.1,
        far: 200,
        position: [4, 2, 6],
      }}
    >
      <PhysicsExperience />
    </Canvas>
  );
};

export default PhysicsExample;
