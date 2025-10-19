import { PHASE } from "../constants";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface GameState {
  blocksCount: number;
  blockSeed: number;
  startTime: number;
  endTime: number;
  phase: PHASE;
  start: () => void;
  restart: () => void;
  end: () => void;
}

export default create<GameState>()(
  subscribeWithSelector((set) => {
    return {
      blocksCount: 10,
      blockSeed: 0,

      /**
       * Time
       */

      startTime: 0,
      endTime: 0,

      /**
       * Phases
       */

      phase: PHASE.READY,

      start: () =>
        set(({ phase }) => {
          return phase === PHASE.READY
            ? { phase: PHASE.PLAYING, startTime: Date.now() }
            : {};
        }),

      restart: () =>
        set(({ phase }) => {
          return phase === PHASE.PLAYING || phase === PHASE.ENDED
            ? { phase: PHASE.READY, blockSeed: Math.random() }
            : {};
        }),

      end: () =>
        set(({ phase }) => {
          return phase === PHASE.PLAYING
            ? { phase: PHASE.ENDED, endTime: Date.now() }
            : {};
        }),
    };
  }),
);
