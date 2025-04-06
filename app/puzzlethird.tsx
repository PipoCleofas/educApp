import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import useHandleClicks from "@/hooks/useHandleClicks";

const PuzzleThird = () => {
  const router = useRouter();
  const { handleGeoThirdPuzzlePress, setGeoPuzzle3 } = useHandleClicks();

  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Earth Science</Text>

      {/* Question Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.scrambledText}>NGGIAHN LWLA</Text>
        <Text style={styles.questionText}>
          The side of a non-vertical fault{"\n"}
          that occurs above the fault{"\n"}
          plane
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your answer..."
          placeholderTextColor="#aaa"
          onChangeText={(text) => setGeoPuzzle3(text)}
        />

        <TouchableOpacity style={styles.nextButton} onPress={handleGeoThirdPuzzlePress}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a3333", // Dark Red / Brownish Background
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
    color: "#f2feca", // Soft Yellow
    fontSize: 14,
  },
  questionContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "transparent", // Make background transparent
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20, // Adds spacing from images above
  },

  questionText: {
    fontSize: 18,
    color: "#bcfcc9", // Pale Mint Green
    textAlign: "center",
    marginBottom: 15,
    lineHeight: 24, // Improves readability
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 15,
    textAlign: "center",
  },

  nextButton: {
    backgroundColor: "#98d083", // Soft Green (Accent Color)
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#f2feca", // Soft Yellow
    position: "absolute",
    top: "10%",
  },

  scrambledText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#98d083", // Soft Green
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 2, // Adds spacing for better readability
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
    right: "-3%",
    transform: [{ rotate: "10deg" }],
  },
  middleLeft: {
    top: "40%",
    left: "-1%",
    transform: [{ rotate: "-8deg" }],
  },
  middleRight: {
    top: "40%",
    right: "-1%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "8%",
    left: "-3%",
    transform: [{ rotate: "-12deg" }],
  },
  bottomRight: {
    bottom: "8%",
    right: "-1%",
    transform: [{ rotate: "12deg" }],
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

export default PuzzleThird;
