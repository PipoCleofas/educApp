import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PuzzleFirst = () => {
  const router = useRouter();
  const [answer, setAnswer] = React.useState('');

  const handleSubmit = async () => {
    const correctAnswer = "normal fault";
    const userAnswer = answer.trim().toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    console.log("--- Puzzle 1 Debug ---");
    console.log("User answer:", userAnswer);
    console.log("Expected answer:", correctAnswer);
    console.log("Is correct?", isCorrect);
    
    try {
      await AsyncStorage.setItem("puzzleCorrect1", isCorrect.toString());
      console.log("Saved puzzleCorrect1:", isCorrect);
      
      const storedValue = await AsyncStorage.getItem("puzzleCorrect1");
      console.log("Retrieved puzzleCorrect1:", storedValue);
      
      router.push("/puzzlesecond");
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
        <Text style={styles.scrambledText}>ORMNLA FLUTA</Text>
        <Text style={styles.questionText}>
          Caused by tensional stress.{"\n"}
          The hanging wall moves downward{"\n"}
          relative to the footwall{"\n"}
          (e.g., divergent boundaries).
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your answer..."
          placeholderTextColor="#aaa"
          onChangeText={setAnswer}
          value={answer}
        />

        <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a3333",
    alignItems: "center",
    justifyContent: "center",
  },
  exitButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  exitText: {
    color: "#fff",
    fontSize: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f2feca",
    marginBottom: 30,
  },
  questionContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 15,
    alignItems: "center",
  },
  scrambledText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#98d083",
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    color: "#bcfcc9",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 24,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "#98d083",
    padding: 15,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PuzzleFirst;