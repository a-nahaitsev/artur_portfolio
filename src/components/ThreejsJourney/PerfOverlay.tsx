import { useControls } from "leva";
import { Perf } from "r3f-perf";
import React from "react";

const PerfOverlay = () => {
  const { perfVisible } = useControls({ perfVisible: true });

  return perfVisible ? <Perf position="bottom-right" /> : null;
};

export default PerfOverlay;
