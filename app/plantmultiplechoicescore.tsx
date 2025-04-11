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
  const { oneToFifteenScore, setOneToFifteenScore } = useScore(); // Ensure setter is available
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
        AsyncStorage.getItem("selectedOption11"),
        AsyncStorage.getItem("selectedOption12"),
        AsyncStorage.getItem("selectedOption13"),
        AsyncStorage.getItem("selectedOption14"),
        AsyncStorage.getItem("selectedOption15"),
      ]);
      
      await AsyncStorage.setItem("bioQuizScore", newScore.toString());

      // Correct answers for comparison (assuming Scalar and Vector answers are correct)
      const correctAnswers = [
        "B. Chloroplast",
        "B. Ribosome",
        "B. Mitochondrion",
        "A. Objective Lens",
        "A. Providing structural support and protection.",
        "B. Nucleus",
        "A. Cytoplasm",
        "A. Lysosome",
        "C. Endocytosis",
        "D. Arm",
        "C. Gametes",
        "A. Mitosis",
        "C. Cell",
        "A. Ecology",
        "B. Food Web"
      ];
      console.log("User answers:", puzzleAnswers);
    console.log("Correct answers:", correctAnswers);

      // Calculate the score by checking if the retrieved values match the correct answers
      puzzleAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          newScore += 1; // Award 1 points for correct answer
        }
      });

      puzzleAnswers.forEach((answer, index) => {
        if (answer !== correctAnswers[index]) {
          newScore -= 1; // Award -1 points for wrong answer
        }
      });

      if (newScore < 0) newScore = 0

      // Update the scalar score and store the final score in AsyncStorage
      setOneToFifteenScore(newScore);
      await AsyncStorage.setItem("bioQuizScore", newScore.toString());
      
      // Set the final score state to display on the screen
      setFinalScore(newScore);
    }

    calculateFinalScore(); // Call the function to calculate the score
  }, [setOneToFifteenScore]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bio Quiz</Text>
      <View style={styles.rightAnswer}>
        <Text style={styles.rightAnswerText}>The Correct Answer:</Text>
        <Text style={styles.subLetter}>
          1) B. Chloroplast{"\n"}{"\n"}
          2) B. Ribosome{"\n"}{"\n"}
          3) B. Mitochondrion{"\n"}{"\n"}
          4) A. Objective Lens{"\n"}{"\n"}
          5) A. Providing structural support and protection.{"\n"}{"\n"}
          6) B. Nucleus{"\n"}{"\n"}
          7) A. Cytoplasm{"\n"}{"\n"}
          8) A. Lysosome{"\n"}{"\n"}
          9) C. Endocytosis{"\n"}{"\n"}
          10) D. Arm{"\n"}{"\n"}
          11) C. Gametes{"\n"}{"\n"}
          12) A. Mitosis{"\n"}{"\n"}
          13) C. Cell{"\n"}{"\n"}
          14) A. Ecology{"\n"}{"\n"}
          15) B. Food Web{"\n"}{"\n"}{"\n"}{"\n"}
          </Text>
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Trophy</Text>
        <Text style={styles.scoreValue}>
          {finalScore !== null ? finalScore : oneToFifteenScore}
        </Text>
      </View>

      <TouchableOpacity style={styles.goBackButton} onPress={() => router.push("/biology")}>
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
    top: 60,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    width: '100%',
    maxWidth: 400,
    height: '100%',
    maxHeight: 550
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