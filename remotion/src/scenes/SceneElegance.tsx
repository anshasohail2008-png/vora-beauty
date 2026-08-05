import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { useSceneFade } from "../useSceneFade";
import { Plate } from "../components/Plate";
import { Eyebrow, WordsReveal, BodyLine } from "../components/Type";

const DURATION = 88;

/** "and timeless elegance." */
export const SceneElegance: React.FC = () => {
  const frame = useCurrentFrame();
  const fade = useSceneFade(DURATION, 12);
  const rise = interpolate(frame, [0, DURATION], [22, -18]);

  return (
    <AbsoluteFill style={{ opacity: fade }}>
      <AbsoluteFill
        style={{
          padding: "90px 120px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 44,
          transform: `translateY(${rise}px)`,
        }}
      >
        <div style={{ width: 430, height: 560 }}>
          <Plate src="images/product-foundation.jpg" duration={DURATION} radius={6} />
        </div>
        <div style={{ width: 360, height: 720 }}>
          <Plate src="images/gallery-packaging.jpg" from={10} duration={DURATION} radius={6} />
        </div>
        <div style={{ width: 300, height: 460 }}>
          <Plate src="images/product-lipstick.jpg" from={20} duration={DURATION} radius={6} />
        </div>

        <div
          style={{
            position: "absolute",
            right: 120,
            top: 210,
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 22,
          }}
        >
          <Eyebrow text="Est. Luxury" from={12} />
          <WordsReveal text="Timeless Elegance" from={20} size={104} italicLast align="center" />
          <BodyLine
            text="High-quality ingredients, crafted for a finish that lasts."
            from={48}
            size={26}
            align="center"
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const SCENE_ELEGANCE_DURATION = DURATION;
