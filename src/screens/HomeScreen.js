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
