import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to the components screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to the list screen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to the image screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to the counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to the color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to the square screen"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default HomeScreen;
