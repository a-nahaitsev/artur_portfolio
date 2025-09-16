// @ts-nocheck
// TODO: Remove once types are properly fixed
import BackgroundColor from "./BackgroundColor";
import Cube from "./Cube";
import CustomEnvironment from "./CustomEnvironment";
import CustomObject from "./CustomObject";
import CustomPivotControls from "./CustomPivotControls";
import CustomSky from "./CustomSky";
import FloatText from "./FloatText";
import Lights from "./Lights";
import Plane from "./Plane";
import Shadows from "./Shadows";
import Sphere from "./Sphere";
import {
  OrbitControls,
  Stage,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import React, { useRef, useState } from "react";
import * as THREE from "three";

const Experience = () => {
  const groupRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  const [sunPosition, setSunPosition] = useState([1, 2, 3]);

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  const { perfVisible } = useControls({
    perfVisible: true,
  });

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    if (cubeRef.current) {
      // moving for showing that it's delayed on AccumulativeShadows
      // const time = state.clock.elapsedTime;
      // cubeRef.current.position.x = 2 + Math.sin(time);

      cubeRef.current.rotation.y += delta;
    }
    // if (groupRef.current) {
    //   groupRef.current.rotation.y += delta;
    // }
  });

  return (
    <>
      {perfVisible && <Perf position="bottom-right" />}
      {/* <BackgroundColor color="ivory" /> */}
      {/* <Shadows /> */}
      {/* <CustomEnvironment /> */}

      <OrbitControls makeDefault />
      {/* comment to use Environment map*/}
      {/* <Lights
        directionalLightRef={directionalLightRef}
        sunPosition={sunPosition}
      /> */}
      {/* <CustomSky setSunPosition={setSunPosition} /> */}

      <Stage
        shadows={{
          type: "contact",
          opacity: 0.2,
          blur: 3,
        }}
        environment="sunset"
        preset="portrait"
        intensity={2}
      >
        <group ref={groupRef}>
          <Cube cubeRef={cubeRef} />
          {/* <TransformControls object={cubeRef} mode="translate" /> */}
          {/* <CustomPivotControls> */}
          <Sphere sphereRef={sphereRef} cubeRef={cubeRef} />
          {/* </CustomPivotControls> */}
        </group>
      </Stage>

      {/* <Plane /> */}
      {/* <FloatText /> */}
      {/* <CustomObject /> */}
    </>
  );
};

export default Experience;
