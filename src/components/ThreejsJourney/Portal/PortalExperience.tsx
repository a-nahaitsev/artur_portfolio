import BackgroundColor from "../BackgroundColor";
import PerfOverlay from "../PerfOverlay";
import portalFragmentShader from "@/shaders/portal/fragment.glsl";
import portalVertexShader from "@/shaders/portal/vertex.glsl";
import {
  Center,
  OrbitControls,
  shaderMaterial,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { ThreeElement, useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

type PortalMaterialType = THREE.ShaderMaterial & {
  uTime: number;
  uColorStart: THREE.Color;
  uColorEnd: THREE.Color;
};

const meshBasicMaterial = new THREE.MeshBasicMaterial({ color: "#ffffe5" });
const PortalMaterialElement = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#fff"),
    uColorEnd: new THREE.Color("#000"),
  },
  portalVertexShader,
  portalFragmentShader,
);

// EXTENDING THREE ELEMENT - VARIANT 1

const PortalMaterial = extend(PortalMaterialElement);

// EXTENDING THREE ELEMENT - VARIANT 2

// extend({ PortalMaterialElement });

// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     portalMaterial: ThreeElement<typeof PortalMaterial>;
//   }
// }

const PortalExperience = () => {
  const { nodes } = useGLTF("./models/portal/portal.glb");
  const { poleLightA, poleLightB, baked, portalLight } = nodes;
  const bakedTexture = useTexture("./models/portal/baked.jpg");
  const portalMaterialRef = useRef<PortalMaterialType>(null);

  useFrame((_, delta) => {
    if (portalMaterialRef.current) {
      portalMaterialRef.current.uTime += delta;
    }
  });

  return (
    <>
      <PerfOverlay />
      <BackgroundColor color="#030202" />
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={(baked as THREE.Mesh).geometry}>
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        {[poleLightA, poleLightB].map((pole, i) => (
          <mesh
            key={i}
            geometry={(pole as THREE.Mesh).geometry}
            position={pole.position}
            material={meshBasicMaterial}
          />
        ))}
        <mesh
          geometry={(portalLight as THREE.Mesh).geometry}
          position={portalLight.position}
          rotation={portalLight.rotation}
        >
          {/* <shaderMaterial
            vertexShader={portalVertexShader}
            fragmentShader={portalFragmentShader}
            uniforms={{
              uTime: { value: 0 },
              uColorStart: { value: new THREE.Color("#fff") },
              uColorEnd: { value: new THREE.Color("#000") },
            }}
          /> */}
          {/* <portalMaterial /> */}
          <PortalMaterial ref={portalMaterialRef} />
        </mesh>

        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
        />
      </Center>
    </>
  );
};

export default PortalExperience;
