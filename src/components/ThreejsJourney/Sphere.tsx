import { Html } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const Sphere = ({
  sphereRef,
  cubeRef,
}: {
  sphereRef: React.RefObject<THREE.Mesh>;
  cubeRef: React.RefObject<THREE.Mesh>;
}) => {
  return (
    <mesh castShadow position-x={-2} position-y={1} ref={sphereRef}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
      <Html
        position={[1, 1, 0]}
        wrapperClass="label"
        center
        distanceFactor={6}
        // TODO: Fix this
        // @ts-ignore
        occlude={[sphereRef, cubeRef]}
      >
        That's a sphere
      </Html>
    </mesh>
  );
};

export default Sphere;
