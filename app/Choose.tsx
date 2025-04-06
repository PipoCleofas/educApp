import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "../hooks/useHandleClicks";

const Choose = () => {
  const { handleAchievementPress, handleChemistryPress, handleBiologyPress, handlePhysicsPress, handleEarthSciPress } = useHandleClicks();
  const router = useRouter();

  return (
    <View style={styles.container}>
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
          <TouchableOpacity style={styles.ChemButton} onPress={handleChemistryPress}>
            <Text style={styles.buttonText}>Chemistry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Biobutton} onPress={handleBiologyPress}>
            <Text style={styles.buttonText}>Biology</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.Phybutton} onPress={handlePhysicsPress}>
            <Text style={styles.buttonText}>Physics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Earthbutton} onPress={handleEarthSciPress}>
            <Text style={styles.buttonText}>Earth & Sci</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#133E87",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
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
  ChemButton:{
    backgroundColor: "#C599B6",
    paddingVertical: 12,
    flex: 1, // Ensures both buttons take equal width
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5, // Adds spacing between buttons
  },
  Biobutton: {
    backgroundColor: "#945034",
    paddingVertical: 12,
    flex: 1, // Ensures both buttons take equal width
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5, // Adds spacing between buttons
  },
  Phybutton: {
    backgroundColor: "#205781",
    paddingVertical: 12,
    flex: 1, // Ensures both buttons take equal width
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5, // Adds spacing between buttons
  },
  Earthbutton: {
    backgroundColor: "#4A3333",
    paddingVertical: 12,
    flex: 1, // Ensures both buttons take equal width
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5, // Adds spacing between buttons
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Choose;