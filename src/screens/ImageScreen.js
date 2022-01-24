import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <View style={styles.imageWrapper}>
        <ImageDetail
          title={"Beach"}
          imageSource={require("../../assets/beach.jpg")}
          imageScore="7"
        />
        <ImageDetail
          title={"Forest"}
          imageSource={require("../../assets/forest.jpg")}
          imageScore="9"
        />
        <ImageDetail
          title={"Mountain"}
          imageSource={require("../../assets/mountain.jpg")}
          imageScore="9"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: "center",
  },
});

export default ImageScreen;
