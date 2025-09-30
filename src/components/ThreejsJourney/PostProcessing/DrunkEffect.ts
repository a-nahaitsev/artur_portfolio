import fragmentShader from "../../../shaders/postprocessing/fragment.glsl";
import { BlendFunction, Effect } from "postprocessing";
import * as THREE from "three";

export default class DrunkEffect extends Effect {
  constructor({
    frequency = 5,
    amplitude = 0.1,
    offset = 0,
    blendFunction = BlendFunction.DARKEN,
  }: {
    frequency?: number;
    amplitude?: number;
    offset?: number;
    blendFunction?: BlendFunction;
  }) {
    super("DrunkEffect", fragmentShader, {
      blendFunction,
      uniforms: new Map([
        ["frequency", new THREE.Uniform(frequency)],
        ["amplitude", new THREE.Uniform(amplitude)],
        ["offset", new THREE.Uniform(offset)],
      ]),
    });
  }

  update(_: any, __: any, deltaTime: number) {
    this.uniforms.get("offset")!.value += deltaTime;
  }
}
