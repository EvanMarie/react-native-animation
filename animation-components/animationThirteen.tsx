import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { textShadows } from "@/constants/ShadowStyles";
import { col } from "@/constants/Colors";

export default function AnimationThirteen() {
  const rotate = useSharedValue(0);
  const color = useSharedValue(0);

  const rotatingColor = () => {
    rotate.value = withRepeat(
      withSequence(
        withTiming(360, { duration: 2000 }),
        withTiming(0, { duration: 0 })
      ),
      -1,
      false
    );
    color.value = withRepeat(withTiming(1, { duration: 5000 }), -1, true);
  };

  useEffect(() => {
    rotatingColor();
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const textColor = interpolateColor(
      color.value,
      [0, 0.5, 1],
      [col[300], col[400], col[500]]
    );
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
      color: textColor,
    };
  });

  const restartAnimation = () => {
    rotate.value = 0;
    color.value = 0;
    rotatingColor();
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.3}
      title="Rotating Color Text"
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
          Rotating Color
        </Animated.Text>
      </FlexFull>
    </AnimationContainer>
  );
}
