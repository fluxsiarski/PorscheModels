import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { generalPhotoDimensions } from "../styles/generalPhotoDimensions";

const Turbo911 = require("../assets/images/911Turbo.jpg");
const GT3911 = require("../assets/images/911GT3.jpeg");

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={s.homeContainer}>
        <View style={s.imageButtonContainer}>
          <Image source={GT3911} style={generalPhotoDimensions.dimensions} />
          <Button
            title="Porsche 911 GT3"
            onPress={() => navigation.navigate("Porsche911GT3")}
          />
        </View>

        {/* ------------Testing flex layout---------- */}

        <View style={s.GT3911}>
          <Image source={GT3911} style={generalPhotoDimensions.dimensions} />
          <Button
            title="Porsche 911 GT3"
            onPress={() => navigation.navigate("Porsche911GT3")}
          />
        </View>

        <View style={s.GT3911}>
          <Image source={GT3911} style={generalPhotoDimensions.dimensions} />
          <Button
            title="Porsche 911 GT3"
            onPress={() => navigation.navigate("Porsche911GT3")}
          />
        </View>

        <View style={s.GT3911}>
          <Image source={GT3911} style={generalPhotoDimensions.dimensions} />
          <Button
            title="Porsche 911 GT3"
            onPress={() => navigation.navigate("Porsche911GT3")}
          />
        </View>

        <View style={s.GT3911}>
          <Image source={GT3911} style={generalPhotoDimensions.dimensions} />
          <Button
            title="Porsche 911 GT3"
            onPress={() => navigation.navigate("Porsche911GT3")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const s = StyleSheet.create({
  homeContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginHorizontal: 20,
    // flexWrap: "wrap",
  },

  // Turbo911: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // padding: 20,
  // },

  GT3911: {
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
  },

  imageButtonContainer: {
    flexDirection: "row", // Align children horizontally
    justifyContent: "space-between", // Add space between Image and Button
    alignItems: "center", // Center children vertically
  },
});
