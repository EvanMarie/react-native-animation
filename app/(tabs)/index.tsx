import AnimationOne from "@/animation-components/animationOne";
import { GradientTwo } from "@/constants/Gradients";
import { VStackFull } from "@/custom-components/containers";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GradientTwo style={{ paddingTop: 55 }}>
      <ScrollView>
        <VStackFull>
          <AnimationOne />
        </VStackFull>
      </ScrollView>
    </GradientTwo>
  );
}
