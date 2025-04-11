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
      console.log("Retrieved puzzleAnswers:", puzzleAnswers);

      // Correct answers for comparison (assuming the answers are correct)
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
      setMatterMatchScore(newScore);
      await AsyncStorage.setItem("matterMatchScore", newScore.toString());

      // Set the final score state to display on the screen
      setFinalScore(newScore);
    }

    calculateFinalScore(); // Call the function to calculate the score
  }, [setMatterMatchScore]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Match Matter</Text>
            <View style={styles.rightAnswer}>
              <Text style={styles.rightAnswerText}>The Correct Answer:</Text>
              <Text style={styles.subLetter}>
                1) Mixture             11) Solid {"\n"}{"\n"}   
                2) Pure                   12) Solid{"\n"}{"\n"}
                3) Pure                   13) Solid{"\n"}{"\n"}
                4) Pure                   14) Gas{"\n"}{"\n"}
                5) Mixture             15) Liquid{"\n"}{"\n"} 
                6) Mixture             16) Gas{"\n"}{"\n"} 
                7) Mixture             17) Gas{"\n"}{"\n"} 
                8) Mixture             18) Liquid{"\n"}{"\n"} 
                9) Mixture             19) Liquid{"\n"}{"\n"} 
                10) Mixture            20) Solid{"\n"}{"\n"}   
              </Text>
            </View>


      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Trophy</Text>
        <Text style={styles.scoreValue}>
          {finalScore !== null ? finalScore : matterMatchScore}
        </Text>
      </View>

      <TouchableOpacity style={styles.goBackButton} onPress={() => router.push("/chemistry")}>
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
