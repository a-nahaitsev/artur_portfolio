import BackgroundColor from "../BackgroundColor";
import Cube from "../Cube";
import Lights from "../Lights";
import PerfOverlay from "../PerfOverlay";
import Plane from "../Plane";
import Sphere from "../Sphere";
import { meshBounds, OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const MouseEventsExperience = () => {
  const { scene } = useGLTF("/hamburger.glb");
  const cubeRef = useRef<THREE.Mesh>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.2;
    }
  });

  const handleCubeClick = (event: any) => {
    // #region logs

    // console.log("---");
    // console.log("distance", event.distance); // Distance between camera and hit point
    // console.log("point", event.point); // Hit point coordinates (in 3D)
    // console.log("uv", event.uv); // UV coordinates on the geometry (in 2D)
    // console.log("object", event.object); // The object that triggered the event
    // console.log("eventObject", event.eventObject); // The object that was listening to the event (useful where there is objects in objects)

    // console.log("---");
    // console.log("x", event.x); // 2D screen coordinates of the pointer
    // console.log("y", event.y); // 2D screen coordinates of the pointer

    // console.log("---");
    // console.log("shiftKey", event.shiftKey); // If the SHIFT key was pressed
    // console.log("ctrlKey", event.ctrlKey); // If the CTRL key was pressed
    // console.log("metaKey", event.metaKey); // If the COMMAND key was pressed

    // #endregion logs

    if (cubeRef.current) {
      (cubeRef.current.material as THREE.MeshStandardMaterial).color.set(
        `hsl(${Math.random() * 360}, 100%, 75%)`,
      );
    }
  };

  const handleSphereClick = (event: any) => {
    event.stopPropagation();
  };

  const handleHamburgerClick = (event: any) => {
    console.log("hamburger clicked", event.eventObject.name);
    event.stopPropagation();
  };

  return (
    <>
      <PerfOverlay />
      <BackgroundColor color="ivory" />
      <OrbitControls makeDefault />
      <Lights />
      <Cube
        cubeRef={cubeRef}
        // raycast={meshBounds}
        onClick={handleCubeClick}
        // useCursor hook from Drei can be used to change the cursor
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
        }}
      />
      <Sphere
        sphereRef={sphereRef}
        cubeRef={cubeRef}
        onClick={handleSphereClick}
      />
      <Plane />

      <primitive
        object={scene}
        scale={0.25}
        position-y={1.5}
        onClick={handleHamburgerClick}
      />
    </>
  );
};

export default MouseEventsExperience;
