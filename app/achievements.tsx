import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Achievements = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Sci-Nay</Text>

      {/* Science-themed images with rotation */}
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.bottomLeft]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.bottomRight]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.middleRight]} />
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
  buttonWrapper: {
    width: "80%", // Ensure wrapper takes proper width
    alignItems: "center",
    marginTop: 20,
  },
  
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // Make sure buttons use full space
    marginBottom: 15, // Adds spacing between rows
  },
  
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    flex: 1, // Ensures equal button width
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5, // Adds spacing between buttons
  },
  
  achievementsButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    width: "100%", // Same width as buttonContainer
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
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
    top: "38%",
    left: "-2%",
    transform: [{ rotate: "-8deg" }],
  },
  middleRight: {
    top: "38%",
    right: "-3%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "5%",
    left: "-1%",
    transform: [{ rotate: "-12deg" }],
  },
  bottomRight: {
    bottom: "5%",
    right: "-1%",
    transform: [{ rotate: "12deg" }],
  },
});

export default Achievements;
