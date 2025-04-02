import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

const BiologyScreen = () => {
  const router = useRouter();
 
  const {handleBioQuizPress} = useHandleClicks();
  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Biology</Text>

      {/* Biology-themed images */}
      <Image source={require("../utils/pictures/17.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/8.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/7.png")} style={[styles.image, styles.middleRight]} />
      <Image source={require("../utils/pictures/9.png")} style={[styles.image, styles.bottomLeft]} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBioQuizPress}>
          <Text style={styles.buttonText}>Bio-quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Progress</Text>
        </TouchableOpacity>
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
    right: "-4%",
    transform: [{ rotate: "10deg" }],
  },
  
  middleRight: {
    bottom: "8%",
    right: "-1%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "8%",
    left: "-3%",
    transform: [{ rotate: "-12deg" }],
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: "35%", // Moves buttons higher in the middle
  },
  button: {
    width: "60%", // Ensures equal width
    backgroundColor: "#000",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10, // Adds spacing between buttons
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BiologyScreen;
