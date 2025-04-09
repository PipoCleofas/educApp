import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import useHandleClicks from "../hooks/useHandleClicks";

const Choose = () => {
  const { handlePlayGamePress } = useHandleClicks();

  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <LinearGradient
        colors={['#f5f1e1', '#a8c3e6', '#3964ad']}
        style={styles.background}
        locations={[0, 0.5, 1]}
      />

      {/* Title with shadow */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleSci}>Sci</Text>
        <Text style={styles.titleNay}>Nay</Text>
      </View>

      {/* Science-themed images */}
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.image1]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.image2]} />
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.image3]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.image4]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.image5]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.image6]} />

      {/* Play Button */}
      <TouchableOpacity style={styles.buttonWrapper} onPress={handlePlayGamePress}>
        <LinearGradient
          colors={['#344d8f', '#2c4486']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>▶ Play</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  titleContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: '15%',
  },
  titleSci: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#000',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  titleNay: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#000',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    marginTop: -15, // Overlap with Sci text
  },
  image: {
    width: 70,
    height: 70,
    position: "absolute",
    resizeMode: "contain",
  },
  // Test tubes top left
  image1: {
    top: "10%",
    left: "10%",
    transform: [{ rotate: "-15deg" }],
  },
  // Atom top right
  image2: {
    top: "15%",
    right: "10%",
    transform: [{ rotate: "10deg" }],
  },
  // Cell/bacteria middle left
  image3: {
    top: "40%",
    left: "8%",
    transform: [{ rotate: "-10deg" }],
  },
  // Einstein middle right
  image4: {
    top: "42%",
    right: "10%",
    transform: [{ rotate: "12deg" }],
  },
  // Science book/laptop bottom left
  image5: {
    bottom: "15%",
    left: "10%",
    transform: [{ rotate: "-5deg" }],
  },
  // E=mc² formula board bottom right
  image6: {
    bottom: "20%",
    right: "15%",
    transform: [{ rotate: "15deg" }],
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "25%",
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Choose;