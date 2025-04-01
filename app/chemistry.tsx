import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const ChemistryScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Chemistry</Text>

      {/* Science-themed images with slight rotations */}
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.bottomLeft]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.bottomRight]} />
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.middleRight]} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Matter Match</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Change Challenge</Text></TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Atom Builder</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Progress</Text></TouchableOpacity>
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
    padding: 10,
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
    top: "16%",
    left: "-1%",
    transform: [{ rotate: "-10deg" }],
  },
  topRight: {
    top: "16%",
    right: "-1%",
    transform: [{ rotate: "10deg" }],
  },
  middleLeft: {
    top: "60%",
    left: "-1%",
    transform: [{ rotate: "-8deg" }],
  },
  middleRight: {
    top: "60%",
    right: "-2%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "5%",
    left: "10%",
    transform: [{ rotate: "-12deg" }],
  },
  bottomRight: {
    bottom: "5%",
    right: "10%",
    transform: [{ rotate: "12deg" }],
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    flex: 1, // Ensures equal button width
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5, // Adds spacing between buttons
  },
  
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default ChemistryScreen;
