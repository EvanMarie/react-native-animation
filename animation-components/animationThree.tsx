import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import AnimationContainer from "./animationContainer";
import { animatedElementStyle } from "./styles";
import { TextSm, TextXs } from "@/custom-components/textComponents";
import { FlexFull } from "@/custom-components/containers";

export default function GestureAnimation() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
    };
  });

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    })
    .onEnd(() => {
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);
    });

  return (
    <AnimationContainer title="Basic Pan Gesture">
      <FlexFull
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              animatedStyles,
              animatedElementStyle,
              { width: 60, height: 60, justifyContent: "center" },
            ]}
          >
            <TextXs style={{ textAlign: "center", fontWeight: 600 }}>
              Drag Me
            </TextXs>
          </Animated.View>
        </GestureDetector>
      </FlexFull>
    </AnimationContainer>
  );
}
