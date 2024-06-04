import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  interpolateColor,
  cancelAnimation,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { textShadows } from "@/constants/ShadowStyles";
import { col } from "@/constants/Colors";

export default function AnimationSeven() {
  const color = useSharedValue(0);

  useEffect(() => {
    color.value = withRepeat(withTiming(1, { duration: 7000 }), -1, true);
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const textColor = interpolateColor(
      color.value,
      [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
      [
        col[200],
        col[300],
        col[400],
        col[500],
        col[600],
        col[700],
        col[800],
        col[900],
      ]
    );
    return { color: textColor };
  });

  const restartAnimation = () => {
    cancelAnimation(color); // Cancel the ongoing animation
    color.value = 0; // Reset the shared value
    color.value = withRepeat(withTiming(1, { duration: 7000 }), -1, true); // Restart the animation
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.2}
      title="Color Shifting Text"
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
          Color shifting
        </Animated.Text>
      </FlexFull>
    </AnimationContainer>
  );
}
