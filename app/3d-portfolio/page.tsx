"use client";

import { Cursor } from "@/components/3DPortfolio/Cursor";
import Interface from "@/components/3DPortfolio/Interface";
import Menu from "@/components/3DPortfolio/Menu";
import PortfolioExperience from "@/components/3DPortfolio/PortfolioExperience";
import ScrollManager from "@/components/3DPortfolio/ScrollManager";
import { framerMotionConfig } from "@/configs/framerMotionConfig";
import BackgroundColor from "@/shared/Threejs/BackgroundColor";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "motion/react";
import React, { useEffect, useState } from "react";

const ThreeDPortfolioPage = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <div className="w-screen h-screen">
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <BackgroundColor color="#e6e7ff" />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <PortfolioExperience menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          onMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
    </div>
  );
};

export default ThreeDPortfolioPage;
