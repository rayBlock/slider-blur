import {
  AbsoluteFill,
  Img,
} from "remotion";
import {
  linearTiming,
  TransitionSeries,
} from "@remotion/transitions";
import { z } from "zod";
import { slideBlur } from "./BlurSlidePresentation";

export const myCompSchema = z.object({
  // titleText: z.string(),
  // titleColor: zColor(),
  // logoColor1: zColor(),
  // logoColor2: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({

}) => {

  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      <TransitionSeries from={0} >
        <TransitionSeries.Sequence durationInFrames={22}>
          <Img style={{objectFit: "cover", width: "100%", height: "100%"}} src="https://images.unsplash.com/photo-1495954380655-01609180eda3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition timing={linearTiming({ durationInFrames: 10 })}
          presentation={slideBlur()} />
        <TransitionSeries.Sequence durationInFrames={22}>
          <Img style={{objectFit: "cover", width: "100%", height: "100%"}}  src="https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </TransitionSeries.Sequence>

      </TransitionSeries>

      {/* <AbsoluteFill style={{ opacity }}>
        <AbsoluteFill style={{ transform: `translateY(${logoTranslation}px)` }}>
          <Logo logoColor1={logoColor1} logoColor2={logoColor2} />
        </AbsoluteFill>

        <Sequence from={35}>
          <Title titleText={propOne} titleColor={propTwo} />
        </Sequence>

        <Sequence from={75}>
          <Subtitle />
        </Sequence>
      </AbsoluteFill> */}
    </AbsoluteFill>
  );
};
