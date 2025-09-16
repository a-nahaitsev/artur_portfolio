import {
  AccumulativeShadows,
  BakeShadows,
  ContactShadows,
  RandomizedLight,
  SoftShadows,
} from "@react-three/drei";
import { useControls } from "leva";
import React from "react";

const Shadows = () => {
  const { color, opacity, blur } = useControls("contact shadows", {
    color: { value: "#4b2709" },
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  return (
    <>
      {/* <BakeShadows /> */}
      {/* <SoftShadows size={25} samples={10} focus={0} /> */}
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        // frames={100}
        temporal
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={3}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1} // baking shadows
      />
    </>
  );
};

export default Shadows;
