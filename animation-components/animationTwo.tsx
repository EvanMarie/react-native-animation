import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { animatedElementStyle } from "./styles";
import { screenHeight } from "@/constants/variousConstants";
import MyButton from "@/custom-components/button";

export default function AnimationTwo() {
  const offset = useSharedValue(-150);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const resetAnimation = () => {
    offset.value = -150;
  };

  return (
    <AnimationContainer
      resetAnimation={resetAnimation}
      height={screenHeight * 0.25}
      title="Animation with Timing"
    >
      <Animated.View
        style={[
          animatedStyles,
          animatedElementStyle,
          { width: 80, height: 80 },
        ]}
      />
      <MyButton
        text="Move with Timing"
        onPress={() => {
          offset.value = withTiming(400, { duration: 1000 });
        }}
      />
    </AnimationContainer>
  );
}
