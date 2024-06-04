import { borders } from "@/constants/BorderStyles";
import { col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";
import { screenHeight } from "@/constants/variousConstants";
import MyButton from "@/custom-components/button";
import { Flex, VStackFull } from "@/custom-components/containers";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";

export default function AnimationOne() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
    };
  });

  return (
    <AnimationContainer>
      <Animated.View
        style={[
          animatedStyles,
          borders.borderSm600,
          boxShadows.xl,
          {
            width: 40,
            height: 40,
            backgroundColor: col[500],
            borderRadius: 50,
          },
        ]}
      />
      <Flex style={{ gap: 20 }}>
        <MyButton
          text="Move Y"
          onPress={() => {
            offsetY.value = withSpring(Math.random() * -200);
          }}
        />
        <MyButton
          text="Move X"
          onPress={() => {
            offsetX.value = withSpring(Math.random() * 200);
          }}
        />
      </Flex>
    </AnimationContainer>
  );
}
