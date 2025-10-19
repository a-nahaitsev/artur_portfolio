import { Hamburger } from "../Hamburger";
import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategray" });

const BlockStart = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  return (
    <group position={position}>
      <Float floatIntensity={0.25} rotationIntensity={0.25}>
        <Text
          font="./fonts/bebas-neue-v9-latin-regular.woff"
          maxWidth={0.25}
          lineHeight={0.75}
          textAlign="right"
          position={[0.75, 0.65, 0]}
          rotation-y={-0.25}
          scale={0.5}
        >
          Marble Race
          <meshBasicMaterial toneMapped={false} color="white" />
        </Text>
      </Float>
      {/* Floor */}
      <mesh
        receiveShadow
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
      />
    </group>
  );
};

const BlockEnd = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  return (
    <group position={position}>
      <Text
        font="./fonts/bebas-neue-v9-latin-regular.woff"
        position={[0, 2.25, 2]}
      >
        FINISH
        <meshBasicMaterial toneMapped={false} color="white" />
      </Text>
      {/* Floor */}
      <mesh
        receiveShadow
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
      />
      <RigidBody
        type="fixed"
        colliders="hull"
        position={[0, 0.25, 0]}
        restitution={0.2}
        friction={0}
      >
        <Hamburger scale={0.2} />
      </RigidBody>
    </group>
  );
};

export const BlockSpinner = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1),
  );
  const obstacleRef = useRef<RapierRigidBody>(null!);

  useFrame((state) => {
    if (!obstacleRef.current) return;

    const time = state.clock.getElapsedTime();

    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
    obstacleRef.current.setNextKinematicRotation(rotation);
  });

  return (
    <group position={position}>
      {/* Floor */}
      <mesh
        receiveShadow
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
      />
      {/* Obstacle */}
      <RigidBody
        ref={obstacleRef}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
        />
      </RigidBody>
    </group>
  );
};

export const BlockLimbo = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  const obstacleRef = useRef<RapierRigidBody>(null!);

  useFrame((state) => {
    if (!obstacleRef.current) return;

    const time = state.clock.getElapsedTime();
    const x = position[0];
    const y = position[1] + Math.sin(time + timeOffset) + 1.15;
    const z = position[2];
    obstacleRef.current.setNextKinematicTranslation({ x, y, z });
  });

  return (
    <group position={position}>
      {/* Floor */}
      <mesh
        receiveShadow
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
      />
      {/* Obstacle */}
      <RigidBody
        ref={obstacleRef}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
        />
      </RigidBody>
    </group>
  );
};

export const BlockAxe = ({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) => {
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  const obstacleRef = useRef<RapierRigidBody>(null!);

  useFrame((state) => {
    if (!obstacleRef.current) return;

    const time = state.clock.getElapsedTime();
    const x = position[0] + Math.sin(time + timeOffset) * 1.25;
    const y = position[1] + 0.75;
    const z = position[2];
    obstacleRef.current.setNextKinematicTranslation({ x, y, z });
  });

  return (
    <group position={position}>
      {/* Floor */}
      <mesh
        receiveShadow
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
      />
      {/* Obstacle */}
      <RigidBody
        ref={obstacleRef}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[1.5, 1.5, 0.3]}
        />
      </RigidBody>
    </group>
  );
};

const Bounds = ({ length = 1 }: { length?: number }) => {
  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <mesh
        castShadow
        position={[2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 1.5, 4 * length]}
      />
      <mesh
        receiveShadow
        position={[-2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 1.5, 4 * length]}
      />
      <mesh
        receiveShadow
        position={[0, 0.75, -(length * 4) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[4, 1.5, 0.3]}
      />
      <CuboidCollider
        args={[2, 0.1, 2 * length]}
        position={[0, -0.1, -(length * 2) + 2]}
        restitution={0.2}
        friction={1}
      />
    </RigidBody>
  );
};

const Level = ({
  count = 5,
  types = [BlockSpinner, BlockAxe, BlockLimbo],
  seed = 0,
}: {
  count?: number;
  types?: React.ComponentType<{ position?: [number, number, number] }>[];
  seed?: number;
}) => {
  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }

    return blocks;
  }, [count, types, seed]);

  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {blocks.map((Block, index) => (
        <Block key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}
      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
      <Bounds length={count + 2} />
    </>
  );
};

export default Level;
