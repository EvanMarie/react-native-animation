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

export default function AnimationNine() {
  const skewX = useSharedValue(0);

  useEffect(() => {
    skewX.value = withTiming(20, { duration: 2000 });
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ skewX: `${skewX.value}deg` }],
  }));

  const restartAnimation = () => {
    skewX.value = 0;
    skewX.value = withTiming(20, { duration: 2000 });
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.1}
      title="Skewed Text"
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
          Skewed Text
        </Animated.Text>
      </FlexFull>
    </AnimationContainer>
  );
}
