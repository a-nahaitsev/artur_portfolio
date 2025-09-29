import BackgroundColor from "../../../shared/Threejs/BackgroundColor";
import PerfOverlay from "../PerfOverlay";
import portalFragmentShader from "@/shaders/portal/fragment.glsl";
import portalVertexShader from "@/shaders/portal/vertex2.glsl";
import {
  Center,
  OrbitControls,
  shaderMaterial,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

type PortalMaterialType = THREE.ShaderMaterial & {
  uTime: number;
  uColorStart: THREE.Color;
  uColorEnd: THREE.Color;
};

const PortalMaterialElement = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#fff"),
    uColorEnd: new THREE.Color("#000"),
  },
  portalVertexShader,
  portalFragmentShader,
);

const PortalMaterial = extend(PortalMaterialElement);

const PortalExperience2 = () => {
  const { nodes } = useGLTF("./models/portal/portal-2.glb");
  const bakedTexture = useTexture("./models/portal/baked-02.jpeg");
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

      <Center rotation={[0, Math.PI, 0]}>
        <mesh
          geometry={(nodes.baked as THREE.Mesh).geometry}
          position={[0.9, 0.34, -1.47]}
          rotation={[0, 0.14, 0]}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          geometry={(nodes.lampLightL as THREE.Mesh).geometry}
          material-color="#f0bf94"
          position={[0.89, 1.07, -0.14]}
          scale={[0.07, 0.11, 0.07]}
        />
        <mesh
          geometry={(nodes.lampLightR as THREE.Mesh).geometry}
          material-color="#f0bf94"
          position={[-0.98, 1.07, -0.14]}
          scale={[-0.07, 0.11, 0.07]}
        />

        <mesh
          geometry={(nodes.portalCircle as THREE.Mesh).geometry}
          position={[0, 0.78, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <PortalMaterial
            ref={portalMaterialRef}
            blending={THREE.AdditiveBlending}
            uColorStart="hotpink"
            uColorEnd="white"
          />
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

export default PortalExperience2;
