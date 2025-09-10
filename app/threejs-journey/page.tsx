"use client";

import Experience from "@/components/ThreejsJourney/Experience/Experience";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const ThreeJSJourneyPage = () => {
  return (
    <div className="fixed inset-0 overflow-hidden w-full h-full bg-blue-400">
      <Canvas
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
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default ThreeJSJourneyPage;
