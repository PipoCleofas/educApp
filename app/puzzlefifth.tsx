import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PuzzleFifth = () => {
  const router = useRouter();
  const [answer, setAnswer] = React.useState('');

  const handleSubmit = async () => {
    const correctAnswer = "seismic activity";
    const userAnswer = answer.trim().toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    console.log("--- Puzzle 5 Debug ---");
    console.log("User answer:", userAnswer);
    console.log("Expected answer:", correctAnswer);
    console.log("Is correct?", isCorrect);
    
    try {
      await AsyncStorage.setItem("puzzleCorrect5", isCorrect.toString());
      console.log("Saved puzzleCorrect5:", isCorrect);
      
      const storedValue = await AsyncStorage.getItem("puzzleCorrect5");
      console.log("Retrieved puzzleCorrect5:", storedValue);
      
      router.push("/geopuzzlescore");
    } catch (error) {
      console.error("Error saving answer:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitButton} onPress={() => router.push("/earthsci")}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Earth Science</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.scrambledText}>S E I I C M S A I I C T T V Y</Text>
        <Text style={styles.questionText}>
          Also referred to as seismicity,{"\n"}
          is the occurrence and{"\n"}
          distribution of earthquakes in{"\n"}
          a region.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your answer..."
          placeholderTextColor="#aaa"
          onChangeText={setAnswer}
          value={answer}
        />

        <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
          <Text style={styles.nextButtonText}>Submit</Text>
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

export default PuzzleFifth;
