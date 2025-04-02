import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";


const PhysicsScreen = () => {
  const router = useRouter();
  const {handleBioPicsPress,handleTypesOfForcwePress, handle4Pics1WordPress} = useHandleClicks();

  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Physics</Text>

      {/* Physics-themed images */}
      <Image source={require("../utils/pictures/14.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/15.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/16.png")} style={[styles.image, styles.middleRight]} />
      <Image source={require("../utils/pictures/13.png")} style={[styles.image, styles.bottomLeft]} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handle4Pics1WordPress}><Text style={styles.buttonText}>4 Pics 1 Word</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTypesOfForcwePress}><Text style={styles.buttonText}>Bio-Link</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBioPicsPress}><Text style={styles.buttonText}>Bio-Pics</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBioPicsPress}><Text style={styles.buttonText}>Types of force</Text></TouchableOpacity>
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
    right: "-1%",
    transform: [{ rotate: "10deg" }],
  },
  middleLeft: {
    top: "38%",
    left: "-1%",
    transform: [{ rotate: "-8deg" }],
  },
  middleRight: {
    top: "38%",
    right: "-1%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "8%",
    left: "-1%",
    transform: [{ rotate: "-12deg" }],
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

export default PhysicsScreen;
