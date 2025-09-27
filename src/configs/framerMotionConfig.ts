import { Transition } from "motion";

export const framerMotionConfig: Transition = {
  type: "spring",
  mass: 5,
  stiffness: 500,
  damping: 50,
  restDelta: 0.0001,
};
