import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend #1",
      age: 21,
    },
    {
      name: "Friend #2",
      age: 24,
    },
    {
      name: "Friend #3",
      age: 19,
    },
    {
      name: "Friend #4",
      age: 26,
    },
    {
      name: "Friend #5",
      age: 29,
    },
    {
      name: "Friend #6",
      age: 30,
    },
    {
      name: "Friend #7",
      age: 18,
    },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      showsVerticalScrollIndicator={false}
      renderItem={(element) => {
        return (
          <Text style={styles.TextStyle}>
            {element.item.name} - age: {element.item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  TextStyle: { marginVertical: 50 },
});

export default ListScreen;
