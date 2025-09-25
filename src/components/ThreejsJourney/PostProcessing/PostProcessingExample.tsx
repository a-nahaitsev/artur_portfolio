import PostProcessingExperience from "./PostProcessingExperience";
import { Canvas } from "@react-three/fiber";
import React from "react";

const PostProcessingExample = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <PostProcessingExperience />
    </Canvas>
  );
};

export default PostProcessingExample;
