import { GradientFour } from "@/constants/Gradients";
import { screenHeight } from "@/constants/variousConstants";
import { CenterHorizontalFull } from "@/custom-components/containers";
import { ShiftingComponentsExample } from "@/custom-components/designExamples/componentExamples";

export default function Text() {
  return (
    <GradientFour
      style={{
        height: screenHeight,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CenterHorizontalFull>
        <ShiftingComponentsExample />
      </CenterHorizontalFull>
    </GradientFour>
  );
}
