import {
  animatedElementStyle,
  elementStyleTwo,
} from "@/animation-components/styles";
import { GradientTen } from "@/constants/Gradients";
import { screenHeight, screenWidth } from "@/constants/variousConstants";
import MyButton from "@/custom-components/button";
import {
  CenterHorizontalFull,
  VStackFull,
} from "@/custom-components/containers";
import { TextXl } from "@/custom-components/textComponents";
import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
  scrollTo,
} from "react-native-reanimated";
import type { SharedValue } from "react-native-reanimated";

const ITEM_COUNT = 100;
const ITEM_SIZE = 125;
const ITEM_MARGIN = 25;
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

  const items = Array.from(Array(ITEM_COUNT).keys());

  return (
    <GradientTen style={{ paddingTop: 70 }}>
      <VStackFull style={{ height: screenHeight * 0.9, gap: 10 }}>
        <Incrementor increment={-1} scroll={scroll} />
        <CenterHorizontalFull style={{ height: SCROLL_CONTAINER_HEIGHT }}>
          <Animated.ScrollView ref={animatedRef}>
            <VStackFull style={{ gap: ITEM_MARGIN, paddingVertical: 10 }}>
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
        <Incrementor increment={1} scroll={scroll} />
      </VStackFull>
    </GradientTen>
  );
}

const Incrementor = ({
  increment,
  scroll,
}: {
  increment: number;
  scroll: SharedValue<number>;
}) => (
  <CenterHorizontalFull>
    <MyButton
      onPress={() => {
        scroll.value =
          scroll.value + increment > 0
            ? scroll.value + increment
            : ITEM_COUNT - 1 + increment;

        if (scroll.value >= ITEM_COUNT - 2) scroll.value = 0;
      }}
      text={`Page  ${increment > 0 ? "down" : "up"}`}
    />
  </CenterHorizontalFull>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  box: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    margin: ITEM_MARGIN,
    borderRadius: 15,
    backgroundColor: "#b58df1",
    alignItems: "center",
    justifyContent: "center",
  },
  boxWrapper: {
    width: "100%",
    height: 250,
    alignItems: "center",
  },
});
