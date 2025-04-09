import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
import useScore from "@/hooks/useScore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAchievements from "@/hooks/useTrophy";

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
      const chemAnswers = await Promise.all([
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
      // Correct answers for comparison (assuming answers are correct)
      const correctAnswers = [
        "B. Particle size, temperature, stirring.",
        "A. Add salt to water.",
        "A. All samples must be tested exactly at the same time.",
        "A. It increases the rate of dissolving.",
        "D. The shape of the container",
        "A. Keeping the solution still",
        "B. Vinegar",
        "D. Soap",
        "D. No change in color",
        "B. Turns red",
      ];
      




      // Calculate the score by checking if the retrieved values match the correct answers
      chemAnswers.forEach((answer, index) => {
        if (answer?.trim() === correctAnswers[index].trim()) { // Added trim() and optional chaining
          newScore += 1; // +1 for correct answer
        } else {
          newScore -= 1; // -1 for wrong answer
        }
      });
      // Use to Debug
      console.log("User answers:", chemAnswers);
      console.log("Correct answers:", correctAnswers);
      
      // Ensure score doesn't go below 0
      if (newScore < 0) newScore = 0;

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

      <Text style={styles.title}>Sci-Quiz</Text>
      <View style={styles.rightAnswer}>
        <Text style={styles.rightAnswerText}>The Correct Answer:</Text>
        <Text style={styles.subLetter}>
          1) B. Particle size, temperature, stirring.{"\n"}{"\n"}
          2) A. Add salt to water{"\n"}{"\n"}
          3) A. All samples must be tested exactly at the same time.{"\n"}{"\n"}
          4) A. It increases the rate of dissolving.{"\n"}{"\n"}
          5) D. The shape of the container{"\n"}{"\n"}
          6) A. Keeping the solution still{"\n"}{"\n"}
          7) B. Vinegar{"\n"}{"\n"}
          8) D. Soap{"\n"}{"\n"}
          9) D. No change in color{"\n"}{"\n"}
          10) B. Turns red{"\n"}{"\n"}
          </Text>
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Trophy</Text>
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
    backgroundColor: "#608BC1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: "5%",
  },
  rightAnswer: {
    backgroundColor: '#133E87',
    padding: 24,
    top: 40,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    width: '100%',
    maxWidth: 400,
    height: '100%',
    maxHeight: 500
  },
  rightAnswerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold' as const,
  },

  subLetter:{
    top: "5%",
    color: 'white',
    fontSize: 14,
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
    marginBottom: 10,
    marginTop: "10%"
  },
  scoreValue: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00FF00",
    textAlign: "center",
  },
  goBackButton: {
    backgroundColor: "#133E87",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
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