import { Float, Text } from "@react-three/drei";
import React from "react";

const FloatText = () => {
  return (
    <Float>
      <Text
        font="./SourGummy-Black.woff"
        fontSize={1}
        color="salmon"
        position-y={2}
        maxWidth={2}
        textAlign="center"
      >
        I LOVE R3F
      </Text>
    </Float>
  );
};

export default FloatText;
