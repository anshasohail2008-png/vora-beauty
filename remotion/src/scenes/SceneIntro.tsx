import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { useSceneFade } from "../useSceneFade";
import { Eyebrow, WordsReveal } from "../components/Type";
import { PALETTE } from "../theme";

const DURATION = 100;

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fade = useSceneFade(DURATION, 10);

  const logoIn = spring({ frame: frame - 2, fps, config: { damping: 200 } });
  const logoScale = interpolate(logoIn, [0, 1], [1.18, 1]);
  const logoBlur = interpolate(logoIn, [0, 1], [22, 0]);
  const drift = Math.sin(frame / 42) * 6;

  // Sheen sweeping across the logo
  const sheen = interpolate(frame, [26, 74], [-40, 140], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fade }}>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 460,
            opacity: logoIn,
            transform: `scale(${logoScale}) translateY(${drift}px)`,
            filter: `blur(${logoBlur}px)`,
          }}
        >
          <Img src={staticFile("images/logo.png")} style={{ width: "100%" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(100deg, rgba(255,255,255,0) ${sheen - 26}%, rgba(255,255,255,0.75) ${sheen}%, rgba(255,255,255,0) ${sheen + 26}%)`,
              mixBlendMode: "overlay",
            }}
          />
        </div>

        <div style={{ transform: "translateY(-10px)" }}>
          <WordsReveal
            text="Beauty begins with confidence"
            from={24}
            stagger={7}
            size={92}
            italicLast
            align="center"
          />
        </div>

        <div style={{ marginTop: 6 }}>
          <Eyebrow text="VORA Beauty" from={62} align="center" color={PALETTE.roseGold} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const SCENE_INTRO_DURATION = DURATION;
