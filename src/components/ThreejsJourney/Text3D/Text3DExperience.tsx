import BackgroundColor from "../BackgroundColor";
import PerfOverlay from "../PerfOverlay";
import CustomText3D from "./CustomText3D";
import { OrbitControls } from "@react-three/drei";
import React from "react";

const Experience = () => {
  return (
    <>
      <PerfOverlay />
      <BackgroundColor color="white" />
      <OrbitControls makeDefault />
      <CustomText3D />
    </>
  );
};

export default Experience;
