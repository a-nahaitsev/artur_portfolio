import PortalExperience from "./PortalExperience";
import PortalExperience2 from "./PortalExperience2";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import React from "react";

const PortalExample = () => {
  const { alternative } = useControls("portal", {
    alternative: false,
  });

  return (
    <Canvas
      flat // noToneMapping applied
      dpr={[1, 2]} // device pixel ratio default is [1, 2]
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 2, 6],
      }}
    >
      {alternative ? <PortalExperience2 /> : <PortalExperience />}
    </Canvas>
  );
};

export default PortalExample;
