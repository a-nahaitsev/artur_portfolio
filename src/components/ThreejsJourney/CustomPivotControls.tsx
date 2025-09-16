import { PivotControls } from "@react-three/drei";
import React from "react";

const CustomPivotControls = ({ children }: { children: React.ReactNode }) => {
  return (
    <PivotControls
      anchor={[0, 0, 0]}
      depthTest={false}
      lineWidth={1}
      axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
      scale={2}
    >
      {children}
    </PivotControls>
  );
};

export default CustomPivotControls;
