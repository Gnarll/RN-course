import React from "react";
import { StyleSheet, View } from "react-native";
import Bubble from "./Bubble";

const Bubbles = ({ progress }) => {
  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;
  return (
    <View style={styles.wrapper}>
      {bubbles.map((bubble) => {
        const start = bubble * delta;
        const end = start + delta;
        return <Bubble key={bubble} {...{ progress, start, end }} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Bubbles;
