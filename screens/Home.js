import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { generalPhotoDimensions } from "../styles/generalPhotoDimensions";

import PorscheTab from "../components/PorscheTab";

const Turbo911 = require("../assets/images/911Turbo.jpg");
const GT3911 = require("../assets/images/911GT3.jpeg");
const TurboS911 = require("../assets/images/911TurboS.jpeg");

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={s.homeContainer}>
        {/* ------------Testing flex layout---------- */}

        <PorscheTab
          image={Turbo911}
          onPress={() => navigation.navigate("Porsche911GT3")}
          style={generalPhotoDimensions.dimensions}
          title="gt3"
        />

        <PorscheTab
          image={GT3911}
          title="GT3"
          onPress={() => navigation.navigate("Porsche911GT3")}
          style={generalPhotoDimensions.dimensions}
        />

        <PorscheTab
          image={TurboS911}
          title="GT3"
          onPress={() => navigation.navigate("Porsche911GT3")}
          style={generalPhotoDimensions.dimensions}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const s = StyleSheet.create({
  homeContainer: {
    flex: 1,
    // flexWrap: "wrap",
    // flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
    // backgroundColor: "red",
  },
});
