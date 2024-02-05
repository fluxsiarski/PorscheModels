import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const InformationButtonPorsche = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.buttonContainer}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InformationButtonPorsche;

const s = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "lightgrey",
    padding: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "grey",

    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
