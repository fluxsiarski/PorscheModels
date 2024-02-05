import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { generalPhotoDimensions } from "../styles/generalPhotoDimensions";

const images = {
  exhaust911gt3: require("../assets/images/exhaust911gt3.png"),
  clocks911: require("../assets/images/clocks911.jpeg"),
};

const sounds = {
  coldStart: require("../assets/sounds/GT3911coldStart.mp3"),
  revs: require("../assets/sounds/GT3911revs.mp3"),
};

const Porsche911GT3 = () => {
  const [sound, setSound] = useState();

  async function playSound(soundKey) {
    console.log("Loading Sound");
    const { sound: newSound } = await Audio.Sound.createAsync(sounds[soundKey]);
    setSound(newSound);

    console.log("Playing Sound");
    await newSound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ScrollView>
      <View style={s.GT3911container}>
        <View style={s.itemContainer}>
          <Image
            source={images["exhaust911gt3"]}
            resizeMode="contain"
            style={[generalPhotoDimensions.dimensions, { borderWidth: 0 }]}
          />
          <Button
            title="Play cold start sound!"
            onPress={() => playSound("coldStart")}
          />
        </View>

        <View style={s.itemContainer}>
          <Image
            source={images["clocks911"]}
            style={[generalPhotoDimensions.dimensions, { borderWidth: 0 }]}
          />
          <Button title="Play revs sound!" onPress={() => playSound("revs")} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Porsche911GT3;

const s = StyleSheet.create({
  GT3911container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  itemContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    marginBottom: 30,
  },
});
