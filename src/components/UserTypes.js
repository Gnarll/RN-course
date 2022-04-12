import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Bubbles from "./Bubbles";

const UserTypes = () => {
  const easing = Easing.out(Easing.ease);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 1000, easing }),
      -1,
      true
    );
  }, [progress]);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>User types message</Text>
      <Bubbles {...{ progress }} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    opacity: 0.7,
    color: "grey",
    marginRight: 5,
  },
});

export default UserTypes;
