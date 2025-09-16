import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import React, { useEffect } from "react";

const Fox = () => {
  const { scene, animations } = useGLTF("./Fox/glTF/Fox.gltf");
  const { actions, names } = useAnimations(animations, scene);

  const { animationName } = useControls({
    animationName: {
      options: names,
    },
  });

  useEffect(() => {
    const action = actions[animationName];

    if (!action) return;

    action.reset().fadeIn(0.5).play();

    // setTimeout(() => {
    //   if (!actions["Walk"]) return;
    //   actions["Walk"].play();
    //   actions["Walk"].crossFadeFrom(action, 1);
    // }, 2000);

    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <primitive
      object={scene}
      scale={0.02}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
    />
  );
};

export default Fox;
