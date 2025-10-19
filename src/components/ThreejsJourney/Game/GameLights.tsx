import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const GameLights = () => {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null!);

  useFrame((state) => {
    if (directionalLightRef.current) {
      directionalLightRef.current.position.z = state.camera.position.z + 1 - 4;
      directionalLightRef.current.target.position.z =
        state.camera.position.z - 4;
      directionalLightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <ambientLight intensity={1.5} />
    </>
  );
};

export default GameLights;
