import { Img, staticFile, useCurrentFrame, interpolate } from "remotion";

/**
 * Slow ken-burns image plate with a rose-gold hairline frame.
 */
export const Plate: React.FC<{
  src: string;
  from?: number;
  scaleFrom?: number;
  scaleTo?: number;
  radius?: number;
  duration?: number;
  objectPosition?: string;
}> = ({
  src,
  from = 0,
  scaleFrom = 1.04,
  scaleTo = 1.14,
  radius = 8,
  duration = 120,
  objectPosition = "center",
}) => {
  const frame = useCurrentFrame() - from;
  const scale = interpolate(frame, [0, duration], [scaleFrom, scaleTo], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: radius,
        opacity,
        boxShadow: "0 40px 90px -50px rgba(51,51,51,0.55)",
      }}
    >
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          transform: `scale(${scale})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 14,
          border: "1px solid rgba(255,248,242,0.55)",
          borderRadius: Math.max(radius - 6, 0),
        }}
      />
    </div>
  );
};
