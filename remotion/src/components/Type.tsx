import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { DISPLAY, BODY, PALETTE } from "../theme";

/**
 * Word-by-word display headline reveal (blur + rise).
 */
export const WordsReveal: React.FC<{
  text: string;
  from?: number;
  stagger?: number;
  size?: number;
  italicLast?: boolean;
  color?: string;
  align?: "left" | "center";
}> = ({
  text,
  from = 0,
  stagger = 6,
  size = 120,
  italicLast = false,
  color = PALETTE.ink,
  align = "left",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: `0 ${size * 0.22}px`,
        justifyContent: align === "center" ? "center" : "flex-start",
      }}
    >
      {words.map((word, i) => {
        const local = frame - from - i * stagger;
        const p = spring({ frame: local, fps, config: { damping: 200 } });
        const y = interpolate(p, [0, 1], [size * 0.42, 0]);
        const blur = interpolate(p, [0, 1], [12, 0]);
        return (
          <span
            key={`${word}-${i}`}
            style={{
              fontFamily: DISPLAY,
              fontWeight: 300,
              fontSize: size,
              lineHeight: 1.02,
              color,
              opacity: p,
              transform: `translateY(${y}px)`,
              filter: `blur(${blur}px)`,
              fontStyle: italicLast && i === words.length - 1 ? "italic" : "normal",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

/**
 * Letter-spaced small-caps eyebrow with a growing hairline.
 */
export const Eyebrow: React.FC<{
  text: string;
  from?: number;
  color?: string;
  align?: "left" | "center";
}> = ({ text, from = 0, color = PALETTE.roseGold, align = "left" }) => {
  const frame = useCurrentFrame();
  const local = frame - from;
  const opacity = interpolate(local, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line = interpolate(local, [4, 40], [0, 92], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        opacity,
        justifyContent: align === "center" ? "center" : "flex-start",
      }}
    >
      <div style={{ width: line, height: 1, backgroundColor: color }} />
      <span
        style={{
          fontFamily: BODY,
          fontWeight: 400,
          fontSize: 22,
          letterSpacing: 10,
          textTransform: "uppercase",
          color,
        }}
      >
        {text}
      </span>
      {align === "center" ? (
        <div style={{ width: line, height: 1, backgroundColor: color }} />
      ) : null}
    </div>
  );
};

export const BodyLine: React.FC<{
  text: string;
  from?: number;
  size?: number;
  align?: "left" | "center";
}> = ({ text, from = 0, size = 30, align = "left" }) => {
  const frame = useCurrentFrame();
  const local = frame - from;
  const opacity = interpolate(local, [0, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(local, [0, 30], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <p
      style={{
        fontFamily: BODY,
        fontWeight: 300,
        fontSize: size,
        letterSpacing: 3,
        lineHeight: 1.6,
        color: "rgba(51,51,51,0.72)",
        opacity,
        transform: `translateY(${y}px)`,
        textAlign: align,
        margin: 0,
        maxWidth: 720,
      }}
    >
      {text}
    </p>
  );
};
