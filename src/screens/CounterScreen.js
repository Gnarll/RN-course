import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.counterText}>Current number: {counter}</Text>
      <Button
        title="Increase"
        onPress={() => setCounter((state) => state + 1)}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => setCounter((state) => state - 1)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 25,
    alignSelf: "center",
  },
});

export default CounterScreen;
