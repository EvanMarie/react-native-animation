import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { FlexFull } from "@/custom-components/containers";
import { screenHeight } from "@/constants/variousConstants";
import { textShadows } from "@/constants/ShadowStyles";

export default function AnimationSix() {
  const translateX = useSharedValue(-350);

  useEffect(() => {
    translateX.value = withTiming(0, { duration: 2000 });
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const restartAnimation = () => {
    translateX.value = -350;
    translateX.value = withTiming(0, { duration: 2000 });
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.2}
      title="Sliding Text"
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
          Slide to the right!
        </Animated.Text>
      </FlexFull>
    </AnimationContainer>
  );
}
