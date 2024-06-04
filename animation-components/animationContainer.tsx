import { borders } from "@/constants/BorderStyles";
import { col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";
import { screenHeight } from "@/constants/variousConstants";
import {
  CenterHorizontalFull,
  VStackFull,
} from "@/custom-components/containers";

export default function AnimationContainer({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return (
    <CenterHorizontalFull style={[style, { paddingHorizontal: 10 }]}>
      <VStackFull
        style={[
          borders.borderSm700,
          boxShadows.lg,
          {
            height: screenHeight * 0.4,
            position: "relative",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: col[100],
            padding: 10,
            borderRadius: 13,
            gap: 10,
          },
        ]}
      >
        {children}
      </VStackFull>
    </CenterHorizontalFull>
  );
}
