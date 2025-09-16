"use client";

import Experience from "@/components/ThreejsJourney/Experience";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import React from "react";
import * as THREE from "three";

const ThreeJSJourneyPage = () => {
  // const created = ({ scene, gl }: any) => {
  //   // gl.setClearColor("#9a73e1");
  //   scene.background = new THREE.Color("#0073e1");
  // };

  return (
    <div className="fixed inset-0 overflow-hidden w-full h-full">
      <Leva collapsed />
      <Canvas
        shadows // deactivate shadows for ContactShadows
        dpr={[1, 2]} // device pixel ratio default is [1, 2]
        gl={{
          antialias: false, // default is true
          toneMapping: THREE.ACESFilmicToneMapping, // ACESFilmicToneMapping is default
          outputColorSpace: THREE.SRGBColorSpace, // SRGBColorSpace is default
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
        // onCreated={created}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default ThreeJSJourneyPage;
