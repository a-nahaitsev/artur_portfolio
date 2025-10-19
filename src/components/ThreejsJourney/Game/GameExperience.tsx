import BackgroundColor from "../../../shared/Threejs/BackgroundColor";
import PerfOverlay from "../PerfOverlay";
import GameLights from "./GameLights";
import Level from "./Level";
import Player from "./Player";
import useGame from "./stores/useGame";
import { Physics } from "@react-three/rapier";
import React from "react";

const GameExperience = () => {
  const blocksCount = useGame((state) => state.blocksCount);
  const blockSeed = useGame((state) => state.blockSeed);

  return (
    <>
      <PerfOverlay />
      <BackgroundColor color="#bdedfc" />
      <Physics debug={false}>
        <GameLights />
        <Level count={blocksCount} seed={blockSeed} />
        <Player />
      </Physics>
    </>
  );
};

export default GameExperience;
