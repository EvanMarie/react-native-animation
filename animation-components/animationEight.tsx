import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { textShadows } from "@/constants/ShadowStyles";

export default function AnimationEight() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withTiming(360, { duration: 2000 });
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const restartAnimation = () => {
    rotation.value = 0;
    rotation.value = withTiming(360, { duration: 2000 });
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.3}
      title="Rotating Text"
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
          Rotating Text
        </Animated.Text>
      </FlexFull>
    </AnimationContainer>
  );
}
