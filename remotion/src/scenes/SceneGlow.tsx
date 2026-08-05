import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { useSceneFade } from "../useSceneFade";
import { Plate } from "../components/Plate";
import { Eyebrow, WordsReveal } from "../components/Type";
import { BODY, PALETTE } from "../theme";

const DURATION = 108;

/** "Glow with confidence." — closing card */
export const SceneGlow: React.FC = () => {
  const frame = useCurrentFrame();
  const fade = useSceneFade(DURATION, 14);

  const urlOpacity = interpolate(frame, [66, 88], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outro = interpolate(frame, [88, DURATION], [1, 0.94], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fade }}>
      <AbsoluteFill>
        <div style={{ position: "absolute", inset: 0 }}>
          <Plate
            src="images/hero-model.jpg"
            duration={DURATION}
            scaleFrom={1.08}
            scaleTo={1.2}
            radius={0}
            objectPosition="center 30%"
          />
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(255,248,242,0.98) 0%, rgba(255,248,242,0.95) 34%, rgba(255,248,242,0.55) 58%, rgba(255,248,242,0.05) 82%)",
        }}
      />

      <AbsoluteFill
        style={{
          padding: "0 130px",
          justifyContent: "center",
          alignItems: "flex-start",
          transform: `scale(${outro})`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 30, maxWidth: 900 }}>
          <Eyebrow text="VORA Beauty" from={6} />
          <WordsReveal text="Glow with confidence" from={14} size={132} italicLast />
          <div
            style={{
              marginTop: 14,
              opacity: urlOpacity,
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div style={{ width: 64, height: 1, backgroundColor: PALETTE.roseGold }} />
            <span
              style={{
                fontFamily: BODY,
                fontWeight: 400,
                fontSize: 26,
                letterSpacing: 7,
                textTransform: "uppercase",
                color: PALETTE.ink,
              }}
            >
              vora-beauty.lovable.app
            </span>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const SCENE_GLOW_DURATION = DURATION;
