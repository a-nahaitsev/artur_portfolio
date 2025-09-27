import BackgroundColor from "../../../shared/Threejs/BackgroundColor";
import Cube from "../Cube";
import CustomPostProcessing from "../CustomPostProcessing";
import Lights from "../Lights";
import PerfOverlay from "../PerfOverlay";
import Plane from "../Plane";
import Sphere from "../Sphere";
import { OrbitControls } from "@react-three/drei";
import React, { useRef, useState } from "react";
import * as THREE from "three";

const PostProcessingExperience = () => {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);
  const [isWhite, setIsWhite] = useState(false);

  return (
    <>
      <CustomPostProcessing setIsWhite={setIsWhite} />
      <PerfOverlay />
      <BackgroundColor color={isWhite ? "white" : "black"} />
      <OrbitControls makeDefault />
      <Lights />
      <Cube cubeRef={cubeRef} />
      <Sphere sphereRef={sphereRef} cubeRef={cubeRef} />
      <Plane />
    </>
  );
};

export default PostProcessingExperience;
