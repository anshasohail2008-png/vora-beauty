import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { PALETTE } from "../theme";

/**
 * Persistent luxury backdrop: warm cream base with slowly drifting
 * rose-gold and blush veils. Spans the whole video.
 */
export const Backdrop: React.FC = () => {
  const frame = useCurrentFrame();

  const drift = (speed: number, amp: number, phase = 0) =>
    Math.sin((frame / speed) + phase) * amp;

  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.cream }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${50 + drift(90, 6)}% ${
            35 + drift(120, 8, 1.2)
          }%, rgba(248,215,232,0.85), rgba(255,248,242,0) 62%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${18 + drift(110, 7, 2.4)}% ${
            78 + drift(140, 6)
          }%, rgba(212,163,115,0.42), rgba(255,248,242,0) 58%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${86 + drift(130, 5, 3.1)}% ${
            18 + drift(100, 7, 0.6)
          }%, rgba(212,163,115,0.3), rgba(255,248,242,0) 55%)`,
        }}
      />
      {/* soft vignette keeps type legible and the frame cinematic */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 52%, rgba(51,51,51,0.16) 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          opacity: interpolate(frame, [0, 480], [0.06, 0.12]),
          background:
            "linear-gradient(115deg, rgba(212,163,115,0.5), rgba(255,255,255,0) 45%)",
        }}
      />
    </AbsoluteFill>
  );
};
