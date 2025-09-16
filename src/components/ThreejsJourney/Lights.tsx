import React from "react";
import * as THREE from "three";

const Lights = ({
  directionalLightRef,
  sunPosition,
}: {
  directionalLightRef: React.RefObject<THREE.DirectionalLight>;
  sunPosition: [number, number, number];
}) => {
  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        castShadow
        // shadow-mapSize={[1024 * 2, 1024 * 2]}
        // shadow-camera-near={1}
        // shadow-camera-far={10}
        // shadow-camera-top={5}
        // shadow-camera-right={5}
        // shadow-camera-bottom={-5}
        // shadow-camera-left={-5}
        position={[1, 2, 3]}
        // position={sunPosition} // connect to sun position in the sky
        intensity={4.5}
        shadow-normalBias={0.04} // to fix shadow acne on the edges of the object
      />
      <ambientLight intensity={1.5} />
    </>
  );
};

export default Lights;
