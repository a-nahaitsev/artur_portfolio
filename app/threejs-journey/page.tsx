"use client";

import Experience from "@/components/Experience/Experience";
import { Canvas } from "@react-three/fiber";
import React from "react";

const ThreeJSJourneyPage = () => {
  return (
    <div className="fixed inset-0 overflow-hidden w-full h-full">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
};

export default ThreeJSJourneyPage;
