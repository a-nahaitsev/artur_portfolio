import DrunkEffect from "./DrunkEffect";
import { ThreeElements } from "@react-three/fiber";
import { BlendFunction } from "postprocessing";
import React from "react";

const Drunk = ({
  ref,
  frequency,
  amplitude,
  blendFunction,
}: {
  ref: React.RefObject<ThreeElements["primitive"]>;
  frequency?: number;
  amplitude?: number;
  blendFunction?: BlendFunction;
}) => {
  const effect = new DrunkEffect({ frequency, amplitude, blendFunction });

  return <primitive ref={ref} object={effect} />;
};

export default Drunk;
