import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { textShadows } from "@/constants/ShadowStyles";

export default function AnimationFourteen() {
  const scale = useSharedValue(1);

  const pulsatingText = () => {
    scale.value = withRepeat(
      withTiming(1.4, { duration: 1000, easing: Easing.ease }),
      -1,
      true
    );
  };

  useEffect(() => {
    pulsatingText();
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const restartAnimation = () => {
    scale.value = 1;
    pulsatingText();
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.1}
      title="Pulsating Text"
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
          Pulsating Text
        </Animated.Text>
      </FlexFull>
    </AnimationContainer>
  );
}
