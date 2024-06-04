import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const SkewingText: React.FC = () => {
  const skewX = useSharedValue(0);

  useEffect(() => {
    skewX.value = withTiming(20, { duration: 2000 });
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ skewX: `${skewX.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, animatedStyles]}>
        Skewing Text
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default SkewingText;
