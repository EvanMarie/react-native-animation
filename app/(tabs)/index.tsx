import { col } from "@/constants/Colors";
import { GradientTwo } from "@/constants/Gradients";
import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const App = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  return (
    <GradientTwo>
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
        <Button
          title="Move"
          onPress={() => {
            offset.value = withSpring(Math.random() * 300);
          }}
        />
      </View>{" "}
    </GradientTwo>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: col[600],
    borderRadius: 50,
  },
});

export default App;
