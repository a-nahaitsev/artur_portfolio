import Cube from "../Cube";
import { Hamburger } from "../Hamburger";
import Lights from "../Lights";
import PerfOverlay from "../PerfOverlay";
import Plane from "../Plane";
import Sphere from "../Sphere";
import BackgroundColor from "@/shared/Threejs/BackgroundColor";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
  RapierRigidBody,
  CylinderCollider,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
} from "@react-three/rapier";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const CUBES_COUNT = 300;

const PhysicsExperience = () => {
  const [hitSound] = useState(() => new Audio("./media/hit.mp3"));
  const cubeRef = useRef<THREE.Mesh>(null!);
  const twisterRef = useRef<RapierRigidBody>(null!);
  const cubeRigidBodyRef = useRef<RapierRigidBody>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);
  // const cubesRef = useRef<THREE.InstancedMesh>(null!);
  const instances = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    for (let i = 0; i < CUBES_COUNT; i++) {
      instances.push({
        key: `instance_${i}`,
        position: [
          (Math.random() - 0.5) * 8,
          6 + i * 0.2,
          (Math.random() - 0.5) * 2,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }

    return instances;
  }, []);

  const cubeJump = () => {
    const mass = cubeRigidBodyRef.current.mass();
    cubeRigidBodyRef.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 }, true);
    cubeRigidBodyRef.current.applyTorqueImpulse(
      {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
        z: Math.random() - 0.5,
      },
      true,
    );
  };

  const collisionEnter = () => {
    // hitSound.currentTime = 0;
    // hitSound.volume = Math.random();
    // hitSound.play();
  };

  useFrame((state) => {
    if (!twisterRef.current) return;

    const time = state.clock.getElapsedTime();

    const eulerRotation = new THREE.Euler(0, time * 3, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    twisterRef.current.setNextKinematicRotation(quaternionRotation);

    const angle = time * 0.5;
    const x = Math.cos(angle) * 2;
    const z = Math.sin(angle) * 2;
    twisterRef.current.setNextKinematicTranslation({ x, y: -0.8, z });
  });

  // useEffect(() => {
  //   for (let i = 0; i < cubesCount; i++) {
  //     const matrix = new THREE.Matrix4();
  //     matrix.compose(
  //       new THREE.Vector3(i * 2, 0, 0),
  //       new THREE.Quaternion(),
  //       new THREE.Vector3(1, 1, 1),
  //     );
  //     cubesRef.current.setMatrixAt(i, matrix);
  //   }
  // }, []);

  return (
    <>
      <PerfOverlay />
      <BackgroundColor color="ivory" />
      <OrbitControls makeDefault />
      <Lights />

      <Physics
        // debug
        gravity={[0, -9.81, 0]} // Earth gravity is -9.81 m/s^2
      >
        <RigidBody
          ref={cubeRigidBodyRef}
          position={[2, 2, 0]}
          gravityScale={1} // default is 1
          restitution={0.5}
          friction={0.7}
          colliders={false}
          onCollisionEnter={collisionEnter}
          // onCollisionExit={() => console.log("collisionExit")}
          // onSleep={() => console.log("sleep")}
          // onWake={() => console.log("wake")}
        >
          <Cube
            cubeRef={cubeRef}
            position={[0, 0, 0]}
            onClick={cubeJump}
            scale={1}
          />
          <CuboidCollider mass={2} args={[0.5, 0.5, 0.5]} />
        </RigidBody>
        {/* <RigidBody
          colliders={false}
          position={[0, 1, 0]}
          rotation={[Math.PI * 0.5, 0, 0]}
        >
          <CuboidCollider args={[1.5, 1.5, 0.5]} />
          <BallCollider args={[1.5]} />
          <mesh castShadow>
            <torusGeometry args={[1, 0.5, 16, 32]} />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </RigidBody> */}
        <RigidBody colliders="ball">
          <Sphere
            disableHtmlLabel
            sphereRef={sphereRef}
            cubeRef={cubeRef}
            position={[-2, 2, 0]}
          />
        </RigidBody>

        <RigidBody
          ref={twisterRef}
          position={[0, -0.8, 0]}
          friction={0}
          type="kinematicPosition"
        >
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" friction={0.7}>
          <Plane withHeight />
        </RigidBody>

        <RigidBody position={[0, 4, 0]} colliders={false}>
          <Hamburger scale={0.25} position-y={-0.5} />
          <CylinderCollider args={[0.5, 1.25]} />
        </RigidBody>

        <RigidBody type="fixed">
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.5]} />
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.5]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[5.5, 1, 0]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[-5.5, 1, 0]} />
        </RigidBody>

        <InstancedRigidBodies instances={instances}>
          <instancedMesh
            castShadow
            // ref={cubesRef}
            args={[undefined, undefined, CUBES_COUNT]}
          >
            <boxGeometry />
            <meshStandardMaterial color="tomato" />
          </instancedMesh>
        </InstancedRigidBodies>
      </Physics>
    </>
  );
};

export default PhysicsExperience;
