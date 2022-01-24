import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text>Image score: {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "60%",
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    fontSize: 20,
  },
});

export default ImageDetail;
