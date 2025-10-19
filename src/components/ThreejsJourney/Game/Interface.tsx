import { PHASE } from "./constants";
import useGame from "./stores/useGame";
import { cn } from "@/utils/cn";
import { useKeyboardControls } from "@react-three/drei";
import { addEffect } from "@react-three/fiber";
import { Bebas_Neue } from "next/font/google";
import React, { useEffect, useRef } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Interface = () => {
  const timeRef = useRef<HTMLDivElement>(null);
  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      if (!timeRef.current) return;

      const state = useGame.getState();
      let elapsedTime = 0;

      if (state.phase === PHASE.PLAYING) {
        elapsedTime = Date.now() - state.startTime;
      }

      if (state.phase === PHASE.ENDED) {
        elapsedTime = state.endTime - state.startTime;
      }

      elapsedTime /= 1000;

      timeRef.current.textContent = elapsedTime.toFixed(2);
    });

    return () => {
      unsubscribeEffect();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full pointer-events-none",
        bebasNeue.className,
      )}
    >
      <div
        ref={timeRef}
        className="absolute top-1/6 left-0 w-full color-white text-[6vh] bg-black/35 pt-1.5 text-center"
      >
        0.00
      </div>

      {phase === PHASE.ENDED && (
        <div
          className="flex justify-center absolute top-5/12 left-0 w-full color-white text-[80px] pt-2.5 bg-black/35 pointer-events-auto cursor-pointer"
          onClick={restart}
        >
          Restart
        </div>
      )}

      <div className="absolute bottom-1/12 left-0 w-full">
        <KeyRow>
          <Key isActive={forward}>W</Key>
        </KeyRow>
        <KeyRow>
          <Key isActive={leftward}>A</Key>
          <Key isActive={backward}>S</Key>
          <Key isActive={rightward}>D</Key>
        </KeyRow>
        <KeyRow>
          <Key className="w-34" isActive={jump}>
            Space
          </Key>
        </KeyRow>
      </div>
    </div>
  );
};

export default Interface;

const KeyRow = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center">{children}</div>;
};

const Key = ({
  children,
  className,
  isActive,
}: {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}) => {
  return (
    <div
      className={cn(
        "size-10 m-1 border-2 border-white bg-black/45 flex items-center justify-center",
        isActive && "bg-white/95 text-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
