import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDecay,
  cancelAnimation,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import AnimationContainer from "./animationContainer";
import { animatedElementStyle, elementStyleTwo } from "./styles";
import { TextXs } from "@/custom-components/textComponents";
import { FlexFull } from "@/custom-components/containers";

export default function AnimationFour() {
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
    .onEnd((event) => {
      offsetX.value = withDecay({
        velocity: event.velocityX,
        deceleration: 0.998,
      });
      offsetY.value = withDecay({
        velocity: event.velocityY,
        deceleration: 0.998,
      });
    });

  const resetAnimation = () => {
    offsetX.value = 0;
    offsetY.value = 0;
  };

  return (
    <AnimationContainer
      resetAnimation={resetAnimation}
      title="Gesture Handling with Decay"
      headingLight
    >
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
              Fling Me
            </TextXs>
          </Animated.View>
        </GestureDetector>
      </FlexFull>
    </AnimationContainer>
  );
}
