import { elementStyleTwo } from "@/animation-components/styles";
import { GradientTen } from "@/constants/Gradients";
import { screenHeight, screenWidth } from "@/constants/variousConstants";
import MyButton from "@/custom-components/button";
import {
  CenterHorizontalFull,
  VStackFull,
} from "@/custom-components/containers";
import { TextXl } from "@/custom-components/textComponents";
import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
  scrollTo,
} from "react-native-reanimated";
import type { SharedValue } from "react-native-reanimated";

const SCROLL_CONTAINER_HEIGHT = screenHeight * 0.75;

export default function ScrollTo() {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scroll = useSharedValue<number>(0);
  useDerivedValue(() => {
    scrollTo(
      animatedRef,
      0,
      scroll.value * SCROLL_CONTAINER_HEIGHT - 100,
      true
    );
  });

  const items = Array.from(Array(100).keys());

  return (
    <GradientTen style={{ paddingTop: 70 }}>
      <VStackFull style={{ height: screenHeight * 0.9, gap: 10 }}>
        <NavButton increment={-1} scroll={scroll} />
        <CenterHorizontalFull style={{ height: SCROLL_CONTAINER_HEIGHT }}>
          <Animated.ScrollView ref={animatedRef}>
            <VStackFull style={{ gap: 25, paddingVertical: 10 }}>
              {items.map((_, i) => (
                <CenterHorizontalFull key={i}>
                  <View
                    style={[
                      elementStyleTwo,
                      {
                        height: 70,
                        width: screenWidth * 0.75,
                        justifyContent: "center",
                        alignItems: "center",
                      },
                    ]}
                  >
                    <TextXl style={{ textAlign: "center" }}>Item: {i}</TextXl>
                  </View>
                </CenterHorizontalFull>
              ))}
            </VStackFull>
          </Animated.ScrollView>
        </CenterHorizontalFull>
        <NavButton increment={1} scroll={scroll} />
      </VStackFull>
    </GradientTen>
  );
}

const NavButton = ({
  increment,
  scroll,
}: {
  increment: number;
  scroll: SharedValue<number>;
}) => (
  <CenterHorizontalFull>
    <MyButton
      icon={
        increment > 0 ? "caret-down-circle-outline" : "caret-up-circle-outline"
      }
      onPress={() => {
        scroll.value =
          scroll.value + increment > 0
            ? scroll.value + increment
            : 100 - 1 + increment;

        if (scroll.value >= 100 - 2) scroll.value = 0;
      }}
      text={`Page  ${increment > 0 ? "down" : "up"}`}
    />
  </CenterHorizontalFull>
);
