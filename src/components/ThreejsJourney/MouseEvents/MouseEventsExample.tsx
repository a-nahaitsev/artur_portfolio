import MouseEventsExperience from "./MouseEventsExperience";
import { Bvh } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const MouseEventsExample = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Bvh>
        <MouseEventsExperience />
      </Bvh>
    </Canvas>
  );
};

export default MouseEventsExample;
