import Avatar from "./Avatar";
import { Background } from "./Background";
import Office from "./Office";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export enum AnimationName {
  Standing = "Standing",
  Typing = "Typing",
  Falling = "Falling",
}

const PortfolioExperience = ({ menuOpened }: { menuOpened: boolean }) => {
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const [section, setSection] = useState(0);

  // refs
  const characterGroup = useRef<THREE.Group>(null);
  const characterContainerAboutRef = useRef<THREE.Group>(null);
  const officeGroup = useRef<THREE.Group>(null);
  const skillsGroup = useRef<THREE.Group>(null);

  // === Camera Animation (menu toggle) ===
  useEffect(() => {
    // @ts-ignore
    gsap.to(window.cameraPosition ?? {}, {
      x: menuOpened ? -5 : 0,
      duration: 1,
      onUpdate: function () {
        // We will use useFrame to update state.camera with this tweened value
      },
    });
  }, [menuOpened]);

  // === Section change animations ===
  useEffect(() => {
    if (!characterGroup.current || !officeGroup.current || !skillsGroup.current)
      return;

    // Kill old tweens
    gsap.killTweensOf([
      characterGroup.current.position,
      officeGroup.current.position,
      skillsGroup.current.position,
    ]);

    switch (section) {
      case 0:
        gsap.to(characterGroup.current.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.6,
        });
        gsap.to(characterGroup.current.rotation, {
          x: -Math.PI,
          y: 1.2,
          z: Math.PI,
          duration: 0.6,
        });
        break;

      case 1:
        gsap.to(characterGroup.current.position, {
          x: isMobile ? 0.3 : 0,
          y: -viewport.height + 0.5,
          z: 7,
          duration: 0.6,
        });
        gsap.to(characterGroup.current.rotation, {
          x: 0,
          y: isMobile ? -Math.PI / 2 : 0,
          z: 0,
          duration: 0.6,
        });
        break;

      case 2:
        gsap.to(characterGroup.current.position, {
          x: isMobile ? -1.4 : -2,
          y: -viewport.height * 2 + 0.5,
          z: 0,
          duration: 0.6,
        });
        gsap.to(characterGroup.current.rotation, {
          x: 0,
          y: Math.PI / 2,
          z: 0,
          duration: 0.6,
        });
        break;

      case 3:
        gsap.to(characterGroup.current.position, {
          x: 0.24,
          y: -viewport.height * 3 + 1,
          z: 8.5,
          duration: 0.6,
        });
        gsap.to(characterGroup.current.rotation, {
          x: 0,
          y: -Math.PI / 4,
          z: 0,
          duration: 0.6,
        });
        break;
    }
  }, [section, isMobile, viewport.height]);

  // === Scroll update for sections ===
  useFrame((state) => {
    let curSection = Math.floor(data.offset * data.pages);
    if (curSection > 3) curSection = 3;
    if (curSection !== section) setSection(curSection);

    // If you animate camera with gsap, just sync here:
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Background />

      {/* Character */}
      <group
        ref={characterGroup}
        rotation={[-Math.PI, 1.2, Math.PI]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
      >
        <Avatar
          animation={
            section === 0 ? AnimationName.Typing : AnimationName.Standing
          }
          wireframe={section === 1}
        />
      </group>

      <ambientLight intensity={1} />

      {/* Office */}
      <group
        ref={officeGroup}
        position={[
          isMobile ? 0 : 1.5 * officeScaleRatio,
          isMobile ? -viewport.height / 6 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 4}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        />
      </group>

      {/* Skills */}
      <group
        ref={skillsGroup}
        position={[
          0,
          isMobile ? -viewport.height : -1.5 * officeScaleRatio,
          -10,
        ]}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color="red"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color="blue"
            />
          </mesh>
        </Float>
      </group>

      {/* <Projects /> */}
    </>
  );
};

export default PortfolioExperience;
