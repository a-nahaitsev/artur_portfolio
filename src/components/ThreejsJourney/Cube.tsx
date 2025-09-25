import { ThreeElements } from "@react-three/fiber";
import { button, useControls } from "leva";
import React from "react";
import * as THREE from "three";

type CubeProps = ThreeElements["mesh"] & {
  cubeRef: React.RefObject<THREE.Mesh>;
};

const Cube = ({ cubeRef, ...props }: CubeProps) => {
  const {
    position,
    color,
    vectorColor,
    visible,
    isVectorColor,
    isEmissiveColor,
    emissiveIntensity,
    materialType,
  } = useControls("box", {
    position: { value: { x: 2, y: 1 }, step: 0.01, joystick: "invertY" },
    color: { value: "mediumpurple" },
    vectorColor: { value: [1.5, 1, 4] },
    visible: true,
    isVectorColor: false,
    isEmissiveColor: false,
    emissiveIntensity: { value: 1, min: 0, max: 10 },
    materialType: {
      options: ["MeshStandardMaterial", "MeshBasicMaterial"],
      value: "MeshStandardMaterial",
    },
  });

  return (
    <mesh
      ref={cubeRef}
      castShadow
      scale={1.5}
      position={[position.x, position.y, 0]}
      // rotation-y={Math.PI * 0.25}
      visible={visible}
      {...props}
    >
      <boxGeometry />
      {materialType === "MeshStandardMaterial" && (
        <meshStandardMaterial
          color={isVectorColor ? vectorColor : color}
          emissive={isEmissiveColor ? color : undefined}
          emissiveIntensity={isEmissiveColor ? emissiveIntensity : undefined}
        />
      )}
      {materialType === "MeshBasicMaterial" && (
        <meshBasicMaterial color={isVectorColor ? vectorColor : color} />
      )}
    </mesh>
  );
};

export default Cube;
