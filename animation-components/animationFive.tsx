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
import { FlexFull } from "@/custom-components/containers";
import { elementStyleTwo } from "./styles";

export default function GestureBasedAnimationSequence() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const scale = useSharedValue(1);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const startScale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offsetX.value },
        { translateY: offsetY.value },
        { scale: scale.value },
      ],
    };
  });

  const panGesture = Gesture.Pan()
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

  const pinchGesture = Gesture.Pinch()
    .onStart(() => {
      cancelAnimation(scale);
      startScale.value = scale.value;
    })
    .onUpdate((event) => {
      scale.value = startScale.value * event.scale;
    })
    .onEnd(() => {
      scale.value = withSpring(1);
    });

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  return (
    <AnimationContainer title="Gesture Based Sequence" headingLight>
      <FlexFull
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GestureDetector gesture={composedGesture}>
          <Animated.View
            style={[
              elementStyleTwo,
              animatedStyles,
              { width: 100, height: 100 },
            ]}
          />
        </GestureDetector>
      </FlexFull>
    </AnimationContainer>
  );
}
