import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { textShadows } from "@/constants/ShadowStyles";

export default function AnimationTwelve() {
  const translateY = useSharedValue(0);

  const bouncingAnimation = () => {
    translateY.value = withSpring(-screenHeight * 0.13, {
      damping: 5,
      stiffness: 150,
    });
  };

  useEffect(() => {
    bouncingAnimation();
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const restartAnimation = () => {
    translateY.value = 0;
    bouncingAnimation();
  };

  return (
    <AnimationContainer
      height={screenHeight * 0.2}
      title="Bouncing Text"
      resetAnimation={restartAnimation}
    >
      <FlexFull
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Animated.Text
          style={[
            animatedStyles,
            textShadows.glow200Sm,
            { fontFamily: "Play-Bold", fontSize: 33 },
          ]}
        >
          Bouncing Text
        </Animated.Text>
      </FlexFull>
    </AnimationContainer>
  );
}
