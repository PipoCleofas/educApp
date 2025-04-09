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
  const { addAchievement } = useAchievements();

  const { picsWordScore, setPicsWordScore } = useScore(); // Ensure setter is available
  const [finalScore, setFinalScore] = useState<number | null>(null);

  function goBack(){
    addAchievement("Phy Picture")
    handleGoBackPress()
  }

  useEffect(() => {
    async function calculateFinalScore() {
      let newScore = 0;

      // Retrieve the alternating Scalar/Vector values from AsyncStorage
      const puzzleAnswers = await Promise.all([
        AsyncStorage.getItem("selectedQuantity1"),
        AsyncStorage.getItem("selectedQuantity2"),
        AsyncStorage.getItem("selectedQuantity3"),
        
      ]);

      // Correct answers for comparison (if the answers are correct)
      const correctAnswers = [
        "Force", 
        "Push", 
        "Pull",
      ];

      // Calculate the score by checking if the retrieved values match the correct answers
      puzzleAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          newScore += 1; // Award 2 points for correct answer
        }
      });

      puzzleAnswers.forEach((answer, index) => {
        if (answer !== correctAnswers[index]) {
          newScore -= 1; // Award 2 points for correct answer
        }
      });

      if(newScore < 0) newScore = 0;
      // Update the scalar score and store the final score in AsyncStorage
      setPicsWordScore(newScore);
      await AsyncStorage.setItem("geoPuzzleFinalScore", newScore.toString());

      // Set the final score state to display on the screen

      setFinalScore(newScore);
    }

    calculateFinalScore(); // Call the function to calculate the score
  }, [setPicsWordScore]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>4 pics 1 word</Text>
      <View style={styles.rightAnswer}>
        <Text style={styles.rightAnswerText}>The Correct Answer:</Text>
        <Text style={styles.subLetter}>
          1) Force{"\n"}{"\n"}   
          2) Push{"\n"}{"\n"}
          3) Pull{"\n"}{"\n"}            
	</Text>
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Trophy</Text>
        <Text style={styles.scoreValue}>
          {finalScore !== null ? finalScore : picsWordScore}
        </Text>
      </View>

      <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
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