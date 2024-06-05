import React, { useState, useEffect } from "react";
import Animated, { Keyframe } from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import { TextLg } from "@/custom-components/textComponents";
import { elementStyleTwo } from "./styles";
import { View } from "react-native";
import { boxShadows } from "@/constants/ShadowStyles";
import { col } from "@/constants/Colors";

export default function AnimationSeventeen() {
  const [restart, setRestart] = useState(false);

  const keyframeAnimation = new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateY: -100 }, { scale: 0.5 }, { rotate: "0deg" }],
      backgroundColor: col[300],
    },
    20: {
      opacity: 0.5,
      transform: [{ translateY: -50 }, { scale: 0.75 }, { rotate: "90deg" }],
      backgroundColor: col[400],
    },
    40: {
      opacity: 1,
      transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "180deg" }],
      backgroundColor: col[500],
    },
    60: {
      opacity: 0.75,
      transform: [{ translateY: 50 }, { scale: 1.25 }, { rotate: "270deg" }],
      backgroundColor: col[600],
    },
    80: {
      opacity: 0.5,
      transform: [{ translateY: 100 }, { scale: 1.5 }, { rotate: "360deg" }],
      backgroundColor: col[500],
    },
    100: {
      opacity: 1,
      transform: [{ translateY: 0 }, { scale: 1 }, { rotate: "0deg" }],
      backgroundColor: col[400],
    },
  }).duration(2000);

  const restartAnimation = () => {
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
      title="Advanced Sequence"
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
          entering={keyframeAnimation}
          style={[
            boxShadows.xl,
            {
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <View
            style={{
              paddingHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextLg>Advanced Sequence</TextLg>
          </View>
        </Animated.View>
      </FlexFull>
    </AnimationContainer>
  );
}
