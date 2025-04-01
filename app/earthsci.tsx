import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
const EarthScienceScreen = () => {
  const router = useRouter();
  const {handleGeoPuzzlePress, handleGeoLayerPress, handleEarthScienceProgressPress} = useHandleClicks();

  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Earth Science</Text>

      {/* Science-themed images */}
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.middleRight]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.bottomLeft]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.bottomRight]} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGeoLayerPress}><Text style={styles.buttonText}>Geo Layers</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGeoPuzzlePress}><Text style={styles.buttonText}>Geo Puzzles</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEarthScienceProgressPress}><Text style={styles.buttonText}>Progress</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4F4F",
    alignItems: "center",
    justifyContent: "center",
  },
  exitButton: {
    position: "absolute",
    top: "5%",
    left: "5%",
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  exitText: {
    color: "#fff",
    fontSize: 14,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    top: "10%",
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  topLeft: {
    top: "18%",
    left: "-1%",
    transform: [{ rotate: "-10deg" }],
  },
  topRight: {
    top: "18%",
    right: "-3%",
    transform: [{ rotate: "10deg" }],
  },
  middleLeft: {
    top: "40%",
    left: "-1%",
    transform: [{ rotate: "-8deg" }],
  },
  middleRight: {
    top: "40%",
    right: "-1%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "8%",
    left: "-3%",
    transform: [{ rotate: "-12deg" }],
  },
  bottomRight: {
    bottom: "8%",
    right: "-1%",
    transform: [{ rotate: "12deg" }],
  },
  buttonContainer: {
    width: "80%",
    position: "absolute",
    bottom: "20%",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10, // Adds spacing between buttons
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default EarthScienceScreen;
