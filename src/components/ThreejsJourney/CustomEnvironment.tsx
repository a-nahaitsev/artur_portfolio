import BackgroundColor from "./BackgroundColor";
import { Environment, Lightformer } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect } from "react";

const CustomEnvironment = () => {
  const scene = useThree((state) => state.scene);

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("environment", {
      envMapIntensity: { value: 3.5, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 20, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  useEffect(() => {
    scene.environmentIntensity = envMapIntensity;
  }, [envMapIntensity]);

  return (
    <>
      {/* <Environment
        background
        preset="warehouse"
        // files={"/environmentMaps/the_sky_is_on_fire_2k.hdr"}
        // files={[
        //   "/environmentMaps/2/px.jpg",
        //   "/environmentMaps/2/nx.jpg",
        //   "/environmentMaps/2/py.jpg",
        //   "/environmentMaps/2/ny.jpg",
        //   "/environmentMaps/2/pz.jpg",
        //   "/environmentMaps/2/nz.jpg",
        // ]}
      /> */}

      {/* resolution is not working when Environment has no children */}
      <Environment
        // background
        preset="sunset"
        // resolution={32}
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      >
        {/* <BackgroundColor color="#000" /> */}
        {/* <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}
        {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[10, 0, 0]} />
        </mesh> */}
      </Environment>
    </>
  );
};

export default CustomEnvironment;
