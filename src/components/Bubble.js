import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const Bubble = ({ progress, start, end }) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      progress.value,
      [start, end],
      [1, 1.3],
      Extrapolate.CLAMP
    );
    return { opacity, transform: [{ scale }] };
  });

  return <Animated.View style={[style, styles.bubble]} />;
};

const styles = StyleSheet.create({
  bubble: {
    width: 10,
    height: 10,
    backgroundColor: "grey",
    borderWidth: 5,
    borderColor: "grey",
    borderRadius: 10,
  },
});

export default Bubble;
