import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
import useScore from "@/hooks/useScore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PuzzleFifth = () => {
  const router = useRouter();
  const { handleGoBackPress } = useHandleClicks();
  const { matterMatchScore, setMatterMatchScore } = useScore(); // Ensure setter is available
  const [finalScore, setFinalScore] = useState<number | null>(null);

  useEffect(() => {
    async function calculateFinalScore() {
      let newScore = 0;

      // Retrieve the alternating Scalar/Vector values from AsyncStorage
      const puzzleAnswers = await Promise.all([
        AsyncStorage.getItem("selectedQuantity1"),
        AsyncStorage.getItem("selectedQuantity2"),
        AsyncStorage.getItem("selectedQuantity3"),
        AsyncStorage.getItem("selectedQuantity4"),
        AsyncStorage.getItem("selectedQuantity5"),
        AsyncStorage.getItem("selectedQuantity6"),
        AsyncStorage.getItem("selectedQuantity7"),
        AsyncStorage.getItem("selectedQuantity8"),
        AsyncStorage.getItem("selectedQuantity9"),
        AsyncStorage.getItem("selectedQuantity10"),
        AsyncStorage.getItem("selectedQuantity11"),
        AsyncStorage.getItem("selectedQuantity12"),
        AsyncStorage.getItem("selectedQuantity13"),
        AsyncStorage.getItem("selectedQuantity14"),
        AsyncStorage.getItem("selectedQuantity15"),
        AsyncStorage.getItem("selectedQuantity16"),
        AsyncStorage.getItem("selectedQuantity17"),
        AsyncStorage.getItem("selectedQuantity18"),
        AsyncStorage.getItem("selectedQuantity19"),
        AsyncStorage.getItem("selectedQuantity20"),
      ]);

      // Correct answers for comparison (assuming Scalar and Vector answers are correct)
      const correctAnswers = [
        "Mixture", 
        "Pure", 
        "Pure", 
        "Pure", 
        "Mixture",
        "Mixture", 
        "Mixture", 
        "Mixture", 
        "Mixture", 
        "Mixture",
        "Solid", 
        "Solid", 
        "Solid", 
        "Gas", 
        "Liquid",
        "Gas", 
        "Gas", 
        "Liquid", 
        "Liquid", 
        "Solid",
      ];

      // Calculate the score by checking if the retrieved values match the correct answers
      puzzleAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          newScore += 2; // Award 2 points for correct answer
        }
      });

      // Update the scalar score and store the final score in AsyncStorage
      setMatterMatchScore(newScore);
      await AsyncStorage.setItem("geoPuzzleFinalScore", newScore.toString());

      // Set the final score state to display on the screen
      setFinalScore(newScore);
    }

    calculateFinalScore(); // Call the function to calculate the score
  }, [setMatterMatchScore]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>


      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your score is</Text>
        <Text style={styles.scoreValue}>
          {finalScore !== null ? finalScore : matterMatchScore}
        </Text>
      </View>

      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBackPress}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4F4F", // Consistent background color
    alignItems: "center",
    justifyContent: "center",
  },
  exitButton: {
    position: "absolute",
    top: "5%",
    left: "5%",
    backgroundColor: "#000", // Black button color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  exitText: {
    color: "#fff", // White text
    fontSize: 14,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000", // Black color for title
    position: "absolute",
    top: "10%",
  },
  scoreContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700", // Gold color for score text
    textAlign: "center",
    marginBottom: 5,
  },
  scoreValue: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00FF00", // Green color for score value
    textAlign: "center",
  },
  goBackButton: {
    backgroundColor: "#007BFF", // Blue background for Go Back button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  goBackButtonText: {
    color: "#fff", // White text on the button
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PuzzleFifth;
