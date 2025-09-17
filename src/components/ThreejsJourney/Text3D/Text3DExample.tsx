import Text3DExperience from "./Text3DExperience";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const Text3DExample = () => {
  return (
    <Canvas
      shadows // deactivate shadows for ContactShadows
      dpr={[1, 2]} // device pixel ratio default is [1, 2]
      gl={{
        antialias: false, // default is true
        toneMapping: THREE.ACESFilmicToneMapping, // ACESFilmicToneMapping is default
        outputColorSpace: THREE.SRGBColorSpace, // SRGBColorSpace is default
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <Text3DExperience />
    </Canvas>
  );
};

export default Text3DExample;
