import { button, useControls } from "leva";
import React from "react";
import * as THREE from "three";

const Cube = ({ cubeRef }: { cubeRef: React.RefObject<THREE.Mesh> }) => {
  const { position, color, visible } = useControls("box", {
    position: { value: { x: 2, y: 1 }, step: 0.01, joystick: "invertY" },
    color: { value: "mediumpurple" },
    visible: true,
    interval: { min: 0, max: 10, value: [4, 5] },
    clickMe: button(() => {
      console.log("clicked");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  return (
    <mesh
      ref={cubeRef}
      castShadow
      scale={1.5}
      position={[position.x, position.y, 0]}
      // rotation-y={Math.PI * 0.25}
      visible={visible}
    >
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cube;
