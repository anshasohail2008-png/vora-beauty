import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { loadFont as loadDisplay } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as loadBody } from "@remotion/google-fonts/Jost";
import { Backdrop } from "./components/Backdrop";
import { SceneIntro, SCENE_INTRO_DURATION } from "./scenes/SceneIntro";
import { SceneShine, SCENE_SHINE_DURATION } from "./scenes/SceneShine";
import { SceneElegance, SCENE_ELEGANCE_DURATION } from "./scenes/SceneElegance";
import { SceneElevate, SCENE_ELEVATE_DURATION } from "./scenes/SceneElevate";
import { SceneGlow, SCENE_GLOW_DURATION } from "./scenes/SceneGlow";

loadDisplay("normal", { weights: ["300", "400"], subsets: ["latin"] });
loadDisplay("italic", { weights: ["300", "400"], subsets: ["latin"] });
loadBody("normal", { weights: ["300", "400", "500"], subsets: ["latin"] });

// Voice-over beats (30fps):
//  0.0-2.4s  "Beauty begins with confidence."
//  3.1-6.2s  "Discover the perfect shine, flawless finish,"
//  6.7-8.2s  "and timeless elegance."
//  9.0-11.5s "Elevate your look with VORA Beauty."
// 12.2-13.7s "Glow with confidence."
const S1 = 0;
const S2 = S1 + SCENE_INTRO_DURATION; // 100 -> 3.33s
const S3 = S2 + SCENE_SHINE_DURATION; // 192 -> 6.40s
const S4 = S3 + SCENE_ELEGANCE_DURATION; // 280 -> 9.33s
const S5 = S4 + SCENE_ELEVATE_DURATION; // 376 -> 12.53s

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop />

      <Sequence from={S1} durationInFrames={SCENE_INTRO_DURATION}>
        <SceneIntro />
      </Sequence>
      <Sequence from={S2} durationInFrames={SCENE_SHINE_DURATION}>
        <SceneShine />
      </Sequence>
      <Sequence from={S3} durationInFrames={SCENE_ELEGANCE_DURATION}>
        <SceneElegance />
      </Sequence>
      <Sequence from={S4} durationInFrames={SCENE_ELEVATE_DURATION}>
        <SceneElevate />
      </Sequence>
      <Sequence from={S5} durationInFrames={SCENE_GLOW_DURATION}>
        <SceneGlow />
      </Sequence>

      <Audio src={staticFile("audio/vo.mp3")} />
    </AbsoluteFill>
  );
};
