import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const generalPhotoDimensions = StyleSheet.create({
  dimensions: {
    // resizeMode: "contain",
    borderWidth: StyleSheet.hairlineWidth,
    // borderColor: "lightgrey",
    borderRadius: 20,
    marginTop: 20,

    width: screenWidth - 40, // 20 padding on each side
    height: (screenWidth - 40) * (9 / 16), // Example for 16:9 aspect ratio, adjust as needed

    // shadowColor: "red", // iOS shadow
    // shadowOffset: { width: 20, height: 10 },
    // shadowOpacity: 1,
    // shadowRadius: 40,
  },
});
