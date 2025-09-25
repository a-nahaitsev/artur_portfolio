import {
  EffectComposer,
  ToneMapping,
  Vignette,
  Glitch,
  Noise,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { ToneMappingMode, BlendFunction, GlitchMode } from "postprocessing";
import React, { JSX, useEffect } from "react";
import * as THREE from "three";

const TONE_MAPPING_DEAULT_MODE = "ACES_FILMIC";
const BLEND_FUNCTION_DEFAULT_MODE = "SKIP";
const GLITCH_MODE_DEFAULT_MODE = "DISABLED";

enum Effect {
  NONE = "NONE",
  VIGNETTE = "VIGNETTE",
  GLITCH = "GLITCH",
  NOISE = "NOISE",
  BLOOM = "BLOOM",
  DEPTH_OF_FIELD = "DEPTH OF FIELD",
}

const CustomPostProcessing = ({
  setIsWhite,
}: {
  setIsWhite: (isWhite: boolean) => void;
}) => {
  const { toneMappingMode, effect, blendFunction, bloomIntensity, glitchMode } =
    useControls("postprocessing", {
      toneMappingMode: {
        options: Object.keys(ToneMappingMode),
        value: Object.keys(ToneMappingMode).find(
          (key) => key === TONE_MAPPING_DEAULT_MODE,
        ),
      },
      effect: {
        options: Object.keys(Effect),
        value: Effect.VIGNETTE,
      },
      blendFunction: {
        options: Object.keys(BlendFunction),
        value: Object.keys(BlendFunction).find(
          (key) => key === BLEND_FUNCTION_DEFAULT_MODE,
        ),
      },
      glitchMode: {
        options: Object.keys(GlitchMode),
        value: Object.keys(GlitchMode).find(
          (key) => key === GLITCH_MODE_DEFAULT_MODE,
        ),
      },
      bloomIntensity: { value: 0.5, min: 0, max: 1 },
    });

  useEffect(() => {
    setIsWhite(effect !== Effect.BLOOM);
  }, [effect]);

  return (
    <EffectComposer
    // multisampling={8} // antialiasing
    >
      {
        (effect === Effect.VIGNETTE && (
          <Vignette
            offset={0.3}
            darkness={0.9}
            blendFunction={
              BlendFunction[blendFunction as keyof typeof BlendFunction]
            }
          />
        )) as JSX.Element
      }
      {
        (effect === Effect.GLITCH && (
          <Glitch
            delay={new THREE.Vector2(0.5, 1)}
            duration={new THREE.Vector2(0.1, 0.3)}
            strength={new THREE.Vector2(0.2, 0.4)}
            mode={GlitchMode[glitchMode as keyof typeof GlitchMode]}
          />
        )) as JSX.Element
      }
      {
        (effect === Effect.NOISE && (
          <Noise
            premultiply
            blendFunction={
              BlendFunction[blendFunction as keyof typeof BlendFunction]
            }
          />
        )) as JSX.Element
      }
      {
        (effect === Effect.BLOOM && (
          <Bloom mipmapBlur intensity={bloomIntensity} />
        )) as JSX.Element
      }
      {
        (effect === Effect.DEPTH_OF_FIELD && (
          <DepthOfField
            focusDistance={0.025}
            focalLength={0.025}
            bokehScale={6}
          />
        )) as JSX.Element
      }
      <ToneMapping
        mode={ToneMappingMode[toneMappingMode as keyof typeof ToneMappingMode]}
      />
    </EffectComposer>
  );
};

export default CustomPostProcessing;
