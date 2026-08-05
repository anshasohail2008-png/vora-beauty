import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { useSceneFade } from "../useSceneFade";
import { Plate } from "../components/Plate";
import { Eyebrow, WordsReveal } from "../components/Type";

const DURATION = 92;

/** "Discover the perfect shine, flawless finish" */
export const SceneShine: React.FC = () => {
  const frame = useCurrentFrame();
  const fade = useSceneFade(DURATION, 12);
  const slide = interpolate(frame, [0, DURATION], [0, -34]);

  return (
    <AbsoluteFill style={{ opacity: fade }}>
      <AbsoluteFill
        style={{
          padding: "0 120px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 70,
          transform: `translateX(${slide}px)`,
        }}
      >
        <div style={{ width: 520, height: 700 }}>
          <Plate src="images/product-highlighter.jpg" duration={DURATION} radius={6} />
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 26 }}>
          <Eyebrow text="Luminous Radiance" from={8} />
          <WordsReveal text="Perfect Shine" from={16} size={126} italicLast />
          <div style={{ height: 6 }} />
          <div style={{ opacity: interpolate(frame, [44, 62], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
            <WordsReveal text="Flawless Finish" from={46} size={80} />
          </div>
        </div>

        <Sequence from={40}>
          <div
            style={{
              position: "absolute",
              right: 120,
              top: 150,
              width: 330,
              height: 440,
            }}
          >
            <Plate src="images/product-lipgloss.jpg" duration={DURATION} radius={6} />
          </div>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const SCENE_SHINE_DURATION = DURATION;
