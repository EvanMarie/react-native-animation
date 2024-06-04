import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDecay,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import AnimationContainer from "./animationContainer";
import { animatedElementStyle } from "./styles";
import { TextXs } from "@/custom-components/textComponents";
import { FlexFull } from "@/custom-components/containers";

export default function AnimationFour() {
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
