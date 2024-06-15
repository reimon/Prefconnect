import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../styles/RadioStyles";

export default function ServicesScreen() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync().catch((error) => {
          console.error("Error unloading sound:", error);
        });
      }
    };
  }, [sound]);

  async function playRadio() {
    try {
      if (!isPlaying) {
        const { sound: newSound } = await Audio.Sound.createAsync({
          uri: "https://sonicpanel.oficialserver.com:7146/stream",
        });
        setSound(newSound);
        await newSound.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  }

  async function stopRadio() {
    try {
      if (sound && isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error stopping sound:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rádio Caraipe</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={playRadio}
          style={styles.button}
          disabled={isPlaying}
        >
          <FontAwesome
            name="play"
            size={24}
            color={isPlaying ? "gray" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={stopRadio}
          style={styles.button}
          disabled={!isPlaying}
        >
          <FontAwesome
            name="stop"
            size={24}
            color={!isPlaying ? "gray" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
