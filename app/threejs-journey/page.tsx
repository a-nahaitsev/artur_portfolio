"use client";

import Experience from "@/components/ThreejsJourney/Experience";
import GameExample from "@/components/ThreejsJourney/Game/GameExample";
import MouseEventsExample from "@/components/ThreejsJourney/MouseEvents/MouseEventsExample";
import PhysicsExample from "@/components/ThreejsJourney/Physics/PhysicsExample";
import PortalExample from "@/components/ThreejsJourney/Portal/PortalExample";
import PortfolioExample from "@/components/ThreejsJourney/Portfolio/PortfolioExample";
import PostProcessingExample from "@/components/ThreejsJourney/PostProcessing/PostProcessingExample";
import Text3DExample from "@/components/ThreejsJourney/Text3D/Text3DExample";
import CommonLayout from "@/layouts/Common";
import { cn } from "@/utils/cn";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import React, { useState } from "react";
import * as THREE from "three";

enum ButtonName {
  Other = "Other",
  Text3D = "Text3D",
  Portal = "Portal",
  MouseEvents = "MouseEvents",
  PostProcessing = "PostProcessing",
  Portfolio = "Portfolio",
  Physics = "Physics",
  Game = "Game",
}

const buttonNames = Object.values(ButtonName);

const ThreeJSJourneyPage = () => {
  const [buttonName, setButtonName] = useState<ButtonName>(ButtonName.Game);
  // const created = ({ scene, gl }: any) => {
  //   // gl.setClearColor("#9a73e1");
  //   scene.background = new THREE.Color("#0073e1");
  // };

  return (
    <CommonLayout>
      {" "}
      <div className="fixed inset-0 overflow-hidden w-full h-full">
        <Leva collapsed={false} />
        <div className="fixed bottom-20 left-4 z-50 flex flex-col gap-2">
          {buttonNames.map((name) => (
            <button
              key={name}
              onClick={() => setButtonName(name)}
              className={cn(
                "px-4 py-2 rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-all duration-300",
                buttonName === name && "bg-blue-600",
              )}
            >
              {name}
            </button>
          ))}
        </div>
        {buttonName === ButtonName.Other && (
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
        )}
        {buttonName === ButtonName.Text3D && <Text3DExample />}
        {buttonName === ButtonName.Portal && <PortalExample />}
        {buttonName === ButtonName.MouseEvents && <MouseEventsExample />}
        {buttonName === ButtonName.PostProcessing && <PostProcessingExample />}
        {buttonName === ButtonName.Portfolio && <PortfolioExample />}
        {buttonName === ButtonName.Physics && <PhysicsExample />}
        {buttonName === ButtonName.Game && <GameExample />}
      </div>
    </CommonLayout>
  );
};

export default ThreeJSJourneyPage;
