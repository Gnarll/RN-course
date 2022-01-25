import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => setColors([...colors, randomRGB()])}
      />
      <View
        style={{ backgroundColor: randomRGB(), height: 100, width: 100 }}
      ></View>
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ backgroundColor: item, height: 100, width: 100 }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
