import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { useSceneFade } from "../useSceneFade";
import { Plate } from "../components/Plate";
import { Eyebrow, WordsReveal } from "../components/Type";

const DURATION = 96;

const ROW = [
  "images/product-serum.jpg",
  "images/product-bronzer.jpg",
  "images/product-mascara.jpg",
  "images/product-brushes.jpg",
  "images/product-powder.jpg",
];

/** "Elevate your look with VORA Beauty." */
export const SceneElevate: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fade = useSceneFade(DURATION, 12);
  const pan = interpolate(frame, [0, DURATION], [40, -120]);
  const logoIn = spring({ frame: frame - 44, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill style={{ opacity: fade }}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            gap: 34,
            transform: `translateX(${pan}px)`,
          }}
        >
          {ROW.map((src, i) => (
            <div
              key={src}
              style={{
                width: 300,
                height: 400,
                transform: `translateY(${i % 2 === 0 ? -34 : 34}px)`,
              }}
            >
              <Plate src={src} from={i * 5} duration={DURATION} radius={6} />
            </div>
          ))}
        </div>
      </AbsoluteFill>

      {/* Cream scrim so the headline reads over the montage */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 62% 46% at 50% 50%, rgba(255,248,242,0.97) 0%, rgba(255,248,242,0.9) 55%, rgba(255,248,242,0.25) 100%)",
          opacity: interpolate(frame, [4, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />


      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <WordsReveal text="Elevate your look" from={22} size={96} italicLast align="center" />
        <div
          style={{
            width: 380,
            opacity: logoIn,
            transform: `scale(${interpolate(logoIn, [0, 1], [0.86, 1])})`,
          }}
        >
          <Img src={staticFile("images/logo-t.png")} style={{ width: "100%" }} />
        </div>
        <Eyebrow text="Reveal Your Natural Glow" from={66} align="center" />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const SCENE_ELEVATE_DURATION = DURATION;
