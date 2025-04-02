import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
import useScore from "@/hooks/useScore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAchievements from "@/hooks/useAchievements";

const PuzzleFifth = () => {
  const router = useRouter();
  const { handleGoBackPress } = useHandleClicks();
  const { chemQuizScore, setChemQuizScore } = useScore(); // Ensure setter is available
  const [finalScore, setFinalScore] = useState<number | null>(null);

  const {addAchievement} = useAchievements();
  useEffect(() => {
    async function calculateFinalScore() {
      let newScore = 0;
      
      // Retrieve the alternating Scalar/Vector values from AsyncStorage
      const puzzleAnswers = await Promise.all([
        AsyncStorage.getItem("selectedOption1"),
        AsyncStorage.getItem("selectedOption2"),
        AsyncStorage.getItem("selectedOption3"),
        AsyncStorage.getItem("selectedOption4"),
        AsyncStorage.getItem("selectedOption5"),
        AsyncStorage.getItem("selectedOption6"),
        AsyncStorage.getItem("selectedOption7"),
        AsyncStorage.getItem("selectedOption8"),
        AsyncStorage.getItem("selectedOption9"),
        AsyncStorage.getItem("selectedOption10"),
      ]);
      
      addAchievement("Sci-quiz")
      // Correct answers for comparison (assuming Scalar and Vector answers are correct)
      const correctAnswers = [
        "B. Particle size, temperature, stirring.",
        "A. Add salt to water",
        "A. All samples must be tested exactly at the same time.",
        "A. It increases the rate of dissolving.",
        "D. The shape of the container",
        "A. Keeping the solution still",
        "B. Vinegar",
        "D. Soap",
        "D. No change in color",
        "D. Turns red",
      ];
      

      // Calculate the score by checking if the retrieved values match the correct answers
      puzzleAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          newScore += 2; // Award 2 points for correct answer
        }
      });

      // Update the scalar score and store the final score in AsyncStorage
      setChemQuizScore(newScore);
      await AsyncStorage.setItem("geoPuzzleFinalScore", newScore.toString());
      
      // Set the final score state to display on the screen
      setFinalScore(newScore);
    }

    calculateFinalScore(); // Call the function to calculate the score
  }, [setChemQuizScore]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Physics</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your score is</Text>
        <Text style={styles.scoreValue}>
          {finalScore !== null ? finalScore : chemQuizScore}
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
  scoreContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 5,
  },
  scoreValue: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00FF00",
    textAlign: "center",
  },
  goBackButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  goBackButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PuzzleFifth;
