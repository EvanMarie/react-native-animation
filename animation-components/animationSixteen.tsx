import React, { useState, useEffect } from "react";
import Animated, { Keyframe } from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { TextLg } from "@/custom-components/textComponents";
import { animatedElementStyle } from "./styles";

export default function AnimationSixteen() {
  const [restart, setRestart] = useState(false);

  const keyframeAnimation = new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateY: -50 }, { scale: 0.5 }, { rotate: "0deg" }],
    },
    25: {
      opacity: 0.5,
      transform: [{ translateY: -50 }, { scale: 0.75 }, { rotate: "90deg" }],
    },
    50: {
      opacity: 0.75,
      transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "180deg" }],
    },
    75: {
      opacity: 1,
      transform: [{ translateY: 50 }, { scale: 1.25 }, { rotate: "270deg" }],
    },
    100: {
      opacity: 1,
      transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "360deg" }],
    },
  }).duration(1000);

  const [enteringKeyframe, setEnteringKeyframe] = useState(keyframeAnimation);

  const restartAnimation = () => {
    setEnteringKeyframe(keyframeAnimation);
    setRestart((prev) => !prev);
  };

  useEffect(() => {
    if (restart) {
      setRestart(false);
    }
  }, [restart]);

  return (
    <AnimationContainer
      height={screenHeight * 0.3}
      title="Sequential Keyframes"
      resetAnimation={restartAnimation}
      headingLight
    >
      <FlexFull
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View
          key={restart.toString()}
          entering={enteringKeyframe}
          style={[animatedElementStyle, { paddingHorizontal: 10 }]}
        >
          <TextLg>Sequential Keyframes</TextLg>
        </Animated.View>
      </FlexFull>
    </AnimationContainer>
  );
}
