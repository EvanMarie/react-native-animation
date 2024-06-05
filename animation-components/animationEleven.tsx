import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { textShadows } from "@/constants/ShadowStyles";

export default function AnimationEleven() {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  const opacityScale = () => {
    opacity.value = withTiming(1, { duration: 2000 });
    scale.value = withTiming(1, { duration: 2000 });
  };

  useEffect(() => {
    opacityScale();
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const restartAnimation = () => {
    opacity.value = 0;
    scale.value = 0.5;
    opacityScale();
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.1}
      title="Opacity & Scale"
      resetAnimation={restartAnimation}
    >
      <FlexFull
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.Text
          style={[
            animatedStyles,
            textShadows.glow200Sm,
            { fontFamily: "Play-Bold", fontSize: 33 },
          ]}
        >
          Opacity & Scale
        </Animated.Text>
      </FlexFull>
    </AnimationContainer>
  );
}
