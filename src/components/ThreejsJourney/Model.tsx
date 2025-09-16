import { Clone, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";

const Model = () => {
  // LOAD GLB (NO DRACO)
  // const model = useLoader(GLTFLoader, "./hamburger.glb");

  // LOAD GLB (WITH DRACO)
  // const model = useLoader(GLTFLoader, "./hamburger-draco.glb", (loader) => {
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath("./draco/");
  //   loader.setDRACOLoader(dracoLoader);
  // });

  // LOAD GLTF (WITH DRACO)
  // const model = useLoader(
  //   GLTFLoader,
  //   "./FlightHelmet/glTF/FlightHelmet.gltf",
  //   (loader) => {
  //     const dracoLoader = new DRACOLoader();
  //     dracoLoader.setDecoderPath("./draco/");
  //     loader.setDRACOLoader(dracoLoader);
  //   },
  // );

  // LOAD GLB USING USEGLTF (DRACO-INCLUDED)
  const model = useGLTF("./hamburger-draco.glb");

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  );
};

export default Model;

useGLTF.preload("./hamburger-draco.glb");
