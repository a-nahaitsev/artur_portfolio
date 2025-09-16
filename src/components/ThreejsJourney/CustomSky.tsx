import { Sky } from "@react-three/drei";
import { useControls } from "leva";
import React, { useEffect } from "react";

const CustomSky = ({
  setSunPosition,
}: {
  setSunPosition: (position: [number, number, number]) => void;
}) => {
  const { sunPosition } = useControls("sky", {
    sunPosition: {
      value: [1, 2, 3],
      min: -10,
      max: 10,
    },
  });

  useEffect(() => {
    setSunPosition(sunPosition);
  }, [sunPosition]);

  return <Sky sunPosition={sunPosition} />;
};

export default CustomSky;
