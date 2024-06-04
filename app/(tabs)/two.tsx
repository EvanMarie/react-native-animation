import AnimationEight from "@/animation-components/animationEight";
import AnimationEleven from "@/animation-components/animationEleven";
import AnimationNine from "@/animation-components/animationNine";
import AnimationSeven from "@/animation-components/animationSeven";
import AnimationSix from "@/animation-components/animationSix";
import AnimationTen from "@/animation-components/animationTen";
import { GradientOne } from "@/constants/Gradients";
import { VStackFull } from "@/custom-components/containers";
import { ScrollView } from "react-native-gesture-handler";

export default function Two() {
  return (
    <GradientOne>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStackFull style={{ gap: 10, paddingVertical: 70 }}>
          <AnimationSix />
          <AnimationSeven />
          <AnimationEight />
          <AnimationNine />
          <AnimationTen />
          <AnimationEleven />
        </VStackFull>
      </ScrollView>
    </GradientOne>
  );
}
