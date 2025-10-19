import GameExperience from "./GameExperience";
import Interface from "./Interface";
import { CONTROLS } from "./constants";
import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const GameExample = () => {
  return (
    <KeyboardControls
      map={[
        { name: CONTROLS.forward, keys: ["ArrowUp", "KeyW"] },
        { name: CONTROLS.backward, keys: ["ArrowDown", "KeyS"] },
        { name: CONTROLS.leftward, keys: ["ArrowLeft", "KeyA"] },
        { name: CONTROLS.rightward, keys: ["ArrowRight", "KeyD"] },
        { name: CONTROLS.jump, keys: ["Space"] },
      ]}
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
      >
        <GameExperience />
      </Canvas>
      <Interface />
    </KeyboardControls>
  );
};

export default GameExample;
