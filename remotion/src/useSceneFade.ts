import { useCurrentFrame, interpolate } from "remotion";

/**
 * Smooth cross-fade in/out for a scene, so cuts never feel abrupt.
 */
export const useSceneFade = (durationInFrames: number, fade = 14) => {
  const frame = useCurrentFrame();
  return interpolate(
    frame,
    [0, fade, durationInFrames - fade, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
};
