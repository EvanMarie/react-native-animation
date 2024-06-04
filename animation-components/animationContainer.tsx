import { borders } from "@/constants/BorderStyles";
import { col } from "@/constants/Colors";
import { boxShadows, textShadows } from "@/constants/ShadowStyles";
import { screenHeight } from "@/constants/variousConstants";
import {
  CenterHorizontalFull,
  VStackFull,
} from "@/custom-components/containers";
import MyIconButton from "@/custom-components/iconButton";
import { HeadingLg, HeadingXl } from "@/custom-components/textComponents";

export default function AnimationContainer({
  children,
  height = screenHeight * 0.4,
  resetAnimation,
  title,
  style,
  headingLight = false,
}: {
  children: React.ReactNode;
  height?: number;
  title?: string;
  resetAnimation?: () => void;
  style?: any;
  headingLight?: boolean;
}) {
  return (
    <CenterHorizontalFull style={[style, { paddingHorizontal: 10 }]}>
      <VStackFull style={{ paddingTop: 20 }}>
        {title && (
          <HeadingLg
            textColor={headingLight ? col[200] : col[800]}
            textShadow={
              headingLight ? textShadows.rightMd : textShadows.glow200Sm
            }
          >
            {title}
          </HeadingLg>
        )}
        <VStackFull
          style={[
            borders.borderSm700,
            boxShadows.lg,
            {
              height: height,
              position: "relative",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: col[100],
              padding: 10,
              borderRadius: 13,
              gap: 20,
            },
          ]}
        >
          {resetAnimation && (
            <MyIconButton
              onPress={resetAnimation}
              iconName="refresh"
              style={{ position: "absolute", top: 10, right: 10, zIndex: 1 }}
              size={25}
              padding={3}
            />
          )}
          {children}
        </VStackFull>
      </VStackFull>
    </CenterHorizontalFull>
  );
}
