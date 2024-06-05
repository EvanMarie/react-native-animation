import AnimationFifteen from "@/animation-components/animationFifteen";
import AnimationSix from "@/animation-components/animationSix";
import AnimationSixteen from "@/animation-components/animationSixteen";
import { GradientTen } from "@/constants/Gradients";
import { VStackFull } from "@/custom-components/containers";
import { ScrollView } from "react-native-gesture-handler";

export default function Keyframes() {
  return (
    <GradientTen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStackFull style={{ gap: 10, paddingVertical: 70 }}>
          <AnimationFifteen />
          <AnimationSixteen />
        </VStackFull>
      </ScrollView>
    </GradientTen>
  );
}
