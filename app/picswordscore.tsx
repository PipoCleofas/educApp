import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
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
  
      // Retrieve answers from AsyncStorage
      const puzzleAnswers = await Promise.all([
        AsyncStorage.getItem("selectedQuantity1"),
        AsyncStorage.getItem("selectedQuantity2"),
        AsyncStorage.getItem("selectedQuantity3"),
      ]);
  
      // Correct answers (case doesn't matter)
      const correctAnswers = [
        "Force", 
        "Push", 
        "Pull",
      ];
  
      // Calculate score with case-insensitive comparison
      puzzleAnswers.forEach((answer, index) => {
        const userAnswer = answer?.trim().toLowerCase();
        const correctAnswer = correctAnswers[index]?.trim().toLowerCase();
        
        if (userAnswer === correctAnswer) {
          newScore += 1; // +1 for correct answer
        } else {
          newScore -= 1; // -1 for wrong answer
          // Show alert with correct answer (case-insensitive)
          if (userAnswer && userAnswer !== correctAnswer) {
            Alert.alert(`The correct answer is ${correctAnswers[index]}`);
          }
        }
      });
  
      // Ensure score doesn't go below 0
      newScore = Math.max(0, newScore);
  
      // Update states and storage
      setPicsWordScore(newScore);
      await AsyncStorage.setItem("picsWordScore", newScore.toString());
      setFinalScore(newScore);
  
      // Debugging logs
      console.log("User Answers:", puzzleAnswers);
      console.log("Calculated Score:", newScore);
    }
  
    calculateFinalScore();
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

      <TouchableOpacity style={styles.goBackButton} onPress={() => router.push("/physics")}>
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