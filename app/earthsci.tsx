import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
const EarthScienceScreen = () => {
  const router = useRouter();
  const {handleGeoPuzzlePress, handleGeoLayerPress,handleWordPuzzlePress,handleQuakePreparePress} = useHandleClicks();

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.headerdesign}><Text style={styles.title}>Earth</Text></View>

      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Science-themed images */}
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.middleRight]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.bottomLeft]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.bottomRight]} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleWordPuzzlePress}><Text style={styles.buttonText}>Geo Puzzle</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGeoLayerPress}><Text style={styles.buttonText}>Quake Puzzle</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGeoPuzzlePress}><Text style={styles.buttonText}>Geo Layers</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleQuakePreparePress}><Text style={styles.buttonText}>Disaster Alert</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCFCC9",
    alignItems: "center",
    justifyContent: "center",
  },
  exitButton: {
    position: 'absolute' as const,
    top: 20,
    left: 25,
    paddingVertical: 8,
    paddingHorizontal: 8,
    height: 40,
    width: 50,
    backgroundColor: '#4A3333',
    borderRadius: 8, 
  },
  exitText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500' as const,
  },
  headerdesign:{
    position: 'absolute' as const,
    top: 5,
    backgroundColor: '#4A3333',
    paddingHorizontal: 150,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ scale: 1.2 }],
  },

  title: {
    top: 0,
    fontSize: 22,
    fontWeight: 'bold' as const,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center' as const,
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
    backgroundColor: "#4A3333",
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