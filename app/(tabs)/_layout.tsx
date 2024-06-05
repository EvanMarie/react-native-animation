import { GradientFive } from "@/constants/Gradients";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import MyNavBar from "@/custom-components/navBar";
import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  const testNavItems = [
    {
      inactiveIcon: "link-outline",
      activeIcon: "link",
      label: "x & y",
      pathname: "/",
    },
    {
      inactiveIcon: "link-outline",
      activeIcon: "link",
      label: "gestures",
      pathname: "/one",
    },
    {
      inactiveIcon: "link-outline",
      activeIcon: "link",
      label: "text",
      pathname: "/two",
    },
    {
      inactiveIcon: "link-outline",
      activeIcon: "link",
      label: "keyframes",
      pathname: "/three",
    },
    {
      inactiveIcon: "link-outline",
      activeIcon: "link",
      label: "scrolTo",
      pathname: "/four",
    },
    // {
    //   inactiveIcon: "color-palette-outline",
    //   activeIcon: "color-palette",
    //   label: "design",
    //   pathname: "/design",
    // },
  ];

  return (
    <FlexFull style={{ height: screenHeight }}>
      <GradientFive style={{ display: "flex", flex: 1, position: "relative" }}>
        <MyNavBar navItems={testNavItems} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="one" options={{ headerShown: false }} />
          <Stack.Screen name="two" options={{ headerShown: false }} />
          <Stack.Screen name="three" options={{ headerShown: false }} />
          <Stack.Screen name="four" options={{ headerShown: false }} />
        </Stack>
      </GradientFive>
    </FlexFull>
  );
}
