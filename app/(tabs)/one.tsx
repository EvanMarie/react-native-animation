import GestureBasedAnimationSequence from "@/animation-components/animationFive";
import AnimationFour from "@/animation-components/animationFour";
import AnimationThree from "@/animation-components/animationThree";
import { GradientSix } from "@/constants/Gradients";
import { VStackFull } from "@/custom-components/containers";
import { ScrollView } from "react-native-gesture-handler";

export default function One() {
  return (
    <GradientSix>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStackFull style={{ gap: 20, paddingVertical: 70 }}>
          <AnimationThree />
          <AnimationFour />
          <GestureBasedAnimationSequence />
        </VStackFull>
      </ScrollView>
    </GradientSix>
  );
}
