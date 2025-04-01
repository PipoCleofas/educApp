import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "../hooks/useHandleClicks";

const Choose = () => {
  const { handleAchievementPress, handleChemistryPress, handleBiologyPress, handlePhysicsPress, handleEarthSciPress } = useHandleClicks();
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Sci-Nay</Text>

      {/* Science-themed images */}
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.bottomLeft]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.bottomRight]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.middleRight]} />

      {/* Subject Buttons */}
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleChemistryPress}>
            <Text style={styles.buttonText}>Chemistry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBiologyPress}>
            <Text style={styles.buttonText}>Biology</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePhysicsPress}>
            <Text style={styles.buttonText}>Physics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEarthSciPress}>
            <Text style={styles.buttonText}>Earth & Sci</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Achievements Button */}
      <TouchableOpacity style={styles.achievementsButton} onPress={handleAchievementPress}>
        <Text style={styles.buttonText}>Achievements</Text>
      </TouchableOpacity>
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
    top: "55%",
    left: "-2%",
    transform: [{ rotate: "-8deg" }],
  },
  middleRight: {
    top: "55%",
    right: "-3%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "5%",
    left: "-2%",
    transform: [{ rotate: "-12deg" }],
  },
  bottomRight: {
    bottom: "5%",
    right: "-2%",
    transform: [{ rotate: "12deg" }],
  },
  buttonWrapper: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 15, // Spacing between button rows
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    flex: 1, // Ensures both buttons take equal width
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5, // Adds spacing between buttons
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  achievementsButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    width: "50%",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
});

export default Choose;
