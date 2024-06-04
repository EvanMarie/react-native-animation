import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  cancelAnimation,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import AnimationContainer from "./animationContainer";
import { animatedElementStyle, elementStyleTwo } from "./styles";
import { TextSm, TextXs } from "@/custom-components/textComponents";
import { FlexFull } from "@/custom-components/containers";

export default function GestureAnimation() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
    };
  });

  const gesture = Gesture.Pan()
    .onStart(() => {
      cancelAnimation(offsetX);
      cancelAnimation(offsetY);
      startX.value = offsetX.value;
      startY.value = offsetY.value;
    })
    .onUpdate((event) => {
      offsetX.value = startX.value + event.translationX;
      offsetY.value = startY.value + event.translationY;
    })
    .onEnd(() => {
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);
    });

  return (
    <AnimationContainer title="Spring Physics Gesture" headingLight>
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
              elementStyleTwo,
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
