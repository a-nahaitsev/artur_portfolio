// DIFFERENT WAYS TO MAKE OPTIMIZED TEXT3D GEOMETRY AND MATERIAL
// ------------------------------------------------------------
// 1. USING CONSTANTS OF GEOMETRY AND MATERIAL + USEEFFECT TO UPDATE THE MATERIAL AND USE THEM IN THE MESH
// ------------------------------------------------------------
//
// import { Center, Text3D, useMatcapTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
// const material = new THREE.MeshMatcapMaterial();
// const CustomText3D = () => {
//   const donutsRef = useRef<THREE.Mesh[]>([]);
//   const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);
//   useEffect(() => {
//     matcapTexture.colorSpace = THREE.SRGBColorSpace;
//     matcapTexture.needsUpdate = true;
//     material.matcap = matcapTexture;
//     material.needsUpdate = true;
//   }, [matcapTexture]);
//   useFrame((_, delta) => {
//     donutsRef.current.forEach((child) => {
//       child.rotation.y += delta * 0.1;
//     });
//   });
//   return (
//     <>
//       <Center>
//         <Text3D
//           material={material as THREE.MeshMatcapMaterial}
//           font="./fonts/helvetiker_regular.typeface.json"
//           size={0.75}
//           height={0.2}
//           curveSegments={12}
//           bevelEnabled
//           bevelThickness={0.02}
//           bevelSize={0.02}
//           bevelOffset={0}
//           bevelSegments={5}
//         >
//           HELLO R3F
//         </Text3D>
//       </Center>
//       {[...Array(100)].map((_, index) => (
//         <mesh
//           key={index}
//           ref={(el) => (donutsRef.current[index] = el as THREE.Mesh)}
//           position={[
//             (Math.random() - 0.5) * 10,
//             (Math.random() - 0.5) * 10,
//             (Math.random() - 0.5) * 10,
//           ]}
//           scale={Math.random() * 0.2 + 0.2}
//           rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
//           geometry={torusGeometry as THREE.TorusGeometry}
//           material={material as THREE.MeshMatcapMaterial}
//         />
//       ))}
//     </>
//   );
// };
// export default CustomText3D;
//
// ------------------------------------------------------------
// 2. USING GROUP WRAPPER USEREF TO STORE THE GEOMETRY AND MATERIAL AND USE THEM IN THE MESH
// ------------------------------------------------------------
//
import { Center, Text3D, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

const CustomText3D = () => {
  const [torusGeometry, setTorusGeometry] =
    useState<THREE.TorusGeometry | null>(null);
  const [material, setMaterial] = useState<THREE.MeshMatcapMaterial | null>(
    null,
  );
  const groupRef = useRef<THREE.Group>(null);
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child) => {
        child.rotation.y += delta * 0.1;
      });
    }
  });

  return (
    <>
      <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} />
      <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} />

      <Center>
        <Text3D
          material={material as THREE.MeshMatcapMaterial}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          HELLO R3F
        </Text3D>
      </Center>
      <group ref={groupRef}>
        {[...Array(100)].map((_, index) => (
          <mesh
            key={index}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={Math.random() * 0.2 + 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            geometry={torusGeometry as THREE.TorusGeometry}
            material={material as THREE.MeshMatcapMaterial}
          />
        ))}
      </group>
    </>
  );
};

export default CustomText3D;
