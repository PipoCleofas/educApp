import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";


const PhysicsScreen = () => {
  const router = useRouter();
  const {handleBioPicsPress,handleTypesOfForcwePress, handle4Pics1WordPress} = useHandleClicks();

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.headerdesign}><Text style={styles.title}>Physics</Text></View>
      
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      

      {/* Physics-themed images */}
      <Image source={require("../utils/pictures/14.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/15.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/16.png")} style={[styles.image, styles.middleRight]} />
      <Image source={require("../utils/pictures/13.png")} style={[styles.image, styles.bottomLeft]} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handle4Pics1WordPress}><Text style={styles.buttonText}>4 Pics 1 Word</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTypesOfForcwePress}><Text style={styles.buttonText}>Types of force</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBioPicsPress}><Text style={styles.buttonText}>Bio-Link</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98D2C0",
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
    backgroundColor: '#4F959D',
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
    backgroundColor: '#4F959D',
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
    backgroundColor: "#205781",
    paddingVertical: 5,
    paddingHorizontal: 6,
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

export default PhysicsScreen;