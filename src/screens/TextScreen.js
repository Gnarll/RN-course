import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="sentences"
        autoCorrect={true}
        placeholder="Enter the name"
        onChangeText={(newValue) => setName(newValue)}
        value={name}
      />
      <Text>My name is {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the password"
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text>Password must be longer than 5 symbols</Text>
      ) : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "#000000",
    borderWidth: 2,
  },
});

export default TextScreen;
