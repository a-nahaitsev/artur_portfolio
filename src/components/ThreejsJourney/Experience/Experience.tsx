import CustomObject from "../CustomObject/CustomObject";
import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Experience = () => {
  const groupRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    // if (cubeRef.current) {
    //   cubeRef.current.rotation.y += delta;
    // }
    // if (groupRef.current) {
    //   groupRef.current.rotation.y += delta;
    // }
  });

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <group ref={groupRef}>
        <mesh
          ref={cubeRef}
          scale={1.5}
          position-x={2}
          // rotation-y={Math.PI * 0.25}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        {/* TODO: Fix this */}
        {/* @ts-ignore */}
        <TransformControls object={cubeRef} mode="translate" />
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={1}
          axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
          scale={2}
        >
          <mesh position-x={-2} ref={sphereRef}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
              position={[1, 1, 0]}
              wrapperClass="label"
              center
              distanceFactor={6}
              // TODO: Fix this
              // @ts-ignore
              occlude={[sphereRef, cubeRef]}
            >
              That's a sphere
            </Html>
          </mesh>
        </PivotControls>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          color="greenyellow"
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>

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

      {/* <CustomObject /> */}
    </>
  );
};

export default Experience;
