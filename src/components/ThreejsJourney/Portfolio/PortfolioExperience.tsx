import BackgroundColor from "../../../shared/Threejs/BackgroundColor";
import PerfOverlay from "../PerfOverlay";
import Macbook from "./Macbook";
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
} from "@react-three/drei";
import React from "react";

const PortfolioExperience = () => {
  return (
    <>
      <PerfOverlay />
      <Environment preset="city" />
      <BackgroundColor color="#241a1a" />

      <PresentationControls
        global
        snap
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        damping={0.1}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ff6900"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <Macbook
            children={
              <Html
                transform
                wrapperClass="threejs-journey-portfolio-html-screen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe src="https://bruno-simon.com/html/" />
              </Html>
            }
          />
          <Text
            font="./fonts/bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            // children={"ARTUR\rNAGAYCEV"} // approach to move to next line
            children="ARTUR NAGAYCEV"
            maxWidth={2}
            textAlign="center"
          />
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default PortfolioExperience;
