import { borders } from "@/constants/BorderStyles";
import { col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";
import MyButton from "@/custom-components/button";
import { Flex } from "@/custom-components/containers";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import AnimationContainer from "./animationContainer";
import MyIconButton from "@/custom-components/iconButton";

export default function AnimationOne() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
    };
  });

  const getRandomSign = () => {
    return Math.random() < 0.5 ? -1 : 1;
  };

  const resetAnimation = () => {
    offsetX.value = withSpring(0);
    offsetY.value = withSpring(0);
  };

  return (
    <AnimationContainer>
      <MyIconButton
        onPress={resetAnimation}
        iconName="refresh"
        style={{ position: "absolute", top: 10, right: 10 }}
        size={30}
        padding={3}
      />
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
            const randomValue = Math.random() * 200;
            const randomSign = getRandomSign();
            offsetX.value = withSpring(randomValue * randomSign);
          }}
        />
        <MyButton
          text="Move X & Y"
          onPress={() => {
            const randomValueX = Math.random() * 200;
            const randomValueY = Math.random() * -200;
            const randomSignX = getRandomSign();
            const randomSignY = getRandomSign();
            offsetX.value = withSpring(randomValueX * randomSignX);
            offsetY.value = withSpring(randomValueY * randomSignY);
          }}
        />
      </Flex>
    </AnimationContainer>
  );
}
