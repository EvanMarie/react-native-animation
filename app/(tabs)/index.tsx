import AnimationFour from "@/animation-components/animationFour";
import AnimationOne from "@/animation-components/animationOne";
import AnimationThree from "@/animation-components/animationThree";
import AnimationTwo from "@/animation-components/animationTwo";
import { GradientThree, GradientTwo } from "@/constants/Gradients";
import { VStackFull } from "@/custom-components/containers";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GradientThree>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStackFull style={{ gap: 20, paddingVertical: 70 }}>
          <AnimationOne />
          <AnimationTwo />
          <AnimationThree />
          <AnimationFour />
        </VStackFull>
      </ScrollView>
    </GradientThree>
  );
}
