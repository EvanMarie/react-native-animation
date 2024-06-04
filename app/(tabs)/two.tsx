import AnimationEight from "@/animation-components/animationEight";
import AnimationSeven from "@/animation-components/animationSeven";
import ExampleSeven from "@/animation-components/animationSix";
import AnimationSix from "@/animation-components/animationSix";
import { GradientOne } from "@/constants/Gradients";
import { screenWidth } from "@/constants/variousConstants";
import { VStackFull } from "@/custom-components/containers";
import { ScrollView } from "react-native-gesture-handler";

export default function Two() {
  return (
    <GradientOne>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStackFull style={{ gap: 20, paddingVertical: 70 }}>
          <AnimationSix />
          <AnimationSeven />
          <AnimationEight />
        </VStackFull>
      </ScrollView>
    </GradientOne>
  );
}
