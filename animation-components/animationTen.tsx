import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { textShadows } from "@/constants/ShadowStyles";

export default function AnimationTen() {
  const skewX = useSharedValue(0);

  useEffect(() => {
    skewX.value = withSequence(
      withTiming(20, { duration: 1000 }),
      withTiming(-20, { duration: 1000 }),
      withTiming(10, { duration: 1000 }),
      withTiming(-10, { duration: 1000 }),
      withTiming(0, { duration: 1000 })
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ skewX: `${skewX.value}deg` }],
  }));

  const restartAnimation = () => {
    skewX.value = 0;
    skewX.value = withSequence(
      withTiming(30, { duration: 1000 }),
      withTiming(-30, { duration: 1000 }),
      withTiming(20, { duration: 1000 }),
      withTiming(-20, { duration: 1000 }),
      withTiming(0, { duration: 1000 })
    );
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.1}
      title="Sequenced Skewed Text"
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
