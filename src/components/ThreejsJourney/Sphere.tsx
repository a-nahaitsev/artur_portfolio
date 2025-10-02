import { Html } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

type SphereProps = ThreeElements["mesh"] & {
  sphereRef: React.RefObject<THREE.Mesh>;
  cubeRef: React.RefObject<THREE.Mesh>;
  disableHtmlLabel?: boolean;
};

const Sphere = ({
  sphereRef,
  cubeRef,
  disableHtmlLabel = false,
  ...props
}: SphereProps) => {
  return (
    <mesh castShadow position-x={-2} position-y={1} ref={sphereRef} {...props}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
      {!disableHtmlLabel && (
        <Html
          position={[1, 1, 0]}
          wrapperClass="label"
          center
          distanceFactor={6}
          occlude={[sphereRef, cubeRef]}
        >
          That's a sphere
        </Html>
      )}
    </mesh>
  );
};

export default Sphere;
