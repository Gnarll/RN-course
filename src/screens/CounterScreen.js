import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useReducer } from "react/cjs/react.development";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, counter: state.counter + action.payload };
    case "Decrease":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Text style={styles.counterText}>Current number: {state.counter}</Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "Increase", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "Decrease", payload: -1 })}
      />
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
