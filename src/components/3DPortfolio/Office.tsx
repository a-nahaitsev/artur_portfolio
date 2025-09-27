import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane001_Plane002_BlackWood001: THREE.Mesh;
    Plane001_Plane002_BlackWood001_1: THREE.Mesh;
    Plane001_Plane002_BlackWood001_2: THREE.Mesh;
    Plane001_Plane002_BlackWood001_3: THREE.Mesh;
    Plane001_Plane002_BlackWood001_4: THREE.Mesh;
    SM_ShelfSM_Shelf1_1: THREE.Mesh;
    SM_ShelfSM_Shelf1_1_1: THREE.Mesh;
    ["Node-Mesh001"]: THREE.Mesh;
    ["Node-Mesh001_1"]: THREE.Mesh;
    ["Node-Mesh001_2"]: THREE.Mesh;
    WawaRug: THREE.Mesh;
    mesh434900071: THREE.Mesh;
    mesh434900071_1: THREE.Mesh;
    mesh434900071_2: THREE.Mesh;
    mesh434900071_3: THREE.Mesh;
    mesh434900071_4: THREE.Mesh;
    mesh434900071_5: THREE.Mesh;
    mesh425587018: THREE.Mesh;
    mesh425587018_1: THREE.Mesh;
    mesh425587018_2: THREE.Mesh;
    mesh425587018_3: THREE.Mesh;
    iMac_1: THREE.Mesh;
    iMac_1_1: THREE.Mesh;
    iMac_1_2: THREE.Mesh;
    Comp_Mouse: THREE.Mesh;
    mesh24448074: THREE.Mesh;
    mesh24448074_1: THREE.Mesh;
    mesh24448074_2: THREE.Mesh;
    Houseplant_7_1: THREE.Mesh;
    Houseplant_7_2: THREE.Mesh;
    Houseplant_7_3: THREE.Mesh;
    ["palm_tree_01-Mesh"]: THREE.Mesh;
    ["palm_tree_01-Mesh_1"]: THREE.Mesh;
    ["palm_tree_01-Mesh_2"]: THREE.Mesh;
    ["Node-Mesh"]: THREE.Mesh;
    ["Node-Mesh_1"]: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane001_1: THREE.Mesh;
    Plane001_2: THREE.Mesh;
    Plane001_3: THREE.Mesh;
    Screen: THREE.Mesh;
  };
  materials: {
    ["BlackWood.001"]: THREE.MeshStandardMaterial;
    ["BlackCoatSteel.001"]: THREE.MeshStandardMaterial;
    ["GrayPlastic.001"]: THREE.MeshStandardMaterial;
    ["WhiteSteelScrew.001"]: THREE.MeshStandardMaterial;
    ["BlackPlastic.001"]: THREE.MeshStandardMaterial;
    lambert2SG: THREE.MeshStandardMaterial;
    ["795548.001"]: THREE.MeshStandardMaterial;
    lambert4SG: THREE.MeshStandardMaterial;
    ["lambert2SG.001"]: THREE.MeshStandardMaterial;
    ["lambert3SG.002"]: THREE.MeshBasicMaterial;
    Rug: THREE.MeshStandardMaterial;
    mat14: THREE.MeshStandardMaterial;
    mat13: THREE.MeshStandardMaterial;
    ["mat12.001"]: THREE.MeshStandardMaterial;
    ["mat21.003"]: THREE.MeshStandardMaterial;
    ["mat23.001"]: THREE.MeshStandardMaterial;
    mat11: THREE.MeshStandardMaterial;
    ["mat21.004"]: THREE.MeshStandardMaterial;
    ["mat22.001"]: THREE.MeshStandardMaterial;
    ["mat9.002"]: THREE.MeshStandardMaterial;
    ["mat16.001"]: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    ScreenBlack: THREE.MeshStandardMaterial;
    iMacBody: THREE.MeshStandardMaterial;
    ["lambert3SG.003"]: THREE.MeshStandardMaterial;
    ["mat9.003"]: THREE.MeshStandardMaterial;
    ["mat20.001"]: THREE.MeshStandardMaterial;
    ["mat21.005"]: THREE.MeshStandardMaterial;
    ["Black.001"]: THREE.MeshStandardMaterial;
    ["Brown.001"]: THREE.MeshStandardMaterial;
    ["Plant_Green.001"]: THREE.MeshStandardMaterial;
    ["8BC34A.001"]: THREE.MeshStandardMaterial;
    ["DD9944.001"]: THREE.MeshStandardMaterial;
    Office_Cha: THREE.MeshStandardMaterial;
    Office_Cha_1: THREE.MeshStandardMaterial;
    Floor: THREE.MeshStandardMaterial;
    White: THREE.MeshStandardMaterial;
    Wall: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
  };
};

const Office = ({ section }: { section: number }) => {
  const { nodes } = useGLTF(
    "./models/3d-portfolio/scene.gltf",
  ) as unknown as GLTFResult;
  const texture = useTexture("./models/3d-portfolio/textures/baked.jpg");
  const textureVSCode = useVideoTexture(
    "./models/3d-portfolio/textures/vscode.mp4",
  );

  texture.flipY = false;
  // texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  // 🔹 refs for GSAP scale animations
  const lavaLampRef = useRef<THREE.Group>(null!);
  const rugRef = useRef<THREE.Mesh>(null!);
  const salamecheRef = useRef<THREE.Group>(null!);
  const iMacRef = useRef<THREE.Group>(null!);
  const plantRef = useRef<THREE.Group>(null!);
  const housePlantRef = useRef<THREE.Group>(null!);
  const palmTreeRef = useRef<THREE.Group>(null!);
  const chairRef = useRef<THREE.Group>(null!);

  // 🔹 Animate material opacity
  useEffect(() => {
    gsap.to(textureMaterial, {
      opacity: section === 0 ? 1 : 0,
      duration: 0.8,
    });
    gsap.to(textureGlassMaterial, {
      opacity: section === 0 ? 0.42 : 0,
      duration: 0.8,
    });
  }, [section]);

  // 🔹 Animate scale of groups/meshes
  useEffect(() => {
    const targets = [
      lavaLampRef,
      rugRef,
      salamecheRef,
      iMacRef,
      plantRef,
      housePlantRef,
      palmTreeRef,
      chairRef,
    ];
    targets.forEach((ref) => {
      if (ref.current) {
        gsap.to(ref.current.scale, {
          x: section === 0 ? 1 : 0,
          y: section === 0 ? 1 : 0,
          z: section === 0 ? 1 : 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    });
  }, [section]);

  return (
    <group dispose={null}>
      {/* Screen with video */}
      {/* <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <meshBasicMaterial map={textureVSCode} toneMapped={false} />
      </mesh> */}

      {/* Desk */}
      <group
        name="Desk"
        position={[-0.07, 0, -1.52]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={textureMaterial}
        />
      </group>

      {/* Lava Lamp */}
      <group
        ref={lavaLampRef}
        name="LavaLamp"
        position={[-1.3, 2.07, -1.99]}
        scale={[0, 0, 0]}
      >
        <mesh
          geometry={nodes["Node-Mesh001"].geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes["Node-Mesh001_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes["Node-Mesh001_2"].geometry}
          material={textureMaterial}
        />
      </group>

      {/* Rug */}
      <mesh
        ref={rugRef}
        name="WawaRug"
        geometry={nodes.WawaRug.geometry}
        material={textureMaterial}
        position={[-0.28, 0.01, 0.76]}
        scale={[0, 0, 0]}
      />

      {/* Example: Chair */}
      <group
        ref={chairRef}
        name="Chair"
        position={[0.09, 0, -0.66]}
        rotation={[0, -0.35, 0]}
        scale={[0, 0, 0]}
      >
        <mesh
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </group>

      <group name="SM_ShelfSM_Shelf1" position={[-0.87, 1.69, -2.04]}>
        <mesh
          name="SM_ShelfSM_Shelf1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="SM_ShelfSM_Shelf1_1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={textureMaterial}
        />
      </group>

      <group
        scale={[0, 0, 0]}
        name="salameche"
        ref={salamecheRef}
        position={[-0.61, 2.04, -1.96]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
      >
        <mesh
          name="mesh434900071"
          geometry={nodes.mesh434900071.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_1"
          geometry={nodes.mesh434900071_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_2"
          geometry={nodes.mesh434900071_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_3"
          geometry={nodes.mesh434900071_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_4"
          geometry={nodes.mesh434900071_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_5"
          geometry={nodes.mesh434900071_5.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="keyboard"
        position={[0.21, 0.98, -1.21]}
        rotation={[0, -0.22, 0]}
        scale={0.63}
      >
        <mesh
          name="mesh425587018"
          geometry={nodes.mesh425587018.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_1"
          geometry={nodes.mesh425587018_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_2"
          geometry={nodes.mesh425587018_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_3"
          geometry={nodes.mesh425587018_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        scale={[0, 0, 0]}
        ref={iMacRef}
        name="iMac"
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <mesh
          name="iMac_1_1"
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_2"
          geometry={nodes.iMac_1_2.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Comp_Mouse"
        geometry={nodes.Comp_Mouse.geometry}
        material={textureMaterial}
        position={[-0.01, 0, 0.08]}
      />
      <group
        ref={plantRef}
        scale={[0, 0, 0]}
        name="plant"
        position={[-0.78, 1.07, -1.61]}
      >
        <mesh
          name="mesh24448074"
          geometry={nodes.mesh24448074.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_1"
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_2"
          geometry={nodes.mesh24448074_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        scale={[0, 0, 0]}
        ref={housePlantRef}
        name="Houseplant_7"
        position={[-2.02, -0.04, -1.53]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Houseplant_7_1"
          geometry={nodes.Houseplant_7_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_2"
          geometry={nodes.Houseplant_7_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_3"
          geometry={nodes.Houseplant_7_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        ref={palmTreeRef}
        scale={[0, 0, 0]}
        name="palm_tree_01"
        position={[2.13, -0.08, -1.06]}
        rotation={[-Math.PI, 0.67, -Math.PI]}
      >
        <mesh
          name="palm_tree_01-Mesh"
          geometry={nodes["palm_tree_01-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_1"
          geometry={nodes["palm_tree_01-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_2"
          geometry={nodes["palm_tree_01-Mesh_2"].geometry}
          material={textureMaterial}
        />
      </group>

      <mesh
        name="Plane001"
        geometry={nodes.Plane001.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_1"
        geometry={nodes.Plane001_1.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_2"
        geometry={nodes.Plane001_2.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_3"
        geometry={nodes.Plane001_3.geometry}
        material={textureGlassMaterial}
      />
    </group>
  );
};

export default Office;

useGLTF.preload("./models/3d-portfolio/scene.gltf");
useTexture.preload("textures/baked.jpg");
