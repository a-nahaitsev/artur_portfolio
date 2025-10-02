import React from "react";

type PlaneProps = {
  withHeight?: boolean;
};

const Plane = ({ withHeight = false }: PlaneProps) => {
  return withHeight ? (
    <mesh receiveShadow position-y={-1.25}>
      <boxGeometry args={[10, 0.5, 10]} />
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  ) : (
    <mesh
      receiveShadow // comment it using AccumulativeShadows
      position-y={0}
      rotation-x={-Math.PI * 0.5}
      scale={10}
    >
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" />
      {/* <MeshReflectorMaterial
      color="greenyellow"
      resolution={512}
      blur={[1000, 1000]}
      mixBlur={1}
      mirror={0.5}
    /> */}
    </mesh>
  );
};

export default Plane;
