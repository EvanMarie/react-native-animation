import { col } from "@/constants/Colors";
import { screenHeight } from "@/constants/variousConstants";
import { VStackFull } from "@/custom-components/containers";

export default function AnimationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VStackFull
      style={{
        height: screenHeight * 0.4,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: col[100],
        padding: 10,
      }}
    >
      {children}
    </VStackFull>
  );
}
