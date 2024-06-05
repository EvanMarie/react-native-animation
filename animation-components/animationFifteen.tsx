import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import Animated, { Keyframe } from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { textShadows } from "@/constants/ShadowStyles";
import { TextLg } from "@/custom-components/textComponents";
import { col } from "@/constants/Colors";
import { animatedElementStyle } from "./styles";

export default function AnimationFifteen() {
  const [restart, setRestart] = useState(false);
  const [enteringKeyframe, setEnteringKeyframe] = useState(
    new Keyframe({
      0: {
        opacity: 0,
        transform: [{ translateY: -50 }],
      },
      100: {
        opacity: 1,
        transform: [{ translateY: 0 }],
      },
    })
  );

  const restartAnimation = () => {
    setEnteringKeyframe(
      new Keyframe({
        0: {
          opacity: 0,
          transform: [{ translateY: -50 }],
        },
        100: {
          opacity: 1,
          transform: [{ translateY: 0 }],
        },
      })
    );
    setRestart((prev) => !prev);
  };

  useEffect(() => {
    if (restart) {
      setRestart(false);
    }
  }, [restart]);

  return (
    <AnimationContainer
      height={screenHeight * 0.1}
      title="Entering Keyframes"
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
          <TextLg>Entering Keyframes</TextLg>
        </Animated.View>
      </FlexFull>
    </AnimationContainer>
  );
}
