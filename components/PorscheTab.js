import { Button, Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import InformationButtonPorsche from "./InformationButtonPorsche";

const PorscheTab = ({ image, onPress, style, title }) => {
  return (
    <View style={s.imageButtonContainer}>
      <Image source={image} style={style} />
      <InformationButtonPorsche title={title} onPress={onPress} />
    </View>
  );
};

export default PorscheTab;

const s = StyleSheet.create({
  imageButtonContainer: {
    // flexDirection: "row",
    // flex: 1,
    // margin: 25,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginHorizontal: 7,
    marginBottom: 50,
  },
});
