import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

const ChemistryScreen = () => {
  const router = useRouter();

  const {ChemQuizPress,handleMatterMatchPress1} = useHandleClicks();
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.headerdesign}><Text style={styles.title}>Chemistry</Text></View>
      
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      

      {/* Science-themed images with slight rotations */}
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.bottomLeft]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.bottomRight]} />
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.middleRight]} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={ChemQuizPress}><Text style={styles.buttonText}>Sci-Quiz</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMatterMatchPress1}><Text style={styles.buttonText}>Matter-Match</Text></TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C599B6",
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
    backgroundColor: '#E6B2BA',
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
    backgroundColor: '#E6B2BA',
    paddingHorizontal: 110,
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
    backgroundColor: "#E6B2BA",
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