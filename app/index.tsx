import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import useHandleClicks from "../hooks/useHandleClicks";

const Choose = () => {
  const { handlePlayGamePress } = useHandleClicks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sci-Nay</Text>

      {/* Scrambled Science-themed images */}
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.image1]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.image2]} />
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.image3]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.image4]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.image5]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.image6]} />

      {/* Play Game Button */}
      <TouchableOpacity style={styles.button} onPress={handlePlayGamePress}>
        <Text style={styles.buttonText}>►   Play</Text>
      </TouchableOpacity>
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
    fontSize: 65,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    top: "20%",
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  image1: {
    top: "8%",
    left: "-3%",
    transform: [{ rotate: "-15deg" }],
  },
  image2: {
    top: "10%",
    right: "-5%",
    transform: [{ rotate: "10deg" }],
  },
  image3: {
    top: "45%",
    left: "-5%",
    transform: [{ rotate: "-10deg" }],
  },
  image4: {
    top: "42%",
    right: "-7%",
    transform: [{ rotate: "12deg" }],
  },
  image5: {
    bottom: "8%",
    left: "-2%",
    transform: [{ rotate: "-18deg" }],
  },
  image6: {
    bottom: "10%",
    right: "-4%",
    transform: [{ rotate: "15deg" }],
  },
  button: {
    backgroundColor: "#608BC1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    position: "absolute",
    bottom: "25%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Choose;